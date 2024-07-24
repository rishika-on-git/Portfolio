"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "../../components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          Framer Motion
        </LinkPreview>{" "}
        are a great way to build modern websites.
      </p>
      
    </div>
  );
}
