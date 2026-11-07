import GalleryClient from "./GalleryClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation & Robotics Gallery | ROBOTWALA",
  description:
    "Explore ROBOTWALA's visual archive of conversational humanoid robots, precision FPV drones, STEM hardware kits, and championship arenas across India.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
