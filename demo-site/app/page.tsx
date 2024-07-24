"use client";
import { ThemeSwitch } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello, world!</h1>
      <ThemeSwitch />
    </main>
  );
}
