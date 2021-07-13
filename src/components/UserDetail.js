import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedUsers,
  removeSelectedUsers,
  editUser,
} from "../redux/actions/userActions";
import axios from "axios";

import {
  Textarea,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

const UserDetail = () => {

  const user = useSelector((state) => state.user);
  const { id, name, email, bio, occupation } = user;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newOccupation, setNewOccupation] = useState(occupation);
  const [newBio, setNewBio] = useState(bio);
  const { userId } = useParams();
  const dispatch = useDispatch();

  // control modal constants
  const { isOpen, onOpen, onClose } = useDisclosure();
 
  const flushInputs =()=>{
      setNewName('');
      setNewOccupation('');
      setNewBio('');
      setNewEmail('');
  }

  //fetch user from api
  const fetchuser = async () => {
    const response = await axios
      .get(`https://ti-react-test.herokuapp.com/users/${userId}`)
      .catch((err) => {
        console.log(" Err", err);
      });
    dispatch(selectedUsers(response.data));
  };


  //edit user
  const editUser = async () => {

    const response = await axios
      .patch(`https://ti-react-test.herokuapp.com/users/${userId}`, {
        name: newName,
        email: newEmail,
        occupation: newOccupation,
        bio: newBio,
      })
      .catch((err) => {
        console.log(" Err", err);
      });
    dispatch(selectedUsers(response.data));
 


    onClose();
    flushInputs();
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
          <Link to={"/"}>
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
          </Link>
          <Button
            flex={1}
            onClick={onOpen}
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="first-name" isRequired>
              <FormLabel> name</FormLabel>
              <Input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder={name}
              />
            </FormControl>
            <FormControl id="first-name" isRequired>
              <FormLabel>email</FormLabel>
              <Input
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder={email}
              />
            </FormControl>
          </ModalBody>
          <FormControl id="first-name" isRequired>
            <FormLabel>bio</FormLabel>
            <Textarea
              type="text"
              value={newBio}
              onChange={(e) => setNewBio(e.target.value)}
              placeholder={bio}
            />
          </FormControl>
          <FormControl id="first-name" isRequired>
            <FormLabel>occupation</FormLabel>
            <Input
              type="text"
              value={newOccupation}
              onChange={(e) => setNewOccupation(e.target.value)}
              placeholder={occupation}
            />
          </FormControl>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button
              disabled={!newName || !newEmail || !newOccupation || !newBio}
              colorScheme="blue"
              mr={3}
              onClick={editUser}
            >
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default UserDetail;
