"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { usePageContent } from "@/lib/content/context";

type Banner = {
  eyebrow: string;
  title: string;
  cta: string;
  href: string;
  image: string;
  imagePosition: string;
};

function BannerCard({
  banner,
  index,
  total,
  scrollYProgress,
}: {
  banner: Banner;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const nextStart = (index + 1) / total;

  const scale = useTransform(scrollYProgress, [start, nextStart], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [start, nextStart], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [start, nextStart], [0, 80]);
  const y = useTransform(scrollYProgress, [start - 0.2, start], ["100%", "0%"]);

  const isLast = index === total - 1;

  return (
    <motion.div
      style={{
        scale: isLast ? 1 : scale,
        borderRadius: isLast ? 0 : borderRadius,
        opacity,
        y: index === 0 ? 0 : y,
        zIndex: index,
      }}
      className="absolute inset-0 h-full w-full origin-top overflow-hidden shadow-2xl"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={banner.image}
          alt={banner.title}
          fill
          className={`object-cover ${banner.imagePosition}`}
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-start justify-end p-6 pb-20 md:p-24 md:pb-32">
        <span className="mb-6 block text-xs font-bold uppercase tracking-[0.4em] text-[#f97316]">
          {banner.eyebrow}
        </span>
        <h2 className="max-w-4xl text-3xl font-medium leading-tight text-white drop-shadow-2xl sm:text-4xl md:text-7xl">
          {banner.title}
        </h2>
        <Link
          href={banner.href}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-[#1e3a8a] shadow-2xl transition-colors hover:bg-[#ea580c] hover:text-white"
        >
          {banner.cta}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function StackedVisuals() {
  const container = useRef(null);
  const { t } = useLanguage();
  const c = usePageContent("home");
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const banners: Banner[] = [
    {
      eyebrow: c.text("bannerBessEyebrow"),
      title: t.banners.bessTitle,
      cta: t.common.exploreProducts,
      href: "/bess",
      image: c.text("bannerBessImage"),
      imagePosition: "object-center",
    },
    {
      eyebrow: c.text("bannerHeatPumpEyebrow"),
      title: t.banners.heatPumpTitle,
      cta: t.common.exploreProducts,
      href: "/isi-pompasi",
      image: c.text("bannerHeatPumpImage"),
      imagePosition: "object-center",
    },
  ];

  return (
    <section ref={container} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#f8fafc]">
        {banners.map((banner, i) => (
          <BannerCard
            key={banner.href}
            banner={banner}
            index={i}
            total={banners.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
