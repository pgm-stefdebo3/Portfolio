import Project from './Project';
import { projectDATA } from '../../data';

const ProjectList = () => {

    return (
        <ul className={`project__list`}>
          {projectDATA.map(projectprop => <Project project={projectprop}/>)}
        </ul>
    );
};

export default ProjectList;