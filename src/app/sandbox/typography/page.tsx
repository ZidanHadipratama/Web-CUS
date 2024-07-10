import Typography from "@/sandbox/Typography";
import * as React from "react";

const weights = [
  { title: "Bold", type: "bold" },
  { title: "Semibold", type: "semibold" },
  { title: "Medium", type: "medium" },
] as const;

const variants = [
  { title: "Heading 1", type: "h1" },
  { title: "Heading 2", type: "h2" },
  { title: "Heading 3", type: "h3" },
  { title: "Body Large", type: "bl" },
  { title: "Body Medium", type: "bm" },
  { title: "Body Small", type: "bs" },
] as const;

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
        {variants.map((v, index) => (
          <div key={index} className="space-y-4">
            {weights.map((w, index) => (
              <Typography key={index} weight={w.type} variant={v.type}>
                {v.title} {w.title}
              </Typography>
            ))}
          </div>
        ))}
        {[
          "text-[36px] leading-[2.5rem] md:text-[72px] md:leading-[4.5rem]",
          "text-[24px] leading-[2rem] md:text-[48px] md:leading-[3rem]",
          "text-[18px] leading-[1.75rem] md:text-[30px] md:leading-[2.25rem]",
          "text-[16px] leading-[1.5rem] md:text-[24px] md:leading-[2.2rem]",
          "text-[14px] leading-[1.25rem] md:text-[20px] md:leading-[1.75rem]",
          "text-[12px] leading-[1rem] md:text-[18px] md:leading-[1.5rem]",
          "font-bold",
          "font-semibold",
          "font-medium",
          "font-poppins",
        ].map((cn, index) => (
          <div key={index} className={cn} />
        ))}
      </div>
    </main>
  );
}
