import { getProjects } from '@/sanity/sanity-utils';
import Link from 'next/link';
import Image from 'next/image';

const Projects = async () => {
  const projects = await getProjects();

  return (
    <section id='projects'>
      <h2 className='section__title'>
        Projects
        <br />
        <span>My Work</span>
      </h2>
      <div className='flex flex__row-wrap'>
        {projects.map((project) => (
          <div key={project._id} className='project'>
            <div className='project__body'>
              <div className='project__image'>
                {project.image && (
                  <Link href={`/projects/${project.slug}`}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={750}
                      height={400}
                    />
                  </Link>
                )}
              </div>
              <div className='project__header'>
                <h2 className='project__title'>{project.name}</h2>
                <h3 className='project__type'>{project.type}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
