import * as React from "react";

import CTA from "@/components/pages/home/cta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type LayoutOpt = {
  children: React.ReactNode;
  withNavbar?: boolean;
  withFooter?: boolean;
  withCTA?: boolean;
} & React.ComponentPropsWithRef<"div">;

export default function Layout({
  children,
  withNavbar = false,
  withFooter = false,
  withCTA = false,
}: LayoutOpt) {
  return (
    <div className="scrollbar scrollbar-thin">
      {withNavbar && <Navbar />}
      <div className="overflow-hidden">{children}</div>
      {withCTA && <CTA />}
      {withFooter && <Footer />}
    </div>
  );
}
