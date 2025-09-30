"use client";
import { Box } from "@mantine/core";
import { IconArrowUp, IconMouse } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function MyButtonScroll() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <Box
      bg="white"
      onClick={scrollToTop}
      role="button"
      aria-label="Lên đầu trang"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && scrollToTop()}
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        border: "1px solid var(--mantine-color-brand-5)",
        borderRadius: 9999,
        cursor: "pointer",
        boxShadow: "0 6px 18px rgba(0,0,0,.12)",
        zIndex: 1000,
        padding: "8px 8px 4px 8px",
      }}
    >
      <IconMouse size={22} color="var(--mantine-color-brand-5)" />
    </Box>
  );
}
