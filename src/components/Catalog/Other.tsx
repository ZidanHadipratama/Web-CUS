import React from "react";
import Catalog from "./Catalog";

const others = [
  {
    image: "/images/catalog/others/o1.png",
    name: "POT JAR",
    size: "100 gr",
    neck: "Ulir",
    material: "PP",
  },
  {
    image: "/images/catalog/others/o2.png",
    name: "TUBE",
    size: "Varian Size",
    neck: "Ulir",
    material: "PP",
  },
  {
    image: "/images/catalog/others/o3.png",
    name: "MIST SPRAYER 20",
    size: "20/410",
    neck: "Ulir",
    material: "PP",
  },
  {
    image: "/images/catalog/others/o4.png",
    name: "MIST SPRAYER 24",
    size: "24/410",
    neck: "Ulir",
    material: "PP",
  },
  {
    image: "/images/catalog/others/o5.png",
    name: "MIST SPRAYER 18",
    size: "18/410",
    neck: "Ulir",
    material: "PP",
  },
  {
    image: "/images/catalog/others/o6.png",
    name: "LOTION PUMP 28/410",
    size: "18/410",
    neck: "Ulir",
    material: "PP",
  },
  {
    image: "/images/catalog/others/o7.png",
    name: "TRIGGER SPRAY 28/410",
    size: "18/410",
    neck: "Ulir",
    material: "PP",
  },
  {
    image: "/images/catalog/others/o8.png",
    name: "AIRLESS BOTTLE 28/410",
    size: "100 ml",
    neck: "",
    material: "PP;PS",
  },
  {
    image: "/images/catalog/others/o9.png",
    name: "AIRLESS BOTTLE 28/410",
    size: "100 ml",
    neck: "",
    material: "PP;PS",
  },
  {
    image: "/images/catalog/others/o10.png",
    name: "2 IN 1 NASAL INHALER",
    size: "",
    neck: "",
    material: "PP",
  },
  {
    image: "/images/catalog/others/o1.png",
    name: "POT JAR",
    size: "12 gr",
    neck: "",
    material: "PP",
  },
];

const Other = () => {
  return (
    <>
      <Catalog items={others} sizename="" />
    </>
  );
};

export default Other;
