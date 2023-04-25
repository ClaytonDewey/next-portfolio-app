import { Page } from '@/types/Page';
import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

export const getPages = async (): Promise<Page[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type=='page']{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }
    `
  );
};

export const getPage = async (slug: string): Promise<Page> => {
  return createClient(clientConfig).fetch(
    groq`*[_type=='page' && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    {
      slug,
    }
  );
};
