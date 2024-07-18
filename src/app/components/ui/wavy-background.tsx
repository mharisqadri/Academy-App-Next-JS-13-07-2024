// "use client";
// import { cn } from "@/app/utils/cn";
// import React, { useEffect, useRef, useState } from "react";
// import { createNoise3D } from "simplex-noise";

// export const WavyBackground = ({
//   children,
//   className,
//   containerClassName,
//   colors,
//   waveWidth,
//   backgroundFill,
//   blur = 10,
//   speed = "fast",
//   waveOpacity = 0.5,
//   ...props
// }: {
//   children?: any;
//   className?: string;
//   containerClassName?: string;
//   colors?: string[];
//   waveWidth?: number;
//   backgroundFill?: string;
//   blur?: number;
//   speed?: "slow" | "fast";
//   waveOpacity?: number;
//   [key: string]: any;
// }) => {
//   const noise = createNoise3D();
//   let w: number,
//     h: number,
//     nt: number,
//     i: number,
//     x: number,
//     ctx: any,
//     canvas: any;
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const getSpeed = () => {
//     switch (speed) {
//       case "slow":
//         return 0.001;
//       case "fast":
//         return 0.002;
//       default:
//         return 0.001;
//     }
//   };

//   const init = () => {
//     canvas = canvasRef.current;
//     ctx = canvas.getContext("2d");
//     w = ctx.canvas.width = window.innerWidth;
//     h = ctx.canvas.height = window.innerHeight;
//     ctx.filter = `blur(${blur}px)`;
//     nt = 0;
//     window.onresize = function () {
//       w = ctx.canvas.width = window.innerWidth;
//       h = ctx.canvas.height = window.innerHeight;
//       ctx.filter = `blur(${blur}px)`;
//     };
//     render();
//   };

//   const waveColors = colors ?? [
//     "#38bdf8",
//     "#818cf8",
//     "#c084fc",
//     "#e879f9",
//     "#22d3ee",
//   ];
//   const drawWave = (n: number) => {
//     nt += getSpeed();
//     for (i = 0; i < n; i++) {
//       ctx.beginPath();
//       ctx.lineWidth = waveWidth || 50;
//       ctx.strokeStyle = waveColors[i % waveColors.length];
//       for (x = 0; x < w; x += 5) {
//         var y = noise(x / 800, 0.3 * i, nt) * 100;
//         ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
//       }
//       ctx.stroke();
//       ctx.closePath();
//     }
//   };

//   let animationId: number;
//   const render = () => {
//     ctx.fillStyle = backgroundFill || "black";
//     ctx.globalAlpha = waveOpacity || 0.5;
//     ctx.fillRect(0, 0, w, h);
//     drawWave(5);
//     animationId = requestAnimationFrame(render);
//   };

//   useEffect(() => {
//     init();
//     return () => {
//       cancelAnimationFrame(animationId);
//     };
//   }, []);

//   const [isSafari, setIsSafari] = useState(false);
//   useEffect(() => {
//     // I'm sorry but i have got to support it on safari.
//     setIsSafari(
//       typeof window !== "undefined" &&
//         navigator.userAgent.includes("Safari") &&
//         !navigator.userAgent.includes("Chrome")
//     );
//   }, []);

//   return (
//     <div
//       className={cn(
//         "h-screen flex flex-col items-center justify-center",
//         containerClassName
//       )}
//     >
//       <canvas
//         className="absolute inset-0 z-0"
//         ref={canvasRef}
//         id="canvas"
//         style={{
//           ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
//         }}
//       ></canvas>
//       <div className={cn("relative z-10", className)} {...props}>
//         {children}
//       </div>
//     </div>
//   );
// };





//////////chat gpt /////////////////////

"use client";
import { cn } from "@/app/utils/cn";
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();
  const wRef = useRef<number>(0);
  const hRef = useRef<number>(0);
  const ntRef = useRef<number>(0);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  }, [speed]);

  const waveColors = useMemo(() => colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ], [colors]);

  const drawWave = useCallback((n: number) => {
    if (!ctxRef.current) return;
    
    ntRef.current += getSpeed();
    for (let i = 0; i < n; i++) {
      ctxRef.current.beginPath();
      ctxRef.current.lineWidth = waveWidth || 50;
      ctxRef.current.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < wRef.current; x += 5) {
        const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
        ctxRef.current.lineTo(x, y + hRef.current * 0.5);
      }
      ctxRef.current.stroke();
      ctxRef.current.closePath();
    }
  }, [getSpeed, waveColors, waveWidth, noise]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    wRef.current = canvas.width = window.innerWidth;
    hRef.current = canvas.height = window.innerHeight;
    ctxRef.current = ctx;
    ctx.filter = `blur(${blur}px)`;
    ntRef.current = 0;

    const resizeHandler = () => {
      wRef.current = ctx.canvas.width = window.innerWidth;
      hRef.current = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [blur]);

  const render = useCallback(() => {
    if (!ctxRef.current) return;

    ctxRef.current.fillStyle = backgroundFill || "black";
    ctxRef.current.globalAlpha = waveOpacity || 0.5;
    ctxRef.current.fillRect(0, 0, wRef.current, hRef.current);
    drawWave(5);
    animationIdRef.current = requestAnimationFrame(render);
  }, [backgroundFill, drawWave, waveOpacity]);

  useEffect(() => {
    init();
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [init]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
