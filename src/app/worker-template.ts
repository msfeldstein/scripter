// Automatically generated by misc/build-worker-template.js.
// Do not edit manually -- instead, run misc/build-worker-template.js

// src/app/worker-template.js
export const worker = [
  "(function(_postMessage,importScripts,_close){let recvp,recvres,recvrej;let msgq=[];function recv(){if(!recvp){if(msgq.length>0){return Promise.resolve(msgq.shift())}recvp=new Promise((res,rej)=>{recvres=res;recvrej=rej})}return recvp}self.addEventListener(\"message\",ev=>{if(recvp){recvp=null;recvres(ev.data)}else{msgq.push(ev.data)}});self.addEventListener(\"messageerror\",ev=>{if(recvp){recvp=null;recvrej(ev.data)}});function postMessage2(data,transfer){return _postMessage({data,transfer},transfer)}function print(...msg){console.log(...msg)}function send(){return postMessage2.apply(self,arguments)}function close(){postMessage2({type:\"__scripter_close\"});_close()}function __onerror(err){postMessage2({type:\"__scripter_toplevel_err\",message:err?String(err):\"unknown error\",stack:err&&err.stack||\"\"})}try{let r=(",
  ")((()=>{let w=Object.create(self);w.send=w.postMessage=postMessage2;w.recv=recv;w.close=close;w.print=print;w.importScripts=importScripts;w.importCommonJS=url=>{self.exports={};self.module={id:\"scripter\",exports:self.exports};return importScripts(url).then(()=>{let exports=self.module.exports;delete self.module;delete self.exports;return exports})};Object.defineProperties(w,{onmessage:{get(){return self.onmessage},set(f){self.onmessage=f},enumerable:!0}});return w})());if(r instanceof Promise){r.catch(__onerror)}}catch(err){__onerror(err)}})(postMessage,typeof __scripterImportScripts!=\"undefined\"?__scripterImportScripts:(importScripts=>(...urls)=>{importScripts(...urls);return Promise.resolve()})(self.importScripts.bind(self)),typeof __scripterClose!=\"undefined\"?__scripterClose:self.close.bind(self));\n"
];

// src/app/worker-frame-template.js
export const frame = [
  "(scriptfn=>{function importScripts(...urls){return Promise.all(urls.map(url=>new Promise((resolve,reject)=>{let s=document.createElement(\"script\");s.src=url;s.type=\"text/javascript\";s.async=!0;s.onload=resolve;s.onerror=reject;document.head.appendChild(s)})))}function postMessage(msg,transfer){window.parent.postMessage(msg,\"*\",transfer)}postMessage(\"__scripter_iframe_ready\");function close(){postMessage(\"__scripter_iframe_close\")}scriptfn(window,postMessage,importScripts,close)})((self,postMessage,__scripterImportScripts,__scripterClose)=>{",
  "});\n"
];