import React from "react";
import Catalog from "./Catalog";

const caps = [
  {
    image: "/images/catalog/cap/c1.png",
    name: "FLIPTOP DOME CAP",
    size: "24/410",
    neck: "Ulir",
    material: "PP",
  },
  {
    image: "/images/catalog/cap/c2.png",
    name: "FLIPTOP FLAT CAP",
    size: "24/410",
    neck: "Ulir",
    material: "PP",
  },
  {
    image: "/images/catalog/cap/c3.png",
    name: "FLIPTOP FLAT CAP",
    size: "18/410",
    neck: "Ulir",
    material: "PP",
  },
  {
    image: "/images/catalog/cap/c4.png",
    name: "PP SMAL CAP",
    size: "28",
    neck: "Ulir",
    material: "PP",
  },
  {
    image: "/images/catalog/cap/c5.png",
    name: "FLIPTOP TUBE CAP",
    size: "55 mm",
    neck: "",
    material: "PP",
  },
  {
    image: "/images/catalog/cap/c6.png",
    name: "FLIPTOP CAP",
    size: "",
    neck: "Snap",
    material: "PP",
  },
  {
    image: "/images/catalog/cap/c7.png",
    name: "FLIPTOP TUBE CAP",
    size: "35 mm",
    neck: "",
    material: "PP",
  },
  {
    image: "/images/catalog/cap/c8.png",
    name: "VAPE CAP",
    size: "Varian Size",
    neck: "Ulir with locking system",
    material: "PP",
  },
  {
    image: "/images/catalog/cap/c9.png",
    name: "CAP 18",
    size: "18/410",
    neck: "Ulir",
    material: "PP",
  },
];

const Cap = () => {
  return (
    <>
      <Catalog items={caps} sizename="Cap" />
    </>
  );
};

export default Cap;
