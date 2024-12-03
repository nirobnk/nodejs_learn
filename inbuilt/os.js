let os = require("os");
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length + "cores");
console.log(os.freemem());
console.log(os.uptime());
