import esbuild from 'esbuild';
import babel from 'esbuild-plugin-babel';

esbuild
    .build({
        entryPoints: ['src/index.jsx'],
        bundle: true,
        sourcemap: true,
        minify: false,
        outfile: 'dist/index.js',
        plugins: [babel()],
        define: {
          'process.env.NODE_ENV': '"production"',
        }
    })
    .catch(() => process.exit(1));