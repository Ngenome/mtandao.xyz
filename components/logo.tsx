"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();

  return (
    <Image
      src={resolvedTheme === "dark" ? "/logomark.png" : "/logomark.png"}
      alt="mtandao.xyz logo"
      width={493} // We can adjust these dimensions
      height={132} // based on your actual logo proportions
      className={`h-14 w-auto ${className}`} // Maintain aspect ratio
      priority
    />
  );
}
