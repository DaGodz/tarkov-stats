import React, { useEffect, useState, Component } from "react";


class RaidHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            raids: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('achtung!');
                }
            }
                )
            .then(data => this.setState({ raids: data, isLoading: false }))
            .catch(error => this.setState({error, isLoading: false}));
    }

    render() {

        const { raids, isLoading } = this.state;
        if (isLoading) {
            return <p>Loading...</p>;
        }
        return (

               <ul>
                    {raids.map(raid => 
                       <li key={raid.id}>{raid.title}</li>
                    )}
                </ul>
            );
        
        }
}

export default RaidHistory;