
import { FaPhoneSquareAlt , FaMailBulk } from 'react-icons/fa'


const contactList = [{
  title: "Send me a mail",
  icon: <FaMailBulk/>,
  link: "mailto:stefdeboeck7@gmail.com",
  description: "stefdeboeck7@gmail.com"
},{
  title: "Feel free to call or text me",
  icon: <FaPhoneSquareAlt/>,
  link: "tel:0493213046",
  description: "0493213046"
}]

const ContactForm = () => {

  return (
    <div className="contact-form__container">
      <h2>Reach out!</h2>
      <div className="contact__form">
        {contactList.map((contact) => {
          return (
            <div className='contact__container'>
              <h4>{contact.title}</h4>
              <a href={contact.link}>
                <div className="contact__content">
                {contact.icon}
                <p>{contact.description}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ContactForm;