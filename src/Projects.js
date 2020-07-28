import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
    render() {
        console.log('this.props', this.props);

        const { title, image, description, link } = this.props.project;

        return (
            <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
                <h3>{title}</h3>
                <img style={{ width: 200, height: 120 }} src={image} />
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends Component {

    render() {
        return (
            // <div>
            //     <h1>Meus projetos</h1>
            //     <div>{PROJECTS[0].title}</div>
            //     <div>{PROJECTS[1].title}</div>
            //     <div>{PROJECTS[2].title}</div>
            // </div>
            <div>
                <h1>Meus projetos</h1>
                {
                    PROJECTS.map(PROJECT => {
                        return (
                            <Project key={PROJECT.id} project={PROJECT} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Projects;