import React from 'https://esm.sh/react@18.2.0';
import ReactDom from 'https://esm.sh/react-dom@18.2.0/client';

const appDomElement = document.getElementById('app');

const root = ReactDom.createRoot(appDomElement);

// tipo de elemento, objeto o null, lo que contiene el elemento
const button = React.createElement('button', { "className": 'test' , "data-id": 123 }, 'Me gusta');

root.render(button);

// para renderizar multiples elementos a la vez podemos usar React.Fragment 
// y así no devolverlos con ningún elemento de envoltorio
const button1 = React.createElement('h1', { "className": 'title' , "data-id": 456 }, 'Hola React');
const button2 = React.createElement('p', { "className": 'text' , "data-id": 456 }, 'Lorem Ipsum');
const button3 = React.createElement('button', { "className": 'test' , "data-id": 101112 }, 'Botón 3');
const testWithFragment = React.createElement(React.Fragment, null, [button1, button2, button3]);

root.render(testWithFragment);

console.log('test');