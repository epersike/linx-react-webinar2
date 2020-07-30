import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

// class SocialProfile extends Component {
const SocialProfile = props => {
    const { link, image } = props.socialProfile;
    return (
        <span>
            <a href={link}>
                <img style={{ width: 35, height: 35, margin: 10 }} src={image} />
            </a>
        </span>
    )
}

// Isso aqui é como seria se eu definisse um class component:
//      class SocialProfiles extends Component {
// Isso aqui é um stateless functional component:
const SocialProfiles = () => {
    return (
        <div>
            <h2>Minhas mídias sociais</h2>
            <div>
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                        return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                    })
                }
            </div>
        </div>
    )
}

export default SocialProfiles;