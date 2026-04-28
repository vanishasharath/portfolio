function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-teal-900/80 backdrop-blur-sm z-50 px-8 py-4 flex justify-between items-center border-b border-cyan-800">
        <span className="text-white font-bold text-xl tracking-tight">
          Vanisha Sharath<span className="text-teal-500">.</span>
        </span>
        <ul className="flex gap-8 list-none">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-white transition-colors duration-200 text-sm"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Navbar;