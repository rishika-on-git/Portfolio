import React from "react";

import { FlipWordsDemo } from "./FlipWordsDemo";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import { TextRevealCardPreview } from "./TextRevealCardPreview";
export function GridBackgroundDemo() {
  return (
    <div className="">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
      <div className="flex flex-col h-full mt-20">
        <div>
          <FlipWordsDemo />
        </div>
        <div className="mt-4 mx-0 px-4">
          <AnimatedTooltipPreview />
        </div>

        <div>
          <TextRevealCardPreview />
        </div>
      </div>
    </div>
  );
}
