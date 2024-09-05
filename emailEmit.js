const logEvents = require('./logEvents');
const EventEmitter = require('events');

// Define the emitter class
class Emitter extends EventEmitter {}

// Initialize the emitter object
const myEmitter = new Emitter();

// Add listener for the 'logs' event
myEmitter.on('logs', (message, fileName) => logEvents(message, fileName));

// Export the emitter
module.exports = myEmitter;
