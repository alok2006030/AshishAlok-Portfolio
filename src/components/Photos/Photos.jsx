import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import "./Photos.css";
import { themeContext } from "../../Context";
import { FaCamera, FaCode, FaExpand, FaTh, FaImages } from "react-icons/fa";

import p1 from "../../img/1.jpeg";
import p2 from "../../img/2.jpeg";
import p3 from "../../img/3.jpeg";
import p4 from "../../img/4.jpeg";
import p5 from "../../img/5.jpeg";
import p6 from "../../img/6.jpeg";
import p7 from "../../img/7.jpeg";
import p8 from "../../img/8.jpeg";
import p9 from "../../img/9.jpeg";
import p10 from "../../img/10.jpeg";
import p11 from "../../img/11.jpeg";
import p12 from "../../img/12.jpeg";
import p13 from "../../img/13.jpeg";
import p14 from "../../img/14.jpeg";
import p15 from "../../img/15.jpeg";
import p16 from "../../img/16.jpeg";
import p17 from "../../img/17.jpeg";
import p18 from "../../img/18.jpeg";
import p19 from "../../img/19.jpeg";
import p20 from "../../img/20.jpeg";
import p21 from "../../img/21.jpeg";
import p22 from "../../img/22.jpeg";
import p23 from "../../img/23.jpeg";
import p24 from "../../img/24.jpeg";

const photos = [
  p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12,
  p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24,
];

const TAGS = ["travel", "devlife", "moments", "explore", "capture"];

const getMeta = (i) => ({
  file: `capture_${String(i + 1).padStart(2, "0")}.jpeg`,
  path: `~/ashish/gallery/capture_${String(i + 1).padStart(2, "0")}.jpeg`,
  tag: TAGS[i % TAGS.length],
  res: "4K · RAW",
});

const Photos = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [viewMode, setViewMode] = useState("carousel");

  const scrollToIndex = useCallback((i) => {
    const container = containerRef.current;
    const el = itemRefs.current[i];
    if (!container || !el) return;

    const offset =
      el.offsetLeft - (container.clientWidth - el.clientWidth) / 2;

    container.scrollTo({
      left: Math.max(0, offset),
      behavior: "smooth",
    });
  }, []);

  const goTo = useCallback(
    (i) => {
      const next = ((i % photos.length) + photos.length) % photos.length;
      setIndex(next);
      if (viewMode === "carousel") scrollToIndex(next);
    },
    [scrollToIndex, viewMode]
  );

  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  const openLightbox = (i) => {
    setIndex(i);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (paused || lightboxOpen || viewMode !== "carousel") return undefined;

    const id = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % photos.length;
        scrollToIndex(next);
        return next;
      });
    }, 4000);

    return () => clearInterval(id);
  }, [paused, lightboxOpen, scrollToIndex, viewMode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || viewMode !== "carousel") return undefined;

    const onScroll = () => {
      const center = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const elCenter = el.offsetLeft + el.clientWidth / 2;
        const dist = Math.abs(center - elCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      setIndex(closest);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [viewMode]);

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, index, goTo]);

  const meta = getMeta(index);

  return (
    <section
      className={`photos-section ${darkMode ? "dark" : "light"}`}
      id="photos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="photos-header">
        <p className="section-tag">{"// gallery.render()"}</p>
        <h2 className="photos-title">Visual Archive</h2>
        <p className={`photos-subtitle ${darkMode ? "" : "light"}`}>
          Life beyond the IDE — travels, moments & memories in high fidelity
        </p>
      </div>

      <div className="photos-stats glass-panel">
        <div className="stat-pill">
          <FaImages aria-hidden="true" />
          <span>
            <strong>{photos.length}</strong> captures
          </span>
        </div>
        <div className="stat-pill">
          <FaCamera aria-hidden="true" />
          <span>
            mode: <strong>{viewMode}</strong>
          </span>
        </div>
        <div className="stat-pill">
          <FaCode aria-hidden="true" />
          <span>
            index: <strong>{String(index + 1).padStart(2, "0")}</strong>
          </span>
        </div>
        <div className="photos-view-toggle">
          <button
            type="button"
            className={`view-btn ${viewMode === "carousel" ? "active" : ""}`}
            onClick={() => setViewMode("carousel")}
            aria-pressed={viewMode === "carousel"}
          >
            <FaImages aria-hidden="true" /> Slide
          </button>
          <button
            type="button"
            className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
            aria-pressed={viewMode === "grid"}
          >
            <FaTh aria-hidden="true" /> Grid
          </button>
        </div>
      </div>

      {viewMode === "carousel" ? (
        <div className="carousel-shell glass-panel">
          <div className="carousel-wrap">
            <button
              type="button"
              className="carousel-btn left"
              onClick={goPrev}
              aria-label="Previous photo"
            >
              ‹
            </button>

            <div
              className="carousel-container"
              ref={containerRef}
              role="region"
              aria-label="Photo carousel"
            >
              <div className="carousel-track">
                {photos.map((src, i) => {
                  const m = getMeta(i);
                  return (
                    <div
                      className={`carousel-item ${i === index ? "active" : ""}`}
                      key={src}
                      ref={(el) => {
                        itemRefs.current[i] = el;
                      }}
                    >
                      <div className="photo-frame">
                        <span className="frame-corner tl" aria-hidden="true" />
                        <span className="frame-corner tr" aria-hidden="true" />
                        <span className="frame-corner bl" aria-hidden="true" />
                        <span className="frame-corner br" aria-hidden="true" />
                        <button
                          type="button"
                          className="carousel-img-btn"
                          onClick={() => openLightbox(i)}
                          aria-label={`View ${m.file}, slide ${i + 1} of ${photos.length}`}
                        >
                          <img
                            src={src}
                            alt={`Gallery ${m.file}`}
                            className="carousel-img"
                            loading="lazy"
                          />
                          <span className="scanline" aria-hidden="true" />
                          {i === index && (
                            <span className="photo-overlay">
                              <span className="overlay-path">{m.path}</span>
                              <span className="overlay-meta">
                                #{m.tag} · {m.res}
                              </span>
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              className="carousel-btn right"
              onClick={goNext}
              aria-label="Next photo"
            >
              ›
            </button>
          </div>

          <div className="carousel-footer">
            <div
              className="carousel-dots"
              role="tablist"
              aria-label="Photo slides"
            >
              {photos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`carousel-dot ${i === index ? "active" : ""}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <p className="carousel-counter" aria-live="polite">
              <span className="counter-bracket">[</span>
              {String(index + 1).padStart(2, "0")} / {photos.length}
              <span className="counter-bracket">]</span>
              <span className="counter-hint">← → keys in fullscreen</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="photos-grid glass-panel">
          {photos.map((src, i) => {
            const m = getMeta(i);
            return (
              <button
                key={src}
                type="button"
                className={`grid-item ${i === index ? "selected" : ""}`}
                onClick={() => openLightbox(i)}
                aria-label={`Open ${m.file}`}
              >
                <img src={src} alt={m.file} loading="lazy" />
                <span className="grid-item-meta">
                  <span>{m.file}</span>
                  <span>#{m.tag}</span>
                </span>
              </button>
            );
          })}
        </div>
      )}

      {lightboxOpen && (
        <div
          className="photos-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="lightbox-chrome" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-titlebar">
              <span className="lb-dot red" />
              <span className="lb-dot yellow" />
              <span className="lb-dot green" />
              <span className="lightbox-filename">{meta.path}</span>
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close viewer"
              >
                ×
              </button>
            </div>
            <div className="lightbox-body">
              <button
                type="button"
                className="lightbox-nav prev"
                onClick={goPrev}
                aria-label="Previous"
              >
                ‹
              </button>
              <figure className="lightbox-figure">
                <img
                  src={photos[index]}
                  alt={meta.file}
                  className="lightbox-img"
                />
                <figcaption>
                  <FaExpand aria-hidden="true" />
                  {meta.file} · #{meta.tag} · {meta.res}
                </figcaption>
              </figure>
              <button
                type="button"
                className="lightbox-nav next"
                onClick={goNext}
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photos;
