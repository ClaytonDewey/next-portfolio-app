import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';

const Home = async () => {
  const projects = await getProjects();

  return (
    <div>
      <h2>My Projects</h2>
      {projects.map((project) => (
        <div key={project._id}>
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={400}
            />
          )}
          <p>{project.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Home;
