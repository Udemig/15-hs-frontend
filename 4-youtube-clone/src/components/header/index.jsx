import { Link } from "react-router-dom";
import { MdMenu, MdMic, MdApps } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar-context";

const Header = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <header className="flex justify-between gap-6 md:gap-8 px-4 h-14">
      {/* Sol: Logo */}
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-grey">
          <MdMenu className="text-xl md:text-2xl" />
        </button>

        <Link to="/" className="flex items-center gap-1">
          <img src="/youtube.png" alt="youtube logo" className="w-8" />
          <span className="text-xl font-bold tracking-tight max-sm:hidden">Youtube</span>
        </Link>
      </div>

      {/* Orta: Form */}
      <div className="flex-1 max-w-182 flex justify-center items-center">
        <form className="flex w-full max-w-160 items-center">
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Ara"
              className="w-full bg-[#121212] border border-grey h-10 px-4 text-white placeholder:text-zinc-400 focus:border-blue-500 outline-none rounded-l-full"
            />
            <button className="w-16 h-10 bg-[#222222] border border-grey rounded-r-full flex justify-center items-center hover:bg-grey">
              <CiSearch className="text-xl" />
            </button>
          </div>

          <button className="ml-2 p-2 bg-[#181818] hover:bg-grey max-sm:hidden rounded-full">
            <MdMic />
          </button>
        </form>
      </div>

      {/* Sağ: Icons */}
      <div className="flex items-center gap-2">
        <button className="icon max-sm:hidden">
          <IoIosVideocam />
        </button>

        <button className="icon max-sm:hidden">
          <MdApps />
        </button>

        <button className="icon relative">
          <FaBell />

          <span className="absolute -top-1 -right-1 bg-red-600 size-5 flex justify-center items-center font-bold rounded-full text-xs">
            3
          </span>
        </button>

        <button className="icon text-2xl">
          <RiAccountCircleLine />
        </button>
      </div>
    </header>
  );
};

export default Header;
