import Typography from "@/sandbox/Typography";
import Image from "next/image";
import React from "react";

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
      <div className="grid grid-cols-1 gap-4 bg-[#fff] sm:grid-cols-2 md:grid-cols-4">
        {caps.map((cap, index) => (
          <div key={index}>
            <div className="group relative h-96">
              {[
                "h-full w-full rounded-md object-cover object-top duration-200 ease-in-out group-hover:blur-md cursor-pointer",
                "absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-md duration-200 ease-in-out group-hover:block cursor-pointer",
              ].map((className, index) => (
                <Image
                  key={index}
                  src={cap.image}
                  alt="bottles"
                  width={200}
                  height={0}
                  className={`${className} duration-300`}
                />
              ))}
            </div>
            <div className="space-y-2 py-4">
              <Typography variant="bm" weight="bold">
                {cap.name}
              </Typography>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>Bottle Size</td>
                      <td className="px-2">:</td>
                      <td>{cap.size}</td>
                    </tr>
                    <tr>
                      <td>Neck</td>
                      <td className="px-2">:</td>
                      <td>{cap.neck}</td>
                    </tr>
                    <tr>
                      <td>Material</td>
                      <td className="px-2">:</td>
                      <td>{cap.material}</td>
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

export default Cap;
