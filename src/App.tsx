export default function PortfolioHome() {
  const projects = [
    {
      title: "Assignment Manager",
      description:
        "A full stack assignment management platform featuring authentication, dashboard functionality, and organized task handling for students and faculty.",
      tech: ["React", "Django", "SQLite"],
      image: "/assignment-manager.png",
      live: "https://assignment-management-portal.netlify.app/",
      github: "https://github.com/koayush1310/assignment-manager",
    },
    {
      title: "Student Helper",
      description:
        "A student-focused resource platform providing categorized academic materials with admin-controlled content management and responsive frontend design.",
      tech: ["React", "JavaScript", "CSS", "Vercel"],
      image: "/student-helper.png",
      live: "https://students-helper.vercel.app/",
      github: "https://github.com/koayush1310/student-helper",
    },
    {
      title: "Task Manager",
      description:
        "A full stack task management application with secure authentication, CRUD operations, and organized workflow management features.",
      tech: ["React", "Django", "SQLite"],
      image: "/task-manager.png",
      live: "https://ayush-task-manager-dashboard.vercel.app/",
      github: "https://github.com/koayush1310",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDb",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Vercel",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur z-50">
        <h1 className="text-2xl font-bold tracking-wide">Ayush Konchada</h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 md:px-20 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 text-sm mb-4 tracking-widest uppercase">
            Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Ayush</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-6 font-medium">
            Full Stack Developer | AI-Powered Web Applications
          </h2>

          <p className="text-gray-400 text-lg mt-8 max-w-3xl leading-8">
            I build modern full stack web applications using React, Node.js, and scalable backend technologies.
            Passionate about creating practical products and exploring AI-powered solutions for real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-2xl font-medium shadow-lg">
              View Projects
            </a>

            <a href="/Ayush_Konchada_Resume.pdf" download className="border border-white/20 hover:border-white transition px-6 py-3 rounded-2xl font-medium">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-20 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">About Me</h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-gray-300 leading-8 text-lg">
            I am a Computer Science and Engineering student focused on full stack development and modern backend technologies. I enjoy building scalable web applications, working with APIs, databases, and creating practical solutions through clean and efficient development.
            Currently, I am expanding my skills in backend architecture, PostgreSQL, deployment workflows, and AI-powered application development.
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 md:px-20 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-8 md:px-20 py-24 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-14">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:-translate-y-2 transition duration-300"
              >
                <img src={project.image} alt={project.title} className="h-44 w-full object-cover rounded-2xl mb-6 hover:scale-105 transition duration-300" />

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-sm transition">
                    Live Demo
                  </a>

                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:border-white px-4 py-2 rounded-xl text-sm transition">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-8 md:px-20 py-24 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <p className="text-gray-400 text-lg mb-10 leading-8">
            Open to internships, collaborative projects, and opportunities related to full stack development and modern web technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/ayush-konchada-008721310" target="_blank" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl transition">
              LinkedIn
            </a>

            <a href="https://github.com/koayush1310" target="_blank" className="border border-white/20 hover:border-white px-6 py-3 rounded-2xl transition">
              GitHub
            </a>

            <a href="mailto:konchadaayush123@gmail.com" className="border border-white/20 hover:border-white px-6 py-3 rounded-2xl transition">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Ayush. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}