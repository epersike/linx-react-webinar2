import React, { Component } from 'react';
import Projects from './Projects';
import SocialPorfiles from './SocialProfiles';
import Title from './Title';

import profile from './assets/profile.png';

class App extends Component {
    state = { counter: 0, displayBio: false };

    // helper method
    // addCounter = () => {
    //     this.setState({ counter: this.state.counter + 1 });
    //     console.log('this', this);
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        console.log("render do App");
        return (
            <div>
                <img src={profile} className='profile' />
                <h1>Meu portfolio!!</h1>
                <p>Olá, meu nome é Elton!</p>
                <Title />
                <hr />
                {
                    this.state.displayBio ? (
                        <div>
                            <p>Eu moro em Blumenau/SC.</p>
                            <p>Eu sou Analista de Sistemas na Linx S.A.</p>
                            <p>Esse é o meu primeiro app de exemplo para o treinamento de react!</p>
                            <p>Além de programar, eu também gosto de ouvir música.</p>
                            <button onClick={this.toggleDisplayBio}>Ver menos</button>
                        </div>
                    ) : (
                        <div>
                           <button onClick={this.toggleDisplayBio}>Ver mais</button> 
                        </div>
                    )
                }
                {/* <p>{this.state.counter}</p>
                <button onClick={this.addCounter}>AddCounter</button> */}
                <hr />
                <Projects />
                <hr />
                <SocialPorfiles />
            </div>
        )
    }
}

export default App;