
import app from './app';
import http from 'http';
const debug = require('debug')('full-stack-js-bp:server');

const env = process.env.NODE_ENV || 'development';
const port = normalizePort(process.env.PORT || '8000');
const server = http.createServer(app);

app.set('env', env);
app.set('port', port);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// Normalize a port into a number, string, or false.

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

// Event listener for HTTP server "error" event.

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event.

function onListening() {
  let addr = server.address(),
    bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
}