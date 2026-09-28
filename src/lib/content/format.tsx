import React from "react";

export const HIGHLIGHT_HELP = "*Yıldız* arasına yazılan kısım vurgulu (farklı renkte) görünür.";

// Renders "*emphasised*" parts of an editable text with the given className.
export function Highlight({ text, className }: { text: string; className: string }) {
  return (
    <>
      {text.split(/\*([^*]+)\*/).map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={className}>
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

// Line breaks typed in the admin panel become <br />.
export function Lines({ text, highlightClassName = "" }: { text: string; highlightClassName?: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          <Highlight text={line} className={highlightClassName} />
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

export const paragraphs = (text: string) =>
  text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

// "0 216 311 00 67" -> "tel:+902163110067"
export function telHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits.startsWith("0") ? "+90" + digits.slice(1) : digits}`;
}
