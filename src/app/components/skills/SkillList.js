import Language from './Skill';
import { skillsData } from '../../data';

const SkillList = () => {

    return (
        <ul className={`skill__list`}>
          {skillsData.map(skillprop => <Language skill={skillprop}/>)}
        </ul>
    );
};

export default SkillList;