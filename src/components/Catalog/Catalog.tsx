import Typography from "@/sandbox/Typography";
import Image from "next/image";
import React from "react";

interface Item {
  image: string;
  name: string;
  size: string;
  neck: string;
  material: string;
}

interface CatalogProps {
  items: Item[];
  sizename: string;
}

const Catalog = ({ items, sizename }: CatalogProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 bg-[#fff] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <div className="space-y-2" key={index}>
            <div className="group relative h-72">
              <Image
                key={index}
                src={item.image}
                alt="bottles"
                width={200}
                height={0}
                className="h-full w-full rounded-lg object-cover object-top duration-200 ease-in-out"
              />
            </div>
            <div>
              <Typography weight="bold">{item.name}</Typography>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>{sizename} Size</td>
                      <td className="px-2">:</td>
                      <td>{item.size}</td>
                    </tr>
                    <tr>
                      <td>Neck</td>
                      <td className="px-2">:</td>
                      <td>{item.neck}</td>
                    </tr>
                    <tr>
                      <td>Material</td>
                      <td className="px-2">:</td>
                      <td>{item.material}</td>
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

export default Catalog;
