import Typography from "@/sandbox/Typography";
import * as React from "react";

export default function TypographyPage() {
  return (
    <main className="p-10">
      <Typography
        weight="bold"
        variant="h1"
        className="mb-6 text-center text-orange1"
      >
        Font Family of <br /> PT Catur Utama Sejahtera
      </Typography>
      <div className="space-y-4">
        <Typography weight="bold" variant="h1">
          Heading 1 Bold
        </Typography>
        <Typography weight="semibold" variant="h1">
          Heading 1 Semibold
        </Typography>
        <Typography weight="medium" variant="h1">
          Heading 1 Medium
        </Typography>
        <Typography weight="bold" variant="h2">
          Heading 2 Bold
        </Typography>
        <Typography weight="semibold" variant="h2">
          Heading 2 Semibold
        </Typography>
        <Typography weight="medium" variant="h2">
          Heading 2 Medium
        </Typography>
        <Typography weight="bold" variant="h3">
          Heading 3 Bold
        </Typography>
        <Typography weight="semibold" variant="h3">
          Heading 3 Semibold
        </Typography>
        <Typography weight="medium" variant="h3">
          Heading 3 Medium
        </Typography>
        <Typography weight="bold" variant="bl">
          Body Large Bold
        </Typography>
        <Typography weight="semibold" variant="bl">
          Body Large Semibold
        </Typography>
        <Typography weight="medium" variant="bl">
          Body Large Medium
        </Typography>
        <Typography weight="bold" variant="bm">
          Body Medium Bold
        </Typography>
        <Typography weight="semibold" variant="bm">
          Body Medium Semibold
        </Typography>
        <Typography weight="medium" variant="bm">
          Body Medium Medium
        </Typography>
        <Typography weight="bold" variant="bs">
          Body Small Bold
        </Typography>
        <Typography weight="semibold" variant="bs">
          Body Small Semibold
        </Typography>
        <Typography weight="medium" variant="bs">
          Body Small Medium
        </Typography>
        <div className="text-[36px] leading-[2.5rem] md:text-[72px] md:leading-[4.5rem]"></div>
        <div className="text-[24px] leading-[2rem] md:text-[48px] md:leading-[3rem]"></div>
        <div className="text-[18px] leading-[1.75rem] md:text-[30px] md:leading-[2.25rem]"></div>
        <div className="text-[16px] leading-[1.5rem] md:text-[24px] md:leading-[2.2rem]"></div>
        <div className="text-[14px] leading-[1.25rem] md:text-[20px] md:leading-[1.75rem]"></div>
        <div className="text-[12px] leading-[1rem] md:text-[18px] md:leading-[1.5rem]"></div>
        <div className="font-bold"></div>
        <div className="font-semibold"></div>
        <div className="font-medium"></div>
        <div className="font-poppins"></div>
      </div>
    </main>
  );
}
