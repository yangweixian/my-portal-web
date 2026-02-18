"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <NextStudio config={config} />
    </div>
  );
}
