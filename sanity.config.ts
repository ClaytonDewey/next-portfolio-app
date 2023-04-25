import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: '9s6u4wpm',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2023-04-24',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;
