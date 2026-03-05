const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-10">

      
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-bold text-black cursor-pointer  ">
          CS — Ticket System
        </h1>
      </div>

      <div className="flex">

        
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li className="cursor-pointer hover:text-primary transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-primary transition">
            FAQ
          </li>
          <li className="cursor-pointer hover:text-primary transition">
            Changelog
          </li>
          <li className="cursor-pointer hover:text-primary transition">
           Blog
          </li>
          <li className="cursor-pointer hover:text-primary transition">
            Download
          </li>
          <li className="cursor-pointer hover:text-primary transition">
            Contact
          </li>
        </ul>

        
        <button className="btn btn-primary btn-sm md:btn-md ml-4">
          + New Ticket
        </button>

      </div>
    </div>
  );
};

export default Navbar;