"use client";
import Image from "next/image";
import React, { useState } from "react";

import Logo from "../../public/images/navbar/logo.png";
import Link from "next/link";
import Typography from "@/sandbox/Typography";
import { IconButton } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const navlinks = [
  { name: "Home", link: "/" },
  { name: "Our Service", link: "/service" },
  { name: "Our Product", link: "/product" },
];

const pxrule = "px-8 sm:px-10 lg:px-16";

const Navbar = () => {
  const [click, setClick] = useState<boolean>(false);
  const trigger = () => {
    setClick(!click);
  };

  return (
    <>
      {/* Mobile */}
      <div
        className={`${click ? "translate-x-0" : "translate-x-full"} fixed z-[103] flex h-screen w-full flex-col items-center justify-center gap-28 bg-[#000] duration-300 md:hidden`}
      >
        <div className="flex flex-col items-center gap-12">
          <div>
            <Image src={Logo} width={75} height={0} alt="Logo" />
          </div>
          <div className="space-y-6 text-center text-[#fff]">
            {navlinks.map((navlink, index) => (
              <Typography
                key={index}
                weight="medium"
                // variant="bs"
                className="hover:text-orange2 active:text-orange3"
              >
                <Link href={navlink.link}>{navlink.name}</Link>
              </Typography>
            ))}
          </div>
        </div>
        <div onClick={trigger}>
          <IconButton
            sx={{
              background: "#fff",
              color: "#000",
              "&:hover": {
                background: "#e6e6e6",
              },
              "&:active": {
                background: "#cccccc",
              },
            }}
          >
            <IoMdClose />
          </IconButton>
        </div>
      </div>

      {/* Desktop */}
      <div
        className={`fixed z-[102] flex w-full flex-row items-center justify-between bg-[#fff] py-1 ${pxrule}`}
      >
        <div>
          <Image src={Logo} width={75} height={0} alt="Logo" />
        </div>
        <div className="absolute left-1/2 hidden -translate-x-1/2 transform gap-10 md:flex">
          {navlinks.map((navlink, index) => (
            <Typography
              key={index}
              weight="medium"
              variant="bs"
              className="text-[12px] leading-[1rem] hover:text-orange2 active:text-orange3 md:text-[18px] md:leading-[1.5rem]"
            >
              <Link href={navlink.link}>{navlink.name}</Link>
            </Typography>
          ))}
        </div>
        <div onClick={trigger} className="block md:hidden">
          <IconButton
            sx={{
              background: "#fd700d",
              color: "#fff",
              "&:hover": {
                background: "#e4650c",
              },
              "&:active": {
                background: "#ca5a0a",
              },
            }}
          >
            <GiHamburgerMenu />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Navbar;
