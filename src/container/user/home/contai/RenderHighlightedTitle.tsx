import React from "react";

interface RenderHighlightedTitleProps {
  text: string;
  highlights: string[];
}

export default function RenderHighlightedTitle({
  text,
  highlights,
}: RenderHighlightedTitleProps) {
  if (!highlights || highlights.length === 0) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        highlights.some((kw) => part.toLowerCase() === kw.toLowerCase()) ? (
          <span
            key={i}
            style={{ color: "var(--mantine-color-brand-5)", fontWeight: 700 }}
          >
            {part}
          </span>
        ) : (
          <span key={i} style={{ color: "#333" }}>
            {part}
          </span>
        )
      )}
    </>
  );
}
