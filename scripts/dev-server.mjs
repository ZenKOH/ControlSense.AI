import http from 'node:http';
import {createReadStream,existsSync} from 'node:fs';
import {extname,join,normalize} from 'node:path';
const port=process.env.PORT||5173;
const root=process.cwd();
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.webmanifest':'application/manifest+json'};
http.createServer((req,res)=>{let p=normalize(new URL(req.url,'http://x').pathname);if(p==='/')p='/index.html';const f=join(root,p);if(!f.startsWith(root)||!existsSync(f)){res.writeHead(404);res.end('Not found');return}res.writeHead(200,{'content-type':types[extname(f)]||'text/plain'});createReadStream(f).pipe(res)}).listen(port,()=>console.log(`ControlSense AI running at http://localhost:${port}`));
