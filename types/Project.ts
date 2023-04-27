import { PortableTextBlock } from 'sanity';

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  type: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
  tool: [];
};
