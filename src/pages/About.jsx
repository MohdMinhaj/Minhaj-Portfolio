import styles from './About.module.css'

function About() {
  return (
    <div className={styles.about}>

      <div className={styles.left}>
        <h1 className={styles.title}>About Me</h1>

        <p>
  I’m Minhaj, a Frontend Developer who enjoys building clean,
  responsive and user-friendly web applications.
</p>

<p>
  I specialize in creating modern UI using React, JavaScript,
  and CSS, focusing on performance and smooth user experience.
</p>

<p>
  I have worked on multiple projects where I implemented real-world
  features and improved my problem-solving skills.
</p>

<p>
  Currently, I’m learning backend development with Java to expand
  my knowledge and become a full-stack developer.
</p>

<p>
  I’m passionate about continuous learning and improving my skills
  by building projects and exploring new technologies.
</p>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <h3>⚡ Skills</h3>
          <p>HTML, CSS, JavaScript, React, Redux</p>
        </div>

        <div className={styles.card}>
          <h3>🎯 Focus</h3>
          <p>Frontend Development & UI Design</p>
        </div>

        <div className={styles.card}>
          <h3>🚀 Goal</h3>
          <p>Full Stack Developer</p>
        </div>
      </div>

    </div>
  )
}

export default About