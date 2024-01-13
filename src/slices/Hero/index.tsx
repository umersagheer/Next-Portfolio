"use client";

import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(component, {});
    });
    return () => ctx.revert();
  }, []);

  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={
              slice.primary.first_name + " " + slice.primary.last_name
            }
          >
            <span className="block text-slate-300">
              {renderLetters(slice.primary.first_name, "first")}{" "}
            </span>
            <span className="-mt-[0.2 em] block text-slate-500">
              {renderLetters(slice.primary.last_name, "last")}{" "}
            </span>
            <span className="block bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-50 bg-clip-text text-2xl text-transparent font-bold uppercase tracking-[0.2em] opacity-100 md:text-4xl mt-4">
              {slice.primary.tag_line}
            </span>
          </h1>
        </div>
        <div className="">Shapes</div>
      </div>
    </section>
  );
};

export default Hero;
