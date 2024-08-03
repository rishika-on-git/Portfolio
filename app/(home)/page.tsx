import { GridBackgroundDemo } from "./components/GridBackgroundDemo";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";

import { FloatingNavDemo } from "./components/FloatingNavDemo";
import { ExpandableCardDemo } from "./components/ExpandableCardDemo";


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
