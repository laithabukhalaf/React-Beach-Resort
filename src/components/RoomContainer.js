import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomList from './RoomList';
import { RoomConsumer } from '../Context';
import Loading from './Loading';

function RoomContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const { loading, sortedRooms, rooms } = value

                    if (loading) {
                        return <Loading />;
                    }
                    return (
                        <div>
                            <RoomsFilter rooms={rooms} />
                            <RoomList rooms={sortedRooms} />
                        </div>
                    );
                }
            }
        </RoomConsumer>

    );
}

export default RoomContainer;