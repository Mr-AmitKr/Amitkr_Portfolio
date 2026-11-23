import LogoLoop from "@/Components/LogoLoop";
import { SiReact, SiNextdotjs, SiMysql, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";

const techLogos = [
  {
    node: <SiReact className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />,
    title: "React",
    href: "https://react.dev",
    hoverColor: "#61dafb",
  },
  {
    node: <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />,
    title: "Next.js",
    href: "https://nextjs.org",
    hoverColor: "#ffffff",
  },
  {
    node: <IoLogoJavascript className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    hoverColor: "#f7df1e",
  },
  {
    node: <SiTailwindcss className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    hoverColor: "#38bdf8",
  },
  {
    node: <FaJava className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />,
    title: "Java",
    href: "https://www.java.com",
    hoverColor: "#f89820",
  },
  {
    node: <SiMysql className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />,
    title: "MySQL",
    href: "https://www.mysql.com",
    hoverColor: "#4479a1",
  },
  {
    node: <BiLogoPostgresql className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
    hoverColor: "#336791",
  },
  {
    node: <TiHtml5 className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    hoverColor: "#e34f26",
  },
  {
    node: <IoLogoCss3 className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    hoverColor: "#1572b6",
  },
];


const Resume = () => {
  const sectionLabel =
    "text-sm sm:text-base font-extralight tracking-[3px] sm:tracking-[4px] text-zinc-400";

  const sectionHeading =
    "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[1px] text-zinc-300";

  const entryTitle =
    "text-xl sm:text-xl font-extrabold tracking-[1px] text-zinc-300";

  const entrySubtitle =
    "text-sm sm:text-base font-light tracking-[1px] text-zinc-400 mt-2";

const entryDescription =
  "text-sm sm:text-base leading-6 sm:leading-7 font-light tracking-[0.3px] sm:tracking-[0.5px] text-zinc-400 mt-4 break-words";

  const dateStyle =
    "text-xs sm:text-sm font-light tracking-[2px] text-zinc-400";

  return (
    <section id="resume" className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Resume Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="border-b border-zinc-600">
         <div className="py-14 sm:py-20 md:py-24 lg:py-28">
            <p className={sectionLabel}>01 - RESUME</p>

            <h1
              className="
               text-3xl
    min-[400px]:text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    font-bold
    text-zinc-300
    leading-tight
    mt-6
    wrap-break-words
            "
            >
              One year of making
              <br className="hidden sm:block" /> things clearer.
            </h1>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div
          className="
          grid
  grid-cols-1
  md:grid-cols-[0.8fr_1fr]
  lg:grid-cols-[0.9fr_1fr_2fr]
  gap-6
  md:gap-8
  lg:gap-10
  py-12
  sm:py-16
  lg:py-20
  border-b border-zinc-600
        "
        >
          {/* Section Heading */}
          <div>
            <p className={sectionLabel}>01.1 - EXPERIENCE</p>

            <h2 className={`${sectionHeading} mt-3`}>Where I've worked</h2>

            <p className={entryDescription}>
              Teams I've designed with, and what changed while I was there.
            </p>
          </div>

          {/* Experience Date */}
          <div className="lg:pt-1">
            <p className={dateStyle}>JAN-2026 - PRESENT</p>
          </div>

          {/* Experience Description */}
          <div>
            <h3 className={entryTitle}>Full Stack React Developer</h3>

            <h4 className={entrySubtitle}>Nikusoft - Bihar - India</h4>

            <p className={entryDescription}>
              Worked as a Full Stack React Developer at Nikusoft, contributing
              to the development of responsive web applications using React.js,
              JavaScript, Tailwind CSS, and REST APIs. Gained hands-on
              experience in frontend development, backend integration, API
              handling, and building user-friendly interfaces.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div
          className="
 grid
  grid-cols-1
  lg:grid-cols-[0.9fr_3fr]
  gap-8
  lg:gap-10
  py-12
  sm:py-16
  lg:py-20
  border-b border-zinc-600
"
        >
          {/* Section Heading */}
          <div>
            <p className={sectionLabel}>01.2 - EDUCATION</p>

            <h2 className={`${sectionHeading} mt-3`}>Where I studied</h2>

            <p className={entryDescription}>
              Formal training, informal obsession with how people read screens.
            </p>
          </div>

          {/* Education Entries */}
          <div className="flex flex-col gap-16 lg:gap-20">
            {/* B.Tech */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-6 lg:gap-10">
              {/* Date */}
              <div>
                <p className={dateStyle}>2025 - ON GOING</p>
              </div>

              {/* Details */}
              <div>
                <h3 className={entryTitle}>B.TECH IN COMPUTER SCIENCE</h3>

                <h4 className={entrySubtitle}>
                  Netaji Subhas University - Jamshedpur - India
                </h4>

                <p className={entryDescription}>
                  Pursued a B.Tech in Computer Science at Netaji Subhas
                  University, gaining a strong foundation in programming,
                  algorithms, and software development. Developed
                  problem-solving skills and practical experience through
                  coursework and projects.
                </p>
              </div>
            </div>

            {/* Diploma */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-6 lg:gap-10">
              {/* Date */}
              <div>
                <p className={dateStyle}>JAN 2023 - AUG 2028</p>
              </div>

              {/* Details */}
              <div>
                <h3 className={entryTitle}>
                  DIPLOMA IN MECHANICAL ENGINEERING
                </h3>

                <h4 className={entrySubtitle}>
                  BHUBNESWAR ENGINEERING COLLEGE - Odisha - India
                </h4>

                <p className={entryDescription}>
                  Completed a Diploma in Mechanical Engineering at Bhubneswar
                  Engineering College, gaining a foundation in mechanical
                  principles, design, and manufacturing. Developed
                  problem-solving skills through coursework and practical
                  projects.
                </p>
              </div>
            </div>
          </div>
        </div>

      

{/* Skills Section */}
<div className="
  grid
  grid-cols-1
  min-[380px]:grid-cols-2
  gap-8
  lg:gap-10
  py-12
  sm:py-16
  lg:py-20
  border-b border-zinc-600
">
  {/* Section Heading */}
  <div>
    <p className={sectionLabel}>01.3 - SKILLS</p>

    <h2 className={`${sectionHeading} mt-3`}>
      What I bring to the table
    </h2>

    <p className={entryDescription}>
      A set of skills honed through experience, practice, and a
      commitment to continuous learning. These skills enable me
      to tackle complex challenges and deliver high-quality solutions.
    </p>
  </div>

  {/* Skills Progress Bars */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 lg:gap-x-12 lg:gap-y-10">

    {/* Skill 1 */}
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className={entryTitle}>Frontend Development</h3>
        <span className={dateStyle}>90%</span>
      </div>
      <div className="w-full h-[7px] bg-zinc-300 rounded-full overflow-hidden">
        <div className="h-full w-[90%] bg-orange-400 rounded-full" />
      </div>
    </div>

    {/* Skill 2 */}
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className={entryTitle}>UI/UX Design</h3>
        <span className={dateStyle}>88%</span>
      </div>
      <div className="w-full h-[7px] bg-zinc-300 rounded-full overflow-hidden">
        <div className="h-full w-[88%] bg-red-500 rounded-full" />
      </div>
    </div>

    {/* Skill 3 */}
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className={entryTitle}>Prototyping & Testing</h3>
        <span className={dateStyle}>95%</span>
      </div>
      <div className="w-full h-[7px] bg-zinc-300 rounded-full overflow-hidden">
        <div className="h-full w-[95%] bg-cyan-400 rounded-full" />
      </div>
    </div>

    {/* Skill 4 */}
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className={entryTitle}>Full-Stack Development</h3>
        <span className={dateStyle}>92%</span>
      </div>
      <div className="w-full h-[7px] bg-zinc-300 rounded-full overflow-hidden">
        <div className="h-full w-[92%] bg-orange-400 rounded-full" />
      </div>
    </div>

    {/* Skill 5 */}
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className={entryTitle}>AI & API Integration</h3>
        <span className={dateStyle}>75%</span>
      </div>
      <div className="w-full h-[7px] bg-zinc-300 rounded-full overflow-hidden">
        <div className="h-full w-[75%] bg-red-500 rounded-full" />
      </div>
    </div>

    {/* Skill 6 */}
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className={entryTitle}>Database Management</h3>
        <span className={dateStyle}>80%</span>
      </div>
      <div className="w-full h-[7px] bg-zinc-300 rounded-full overflow-hidden">
        <div className="h-full w-[80%] bg-cyan-400 rounded-full" />
      </div>
    </div>

  </div>
</div>


        <div
          className="
  grid
  grid-cols-1
  lg:grid-cols-[0.9fr_3fr]
  gap-8
  lg:gap-10
  py-14
  sm:py-16
  lg:py-20
  border-b border-zinc-600
"
        >
          <div>
            <p className={sectionLabel}>01.4 - TOOLKIT</p>

            <h2 className={`${sectionHeading} mt-3`}>Technologies I use</h2>

            <p className={entryDescription}>
              A toolkit sharpened on real products, real users, and real
              deadlines.
            </p>
          </div>

          <div className="w-full min-w-0 min-h-[110px] flex items-center overflow-hidden">
  <LogoLoop
    className="w-full max-w-full text-zinc-300"
    logos={techLogos}
    speed={45}
    direction="left"
    logoHeight={36}
    gap={22}
    pauseOnHover={true}
    scaleOnHover={true}
    fadeOut={false}
    fadeOutWidth={0}
    draggable={true}
    layout="line"
    bend={0}
    magnify={0}
    labels="below"
    muted={0}
    focus={0}
    tiltX={0}
    tiltY={0}
    scrollBoost={0}
    step={false}
    intro={false}
  />
</div>
         
        </div>
          
      </div>
    </section>
  );
};

export default Resume;
