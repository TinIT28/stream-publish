import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image src="/spooky.svg" alt="logo" width={80} height={80} />
      </div>
      <div className="flex flex-col items-center">
        <p className={cn(font.className, "text-xl font-semibold")}>
          Steam publish
        </p>
        <p className={cn(font.className, "text-sm text-muted-foreground")}>
          Let's play
        </p>
      </div>
    </div>
  );
};

export default Logo;
