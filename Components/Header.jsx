import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../Services";
import MenuIcon from "@mui/icons-material/Menu";
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
    <div className="bg-gradient-to-r from-sky-300 to-sky-700">
      <div className="p-4 mx-auto flex flex-col w-full items-center justify-between max-lg:w-full max-lg:ml-0  max-lg:p-2 max-lg:relative  max-lg:flex-col">
        <div className="w-32 h-24 max-lg:w-fit">
          <Link href="/">
            <img src="ebn.png" alt="ebn tv logo" className="h-full" />
          </Link>
        </div>
        <div className="uppercase mt-4 w-full flex justify-between items-center ">
          <div className=" w-3/4 flex justify-evenly max-lg:hidden">
            <Link href="/">
              <span className="text-white max-lg:w-fit text-sm">HOME</span>
            </Link>
            {categories.map((category) => (
              <>
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <span className="text-white max-lg:w-fit text-sm">
                    {category.name}
                  </span>
                </Link>
              </>
            ))}
          </div>

          <div className="max-lg:grid flex grid-cols-2 justify-evenly items-center gap-4 w-1/3 `  max-lg:w-full  ">
            <Link
              href="/Live"
              to="/Live"
              className=" bg-red-700  max-lg:w-full py-2 h-fit w-24 px-2 rounded-md text-white flex justify-center items-center text-sm"
            >
              <h6 className="animate-pulse">Live</h6>
            </Link>
            <Link
              href="/Videos"
              to="/videos"
              className="bg-blue-500  py-2 max-lg:h-fit px-2 rounded-md text-white flex justify-center items-center text-sm "
            >
              <h6>Videos</h6>
            </Link>
            <Link
              href="https://www.youtube.com/playlist?list=PLBiWW8XNhqaJE8ncpA1JO-QFmVEWzo4Cn"
              className="bg-blue-500  py-2 max-lg:h-fit px-2 rounded-md text-white flex justify-center items-center text-sm "
            >
              <h6 className="text-sm">Podcast</h6>
            </Link>
            <Link
              href="/Partner"
              to="/Partner"
              className="bg-blue-500 w-full  py-2 max-lg:h-fit px-2 rounded-md text-white flex justify-center items-center text-sm "
            >
              <h6 className="text-sm">Become a Partner</h6>
            </Link>
          </div>

          <div className=" max-lg:w-fit hidden max-lg:flex ml-4 border rounded border-sky-400">
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
