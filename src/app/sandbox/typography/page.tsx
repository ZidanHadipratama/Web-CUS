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
      </div>
    </main>
  );
}
