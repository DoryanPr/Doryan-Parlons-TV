import React from 'react';
import FontAwesome from 'react-fontawesome';


/* Bootstrap */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Home = (props: any): JSX.Element => {

    return (
        <a href="/friends" className="friends-link" >
            <FontAwesome name="user-friends" className="friends-icon" />
            Mes amis
        </a>
    )
}

export default Home;