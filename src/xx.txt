console.log(Object.keys(preesets));

let preeset = preesets['wedding'];

console.log(preeset);

keys = preeset;

const fB = [1, 2, 3, 4, 5, 6];
const nB = [0, 9, 8, 7, 6, 5, 5];
const letters = ['asdfsfsdfgfdgd'];

let all = [...fB, ...nB, ...letters];

all.forEach(button => {
    keys[button] = '#000000'
});

localStorage.setItem('currentState', JSON.stringify(keys));



const selectedButtons = ['f1', 'f2', 'f4'];

selectedButtons.forEach(button => {
    keys[button] = '#345678'
});

localStorage.setItem('currentState', JSON.stringify(keys));


localStorage.setItem('OLYASHA', JSON.stringify(keys))


let item = localStorage.getItem('keys');

'f1': '#345678'
'f2': '#345678'
'f4': '#345678'
'f3': '#000000'


setState = !curentState
