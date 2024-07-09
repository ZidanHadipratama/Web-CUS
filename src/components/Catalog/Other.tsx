import Typography from "@/sandbox/Typography";
import Image from "next/image";
import React from "react";

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
      <div className="grid grid-cols-1 gap-4 bg-[#fff] sm:grid-cols-2 md:grid-cols-4">
        {others.map((other, index) => (
          <div key={index}>
            <div className="group relative h-96">
              {[
                "h-full w-full rounded-md object-cover object-top duration-200 ease-in-out group-hover:blur-md cursor-pointer",
                "absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-md duration-200 ease-in-out group-hover:block cursor-pointer",
              ].map((className, index) => (
                <Image
                  key={index}
                  src={other.image}
                  alt="bottles"
                  width={200}
                  height={0}
                  className={`${className} duration-300`}
                />
              ))}
            </div>
            <div className="space-y-2 py-4">
              <Typography variant="bm" weight="bold">
                {other.name}
              </Typography>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>Size</td>
                      <td className="px-2">:</td>
                      <td>{other.size}</td>
                    </tr>
                    <tr>
                      <td>Neck</td>
                      <td className="px-2">:</td>
                      <td>{other.neck}</td>
                    </tr>
                    <tr>
                      <td>Material</td>
                      <td className="px-2">:</td>
                      <td>{other.material}</td>
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

export default Other;
