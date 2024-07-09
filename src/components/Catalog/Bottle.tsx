import Typography from "@/sandbox/Typography";
import Image from "next/image";
import React from "react";

const bottles = [
  {
    image: "/images/catalog/bottle/b1.png",
    name: "BR BOTTLE 100",
    size: "100 ml",
    neck: "Ulir 24/410",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b2.png",
    name: "BR BOTTLE 250",
    size: "250 ml",
    neck: "Ulir 24/410",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b3.png",
    name: "BR BOTTLE 60",
    size: "60 ml",
    neck: "Ulir 18/410",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b4.png",
    name: "BR BOTTLE 30",
    size: " 30 ml",
    neck: " Ulir 18/410",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b5.png",
    name: "UM BOTTLE 100",
    size: "100 ml",
    neck: "Ulir 18/410",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b6.png",
    name: "OVL BOTTLE 30",
    size: "30 ml",
    neck: "Ulir 18/410",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b7.png",
    name: "OVL BOTTLE 55",
    size: "55 ml",
    neck: "Ulir 18/410",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b8.png",
    name: "OVL BOTTLE 80",
    size: "80 ml",
    neck: "Ulir 18/410",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b9.png",
    name: "OVL BOTTLE 100",
    size: "100 ml",
    neck: "Snap",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b10.png",
    name: "CRS BOTTLE 100",
    size: "100 ml",
    neck: "Ulir 20/410",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b11.png",
    name: "MULTI PURPOSE BOTTLE",
    size: "425 ml",
    neck: "Ulir 28/410",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b12.png",
    name: "PS BOTTLE 250",
    size: "250 ml",
    neck: "Ulir",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b13.png",
    name: "PS BOTTLE 100",
    size: "100 ml",
    neck: "Ulir 28",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b14.png",
    name: "PS BOTTLE 200",
    size: "200 ml",
    neck: "Ulir 28/410 ",
    material: "HDPE",
  },
  {
    image: "/images/catalog/bottle/b15.png",
    name: "BRF BOTTLE 150",
    size: "150 ml",
    neck: "Ulir",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b16.png",
    name: "SBR BOTTLE 250",
    size: "250 ml",
    neck: "Ulir",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b17.png",
    name: "ROLL ON SET",
    size: "60 ml",
    neck: "",
    material: "HDPE",
  },
  {
    image: "/images/catalog/bottle/b18.png",
    name: "PS BOTTLE 200",
    size: "200 ml",
    neck: "Ulir 28/410",
    material: "HDPE",
  },
  {
    image: "/images/catalog/bottle/b19.png",
    name: "VAPE 30 SET",
    size: "30 ml",
    neck: "Ulir with locking system",
    material: "PET",
  },
  {
    image: "/images/catalog/bottle/b20.png",
    name: "VAPE 15 SET",
    size: "15 ml",
    neck: "Ulir with locking system",
    material: "PET",
  },
];

const Bottle = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 bg-[#fff] sm:grid-cols-2 md:grid-cols-4">
        {bottles.map((bottle, index) => (
          <div key={index}>
            <div className="group relative h-96">
              {[
                "h-full w-full rounded-md object-cover object-top duration-200 ease-in-out group-hover:blur-md cursor-pointer",
                "absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-md duration-200 ease-in-out group-hover:block cursor-pointer",
              ].map((className, index) => (
                <Image
                  key={index}
                  src={bottle.image}
                  alt="bottles"
                  width={200}
                  height={0}
                  className={`${className} duration-300`}
                />
              ))}
            </div>
            <div className="space-y-2 py-4">
              <Typography variant="bm" weight="bold">
                {bottle.name}
              </Typography>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>Cap Size</td>
                      <td className="px-2">:</td>
                      <td>{bottle.size}</td>
                    </tr>
                    <tr>
                      <td>Neck</td>
                      <td className="px-2">:</td>
                      <td>{bottle.neck}</td>
                    </tr>
                    <tr>
                      <td>Material</td>
                      <td className="px-2">:</td>
                      <td>{bottle.material}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bottle;
