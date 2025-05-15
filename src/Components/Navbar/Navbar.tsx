import React from "react";
import { Check, Info, Armchair, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div>
      {/* navbar_top */}
      <div className="navbar_top flex items-center justify-center bg-[#272343] h-[35px] w-full">
        <div className="lg:container flex justify-between items-center">
          <p className="flex items-center gap-2 texts-sm font-inter font-normal text-white capitalize">
            <Check /> Gratuit pour tous!
          </p>

          <div className="navbar_top right flex items-center gap-6">
            <select
              defaultValue="Server location"
              className="bg-transparent h-[30] w-[50px] text-sm font-inter font-normal capitalize text-white"
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
        <div className="lg:container grid grid-cols-3 items-center justify-center">
          <div className="logo_wrapper">
            <Link
              to="/"
              className="text-1xl text-black font-inter font-medium capitalize flex items-center gap-2"
            >
              <Armchair size={20} color="#10b981" /> Comfort
            </Link>
          </div>

          <div className="search_box">
            <form action="#" className="max-w-50 h-[24px] relative">
              <input
                type="text"
                placeholder="Search here"
                className="w-full h-full bg-white rounded-lg pl-8 "
              />
              <button className="absolute to 50% right-5 translate-y-1/2">
                <Search size={12} color="#272343" />
              </button>
            </form>
          </div>
          {/* navbar_middle_right */}
          <div className="navbar_middle_right">
            <button className="btn capitalize flex items-center">
              <ShoppingCart size={20} /> cart{" "}
              <div className="badge badge-sm bg-[#10b981] w-[20px] h-[20px]">
                2
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
