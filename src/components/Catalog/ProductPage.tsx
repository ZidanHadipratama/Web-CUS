"use client";
import React from "react";
import Bottle from "./Bottle";
import Cap from "./Cap";
import Other from "./Other";
import BannerCatalog from "./BannerCatalog";
import Landing from "./Landing";
import SEO from "../SEO";

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

const pxrule = "px-8 sm:px-10 lg:px-44";

const ProductPage = () => {
  return (
    <>
      <Landing />
      <SEO title="Our Product" />
      <div className={`space-y-6 py-6 ${pxrule}`}>
        {sections.map((section, index) => (
          <div className="space-y-4" key={index}>
            <BannerCatalog title={section.title} />
            <div key={index} id={section.href}>
              <section.component />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
