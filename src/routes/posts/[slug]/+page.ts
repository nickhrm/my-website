import { error } from '@sveltejs/kit';
import { posts, getPost } from '$lib/content/posts';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => posts.map((post) => ({ slug: post.slug }));

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);

	if (!post) {
		error(404, 'Projekt nicht gefunden');
	}

	return { slug: params.slug };
};
