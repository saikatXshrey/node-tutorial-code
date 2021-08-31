const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received from user ${name}  & id:${id}`);
})

customEmitter.on('response', () => {
    console.log('some other logic!');
})

customEmitter.emit('response', 'babyyy😽❤️', '1906493');