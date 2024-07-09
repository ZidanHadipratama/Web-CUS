import Catalog from "@/components/Catalog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Catalog />
      <Footer />
    </>
  );
};

export default page;
