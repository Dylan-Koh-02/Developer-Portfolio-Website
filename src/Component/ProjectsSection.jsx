import { ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

const projects = [
  {
    id: 1,
    title: "AI-based Automatic Myocardial Infarction Detection System",
    description: "",
    image: "/Projects/FYP/FYP_Result.jpg",
    tags: [
      "Python",
      "PyTorch",
      "LSTM",
      "GRU",
      "1D-CNN",
      "Transformer",
      "Signal Processing",
      "ECG",
      "Performance Tuning",
      "Numpy",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Hotel Data Analysis Project",
    description: "",
    image: "/Projects/DataScience/DS_Result.png",
    tags: [
      "Python",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Exploratory Data Analysis",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AWS-based Smart Campus Monitoring System",
    description: "",
    image: "/Projects/AWS/Architecture.png",
    tags: [
      "AWS(Amazon Web Service)",
      "S3",
      "Rekognition",
      "IoT core",
      "Serverless Lambda",
      "Quicksight",
      "Athena",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Developer Portfolio",
    description: "",
    image: "/Projects/Web/Developer_Portfolio.png",
    tags: ["HTML/CSS", "React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully crafted with
          attention to detail, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-68 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full border-2 bg-primary/15 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <ExternalLink size={20} />{" "}
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <SiGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Dylan-Koh-02">Check my Github <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>
  );
};
