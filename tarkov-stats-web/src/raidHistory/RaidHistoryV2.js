import React, { useState, useEffect } from 'react';
import Raid from './components/Raid';
import Pagination from './components/Pagination';
import axios from 'axios';
import aws4 from 'aws4';



const RaidHistoryV2 = () => {
    const [raids, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [raidsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            let request = {
                host: 'https://8l6lu4s1zi.execute-api.eu-west-1.amazonaws.com/prod/GetAllRaids',
                method: 'GET',
                url: 'https://8l6lu4s1zi.execute-api.eu-west-1.amazonaws.com/prod/GetAllRaids',
                path: '/prod/GetAllRaids'
            }
            
            let signedRequest = aws4.sign(request,
            {
                secretAccessKey: AWS.config.credentials.secretAccessKey,
                accessKeyId: AWS.config.credentials.accessKeyId,
                sessionToken: AWS.config.credentials.sessionToken
            })
            
            delete signedRequest.headers['Host']
            delete signedRequest.headers['Content-Length']
            
            let response = await axios(signedRequest)
        
            
            const res = await axios.get('https://8l6lu4s1zi.execute-api.eu-west-1.amazonaws.com/prod/GetAllRaids');
            //const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
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