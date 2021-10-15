import React from 'react';

/* Bootstrap */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Home = (props: any): JSX.Element => {

    return (
        <a href="/chat" className="home-link" >
            <div name="home" classname="home-icon" ></div>
            Accueil
        </a>
    )
}

export default Home;