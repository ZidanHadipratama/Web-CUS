import Typography from "@/sandbox/Typography";
import { Button } from "@mui/material";
import React from "react";

const BannerCatalog = ({
  className,
  href,
  title,
}: {
  className?: string;
  href: string;
  title: string;
}) => {
  return (
    <>
      <div className="grid h-[80vh] grid-cols-1 sm:h-[500px] md:grid-cols-2 lg:h-[80vh]">
        <div
          className={`${className} bg-cover bg-center bg-no-repeat md:bg-center`}
        />
        <div>
          <div className="flex h-full flex-col items-center justify-center space-y-4">
            <Typography variant="h2" className="tracking-widest">
              {title}
            </Typography>
            <Button
              href={href}
              sx={{
                background: "#fd700d",
                color: "#fff",
                "&:hover": {
                  background: "#e4650c",
                },
                "&:active": {
                  background: "#ca5a0a",
                },
                padding: "0.5rem 1rem",
              }}
            >
              VIEW CATALOG
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerCatalog;
