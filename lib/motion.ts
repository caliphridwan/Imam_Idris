import type { CSSProperties } from "react";

/** Animation/transition delay in ms, read by the motion classes in globals.css. */
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Index for staggered word reveals. */
export const idx = (i: number) => ({ "--i": i }) as CSSProperties;
