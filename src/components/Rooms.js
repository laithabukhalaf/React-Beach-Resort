import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from './RoomContainer';

function Rooms() {
    return (
        <React.Fragment>

        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    return Home

                </Link>
            </Banner>
        </Hero>
        <RoomsContainer/>

        </React.Fragment>
        
    );
}

export default Rooms;