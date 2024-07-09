import React from "react";
import Bottle from "./Catalog/Bottle";
import Cap from "./Catalog/Cap";
import Other from "./Catalog/Other";
import BannerCatalog from "./Catalog/BannerCatalog";
import Landing from "./Catalog/Landing";

const sections = [
  {
    component: Bottle,
    title: "BOTTLE",
    image: "bg-bottle_banner",
    href: "bottle",
  },
  { component: Cap, title: "CAP", image: "bg-cap_banner", href: "cap" },
  {
    component: Other,
    title: "OTHER",
    image: "bg-other_banner",
    href: "other",
  },
];

const pxrule = "px-8 sm:px-10 lg:px-16";

const Product = () => {
  return (
    <>
      <Landing className={`${pxrule} lg:px-44`} />
      <div className="py-0">
        {sections.map((section, index) => (
          <div className="space-y-6" key={index}>
            <BannerCatalog
              title={section.title}
              href={`/product#${section.href}`}
              className={`${index % 2 != 0 ? "order-first md:order-last" : ""} ${section.image}`}
            />
            <div className={pxrule} key={index} id={section.href}>
              <section.component />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
