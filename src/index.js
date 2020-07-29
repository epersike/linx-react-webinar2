import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Import padrão do documento src/App.js
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// class Animal {
//     constructor(nome) {
//         this.nome = nome;
//     }

//     falar() {
//         console.log('Roar.');
//     }
// }

// const a = new Animal('Leão');
// console.log(a);
// a.falar();

// class Humano extends Animal {
//     constructor(nome, idade, cabelo) {
//         super(nome);

//         this.idade = idade;
//         this.cabelo = cabelo;
//     }

//     falar() {
//         console.log("Oi.");
//     }

//     apresentar() {
//         console.log("Meu nome é", this.nome, 'eu tenho', this.idade, 'anos de idade, e o meu cabelo é', this.cabelo);
//     }
// }

// const h = new Humano("Elton", "30", "loiro");
// console.log(h);
// h.falar();
// h.apresentar();