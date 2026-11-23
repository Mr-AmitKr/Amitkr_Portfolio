import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,

  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,

  containerClassName = "",
  textClassName = "",

  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);

  /* ===============================
     SPLIT TEXT INTO WORDS
  =============================== */

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";

    return text.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) {
        return word;
      }

      return (
        <span
          className="inline-block word"
          key={index}
        >
          {word}
        </span>
      );
    });
  }, [children]);

  /* ===============================
     GSAP SCROLL ANIMATION
  =============================== */

  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    const scroller =
      scrollContainerRef?.current || window;

    const ctx = gsap.context(() => {

      /* ===============================
         ROTATION
      =============================== */

      gsap.fromTo(
        el,
        {
          transformOrigin: "0% 50%",
          rotate: baseRotation,
        },
        {
          rotate: 0,
          ease: "none",

          scrollTrigger: {
            trigger: el,
            scroller,

            start: "top bottom",
            end: rotationEnd,

            scrub: true,
          },
        }
      );


      /* ===============================
         WORD ELEMENTS
      =============================== */

      const wordElements =
        el.querySelectorAll(".word");

      if (!wordElements.length) return;


      /* ===============================
         OPACITY
      =============================== */

      gsap.fromTo(
        wordElements,
        {
          opacity: baseOpacity,
          willChange: "opacity",
        },
        {
          opacity: 1,

          ease: "none",

          stagger: 0.05,

          scrollTrigger: {
            trigger: el,
            scroller,

            start: "top bottom-=20%",
            end: wordAnimationEnd,

            scrub: true,
          },
        }
      );


      /* ===============================
         BLUR
      =============================== */

      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          {
            filter: `blur(${blurStrength}px)`,
          },
          {
            filter: "blur(0px)",

            ease: "none",

            stagger: 0.05,

            scrollTrigger: {
              trigger: el,
              scroller,

              start: "top bottom-=20%",
              end: wordAnimationEnd,

              scrub: true,
            },
          }
        );
      }

    }, containerRef);

    return () => {
      ctx.revert();
    };

  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);


  /* ===============================
     RENDER
  =============================== */

  return (
    <div
      ref={containerRef}
      className={`m-0 p-0 ${containerClassName}`}
    >
      <div
        className={`
          m-0
          p-0

          text-[clamp(1.6rem,4vw,3rem)]
          leading-0

          font-semibold

          ${textClassName}
        `}
      >
        {splitText}
      </div>
    </div>
  );
};

export default ScrollReveal;