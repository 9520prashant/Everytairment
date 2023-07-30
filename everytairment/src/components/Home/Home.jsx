import React from 'react';
import {Box, Button, HStack, Heading, Image, Stack, Text, VStack} from "@chakra-ui/react";
import "./home.css";
import { Link } from 'react-router-dom';
import vg from "../../assests/images/vg.png";
import Typewriter from 'typewriter-effect';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {CgGoogle, CgYoutube,} from "react-icons/cg";
import {SiCoursera, SiUdemy} from "react-icons/si";
import {DiAws} from "react-icons/di";
import IntroVideo from "../../assests/videos/IntroVideo.mp4";

const Home = () => {
    return ( <section className="home">
    <ColorModeSwitcher/>
    <div className="container">
        <Stack
            direction={["column","row"]}
            height="100%"
            justifyContent={["center","space-between"]}
            alignItems="center"
            spacing={["16", "56"]}
        >

        <VStack width={"full"} alignItems={["center","flex-end"]}>
           <Heading color={"purple.600"} size={"2xl"} children="Everything Is Here"/>
           <Text fontWeight={"bold"} display={"flex"} gap={"1"}>
              Find Everything <Typewriter
                   options={{
                    strings: ['You Want.'],
                    autoStart: true,
                    loop: true,
                    }}
                />
           </Text>
           <Link to='/membership'>
           <Button size={"lg"} colorScheme='purple'>
                 Become Member
           </Button>
           </Link>
        </VStack>

        <Image className='vector-graphic' id='HomeImage' boxSize={"md"} src={vg} objectFit="contain"/>
        </Stack>
    </div>
    <Box padding={"8"} bg={"blackAlpha.800"}>
        <Heading children="OUR BRANDS" textAlign={"center"} fontFamily={"body"} color={"purple.600"}/>
    
    <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop={"5"}>
        <CgGoogle/>
        <CgYoutube/>
        <SiCoursera/>
        <SiUdemy/>
        <DiAws/>
    </HStack>
    </Box>
    <div className="container2">
        <video 
        autoPlay={true}
        controls 
        controlsList='nodownload nofullscreen noremoteplayback' 
        disablePictureInPicture
        disableRemotePlayback
        src={IntroVideo}
        >
        </video>
    </div>
  </section>
  )
}

export default Home
