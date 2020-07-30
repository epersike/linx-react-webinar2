import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import padrão do documento src/App.js
import App from './App';
import Joke from './Jokes';

import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App}></Route>
            <Route path='/jokes' component={Joke} ></Route>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root'));
console.log('renderizou');
// function papaiNoelChegou() {

//     const p = new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             console.log('ho1')
//             resolve();
//         }, 2000);
//     }).then( () => {
//         console.log("Passou no resolve")
//     }, () => {
//         console.log("Passou no reject!")
//     }).finally(() => {
//         console.log("passou no finally");
//     });
//     console.log('ho2');
//     console.log('ho3');
// }

// papaiNoelChegou();

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