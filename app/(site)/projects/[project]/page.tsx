import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div>
      <header>
        <h1>{project.name}</h1>
      </header>
      <div>
        <Image
          src={project.image}
          alt={project.name}
          width={750}
          height={400}
        />
      </div>
    </div>
  );
};
export default Project;
