import { createFileRoute } from "@tanstack/react-router";
import { MissionApp } from "@/components/game/mission-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <MissionApp />;
}
