import React from 'react';

const Raid = ({ raids, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul className='list-group mb-4'>
            {raids.map(raid => (
                <li key={raid.id} className='list-group-item'>
                    {raid.title}
                </li>
            ))}
        </ul>
    );
};

export default Raid;