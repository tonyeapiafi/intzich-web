"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

function useBreakpoint() {
  const [bp, setBp] = useState<"mobile" | "tablet" | "desktop">("desktop");
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setBp("mobile");
      else if (w < 1024) setBp("tablet");
      else setBp("desktop");
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}

const ALL_IMAGES = [
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", alt: "Mountain landscape", code: "# 01" },
  { src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800", alt: "Abstract illustration", code: "# 02" },
  { src: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800", alt: "City skyline at night", code: "# 03" },
  { src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800", alt: "Modern architecture", code: "# 04" },
  { src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800", alt: "Laptop workspace", code: "# 05" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", alt: "Ocean waves", code: "# 06" },
  { src: "https://images.unsplash.com/photo-1754136362561-fd8b431c78e4?q=80&w=1065&auto=format&fit=crop", alt: "Forest path", code: "# 07" },
  { src: "https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?w=800", alt: "Colorful building", code: "# 08" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800", alt: "Sunset view", code: "# 09" },
];

const CONFIGS = {
  mobile:  { count: 4, height: "9rem",  collapsedW: "2.5rem", expandedW: "10rem" },
  tablet:  { count: 6, height: "16rem", collapsedW: "3rem",   expandedW: "18rem" },
  desktop: { count: 9, height: "24rem", collapsedW: "5rem",   expandedW: "24rem" },
};

const Skiper52 = () => {
  const bp = useBreakpoint();
  const cfg = CONFIGS[bp];
  const images = ALL_IMAGES.slice(0, cfg.count);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
      <HoverExpand_001 images={images} config={cfg} />
    </div>
  );
};

export { Skiper52 };

type Config = { count: number; height: string; collapsedW: string; expandedW: string };

const HoverExpand_001 = ({
  images,
  config,
  className,
}: {
  images: { src: string; alt: string; code: string }[];
  config: Config;
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  // Reset active image when image set changes (breakpoint change)
  useEffect(() => {
    setActiveImage(1);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className={cn("relative w-full max-w-6xl px-3 sm:px-5", className)}
    >
      <div className="flex w-full items-center justify-center gap-1">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl"
            animate={{
              width: activeImage === index ? config.expandedW : config.collapsedW,
              height: config.height,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setActiveImage(index)}
            onHoverStart={() => setActiveImage(index)}
          >
            <AnimatePresence>
              {activeImage === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {activeImage === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute flex h-full w-full flex-col items-end justify-end p-2 sm:p-4"
                >
                  <p className="text-left text-xs text-white/50">{image.code}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <img src={image.src} className="size-full object-cover" alt={image.alt} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export { HoverExpand_001 };
