import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'

const Socials = () => {
  const socialList = [{
    icon: <FaLinkedin/>,
    alt: "Linkedin Icon",
    link: "https://www.linkedin.com/in/stef-de-boeck-22a802221/"
  },{
    icon: <FaGithubSquare/>,
    alt: "Github Icon",
    link: "https://github.com/pgm-stefdebo3"
  },{
    icon: <FaInstagramSquare/>,
    alt: "Instagram Icon",
    link: "https://www.instagram.com/stef_dbk/"
  }]

  return (
    <div className="socials">
      <h2>Follow me on</h2>
      {socialList.map((social) => {
        return (
          <a href={social.link} target="_blank" rel="noreferrer">
            {social.icon}
          </a>
        )
      })}
    </div>
  );
}

export default Socials;