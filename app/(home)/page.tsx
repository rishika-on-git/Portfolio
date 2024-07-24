import { GridBackgroundDemo } from "./components/GridBackgroundDemo";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import { StickyScrollRevealDemo } from "./components/StickyScrollRevealDemo";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
import { ExpandableCardDemo } from "./components/ExpandableCardDemo";
import { LinkPreviewDemo } from "./components/LinkPreviewDemo";

export default function Home() {
  return (
    <div>
      <FloatingNavDemo />
      <GridBackgroundDemo />
      
      <ExpandableCardDemo/>
      <BackgroundBeamsDemo />
  
      
    </div>
  );
}
