const socket = new WebSocket('ws://localhost:3000');

// Listen for message
socket.onmessage = ({data}) => {
    console.log('Message from server ', data);
};

document.querySelector('button').onclick = () => {
    socket.send('hello');
}