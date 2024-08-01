"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "../../components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-xl max-w-3xl mx-auto mb-10">
        My{" "}
        <LinkPreview url="https://github.com/rishika-on-git" className="font-bold">
          Github
        </LinkPreview>{" "}
        ,{" "}
        <LinkPreview url="https://www.linkedin.com/in/rishika-aggarwal-462b2a280/" className="font-bold">
          LinkedIn
        </LinkPreview>{" "}and{" "}
        <LinkPreview url="https://x.com/home" className="font-bold">
          Twitter
        </LinkPreview>{" "}
        profiles.
      </p>

      
    </div>
  );
}
