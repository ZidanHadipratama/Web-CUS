import ProductPage from "@/components/Catalog/ProductPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <ProductPage />
      <Footer />
    </>
  );
};

export default page;
