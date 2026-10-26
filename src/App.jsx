const profile = {
  name: "Your Name",
  title: "Web Developer",
  about:
    "Write 2 to 3 sentences about yourself, what you do, and what you are looking for.",
  skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
  projects: [
    { name: "Project One", description: "What it does.", link: "https://example.com" },
    { name: "Project Two", description: "What it does.", link: "https://example.com" },
  ],
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};

export default function App() {
  return (
    <>
      <header className="hero">
        <h1>{profile.name}</h1>
        <p className="subtitle">{profile.title}</p>
        <a className="btn" href={`mailto:${profile.email}`}>Contact me</a>
      </header>

      <main>
        <section>
          <h2>About</h2>
          <p>{profile.about}</p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul className="tags">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <div className="grid">
            {profile.projects.map((p) => (
              <a key={p.name} className="card" href={p.link} target="_blank" rel="noopener noreferrer">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {" · "}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}