"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { MoveHorizontal, Maximize2 } from "lucide-react";
import type { BeforeAfterItem } from "@/types";

interface BeforeAfterSliderProps {
  item: BeforeAfterItem;
  onOpenLightbox?: (item: BeforeAfterItem) => void;
}

export function BeforeAfterSlider({ item, onOpenLightbox }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const reduceMotion = useReducedMotion();

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl shadow-sm"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        role="slider"
        aria-label={`Compare before and after for ${item.treatmentName}`}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
        }}
      >
        <Image
          src={item.afterImage}
          alt={`After ${item.treatmentName}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.beforeImage}
            alt={`Before ${item.treatmentName}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            draggable={false}
          />
        </div>

        <span className="absolute left-3 top-3 rounded-md bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
          After
        </span>

        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow"
          style={{ left: `${position}%`, transform: reduceMotion ? undefined : "translateX(-50%)" }}
        >
          <div className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/10">
            <MoveHorizontal className="size-5 text-primary" />
          </div>
        </div>

        {onOpenLightbox && (
          <button
            type="button"
            onClick={() => onOpenLightbox(item)}
            className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-lg bg-black/50 text-white opacity-0 transition-opacity backdrop-blur-sm hover:bg-black/70 focus:opacity-100 group-hover:opacity-100"
            aria-label={`Open ${item.treatmentName} in lightbox`}
          >
            <Maximize2 className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}
