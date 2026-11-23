import Button from "../../Button/Button";
import { FiArrowRight } from "react-icons/fi";
import ScrollReveal from "@/Components/ScrollReveal";

const HomePage = () => {
  return (
    <section
      id="home"
      className="
        w-full min-h-screen
        flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-8 lg:px-12
        pt-24 sm:pt-28 md:pt-32
        pb-16 sm:pb-20
        overflow-hidden
      "
    >

      {/* Badge */}
      <div
        className="
          border border-gray-800
          px-3 sm:px-4
          py-2
          rounded-[5px]
          mb-6 sm:mb-8
          max-w-full
         
        "
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(215, 215, 255, 0),
              rgba(215, 215, 255, 0.08)
            )
          `,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <h1
          className="
            text-zinc-400
            text-[9px] xs:text-[10px] sm:text-xs
            font-light
            tracking-[0.15em] sm:tracking-[0.18em]
            text-center
            whitespace-nowrap
          "
        >
          CODER & GREAT PROBLEM SOLVER
        </h1>
      </div>

      {/* Main Heading */}
      <div className="w-full max-w-7xl flex flex-col items-center">

        {/* First Line */}
        <div className="max-w-full text-center">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={4}
            textClassName="
              text-zinc-300
              font-bold font-serif italic
              text-[clamp(2.5rem,8vw,8rem)]
              leading-[1.05]
              tracking-tight
            "
          >
            Make what is
          </ScrollReveal>
        </div>

        {/* Second Line */}
        <div
          className="
            w-full max-w-full
            flex flex-wrap
            items-center justify-center
            gap-x-2 sm:gap-x-4 md:gap-x-6
            text-center
          "
        >
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={4}
            textClassName="
              text-zinc-300
              font-bold font-serif
              text-[clamp(2.5rem,8vw,8rem)]
              leading-[1.05]
              tracking-tight
            "
          >
            true
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={4}
            textClassName="
              text-zinc-300
              font-light italic font-serif
              text-[clamp(1.8rem,6.5vw,7rem)]
              leading-[1.1]
              tracking-tight
            "
            style={{
              fontStyle: "italic",
            }}
          >
            & unmistakable
          </ScrollReveal>
        </div>

      </div>

      {/* Description */}
      <p
        className="
          w-full max-w-xs
          sm:max-w-xl md:max-w-2xl lg:max-w-3xl
          text-zinc-300
          font-light font-serif
          tracking-wide
          text-center
          text-sm sm:text-base md:text-lg lg:text-xl
          leading-7 sm:leading-8
          mt-7 sm:mt-8 md:mt-10
          px-1
        "
      >
        I help retailers, startups, and independent businesses find the idea
        at the centre of their work, then shape it across identity, website,
        and experience — until its value can be recognised and felt.
      </p>

      {/* Action Buttons */}
      <div
        className="
          w-full sm:w-auto
          flex flex-col sm:flex-row
          items-center justify-center
          gap-3 sm:gap-4
          mt-7 sm:mt-8 md:mt-10
        "
      >
        <Button
          icon={<FiArrowRight />}
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className="
            w-full sm:w-auto
            text-[12px] sm:text-[13px]
            font-medium font-sans uppercase
            tracking-wider
            whitespace-nowrap
            flex items-center justify-center
          "
        >
          Explore My Work
        </Button>

        <Button
          icon={<FiArrowRight />}
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className="
            w-full sm:w-auto
            text-[12px] sm:text-[13px]
            font-medium font-sans uppercase
            tracking-wider
            whitespace-nowrap
            flex items-center justify-center
          "
        >
          Work With Me
        </Button>
      </div>

    </section>
  );
};

export default HomePage;
