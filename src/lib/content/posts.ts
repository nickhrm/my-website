import type { Component } from 'svelte';

export interface PostFrontmatter {
	title: string;
	tags: string[];
	icons: string[];
	coverImage?: string;
	images?: string[];
}

export interface Post extends PostFrontmatter {
	slug: string;
	component: Component;
}

const modules = import.meta.glob('./posts/*.md', { eager: true }) as Record<
	string,
	{ default: Component; metadata: PostFrontmatter }
>;

export const posts: Post[] = Object.entries(modules)
	.sort(([a], [b]) => a.localeCompare(b))
	.map(([path, mod]) => {
		const slug = path.replace('./posts/', '').replace('.md', '');
		return { slug, ...mod.metadata, component: mod.default };
	});

export function getPost(slug: string): Post | undefined {
	return posts.find((post) => post.slug === slug);
}
