import React from "react";
import { Check, Info, Armchair, Search, ShoppingCart,Heart,User,Menu } from "lucide-react";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  return (
    <div>
      {/* navbar_top */}
      <div className="navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full">
        <div className="lg:container flex justify-between items-center">
          <p className="flex items-center gap-2 texts-sm font-inter font-normal text-white capitalize">
            <Check /> Gratuit pour tous!
          </p>

          <div className="navbar_top right flex items-center gap-6">
            <select
              defaultValue="Server location"
              className="bg-transparent h-[30] w-[70px] text-sm font-inter font-normal capitalize text-white"
            >
              <option>eng</option>

              <option>fr</option> 
            </select>

            <button>
              <Link
                to="/faq"
                className="text-sm text-white font-inter font-normal capitalize"
              >
                Faqs
              </Link>
            </button>

            <button>
              <Link
                to="/help"
                className="flex items-center text-sm text-white font-inter font-normal capitalize"
              >
                <Info size={20} strokeWidth={2.5} /> Help
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* navbar_middle */}
      <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[60px]">
        <div className="lg:container grid grid-cols-3 items-center ">
          <div className="logo_wrapper">
            <Link
              to="/"
              className="text-1xl text-black font-inter font-medium capitalize flex items-center gap-2"
            >
              <Armchair size={20} color="#10b981" /> Comfort
            </Link>
          </div>

          <div className="search_box">
            <form action="#" className="max-w-[443px] h-[44px] relative">
              <input
                type="text"
                placeholder="Search here"
                className="max-w-[443px] w-full h-full bg-white rounded-lg pl-4 "
              />
              <button className="absolute to 50% right-5 translate-y-1/2">
                <Search size={22} color="#272343" />
              </button>
            </form>
          </div>
          {/* navbar_middle_right */}
          <div className="navbar_middle_right flex items-center gap-6">
            <button className="btn capitalize flex items-center">
              <ShoppingCart /> cart{" "}
              <div className="badge badge-sm bg-[#10b981] w-[20px] h-[20px]">
                2
              </div>
            </button>
            <button className="btn capitalize">
              <Heart />
            </button>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1"><User /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a><Link to=''>Compte</Link></a></li>
                    <li><a><Link to=''>Se deconnecter</Link></a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar botton */}
      <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#D3D3D3]">
          <div className="lg:container flex items-center justify-between">
            <div className="navbar_bottom_left flex items-center gap-8">
              <div className="dropdown dropdown-start">
                  <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 capitalize"><Menu />All categories</div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Accessoire</a></li>
                    <li><a>Chaise</a></li>
                    <li><a>Short</a></li>
                    <li><a>T-shirt</a></li>
                    

                  </ul>
              </div>

              <nav className="flex items-center gap-8">
                <NavLink to='/' className='text-sm text-[#10b981] font-inter font-medieum capitalize'>Home</NavLink>
                <NavLink to='/' className='text-sm text-[#636270] font-inter font-medieum capitalize'>Shop</NavLink>
                <NavLink to='/' className='text-sm text-[#636270] font-inter font-medieum capitalize'>Product</NavLink>
                <NavLink to='/' className='text-sm text-[#636270] font-inter font-medieum capitalize'>Pages</NavLink>
                <NavLink to='/' className='text-sm text-[#636270] font-inter font-medieum capitalize'>About</NavLink>
            </nav>
            </div>
            <div className="navbar_bottom_right">
                <p className="text-sm text-[#636270] font-inter font-normal capitalize">Contact  <span> 034 15 188 95</span></p>
            </div>
          
          </div>
      </div>
    </div>
  );
};

export default Navbar;
