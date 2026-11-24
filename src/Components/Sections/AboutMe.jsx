
import ProfileCard from "@/Components/ProfileCard";
import { useNavigate } from "react-router-dom";
import RotatingText from "@/Components/RotatingText";
import ScrollFloat from "@/Components/ScrollFloat";
import reactIcon  from "/src/assets/react.svg";


const AboutMe = () => {
  const navigate = useNavigate();

  const contactMe = () => {
    navigate("/Sections/ContactMe");
  };

  return (
    <section
      id="about"
      className="
        w-full min-h-screen
        flex flex-col lg:flex-row
        items-center justify-center
        gap-12 sm:gap-14 lg:gap-12 xl:gap-16
        px-5 sm:px-8 md:px-12 lg:px-10 xl:px-16 2xl:px-24
        py-16 sm:py-20 lg:py-20
        overflow-hidden
      "
    >

      {/* PROFILE CARD */}
      <div
        className="
          w-full lg:w-1/2
          min-w-0
          flex justify-center items-center
          shrink-0
        "
      >
        <div className="
          w-full max-w-[420px]
          flex justify-center
        ">
          <ProfileCard
            name="Amit Kumar"
            title="Software Engineer"
            handle="amitkumar"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/images/AmitkrPicc.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={contactMe}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            iconUrl={reactIcon}
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <div
        className="
          w-full lg:w-1/2
          min-w-0
          flex flex-col
          items-center lg:items-start
          text-center lg:text-left
        "
      >

        {/* Heading */}
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="
            text-zinc-300
            text-4xl sm:text-5xl md:text-6xl xl:text-7xl
            font-extrabold
            font-[Archivo,sans-serif]
            tracking-wide
            leading-tight
          "
        >
          Welcome
        </ScrollFloat>

        {/* Sub Heading */}
        <h1
          className="
            text-zinc-300
            text-xl sm:text-2xl lg:text-3xl
            leading-tight
            font-[Archivo,sans-serif]
            font-extrabold
            mt-2
          "
        >
          Let's talk About Me
        </h1>

        {/* Introduction */}
        <p
          className="
            w-full max-w-2xl
            text-zinc-400
            text-sm sm:text-base md:text-lg
            leading-7 sm:leading-8
            font-[Inter,sans-serif]
            font-light
            mt-5 sm:mt-6
            tracking-wide
            break-words
          "
        >
          I’m a full-stack web{" "}
          <span className="text-zinc-200 font-extrabold">
            [developer]
          </span>{" "}
          and freelancer who bridges the gap between sophisticated visual
          design and robust backend architecture. I enjoy building modern,
          responsive, and interactive digital experiences, drawing on a
          strong foundation in developing scalable applications and robust
          RESTful APIs.
        </p>

        {/* Rotating Text */}
        <div
          className="
            w-full min-w-0
            mt-7 sm:mt-8
            flex flex-wrap
            items-center justify-center lg:justify-start
            gap-x-3 gap-y-2
            text-zinc-300
            font-[Archivo,sans-serif]
          "
        >
          <span
            className="
              text-sm sm:text-base md:text-lg
              text-zinc-400
              font-light
              font-[Inter,sans-serif]
              tracking-wide
              underline underline-offset-4
              decoration-zinc-500 decoration-1
            "
          >
            I am a Creative
          </span>

          <div className="
            min-w-0 max-w-full
            text-2xl sm:text-3xl md:text-4xl
            font-extrabold
          ">
            <RotatingText
              className="
                font-extrabold
                font-[Archivo,sans-serif]
                text-2xl sm:text-3xl md:text-4xl
                max-w-full
              "
              texts={[
                "React Developer",
                "Frontend Developer",
                "Software Engineer",
                "Problem Solver",
              ]}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
