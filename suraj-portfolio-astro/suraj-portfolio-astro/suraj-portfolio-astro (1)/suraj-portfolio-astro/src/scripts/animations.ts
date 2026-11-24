import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1, .hero p, .hero .meta, .eyebrow", {
  y: 50, opacity: 0, duration: 1.1, stagger: 0.12, ease: "power3.out",
});

// Horizontal scroll (desktop only; mobile uses native swipe + snap)
const mm = gsap.matchMedia();
mm.add("(min-width: 769px)", () => {
  const wrap = document.getElementById("hwrap");
  const track = document.getElementById("htrack");
  if (!wrap || !track) return;
  const dist = () => track.scrollWidth - window.innerWidth;
  gsap.to(track, {
    x: () => -dist(),
    ease: "none",
    scrollTrigger: {
      trigger: wrap, start: "top 12%", end: () => "+=" + dist(),
      pin: true, scrub: 1, invalidateOnRefresh: true,
    },
  });
});

// Card stack: previous card scales back as the next one slides over it
const cards = gsap.utils.toArray<HTMLElement>(".card");
cards.forEach((card, i) => {
  const next = cards[i + 1];
  if (!next) return;
  gsap.to(card, {
    scale: 0.93, opacity: 0.55, ease: "none",
    scrollTrigger: { trigger: next, start: "top 85%", end: "top 20%", scrub: true },
  });
});
