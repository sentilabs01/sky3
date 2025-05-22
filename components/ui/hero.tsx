"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { renderCanvas } from "@/components/ui/canvas";
import { Shapes, ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

export function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    renderCanvas();
    // Animated logo cursor logic
    const cursor = cursorRef.current;
    if (!cursor) return;
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://automationalien.s3.us-east-1.amazonaws.com/sky2.mp4"
      />
      <div className="animation-delay-8 animate-fadeIn mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-20 relative z-10">
        <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
          <div className="relative flex items-center whitespace-nowrap rounded-full border bg-popover px-3 py-1 text-xs leading-6  text-primary/60 ">
            <Shapes className="h-5 p-1" />
            <a
              href="https://automationalien.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-ali ml-1 flex items-center font-semibold"
            >
              <div className="absolute inset-0 flex" aria-hidden="true" />
              Visit Our Website
              <span aria-hidden="true">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="mb-10 mt-4  md:mt-6">
          <div className="px-2">
            <div className="border-ali relative mx-auto h-full max-w-7xl border p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20">
              <h1 className="flex  select-none flex-col  px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -left-5 -top-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-5 -left-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -right-5 -top-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-5 -right-5 h-10 w-10"
                />
                Save Time with Automation.
              </h1>
              <div className="flex items-center justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">Available Now</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-10 mb-10">
            <a href="https://agent.jotform.com/01952a9d3fb275588d4fce8dc19d1aa9d6e0" target="_blank" rel="noopener noreferrer">
              <Button
                variant="default"
                size="lg"
                className="backdrop-blur-md bg-white/30 border border-white/30 shadow-lg text-black font-semibold rounded-xl px-8 py-4 transition hover:bg-white/50 hover:shadow-2xl"
              >
                Inquire Today
              </Button>
            </a>
          </div>
          <div className="flex justify-center items-center gap-8 mt-10">
            <img src="https://automationalien.s3.us-east-1.amazonaws.com/make-logo-png.png" alt="Make Logo" className="h-24 w-auto" />
            <img src="https://automationalien.s3.us-east-1.amazonaws.com/n8n-logo-png_seeklogo-470809.png" alt="n8n Logo" className="h-24 w-auto" />
            <img src="https://automationalien.s3.us-east-1.amazonaws.com/Zapier_logo.png" alt="Zapier Logo" className="h-10 w-auto" />
          </div>
        </div>
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0 mx-auto z-10"
        id="canvas"
      ></canvas>
      {/* Animated Logo Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-100 will-change-transform"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <Image
          src="https://automationalien.s3.us-east-1.amazonaws.com/alien.PNG"
          alt="Cursor Logo"
          width={48}
          height={48}
          className="rounded-full shadow-lg"
          priority
        />
      </div>
      {/* JotForm Agent Script */}
      <script
        src="https://cdn.jotfor.ms/agent/embedjs/01952a9d3fb275588d4fce8dc19d1aa9d6e0/embed.js?skipWelcome=1&maximizable=1"
      ></script>
    </section>
  );
} 