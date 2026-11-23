import React from "react";
import RotatingText from "@/Components/RotatingText";

const Aboutme = () => {
  return (
    <section
      id="aboutme "
      className="flex"
    >
      <div className="flex flex-col items-center justify-center">
        <img
          src="src\images\Amitkr2ndPic.png"
          alt=""
          className="w-full max-h-120 min-w-sm sm:px-6
        md:px-8
        lg:px-12
        xl:px-12 hover:scale-105"
        />
        <h1 className=" text-zinc-300 font-serif inset-1 font-bold text-4xl xs:text-5xl 
            sm:text-6xl md:text-7xl lg:text-8xl xl:text-5xl leading-[1.05] tracking-wide text-center mt-2
            
            "
        >
            Amit Kumar
        </h1>
      </div>
        <div className="flex flex-col items-center">
            <div>
              <h1 className="text-zinc-300 mb-4 text-6xl font-extrabold"
              >
              About Me
            </h1>
            </div>
              <h2 className="text-2xl text-zinc-300 font-light font-serif tracking-wide flex gap-3">
              Hey i am a Creative   <RotatingText
                              texts={[
                               "Software Developer",
                               "React Developer",
                               "Frontend Developer",
                               "Coder",
                               "Problem Solver",
                             ]}
                             mainClassName="
                             underline
                             -mt-[6px]
                             -ml-[5px]
                               px-2
                               sm:px-3
                               md:px-2
               
                               py-1
                               sm:py-1.5
                               md:py-2
               
                              
               
                               text-white
               
                               rounded-lg
               
                               text-[90px]
                               sm:text-base
                               md:text-lg
                               lg:text-xl
               
                               justify-center
               
                               max-w-full
                               overflow-hidden
                             "
                             staggerFrom="last"
                             initial={{ y: "100%" }}
                             animate={{ y: 0 }}
                             exit={{ y: "-120%" }}
                             staggerDuration={0.025}
                             splitLevelClassName="
                               overflow-hidden
                               pb-0.5
                               sm:pb-1
                             "
                             transition={{
                               type: "spring",
                               damping: 30,
                               stiffness: 400,
                             }}
                             rotationInterval={2000}
                             innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                             splitBy="characters"
                             auto
                             loop
                           /> , i grew up in Jamshedpur a city of thoughtful
              </h2><p  className="text-2xl text-zinc-300 font-light font-serif tracking-wide flex gap-3">  and hardworking person</p>
                    </div>
    </section>
  );
};

export default Aboutme;
