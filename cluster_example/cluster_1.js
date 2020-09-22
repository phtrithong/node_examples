// cluster.js
// https://www.freecodecamp.org/news/scaling-node-js-applications-8492bd8afadc/
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
	const cpus = os.cpus().length;

	console.log(`Forking for ${cpus} CPUs`);
	for (let i = 0; i<cpus; i++) {
	cluster.fork();
	}

	// for broadcasting
	Object.values(cluster.workers).forEach(worker => {
	worker.send(`Hello Worker ${worker.id}`);
	});

} else {
  require('./server');
}