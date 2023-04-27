import { getProjects } from '@/sanity/sanity-utils';
import Header from './components/Header';
import Projects from './components/Projects';
import HeroArea from './components/HeroArea';

const Home = async () => {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <HeroArea />
      <main>
        {/* @ts-expect-error Server Component */}
        <Projects />
      </main>
    </>
  );
};
export default Home;
