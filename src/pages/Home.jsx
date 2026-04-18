import styles from './Home.module.css'
import myPic from '../assets/mypic.png'

function Home() {
  return (
   <div className={styles.home}>

  <div className={styles.text}>
    <h1 className={styles.heading}>Hi, I'm Minhaj</h1>
    <h2>Frontend Developer</h2>

    <p>
      I build responsive and user-friendly web applications using React.
      Currently learning backend with Java to become a full-stack developer.
    </p>

  <a href="/contact"><button className={styles.btn}>Contact Me</button>
</a>  
    
    <div className={styles.socials}>
      <a href="https://github.com/yourusername" target="_blank">
       <a href=""> <i className="fa-brands fa-github"></i></a>
      </a>

      <a href="https://linkedin.com/in/yourusername" target="_blank">
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a href="https://instagram.com/yourusername" target="_blank">
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a href="mailto:youremail@gmail.com">
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
  </div>

  <div className={styles.imageSpace}>
    <img src={myPic} alt="Minhaj" />
  </div>

</div>
  )
}

export default Home