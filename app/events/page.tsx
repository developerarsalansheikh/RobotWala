import EventsClient from "./EventsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Workshops | ROBOTWALA Robotics EdTech",
  description:
    "Discover upcoming and past robotics workshops, school competitions, and tech expos hosted by ROBOTWALA across India.",
};

export default function EventsPage() {
  return <EventsClient />;
}

