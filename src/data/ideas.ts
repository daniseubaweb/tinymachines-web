import { getCollection } from 'astro:content';

export async function getIdeas() {
  const ideas = await getCollection('ideas', ({ data }) => data.published);
  return ideas.sort((a, b) => a.data.order - b.data.order);
}
