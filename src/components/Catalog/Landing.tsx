import Typography from "@/sandbox/Typography";
import React from "react";

const Landing = ({ className }: { className: string }) => {
  return (
    <>
      <div
        className={`${className} flex h-[100dvh] flex-col items-center justify-center bg-catalog-landing bg-cover bg-no-repeat text-center text-[#fff] md:items-start md:text-left`}
      >
        <div className="space-y-4">
          <Typography variant="h1" weight="bold">
            Our Product
          </Typography>
          <Typography variant="bm">
            Your trusted partner in innovative plastic packaging and mold design
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Landing;
