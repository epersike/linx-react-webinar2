import React, { Component } from 'react';

const TITLES = [
    "JavaScript",
    "React",
    "Python",
    "..."
]

class Title extends Component {
    state = { titleIndex: 0, fadeIn: false };

    componentDidMount() {

        this.timeout = setTimeout( () => {this.setState( {fadeIn: true })}, 2000);

        this.animateTitles();
    }
    
    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex, fadeIn: true });

            this.timeout = setTimeout(() => {this.setState({fadeIn: false})}, 2000);
        }, 4000)
    }

    render() {

        const { titleIndex, fadeIn } = this.state;

        const title = TITLES[this.state.titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>Eu sei programar em {title}</p>
        )
    }
}

export default Title;