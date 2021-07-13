import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { VStack,StackDivider,Box ,Heading ,Text} from "@chakra-ui/react"
const User = () => {
  const users = useSelector((state) => state.allUsers.users);
  const renderUser = users.map((user) => {
    const { id, name } = user;
    return (
      <div>
        <Link to={`/user/${id}`}>

        <Box p={5} shadow="md" borderWidth="1px" >
      <Heading fontSize="xl">title</Heading>
      <Text mt={4}>nmae</Text>
    </Box>

         
        </Link>
      </div>
    );
  });

  console.log(users);
  return (
      <>
    <VStack
    mt="3px"
    w="40%"
    
    spacing={4}
    align="stretch"
  >{renderUser}
   </VStack></>
    );
};

export default User;
