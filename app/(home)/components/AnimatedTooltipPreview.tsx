"use client";
import React from "react";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import images from "../../../public/images/OIP.jpeg";
const people = [
  {
    id: 1,
    name: "HTML",
    designation: "",
    image: "/images/html.jpeg",
  },
  {
    id: 2,
    name: "CSS",
    designation: "",
    image: "/images/OIP.jpeg",
  },
  {
    id: 3,
    name: "JS",
    designation: "JavaScript",
    image: "/images/js.png",
  },
  {
    id: 4,
    name: "React JS",
    designation: "UI/UX",
    image: "/images/react.jpeg",
  },
  {
    id: 5,
    name: "NODE JS",
    designation: "",
    image: "/images/node.jpeg",
  },
  {
    id: 6,
    name: "DSA",
    designation: "",
    image: "/images/cpp.jpeg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center mb-10 w-full px-3 mx-10">
      <AnimatedTooltip items={people} />
    </div>
  );
}
