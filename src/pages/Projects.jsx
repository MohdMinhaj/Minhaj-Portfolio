import styles from './Projects.module.css'

import tic from '../assets/projects/Tic.png'
import todo from '../assets/projects/Todo.png'
import voting from '../assets/projects/Voting.png'

function Projects() {

  const projects = [
    {
      title: "Smart Voting System",
      image: voting,
      live: "https://smart-voting-system-pi.vercel.app/",
    },
    {
      title: "Todo List",
      image: todo,
      live: "https://todo-list-theta-azure-95.vercel.app/",
    },
    {
      title: "Tic Tac Toe",
      image: tic,
      live: "https://tic-tac-toe-puce-two.vercel.app/",
    },
  ];

  return (
    <div className={styles.projects}>

      <h1 className={styles.title}>My Projects</h1>

      <div className={styles.container}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>

            <img src={project.image} alt={project.title} />

            <h2 className={styles.projectName}>{project.title}</h2>

         
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