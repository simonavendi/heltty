import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';

const STITCH_ROOT = path.resolve('stitch_helt.ty');
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

function serveStitch(dir) {
  return (req, res, next) => {
    const url = req.url?.split('?')[0] ?? '';
    if (!url.startsWith('/stitch_helt.ty/')) {
      next();
      return;
    }

    const relative = decodeURIComponent(url.slice('/stitch_helt.ty/'.length));
    const filePath = path.join(dir, relative);

    if (!filePath.startsWith(dir) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      next();
      return;
    }

    const ext = path.extname(filePath);
    res.setHeader('Content-Type', MIME[ext] ?? 'application/octet-stream');
    fs.createReadStream(filePath).pipe(res);
  };
}

function copyRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

function stitchAssets() {
  return {
    name: 'stitch-assets',
    configureServer(server) {
      server.middlewares.use(serveStitch(STITCH_ROOT));
    },
    configurePreviewServer(server) {
      server.middlewares.use(serveStitch(STITCH_ROOT));
    },
    closeBundle() {
      copyRecursive(STITCH_ROOT, path.resolve('dist/stitch_helt.ty'));
    },
  };
}

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [stitchAssets()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
});
