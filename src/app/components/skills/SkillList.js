import Language from './Skill';
import { 
  FaReact, 
  FaNodeJs,
  FaSass,
  FaHtml5,
  FaCss3,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiAdobexd,
  SiHandlebarsdotjs,
  SiEleventy,
  SiJest,
  SiSwagger
} from 'react-icons/si';

const SkillList = () => {
  
const skills = [
  {
    name: "React",
    component: <FaReact color='#00d8ff'/>
  },
  {
    name: "NodeJS",
    component: <FaNodeJs color='#68a063'/>
  },
  {
    name: "HTML5",
    component: <FaHtml5 color='#e54c21'/>
  },
  {
    name: "Sass",
    component: <FaSass color='#ce679a'/>
  },
  {
    name: "CSS3",
    component: <FaCss3 color='#016fba'/>
  },
  {
    name: "JavaScript",
    component: <SiJavascript color='#f7e018'/>
  },
  {
    name: "Swagger",
    component: <SiSwagger color='#55803b'/>
  },
  {
    name: "Jest",
    component: <SiJest color='#bd3e15'/>
  },
  {
    name: "AdobeXD",
    component: <SiAdobexd color='#450135'/>
  },
  {
    name: "Handlebars",
    component: <SiHandlebarsdotjs color='#403225'/>
  },
  {
    name: "Eleventy",
    component: <SiEleventy color='#222222'/>
  },
]


    return (
        <ul className={`skill__list`}>
          {skills.map(skillprop => <Language skill={skillprop}/>)}
        </ul>
    );
};

export default SkillList;