import React from "react";
import Logo from "../../public/images/navbar/logo.png";
import Image from "next/image";
import Typography from "@/sandbox/Typography";
import Link from "next/link";
import { IconButton } from "@mui/material";

import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

const pxrule = "px-8 sm:px-10 lg:px-16";

const footerlinks = [
  { name: "Home", link: "/" },
  { name: "Our Service", link: "/service" },
  { name: "Our Product", link: "/product" },
];

const footericons = [
  { name: FaWhatsapp, link: "https://wa.me/6285925327393" },
  { name: SiGooglemaps, link: "https://maps.app.goo.gl/HRpJ3HtREUuFKNcc9" },
  { name: MdOutlineEmail, link: "mailto:marketing@cusplastic.com" },
];

const Footer = () => {
  return (
    <>
      <div className={`${pxrule} py-16`}>
        <div className="space-y-8 text-center md:text-left">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start md:gap-0">
            <div>
              <Image src={Logo} width={125} height={125} alt="Logo" />
            </div>
            <div className="flex flex-col gap-8 md:flex-row md:gap-20">
              <div className="space-y-4">
                <Typography
                  variant="bm"
                  weight="semibold"
                  className="text-orange1"
                >
                  Useful Links
                </Typography>
                <div className="space-y-2">
                  {footerlinks.map((footerlink, index) => (
                    <Typography
                      key={index}
                      className="hover:text-orange2 active:text-orange3"
                    >
                      <Link href={footerlink.link}>{footerlink.name}</Link>
                    </Typography>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <Typography
                  variant="bm"
                  weight="semibold"
                  className="text-orange1"
                >
                  Phone
                </Typography>
                <div className="space-y-2">
                  <Typography>+628165423029</Typography>
                  <Typography>+6287880629246</Typography>
                </div>
              </div>
              <div className="space-y-4">
                <Typography
                  variant="bm"
                  weight="semibold"
                  className="text-orange1"
                >
                  Address
                </Typography>
                <div>
                  <Typography>
                    Jl. Raya Cisoka No 2 <br />
                    Pergudangan SURYA GRAND CISOKA H1 <br />
                    Kab. Tangerang BANTEN
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-[2px] w-full bg-[#000]" />
          <div className="flex flex-col space-y-6 text-center">
            <div className="space-x-4">
              {footericons.map((footericon, index) => (
                <IconButton
                  sx={{
                    background: "#000",
                    color: "#fff",
                    ":hover": { background: "#000" },
                    ":active": { background: "#f8f8f8", color: "#000" },
                  }}
                  key={index}
                  href={footericon.link}
                  size="small"
                  target="_blank"
                >
                  <footericon.name />
                </IconButton>
              ))}
            </div>
            <Typography>
              © PT Catur Utama Sejahtera {new Date().getFullYear()}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
