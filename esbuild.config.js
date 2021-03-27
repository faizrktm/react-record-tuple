import esbuild from 'esbuild';
import babel from 'esbuild-plugin-babel';
import fs from 'fs';

const htmlContent = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>React Tuple and Record</title></head><body><div id="root"></div> <script src="./index.js" defer></script> </body></html>';
fs.writeFile('dist/index.html', htmlContent, (error) => {
  console.error(error);
});

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