import styles from './Education.module.css'

function Education() {
  return (
    <div className={styles.education}>

      <h1 className={styles.title}><u>EDUCATION</u></h1>

      <div className={styles.grid}>

        <div className={styles.card}>
          <h3>BCA <br />(Bachelor of Computer Applications)</h3>
          <p>Gulbarga University</p>
          <span>2022 - 2025</span>
        </div>

        <div className={styles.card}>
          <h3>PUC</h3>
          <p>Mahadevamma B. Patil Institute</p>
          <span>Completed</span>
        </div>

        <div className={styles.card}>
          <h3>SSLC</h3>
          <p>Mahadevamma B. Patil CBSE Institute</p>
          <span>Completed</span>
        </div>

      </div>

    </div>
  )
}

export default Education