import {mkdir,rm,cp,stat} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
for(const f of ['index.html','manifest.webmanifest','service-worker.js']) await cp(f,'dist/'+f);
const s=(await stat('dist/index.html')).size;
console.log(`Built ControlSense AI to dist/ (${s} bytes).`);
