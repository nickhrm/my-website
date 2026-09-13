// Regenerates src/lib/icon-data.ts with offline Iconify data for every icon
// referenced in project frontmatter, plus the fixed set of UI icons.
// Run with: node scripts/generate-icons.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { getIconData } from '@iconify/utils';

const root = path.dirname(fileURLToPath(import.meta.url));
const postsDir = path.join(root, '../src/lib/content/posts');

const uiIcons = ['lucide:sun', 'lucide:moon', 'lucide:chevron-left', 'lucide:chevron-right'];

const iconRefs = new Set(uiIcons);
for (const file of readdirSync(postsDir)) {
	if (!file.endsWith('.md')) continue;
	const content = readFileSync(path.join(postsDir, file), 'utf8');
	for (const match of content.matchAll(/^\s*-\s*((?:logos|lucide):[\w-]+)\s*$/gm)) {
		iconRefs.add(match[1]);
	}
}

const sets = {};
async function loadSet(prefix) {
	if (!sets[prefix]) {
		sets[prefix] = (await import(`@iconify-json/${prefix}/icons.json`, { with: { type: 'json' } }))
			.default;
	}
	return sets[prefix];
}

const result = {};
const missing = [];

for (const ref of iconRefs) {
	const [prefix, name] = ref.split(':');
	const set = await loadSet(prefix);
	const data = getIconData(set, name);
	if (!data) {
		missing.push(ref);
		continue;
	}
	delete data.hidden;
	result[ref] = data;
}

if (missing.length) {
	console.error('Missing icons (check the name against the icon set):', missing);
	process.exit(1);
}

const out = `import type { IconifyIcon } from '@iconify/types';

// Bundled offline icon data (no runtime network calls / external API dependency)
// for the fixed set of icons used across the site. Generated from
// @iconify-json/logos and @iconify-json/lucide via scripts/generate-icons.mjs.
export const iconData: Record<string, IconifyIcon> = ${JSON.stringify(result, null, '\t')};
`;

writeFileSync(path.join(root, '../src/lib/icon-data.ts'), out);
console.log(`Wrote ${Object.keys(result).length} icons to src/lib/icon-data.ts`);
