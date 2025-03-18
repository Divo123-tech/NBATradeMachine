const Navbar = () => {
  return (
    <nav className="flex items-center px-2 sm:px-16 py-4 gap-4 justify-between bg-navbar text-gray-300 font-semibold border-b border-gray-500">
      <div className="flex items-center gap-16">
        <h1>Logo</h1>
        <p className="text-md sm:text-lg py-2 px-3 rounded-full hover:text-orange-500 hover:cursor-pointer">
          Trade Machine
        </p>
        <p className="text-md sm:text-lg py-2 px-3 rounded-full hover:text-orange-500 hover:cursor-pointer">
          Posts
        </p>
      </div>
      <button className="text-white border border-white rounded-md py-1 px-3 hover:opacity-80 ">
        LOGIN
      </button>
    </nav>
  );
};

export default Navbar;
