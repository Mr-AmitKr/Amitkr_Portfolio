import Button from "../../Button/Button";
import { FiArrowRight } from "react-icons/fi";
import { CiSaveDown1 } from "react-icons/ci";

const Projects = () => {
  const sectionLabel =
    "text-xs sm:text-sm md:text-base font-extralight tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] text-zinc-400";

  const sectionLabel2 =
    "text-xs sm:text-sm font-extralight tracking-[2px] sm:tracking-[3px] text-zinc-400";

  const entryDescription =
    "text-sm sm:text-base leading-6 sm:leading-7 font-light tracking-[0.3px] sm:tracking-[0.5px] text-zinc-400 mt-3 sm:mt-4";

  const entrySubtitle =
    "text-sm sm:text-base font-bold tracking-[0.5px] sm:tracking-[1px] text-zinc-300 mt-2";

  const entryTitle =
    "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[0.5px] sm:tracking-[1px] text-zinc-300 mt-2";

  const cornerStyle = {
    position: "absolute",
    width: "22px",
    height: "22px",
    borderColor: "#71717a",
    borderStyle: "solid",
    borderWidth: 0,
    zIndex: 2,
    pointerEvents: "none",
  };

  const ProjectImage = ({ src, alt }) => (
    <div className="relative w-full min-w-0">
      <span
        style={{
          ...cornerStyle,
          top: "-8px",
          left: "-8px",
          borderTopWidth: "2px",
          borderLeftWidth: "2px",
        }}
      />

      <span
        style={{
          ...cornerStyle,
          top: "-8px",
          right: "-8px",
          borderTopWidth: "2px",
          borderRightWidth: "2px",
        }}
      />

      <span
        style={{
          ...cornerStyle,
          bottom: "-8px",
          left: "-8px",
          borderBottomWidth: "2px",
          borderLeftWidth: "2px",
        }}
      />

      <span
        style={{
          ...cornerStyle,
          bottom: "-8px",
          right: "-8px",
          borderBottomWidth: "2px",
          borderRightWidth: "2px",
        }}
      />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full aspect-video sm:aspect-[16/10] lg:aspect-[5/4] object-cover rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300"
      />
    </div>
  );

  const ProjectDetails = ({ role, platform, year, outcome }) => {
    const details = [
      { label: "ROLE", value: role },
      { label: "PLATFORM", value: platform },
      { label: "YEAR", value: year },
      { label: "OUTCOME", value: outcome },
    ];

    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8 mt-2">
        {details.map((item) => (
          <div key={item.label} className="min-w-0">
            <p className={sectionLabel2}>{item.label}</p>
            <p className={entrySubtitle}>{item.value}</p>
          </div>
        ))}
      </div>
    );
  };

  const projects = [
    {
      number: "P.01",
      title: "Netflix Clone",
      image: "src/images/NetFlixScreenshot.png",
      alt: "Netflix Clone project screenshot",
      description:
        "Developed a responsive Netflix Clone featuring movie browsing, dynamic content sections, modern UI, and an immersive streaming-inspired user experience.",
      role: "FULL-STACK DEVELOPER",
      platform: "WEB APPLICATION",
      year: "2026",
      outcome: "+85% task completion",
    },
    {
      number: "P.02",
      title: "MDMS_AMI (Meter Management System)",
      image: "src/images/MDMS_Screensshot.png",
      alt: "MDMS AMI dashboard screenshot",
      description:
        "Developed an MDMS dashboard for smart meter management, configuration, monitoring, and data collection.",
      role: "FULL-STACK DEVELOPER",
      platform: "WEB APPLICATION",
      year: "2026",
      outcome: "+75% task completion",
    },
  ];

  return (
    <section id="projects" className="w-full overflow-hidden">

      {/* Projects Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="py-16 sm:py-20 md:py-24 lg:py-28">

          <p className={sectionLabel}>02 - PROJECTS</p>

          <h1 className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            text-zinc-300
            leading-tight
            mt-5 sm:mt-6
          ">
            Selected Works <br className="hidden sm:block" />
            and Projects
          </h1>

          <p className={entryDescription}>
            Four projects that show how I think: start with people,
            prototype early, measure honestly, and polish until it feels
            effortless.
          </p>

        </div>
      </div>

      {/* Project Entries */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-16 sm:gap-20 lg:gap-28">

        {projects.map((project) => (
          <div
            key={project.number}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center"
          >

            {/* Project Image */}
            <ProjectImage
              src={project.image}
              alt={project.alt}
            />

            {/* Project Information */}
            <div className="flex flex-col gap-6 sm:gap-8 min-w-0">

              <div className="border-b border-zinc-700 pb-5 sm:pb-6">

                <h3 className={sectionLabel}>
                  {project.number} - {project.year}
                </h3>

                <h4 className={entryTitle}>
                  {project.title}
                </h4>

                <p className={entryDescription}>
                  {project.description}
                </p>

              </div>

              {/* Project Details */}
              <ProjectDetails
                role={project.role}
                platform={project.platform}
                year={project.year}
                outcome={project.outcome}
              />

            </div>
          </div>
        ))}

      </div>

      {/* Action Buttons */}
      <div className="
        max-w-7xl mx-auto
        px-5 sm:px-8 lg:px-12
        mt-16 sm:mt-20 lg:mt-24
        mb-10 sm:mb-12
        flex flex-col sm:flex-row
        gap-4 sm:gap-6
        justify-center
        border-b border-zinc-700
        pb-6 sm:pb-8
      ">

        <Button
          down={<CiSaveDown1 />}
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Amit_Kumar_CV.pdf";
            link.download = "Amit_Kumar_CV.pdf";
            link.click();
          }}
          className="
            w-full sm:w-auto
            text-[13px] sm:text-[14px]
            font-medium font-sans uppercase
            tracking-wider
            flex items-center justify-center
            whitespace-nowrap
          "
        >
          Download CV
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
            text-[13px] sm:text-[14px]
            font-medium font-sans uppercase
            tracking-wider
            flex items-center justify-center
            whitespace-nowrap
          "
        >
          Work With Me
        </Button>

      </div>

    </section>
  );
};

export default Projects;
