"use client";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // pastikan client sudah mount
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // 🚀 ini solusinya: jangan render icon sebelum mounted
    return (
      <Skeleton className=" w-9.5 h-10 rounded-xl" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-3 rounded-xl bg-gray-200 dark:bg-gray-800 text-sm flex items-center justify-center"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}
