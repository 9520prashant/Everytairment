import React from 'react'
import ColorModeSwitcher from "../../../ColorModeSwitcher"
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri"
import { Link } from 'react-router-dom';

const LinkButton = ({url="/", title="Home"})=>{
    return (
        <Link to={url}>
        <Button varient={"ghost"}>{title}</Button>
        </Link>
    )
}
const Header = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const isAuthenticated = true;
  const user={
    role:"admin",
  };
  const logoutHandler=()=>{
    console.log("Loged-out");
  }
  return (
    <>
    <ColorModeSwitcher/>

    <Button 
    onClick={onOpen}
    colorScheme={"purple"} 
    width={"12"} 
    height={"12"} 
    rounded={"full"} 
    position={"fixed"} 
    top={"6"} 
    left={"6"}
    >
        <RiMenu5Fill/>
    </Button>
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
     <DrawerOverlay backdropFilter={"blur(5px)"}/>
     <DrawerContent>
        <DrawerHeader borderBottomWidth={"1px"}>EVERYTAIRMENT</DrawerHeader>
        <DrawerBody>
            <VStack spacing={"5"} alignItems={"flex-start"}>
               <LinkButton url="/" title="Home"/>
               <LinkButton url="/movies" title="Browse Movies"/>
               <LinkButton url="/gaming" title="Browse Gaming"/>
               <LinkButton url="/coding" title="Browse Coding"/>
               <LinkButton url="/creator" title="Become a Creator"/>
               <LinkButton url="/about" title="About US"/>
            </VStack>
            <HStack 
            justifyContent={'space-evenly'} 
            position='absolute' 
            bottom={"2rem"}
            width="80%"
            >
            {isAuthenticated ? (
            <>
                <VStack>
                  <HStack>
                      <Link to="/profile">
                        <Button varient={"ghost"} colorScheme='purple'>Profile</Button>
                      </Link>
                     <Button varient={"ghost"} gap={"1"} onClick={logoutHandler}>
                       <RiLogoutBoxLine/>
                       Logout
                     </Button>
                  </HStack>
                  {
                    user && user.role==="admin" && (
                        <Link to="/admin/dashboard">
                            <Button colorScheme='purple' varient={"ghost"} gap={"1"}>
                            <RiDashboardFill/>
                            Dashboard
                            </Button>
                       </Link>
                    )
                  }
                </VStack>
            </>
            ) : (
            <>
                <Link to="/login">
                    <Button colorScheme='purple'>Login</Button>
                </Link>
                <p>OR</p>
                <Link to="/signup">
                    <Button colorScheme='purple'>Sign Up</Button>
                </Link>
            </>
            )
            }
            </HStack>
        </DrawerBody>
     </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header

