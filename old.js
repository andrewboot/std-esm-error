const getDir = require('./getDir').getDir;
// shows that everything works without @std/esm

const appDir = getDir();

console.log(appDir);
