// @ts-ignore
window.workGrading = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500";
// @ts-ignore
window.WorkGrading = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500";
// @ts-ignore
window.CinematicVideosVideo = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-filmmaker.jpg";
import workCinematic from "@/assets/work-cinematic.jpg";
import cinematicVideos from "@/assets/cinematic-videos.jpg";
import workBrand from "@/assets/work-brand.jpg";
import brandFilms from "@/assets/brand-films.jpg";
import brandFilmsVideo from "@/assets/brand-films.mp4";
import workArchitecture from "@/assets/work-architecture.jpg";
import workPortrait from "@/assets/work-portrait.jpg";
import lightGeo1 from "@/assets/light-geometry-1.jpg";
import lightGeo2 from "@/assets/light-geometry-2.jpg";
import lightGeo3 from "@/assets/light-geometry-3.jpg";
import lightGeo4 from "@/assets/light-geometry-4.jpg";
import lessence1 from "@/assets/lessence-1.jpg";
import lessence2 from "@/assets/lessence-2.jpg";
import lessence3 from "@/assets/lessence-3.jpg";
import chroma1 from "@/assets/chroma-1.jpg";
import chroma2 from "@/assets/chroma-2.jpg";
import chroma3 from "@/assets/chroma-3.jpg";
import aperture1 from "@/assets/aperture-1.jpg";
import aperture2 from "@/assets/aperture-2.jpg";
import aperture3 from "@/assets/aperture-3.jpg";
import aperture4 from "@/assets/aperture-4.jpg";
export const WorkGrading = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500";
export const workGrading = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500";
export const CinematicVideosVideo = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500";
export const cinematicVideosVideo = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500";
/* ───────────────────────── Nav ───────────────────────── */
const Nav = () => {
  if (typeof window !== 'undefined') {
  // @ts-ignore
  window.workGrading = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500";
  // @ts-ignore
  window.WorkGrading = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500";
  // @ts-ignore
  window.cinematicVideosVideo = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500";
  // @ts-ignore
  window.CinematicVideosVideo = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500";
}
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-[1600px] px-6 md:px-10 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "glass-dark rounded-full py-2 px-4 md:px-6 max-w-[1100px]" : ""
        }`}
      >
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <span className={`font-display text-xl tracking-tight ${scrolled ? "text-seasalt" : "text-eerie"}`}>
              CLAKER
            </span>
            <span className="absolute -right-2 top-0 w-1.5 h-1.5 rounded-full bg-cadet blink" />
          </div>
        </a>
        <nav className="flex items-center gap-4 md:gap-10 font-mono-tag text-[10px] md:text-[11px] uppercase">
          {[
            ["Work", "#work"],
            ["Services", "#services"],
            ["Process", "#process"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`transition-colors hover:text-cadet ${scrolled ? "text-seasalt/80" : "text-eerie/80"}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center gap-2 font-mono-tag text-[11px] uppercase px-4 py-2 rounded-full border transition-all ${
            scrolled
              ? "border-seasalt/30 text-seasalt hover:bg-seasalt hover:text-eerie"
              : "border-eerie/30 text-eerie hover:bg-eerie hover:text-seasalt"
          }`}
        >
          Book a call
          <span className="w-1 h-1 rounded-full bg-current" />
        </a>
      </div>
    </header>
  );
};

/* ───────────────────────── Hero ───────────────────────── */
const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-eerie-deep">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Filmmaker portrait"
          width={1080}
          height={1920}
          className="absolute right-0 top-0 h-full w-full md:w-[55%] object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-eerie-deep via-eerie-deep/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-eerie-deep via-transparent to-eerie-deep/40" />
        <div className="absolute inset-0 vignette pointer-events-none" />
      </motion.div>

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[6vh] bg-eerie-deep z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[6vh] bg-eerie-deep z-10" />

      {/* Frame markers — corner crop marks */}
      <div className="absolute top-[8vh] left-6 md:left-10 z-20 font-mono-tag text-[10px] text-seasalt/50 uppercase">
        Roll 04 · Take 17
      </div>
      <div className="absolute top-[8vh] right-6 md:right-10 z-20 font-mono-tag text-[10px] text-seasalt/50 uppercase flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" /> REC · 23.976 fps
      </div>

      <div className="relative z-20 mx-auto max-w-[1600px] px-6 md:px-10 min-h-screen flex flex-col justify-center pt-24 pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mono-tag text-[11px] uppercase text-cadet mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-cadet" />
          A Director's Cut · MMXXV
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-display text-seasalt text-[16vw] md:text-[12vw] leading-[0.85] tracking-[-0.04em] text-balance"
        >
          CLAKER
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-5 font-serif-edit text-lg md:text-xl text-seasalt/80 leading-relaxed">
            Allaoui Mohammed Abdellah — known as <span className="italic">Claker</span> — a filmmaker and
            photographer specializing in monochrome storytelling and brand films. With four years of content
            creation and three years in professional filmmaking, I combine a cinematic vision with precision
            color grading to deliver high-impact visual narratives.
          </p>
          <div className="md:col-span-3 md:col-start-9 flex flex-col gap-2 font-mono-tag text-[11px] uppercase text-seasalt/60">
            <div className="flex justify-between border-b border-seasalt/15 pb-2">
              <span>Lat</span><span>33.5731° N</span>
            </div>
            <div className="flex justify-between border-b border-seasalt/15 pb-2">
              <span>Lng</span><span>7.5898° W</span>
            </div>
            <div className="flex justify-between">
              <span>Films</span><span>—  68 / since '19</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 font-mono-tag text-[10px] uppercase text-seasalt/50">
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-seasalt/40"
        />
      </div>
    </section>
  );
};

/* ───────────────────────── Marquee ───────────────────────── */
const Marquee = () => {
  const items = ["Cinematic Films", "·", "Brand Stories", "·", "Color Grading", "·", "Direction", "·", "Photography", "·"];
  return (
    <div className="relative bg-eerie-deep border-y border-seasalt/10 py-6 overflow-hidden">
      <div className="flex scroll-marquee whitespace-nowrap gap-12">
        {[...Array(4)].flatMap((_, i) =>
          items.map((it, j) => (
            <span
              key={`${i}-${j}`}
              className="font-display text-seasalt text-3xl md:text-5xl tracking-tight"
            >
              {it === "·" ? <span className="text-cadet">·</span> : it}
            </span>
          ))
        )}
      </div>
    </div>
  );
};

/* ───────────────────────── Work Section ───────────────────────── */
type Work = {
  num: string;
  title: string;
  category: string;
  year: string;
  client: string;
  img: string;
  size: "lg" | "md" | "sm";
  gallery?: string[];
};

const works: Work[] = [
  { num: "02", title: "Youth Project", category: "Brand Film", year: "2026", client: "yacine medjahed", img: lessence1, size: "md", gallery: [lessence1, lessence2, lessence3] },
  { num: "03", title: "Kamil Auto", category: "Color Grading", year: "2024", client: "Atelier Kine", img: chroma1, size: "md", gallery: [chroma1, chroma2, chroma3] },
  { num: "04", title: "Light Geometry", category: "Photography", year: "2024", client: "Architectural Digest MA", img: lightGeo1, size: "md", gallery: [lightGeo1, lightGeo2, lightGeo3, lightGeo4] },
  { num: "05", title: "Swayy", category: "Brand Film", year: "2023", client: "Lens Co.", img: aperture1, size: "md", gallery: [aperture1, aperture2, aperture3, aperture4] },
];

const WorkCard = ({ work, index, onOpen }: { work: Work; index: number; onOpen: (w: Work) => void }) => {
  const hasGallery = !!work.gallery?.length;
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: index * 0.05, ease: [0.65, 0, 0.35, 1] }}
      className={`group relative overflow-hidden bg-eerie-deep ${
        work.size === "lg" ? "md:col-span-12 aspect-[21/9]" : "md:col-span-6 aspect-[4/5]"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-eerie-deep via-eerie to-eerie-deep" />
      {work.gallery ? (
        <div className={`absolute inset-0 grid gap-px ${work.gallery.length === 3 ? "grid-cols-2 grid-rows-2" : "grid-cols-2 grid-rows-2"}`}>
          {work.gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${work.title} ${i + 1}`}
              loading="lazy"
              className={`w-full h-full object-cover ${work.gallery!.length === 3 && i === 0 ? "row-span-2" : ""}`}
            />
          ))}
        </div>
      ) : (
        <img src={work.img} alt={work.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-0" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-eerie-deep/95 via-eerie-deep/30 to-eerie-deep/10" />

      {/* Top corner tag */}
      <div className="absolute top-5 left-5 right-5 flex justify-between items-start font-mono-tag text-[10px] uppercase text-seasalt/70">
        <span>// {work.num}</span>
        <span>{work.year}</span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono-tag text-[10px] uppercase text-cadet mb-3 tracking-widest">
              {work.category}
            </p>
            <h3 className="font-display text-seasalt text-3xl md:text-5xl tracking-tight leading-none">
              {work.title}
            </h3>
            <p className="font-serif-edit italic text-seasalt/60 text-sm mt-3">
              for {work.client}
            </p>
          </div>
          <button
            type="button"
            onClick={() => hasGallery && onOpen(work)}
            aria-label={hasGallery ? `View ${work.title} gallery` : work.title}
            disabled={!hasGallery}
            className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-seasalt/30 text-seasalt transition-all duration-500 ${
              hasGallery
                ? "md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 hover:bg-seasalt hover:text-eerie cursor-pointer"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
        </div>
      </div>
    </motion.article>
  );
};

/* ───────────────────────── Lightbox ───────────────────────── */
const Lightbox = ({ work, onClose }: { work: Work | null; onClose: () => void }) => {
  const [i, setI] = useState(0);
  useEffect(() => { setI(0); }, [work]);
  useEffect(() => {
    if (!work) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((p) => (p + 1) % (work.gallery!.length));
      if (e.key === "ArrowLeft") setI((p) => (p - 1 + work.gallery!.length) % work.gallery!.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [work, onClose]);

  return (
    <AnimatePresence>
      {work && work.gallery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-eerie-deep/95 backdrop-blur-md flex flex-col"
          onClick={onClose}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 md:px-10 py-5 font-mono-tag text-[10px] uppercase text-seasalt/70">
            <span>// {work.num} · {work.title}</span>
            <span>{i + 1} / {work.gallery.length}</span>
            <button
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="w-10 h-10 rounded-full border border-seasalt/30 text-seasalt flex items-center justify-center hover:bg-seasalt hover:text-eerie transition"
              aria-label="Close"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.4"/></svg>
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 relative flex items-center justify-center px-4 md:px-16 pb-6" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence mode="wait">
              <motion.img
                key={i}
                src={work.gallery[i]}
                alt={`${work.title} ${i + 1}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="max-h-full max-w-full object-contain"
              />
            </AnimatePresence>

            <button
              onClick={() => setI((p) => (p - 1 + work.gallery!.length) % work.gallery!.length)}
              aria-label="Previous"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-seasalt/30 text-seasalt flex items-center justify-center hover:bg-seasalt hover:text-eerie transition"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 1L3 7L9 13" stroke="currentColor" strokeWidth="1.4"/></svg>
            </button>
            <button
              onClick={() => setI((p) => (p + 1) % work.gallery!.length)}
              aria-label="Next"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-seasalt/30 text-seasalt flex items-center justify-center hover:bg-seasalt hover:text-eerie transition"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 1L11 7L5 13" stroke="currentColor" strokeWidth="1.4"/></svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const WorkSection = () => {
  const [openWork, setOpenWork] = useState<Work | null>(null);
  return (
    <section id="work" className="relative bg-seasalt py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-end">
          <div className="md:col-span-2 font-mono-tag text-[11px] uppercase text-cadet">
            ◐ 002 / Selected
          </div>
          <h2 className="md:col-span-7 font-display text-eerie text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.9]">
            Selected work,<br />
            <span className="font-serif-edit italic text-cadet">cut for the screen.</span>
          </h2>
          <p className="md:col-span-3 font-serif-edit text-eerie/70 text-base leading-relaxed">
            A small archive of recent films and stills. Each frame is a decision — light, distance, restraint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {works.map((w, i) => (
            <WorkCard key={w.num} work={w} index={i} onOpen={setOpenWork} />
          ))}
        </div>
      </div>
      <Lightbox work={openWork} onClose={() => setOpenWork(null)} />
    </section>
  );
};

/* ───────────────────────── Process ───────────────────────── */
const ProcessSection = () => {
  const steps = [
    { n: "I.", title: "Brief", body: "Listening before lensing. The story lives in your silences." },
    { n: "II.", title: "Treatment", body: "A visual document — references, shot logic, mood, rhythm." },
    { n: "III.", title: "Capture", body: "On set with a small crew. Anamorphic glass, natural light, intent." },
    { n: "IV.", title: "Grade", body: "Final color in the suite. Skin, sky, shadow — calibrated for emotion." },
  ];
  return (
    <section id="process" className="relative bg-eerie-deep text-seasalt py-24 md:py-40 overflow-hidden grain">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-end">
          <div className="md:col-span-2 font-mono-tag text-[11px] uppercase text-cadet">
            ◐ 003 / Method
          </div>
          <h2 className="md:col-span-8 font-display text-5xl md:text-7xl tracking-[-0.04em] leading-[0.9]">
            Four acts.<br />
            <span className="font-serif-edit italic text-silver">One frame at a time.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-seasalt/10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-eerie-deep p-8 md:p-10 min-h-[280px] flex flex-col"
            >
              <span className="font-serif-edit italic text-cadet text-3xl mb-auto">{s.n}</span>
              <h3 className="font-display text-2xl md:text-3xl mt-12 mb-4 tracking-tight">{s.title}</h3>
              <p className="font-serif-edit text-seasalt/60 leading-relaxed text-sm">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────────────────────── Services Section ───────────────────────── */
const ServicesSection = () => {
  const services = [
    { tag: "01", title: "Cinematic Videos", body: "Short films, music videos, narrative pieces. Concept to delivery.", img: cinematicVideos, video: cinematicVideosVideo },
    { tag: "02", title: "Brand Films", body: "Stories for fashion, fragrance and architecture houses.", img: brandFilms, video: brandFilmsVideo },
    { tag: "03", title: "Color Grading", body: "Final pass color for filmmakers. DaVinci Resolve. ACES workflow.", img: WorkGrading,video: "/colorGradingVideo.mov" },
    { tag: "04", title: "Event Photography", body: "Weddings, launches, performances — captured with a cinematic eye.", img: workPortrait,video: "/event.mp4" },
    { tag: "05", title: "Social Media Content", body: "Short-form verticals built for the scroll. Crafted, not churned.", img: workBrand,video: "/social.mp4" },
  ];
  return (
    <section id="services" className="relative bg-seasalt py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-end">
          <div className="md:col-span-2 font-mono-tag text-[11px] uppercase text-cadet">
            ◐ 001 / Disciplines
          </div>
          <h2 className="md:col-span-8 font-display text-eerie text-5xl md:text-7xl tracking-[-0.04em] leading-[0.9]">
            Five lenses,<br />
            <span className="font-serif-edit italic text-cadet">one signature.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="group relative bg-eerie-deep aspect-[3/4] overflow-hidden"
            >
              {(s as any).video ? (
                <video src={(s as any).video} autoPlay muted loop playsInline poster={s.img} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" />
              ) : (
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-eerie/70 via-eerie-deep/60 to-eerie-deep/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-eerie-deep via-eerie-deep/40 to-transparent" />
              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start font-mono-tag text-[10px] uppercase text-seasalt/70">
                  <span>// {s.tag}</span>
                  <span>service</span>
                </div>
                <div>
                  <h3 className="font-display text-seasalt text-3xl md:text-4xl tracking-tight mb-4">
                    {s.title}
                  </h3>
                  <p className="font-serif-edit text-seasalt/70 text-sm leading-relaxed max-w-[28ch]">
                    {s.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───────────────────────── Contact ───────────────────────── */
const Contact = () => (
  <section id="contact" className="relative bg-eerie-deep text-seasalt py-32 md:py-48 overflow-hidden">
    <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-vignette)" }} />
    <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
      <p className="font-mono-tag text-[11px] uppercase text-cadet mb-8 flex items-center gap-3">
        <span className="h-px w-10 bg-cadet" />
        ◐ 004 / Fade in
      </p>
      <h2 className="font-display text-5xl md:text-[9vw] leading-[0.9] tracking-[-0.05em]">
        Turn your vision<br />
        <span className="text-silver">into reality.</span>
      </h2>
      <div className="mt-10">
        <a
          href="mailto:allaouimohammedabdellah@gmail.com"
          className="inline-flex items-center gap-4 font-display text-xl md:text-2xl text-seasalt border-b border-seasalt/30 pb-2 hover:border-seasalt transition-colors break-all"
        >
          allaouimohammedabdellah@gmail.com
          <svg width="20" height="20" viewBox="0 0 14 14" fill="none" className="shrink-0">
            <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </a>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-6"></div>
        <div className="md:col-span-3 md:col-start-8 font-mono-tag text-[11px] uppercase text-seasalt/60 space-y-2">
          <p className="text-cadet">Based</p>
          <p className="text-seasalt">ALGERIA · Worldwide</p>
        </div>
        <div className="md:col-span-2 font-mono-tag text-[11px] uppercase text-seasalt/60 space-y-2">
          <p className="text-cadet">Socials</p>
          <div className="flex flex-col gap-1 text-seasalt">
          <a href="#" className="hover:text-cadet transition"> (allaouimohammedabdellah)↗</a>
            <a href="#" className="hover:text-cadet transition">Instagram ↗</a>
            <a href="#" className="hover:text-cadet transition">TIK TOK ↗</a>
            <a href="#" className="hover:text-cadet transition">Youtube ↗</a>
            <a href="#" className="hover:text-cadet transition">+213 663128949 ↗</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ───────────────────────── Footer ───────────────────────── */
const Footer = () => (
  <footer className="bg-eerie-deep text-seasalt/50 border-t border-seasalt/10 py-8">
    <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono-tag text-[10px] uppercase">
      <p>© MMXXV · Allaoui Mohammed Abdellah</p>
      <p className="text-cadet">END OF REEL · 24.000 fps</p>
      <p>Designed by GRSDEV.</p>
    </div>
  </footer>
);

/* ───────────────────────── Page ───────────────────────── */
const Index = () => {
  return (
    <main className="bg-seasalt min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
