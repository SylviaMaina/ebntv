import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../Services";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import { Popover } from "@mui/material";
const Header = () => {
  const [categories, setCategories] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-sky-500 to-sky-100">
      <div className="p-4 mx-auto flex flex-col w-full items-center justify-between max-lg:w-full max-lg:ml-0  max-lg:p-2 max-lg:relative  max-lg:flex-col">
        <div className="w-32 h-24 max-lg:w-fit">
          <Link href="/">
            <img src="ebn.png" alt="ebn tv logo" className="h-full" />
          </Link>
        </div>
        <div className="uppercase mt-4 w-11/12 flex justify-evenly items-center gap-4 max-lg:grid-cols-6 max-lg:hidden ">
          {categories.map((category) => (
            <>
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="max-lg:w-fit text-sm">{category.name}</span>
              </Link>
            </>
          ))}

          <Link
            href="/Live"
            to="/Live"
            className="border-2 border-red-800 animate-pulse py-2 rounded-md text-red-800 w-32 flex justify-center items-center text-sm"
          >
            <h6>Live</h6>
          </Link>
          <Link
            href="/Videos"
            to="/videos"
            className="border-2 border-blue-900  py-2 text-blue-900 w-32 rounded-md flex justify-center items-center text-sm"
          >
            <h6>Videos</h6>
          </Link>
          <Link
            href="https://www.youtube.com/playlist?list=PLBiWW8XNhqaJE8ncpA1JO-QFmVEWzo4Cn"
            className="border-2 border-blue-900 py-2 text-blue-900 w-32 rounded-md text-center ml-2"
          >
            <h6 className="text-sm">Podcast</h6>
          </Link>
          <Link
            href="/Partner"
            to="/Partner"
            className="border-2 border-blue-900 py-2 text-blue-900 w-44 rounded-md text-center ml-2"
          >
            <h6 className="text-sm">Become A Partner</h6>
          </Link>
          <div className="border mx-5 hidden max-lg:grid">
            <MenuIcon onClick={handleClick} className="text-4xl" />
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div className="flex flex-col w-96 h-96  justify-between bg-sky-100 border shadow-inner pl-4">
              <div className="flex w-full  justify-end"></div>
              <div className="flex flex-col h-96 justify-evenly items-left">
                {categories.map((category) => (
                  <>
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                    >
                      <span className="max-lg:w-fit text-sm">
                        {category.name}
                      </span>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
