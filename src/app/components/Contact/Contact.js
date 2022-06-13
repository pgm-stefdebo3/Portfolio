import Socials from "./Socials";
import ContactForm from "./ContactForm";

const Contact = () => {

  return (
    <div id="contact-me" className="contact-container">
      <h2><span className="text--important">Contact</span> Me</h2>
      <div className="contact__flex">
        <div className="contact--left col-md"> <ContactForm/> </div>
        <div className="contact--right col-md"> <Socials/> </div>
      </div>
    </div>
  );
}

export default Contact;