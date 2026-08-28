import type { SlideCard } from "@/data/types";

export function HeardSlide({
  size = "lg",
  slides,
  wash,
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
  wash?: string;
}) {
  return (
    <div className="leave leave-deck">
      {wash ? (
        <div className="leave-wash" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={wash} alt="" />
        </div>
      ) : null}
      <header className="leave-deck-top">
        <strong>Sample customer brief</strong>
        <span>Draft for review</span>
      </header>
      <div className={`deck-slides size-${size}`}>
        {slides.map((slide) => (
          <article
            key={`${slide.n}-${slide.title}`}
            className={`deck-tile voice-${slide.voice || "us"}`}
          >
            <div className="deck-tile-bar">
              <span className="deck-kicker">{slide.kicker || "Sample note"}</span>
              <span className="deck-n">{String(slide.n).padStart(2, "0")}</span>
            </div>
            <h3 className="deck-tile-title">{slide.title}</h3>
            <p className="deck-map">{slide.body}</p>
            <footer className="deck-tile-foot">
              <span>{slide.voice === "them" ? "Account input" : "Agent output"}</span>
              <span>Not sent</span>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
