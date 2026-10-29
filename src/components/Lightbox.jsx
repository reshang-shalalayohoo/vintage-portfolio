import { useEffect, useCallback } from "react";

export default function Lightbox({ image, title, onClose }) {
  const handleKey = useCallback((e) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!image) return null;

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title ? `Viewing: ${title}` : "Image lightbox"}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">✕</button>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-content">
          <img src={image} alt={title || "Gallery image"} />
        </div>
        {title && <p className="lightbox-caption">{title}</p>}
      </div>
    </div>
  );
}
