import React, { useState, useEffect } from 'react';
import Raid from './components/Raid';
import Pagination from './components/Pagination';
import axios from 'axios';


const RaidHistoryV2 = () => {
    const [raids, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [raidsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(res.data);
            setLoading(false);
        };

        fetchData();
    }, []);

    // Get current posts
    const indexOfLastRaid = currentPage * raidsPerPage;
    const indexOfFirstRaid = indexOfLastRaid - raidsPerPage;
    const currentRaids = raids.slice(indexOfFirstRaid, indexOfLastRaid);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
       return (
        <div className='container mt-5'>
            <Raid raids={currentRaids} loading={loading} />
            <Pagination
                raidsPerPage={raidsPerPage}
                totalRaids={raids.length}
                paginate={paginate}
            />
        </div>
    );
};

export default RaidHistoryV2;