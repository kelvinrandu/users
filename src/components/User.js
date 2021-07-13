import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { VStack, Box, Heading, Text } from "@chakra-ui/react";
const User = () => {
  const users = useSelector((state) => state.allUsers.users);
  const renderUser = users.map((user) => {
    const { id, name, email } = user;
    return (
      <div>
        <Link to={`/user/${id}`}>
          <Box p={5} borderRadius="10px"shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{name}</Heading>
            <Text mt={4}>{email}</Text>
          </Box>
        </Link>
      </div>
    );
  });

  console.log(users);
  return (
    <>
      <VStack mt="3px" w="40%" spacing={4} align="stretch">
        {renderUser}
      </VStack>
    </>
  );
};

export default User;
