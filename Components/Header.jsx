import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../Services";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
const Header = () => {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="caro">
      <div className="p-4 mx-auto flex flex-row w-11/12 items-center justify-between max-lg:w-full max-lg:ml-0 max-lg:flex-row max-lg:p-2 max-lg:relative">
        <div className="w-32 h-24 max-lg:w-fit">
          <Link href="/">
            <img src="ebn.png" alt="ebn tv logo" className="h-full" />
          </Link>
        </div>
        <div className="uppercase w-fit flex justify-evenly items-center gap-4 max-lg:grid-cols-6 max-lg:hidden ">
          {categories.map((category) => (
            <>
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="max-lg:w-fit text-sm">{category.name}</span>
              </Link>
            </>
          ))}
        </div>
        <div className="flex">
          <Link
            href="/Live"
            to="/Live"
            className="border border-red-600 animate-pulse py-2 rounded-md text-red-600 w-24 text-center ml-2 text-sm"
          >
            <h6>Live</h6>
          </Link>
          <Link
            href="/Videos"
            to="/videos"
            className="border-2 bg-blue-800 py-2 text-white w-24 rounded-md text-center ml-2"
          >
            <h6>Videos</h6>
          </Link>
          <Link
            href="/Partner"
            to="/Partner"
            className="border-2 border-blue-800 py-2 text-blue-800 w-44 rounded-md text-center ml-2"
          >
            <h6 className="text-sm">Become A Partner</h6>
          </Link>
        </div>
        {show === true ? (
          <div className="border mx-5 hidden max-lg:grid">
            <MenuIcon onClick={() => setShow(!show)} className="text-4xl" />
          </div>
        ) : (
          <div className="flex flex-col w-96 h-96  justify-between bg-white border shadow-inner pl-4">
            <div className="flex w-full  justify-end">
              <Close onClick={() => setShow(!show)} />
            </div>
            <div className="flex flex-col h-96 justify-evenly items-left">
              {categories.map((category) => (
                <>
                  <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="max-lg:w-fit text-sm">
                      {category.name}
                    </span>
                  </Link>
                </>
              ))}
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Header;
