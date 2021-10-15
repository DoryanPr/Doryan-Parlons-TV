import React from 'react';
import FontAwesome from 'react-fontawesome';

const Home = (props: any): JSX.Element => {

    return (
        <a href="/" className="home-link" >
            <FontAwesome name="home" className="home-icon" />
            Accueil
        </a>
    )
}

export default Home;