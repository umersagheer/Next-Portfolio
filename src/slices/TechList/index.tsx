"use client";

import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";

gsap.registerPlugin(ScrollTrigger);
/**
 * Props for `TechList`.
 */
export type TechListProps = SliceComponentProps<Content.TechListSlice>;

/**
 * Component for "TechList" Slices.
 */
const TechList = ({ slice }: TechListProps): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(300, 100)
              : gsap.utils.random(-300, -100);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-300, -100)
              : gsap.utils.random(300, 100);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert();
  });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="wrapper overflow-hidden"
      ref={component}
    >
      <Bounded as="div">
        <Heading as="h2" size="md">
          {slice.primary.heading}
        </Heading>
      </Bounded>
      {slice.items.map(({ techimage, techname }, index) => (
        <div
          className="tech-row mb-6 flex items-center justify-center gap-4 md:gap-6 lg:gap-8"
          key={index}
          aria-label={techname || ""}
        >
          {Array.from({ length: 25 }, (_, index) => (
            <React.Fragment key={index}>
              <div
                className="flex flex-col justify-center items-center gap-2 "
                style={{
                  scale: index === 12 ? "1.3" : "1",
                  opacity: index === 12 ? "1" : "0.4",
                }}
              >
                <div className="w-10 md:w-16 aspect-square">
                  <PrismicNextImage
                    field={techimage}
                    className="avatar-image h-full w-full object-fill"
                    imgixParams={{ q: 90 }}
                  />
                </div>
                <span
                  className="font-bold"
                  style={{
                    color: index === 12 ? "#CBD5E1" : "#64748b",
                  }}
                >
                  {techname}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
