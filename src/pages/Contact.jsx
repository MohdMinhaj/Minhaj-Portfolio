import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from './Contact.module.css';
import { toast, Bounce } from 'react-toastify'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bp2llwl",       
      "template_u1se7rg",      
      form.current,
      "uAsxN1u_gqI-Z8yIP"   
    )
    
    
    .then(
  () => {
    toast.success('Message sent successfully 🚀', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });

    form.current.reset();
  },
  (error) => {
    toast.error('Failed to send ❌', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });

    console.log(error);
  }
);
  };

  
  return (
    <div className={styles.contact}>

      <h1 className={styles.title}>Contact Me</h1>

      <div className={styles.container}>

       
        <div className={styles.left}>
          <h2>Let’s Connect</h2>
          <p>
            I’m open to internship opportunities and collaborations.
            Feel free to reach out!
          </p>

          <div className={styles.info}>
            <p>📧 mohmmedminhaj321@gmail.com</p>
            <p>📍Hyderabad, India</p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
          />

          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
          />

          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="5" 
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>

    </div>
  );
}

export default Contact;