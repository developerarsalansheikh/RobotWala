"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
}

const variants: Record<Direction, Variants> = {
  up:    { hidden: { opacity: 0, y: 48 },      visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -32 },     visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -48 },     visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 48 },      visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.88 },visible: { opacity: 1, scale: 1 } },
  fade:  { hidden: { opacity: 0 },             visible: { opacity: 1 } },
};

export default function ScrollReveal({
  children, direction = "up", delay = 0, duration = 0.55, className, once = true, amount = 0.15,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children, staggerDelay = 0.1, className,
}: { children: React.ReactNode; staggerDelay?: number; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children, direction = "up", className,
}: { children: React.ReactNode; direction?: Direction; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: variants[direction].hidden,
        visible: { ...variants[direction].visible, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
