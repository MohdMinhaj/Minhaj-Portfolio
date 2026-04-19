import styles from './Projects.module.css'

import tic from '../assets/projects/Tic.png'
import todo from '../assets/projects/Todo.png'
import voting from '../assets/projects/Voting.png'

function Projects() {

  const projects = [
    {
      title: "Smart Voting System",
      image: voting,
      live: "https://your-voting-link.vercel.app",
    },
    {
      title: "Todo List",
      image: todo,
      live: "https://your-todo-link.vercel.app",
    },
    {
      title: "Tic Tac Toe",
      image: tic,
      live: "https://your-tic-link.vercel.app",
    },
  ];

  return (
    <div className={styles.projects}>

      <h1 className={styles.title}>My Projects</h1>

      <div className={styles.container}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>

            <img src={project.image} alt={project.title} />

            {/* 👇 NAME BELOW IMAGE */}
            <h2 className={styles.projectName}>{project.title}</h2>

            {/* 👇 HOVER BUTTON */}
            <div className={styles.overlay}>
              <a href={project.live} target="_blank">
                <button>Live Demo 🚀</button>
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects