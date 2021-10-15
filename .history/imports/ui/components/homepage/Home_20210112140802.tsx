import React from 'react';
import FontAwesome from 'react-fontawesome';


/* Bootstrap */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Home = (props: any): JSX.Element => {

    return (
        <a href="/chats" className="home-link" >
            <div className="home-icon">
            <FontAwesome name="home" classname="" />
            </div>
            Accueil
        </a>
    )
}

export default Home;