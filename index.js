import tmi from 'tmi.js';

//opciones de configuracion (definir)
const options = {
    identity: {
        username: 'abrechtt',
        password: 'oauth:qm7lfri75m0kad5dni93ahl45j9rvo'
    },
    channels: [ 
        'abrechtt'
    ]
}

const client = new tmi.Client(options);

client.on('connected', (address, port)=>{
    client.say(options.channels[0], 'hola');
    console.log(`bot listening at: ${address}:${port}`);
});

client.on('message', (target, context, msg, self)=>{
    if (msg === 'ping') {
        client.say(target, 'pong');
    }
});

client.connect();