import React from "react";
import Bottle from "./Catalog/Bottle";
import Cap from "./Catalog/Cap";
import Other from "./Catalog/Other";
import Typography from "@/sandbox/Typography";

const sections = [
  { component: Bottle, title: "BOTTLE" },
  { component: Cap, title: "CAP" },
  { component: Other, title: "OTHER" },
];

const pxrule = "px-8 sm:px-10 lg:px-16";

const Product = () => {
  return (
    <>
      {/* Landing */}
      <div
        className={`${pxrule} flex h-[60dvh] flex-col items-center justify-center bg-catalog-landing bg-cover bg-no-repeat text-center text-[#fff] md:items-start md:text-left`}
      >
        <div className="space-y-4">
          <Typography variant="h1" weight="bold">
            Our Product
          </Typography>
          <Typography variant="bm" weight="medium">
            Your Trusted Partner in Innovative Plastic Packaging and Mold Design
          </Typography>
        </div>
      </div>

      {/* Product */}
      <div className={`${pxrule} space-y-12 py-6`}>
        {sections.map((secion, index) => (
          <div className="space-y-4" key={index}>
            <div className="flex items-center gap-3">
              <Typography variant="h3" weight="medium">
                {secion.title}
              </Typography>
              <hr className="h-[2px] w-full bg-[#000]" />
            </div>
            <secion.component />
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
