import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'   // ← this line MUST be here
import App from './App.jsx'

// #region agent log
const __agentLog = (payload) =>
  fetch('/__debug_ingest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Debug-Session-Id': 'ece709',
    },
    body: JSON.stringify({
      sessionId: 'ece709',
      timestamp: Date.now(),
      ...payload,
    }),
  }).catch(() => {})

window.addEventListener('error', (event) => {
  __agentLog({
    runId: 'pre-fix',
    hypothesisId: 'A_runtime_error',
    location: 'src/main.jsx:window.error',
    message: 'window.error',
    data: {
      message: event?.message,
      filename: event?.filename,
      lineno: event?.lineno,
      colno: event?.colno,
      errorName: event?.error?.name,
      errorMessage: event?.error?.message,
      stack: event?.error?.stack,
    },
  })
})

window.addEventListener('unhandledrejection', (event) => {
  __agentLog({
    runId: 'pre-fix',
    hypothesisId: 'B_unhandled_promise',
    location: 'src/main.jsx:window.unhandledrejection',
    message: 'window.unhandledrejection',
    data: {
      reasonName: event?.reason?.name,
      reasonMessage: event?.reason?.message,
      reasonStack: event?.reason?.stack,
      reason: typeof event?.reason === 'string' ? event.reason : undefined,
    },
  })
})

const __origConsoleError = console.error.bind(console)
console.error = (...args) => {
  __agentLog({
    runId: 'pre-fix',
    hypothesisId: 'C_console_error',
    location: 'src/main.jsx:console.error',
    message: 'console.error',
    data: {
      args: args.map((a) => {
        if (a instanceof Error) return { name: a.name, message: a.message, stack: a.stack }
        if (typeof a === 'string') return a
        try {
          return JSON.stringify(a)
        } catch {
          return '[unserializable]'
        }
      }),
    },
  })
  __origConsoleError(...args)
}

const __origConsoleWarn = console.warn.bind(console)
console.warn = (...args) => {
  __agentLog({
    runId: 'pre-fix',
    hypothesisId: 'D_console_warn',
    location: 'src/main.jsx:console.warn',
    message: 'console.warn',
    data: {
      args: args.map((a) => {
        if (a instanceof Error) return { name: a.name, message: a.message, stack: a.stack }
        if (typeof a === 'string') return a
        try {
          return JSON.stringify(a)
        } catch {
          return '[unserializable]'
        }
      }),
    },
  })
  __origConsoleWarn(...args)
}

__agentLog({
  runId: 'pre-fix',
  hypothesisId: 'E_boot',
  location: 'src/main.jsx:boot',
  message: 'app boot',
  data: { href: window.location.href },
})

let __agentPingCount = 0
const __agentPingInterval = window.setInterval(() => {
  __agentPingCount += 1
  __agentLog({
    runId: 'pre-fix',
    hypothesisId: 'F_delivery_probe',
    location: 'src/main.jsx:ping',
    message: 'delivery ping',
    data: { href: window.location.href, n: __agentPingCount },
  })
  if (__agentPingCount >= 3) window.clearInterval(__agentPingInterval)
}, 1000)
// #endregion agent log

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)