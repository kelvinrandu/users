import axios from 'axios';
import React, {useEffect}from 'react';
import { useSelector, useDispatch} from "react-redux";
import User from "./User"
import { setUsers} from "../redux/actions/userActions";
import { Center } from "@chakra-ui/react"


const Users = () => {
    const users = useSelector((state) => state.allUsers.users);
    const dispatch = useDispatch();
    const fetchusers = async () =>{
        const response = await axios.get("https://ti-react-test.herokuapp.com/users").catch((err) =>{
            console.log(" Err", err);
        });
        dispatch(setUsers( response.data));
    };

    useEffect(()=>{ 
        fetchusers();

    }, []);
    console.log("users:", users);

    return (
        <>
            <Center mt="80px" color="white">
            <User/>
            </Center>
            
            
            
        </>
    );
};

export default Users
