import Carousel from './Carousel';

const Project = ({project}) => {
    console.log(project);

    if (project.type === 'single') {
        return (
            <li className="project">
                <h3 className='project__title'>{project.title}</h3>
                <img className='project__image' src={project.src} alt={project.title}/>
                <ul className='project__technologies'>
                    {project.technology.map((tech, index) => {
                        return (
                            <>
                                <li key={index} className='project__technology'>{tech}</li>
                            </>
                        )
                    })}
                </ul>
                <p className='project__description'>{project.description}</p>
                <a href={project.link} className='project__link'>Check it out!</a>
            </li>
        )
    } else if (project.type === 'multi') {
        return (
            <li className="project">
                <h3 className='project__title'>{project.title}</h3>
                <Carousel project={project}/>
                <ul className='project__technologies'>
                    {project.technology.map((tech, index) => {
                        return (
                            <>
                                <li key={index} className='project__technology'>{tech}</li>
                            </>
                        )
                    })}
                </ul>
                {project.description.map((desc, index) => {
                    return (
                        <>
                            <p key={index} className='project__description'>{desc}</p>
                        </>
                    )
                })}
                <a href={project.link} className='project__link'>Check it out!</a>
            </li>
        )
    }
};

export default Project;