import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedUsers,
  removeSelectedUsers,
} from "../redux/actions/userActions";
import axios from "axios";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

const UserDetail = () => {
  const user = useSelector((state) => state.user);
  const { id, name, email, bio ,occupation} = user;
  const { userId } = useParams();
  const dispatch = useDispatch();
  console.log(user);
  const fetchuser = async () => {
    const response = await axios
      .get(`https://ti-react-test.herokuapp.com/users/${userId}`)
      .catch((err) => {
        console.log(" Err", err);
      });
    dispatch(selectedUsers(response.data));
  };
  useEffect(() => {
    if (userId && userId !== "") fetchuser();
    return () => {
      dispatch(removeSelectedUsers());
    };
  }, [userId]);
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}

          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
        {name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
         {email}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {bio}{" "}
          <Link href={"#"} color={"blue.400"}>
            #tag
          </Link>{" "}
          me in your posts
        </Text>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            {occupation}
          </Badge>

        </Stack>
        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            Back
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Edit
          </Button>
        </Stack>
      </Box>
      <p></p>
    </Center>
  );
};

export default UserDetail;
