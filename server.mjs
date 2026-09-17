import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, sep } from 'node:path';

const buildDir = join(import.meta.dirname, 'build');
const port = process.env.PORT || 80;

const mimeTypes = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.mjs': 'text/javascript; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.gif': 'image/gif',
	'.webp': 'image/webp',
	'.ico': 'image/x-icon',
	'.txt': 'text/plain; charset=utf-8',
	'.xml': 'application/xml; charset=utf-8',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
	'.webmanifest': 'application/manifest+json'
};

function resolveFile(pathname) {
	const candidates =
		pathname === '/'
			? ['index.html']
			: [pathname, `${pathname}.html`, `${pathname}/index.html`];

	for (const candidate of candidates) {
		const resolved = normalize(join(buildDir, candidate));
		if (!resolved.startsWith(buildDir + sep) && resolved !== buildDir) continue;
		if (existsSync(resolved) && statSync(resolved).isFile()) return resolved;
	}
	return null;
}

const server = createServer((req, res) => {
	const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
	const file = resolveFile(pathname);

	if (!file) {
		res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
		res.end('404 Not Found');
		return;
	}

	const headers = { 'Content-Type': mimeTypes[extname(file)] ?? 'application/octet-stream' };
	headers['Cache-Control'] = pathname.startsWith('/_app/immutable/')
		? 'public, max-age=31536000, immutable'
		: 'public, max-age=0, must-revalidate';

	res.writeHead(200, headers);
	if (req.method === 'HEAD') {
		res.end();
		return;
	}
	createReadStream(file).pipe(res);
});

server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
