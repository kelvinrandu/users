import axios from 'axios';
import React, {useEffect}from 'react';
import User from "./User"


const Users = () => {
    const fetchusers = async () =>{
        const response = await axios.get("https://ti-react-test.herokuapp.com/users").catch((err) =>{
            console.log(" Err", err);
        });
        console.log(response.data)
    };

    useEffect(()=>{
        fetchusers();

    })

    return (
        <div className="ui grid container">
            <h1>users lists</h1>
            <User/>
        </div>
    );
};

export default Users
