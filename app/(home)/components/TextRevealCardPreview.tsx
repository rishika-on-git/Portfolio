"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../../components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <section id="about">
    <div className="flex items-center justify-center h-[20rem] rounded-2xl w-full mb-20">
      <TextRevealCard
        text="Something special ..........."
        revealText="Full Stack AI Engineering"
      >
        <TextRevealCardTitle>
          Something Fun :) 
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        \(^_^)/ 
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
    </section>
  );
}
