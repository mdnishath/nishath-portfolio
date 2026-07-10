"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/** Shared easing/duration so every reveal on the site feels like one system. */
export const EASE = "power3.out";
export const DURATION = 1.1;

export { gsap, ScrollTrigger, SplitText, useGSAP };
