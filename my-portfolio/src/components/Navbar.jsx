
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#eadbd1]/80 bg-[#fbf5ef]/90 px-6 py-4 backdrop-blur-md md:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a
          href="#home"
          className="brand-name text-xl font-semibold tracking-tight text-[#59453f] md:text-2xl"
        >
          Vanisha Sharath<span className="text-[#bd8588]">.</span>
        </a>

        <ul className="flex list-none items-center gap-4 p-0 sm:gap-7">
          {['Home', 'About', 'Skills', 'Projects'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium text-[#79655e] transition-colors duration-200 hover:text-[#bd8588] sm:text-sm"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
