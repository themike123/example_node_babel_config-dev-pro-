//levantando el servicio de node

import test from './test';
import http from 'http';

http.createServer((req,res)=> res.end('run')).listen(3000);
console.log(test());
