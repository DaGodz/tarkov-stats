import React from 'react';

const Raid = ({ raids, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul className='list-group mb-4'>
            {raids.map(raid => (
                <li key={raid.raidId} className='list-group-item'>
                    {raid.user} {raid.outcome}
                </li>
            ))}
        </ul>
    );
};

export default Raid;