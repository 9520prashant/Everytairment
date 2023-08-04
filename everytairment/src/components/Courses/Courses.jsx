import React, { useState } from 'react'
import {Button, Container, Flex, HStack, Heading, Input, Text} from "@chakra-ui/react"
const Courses = () => {
  
  const [keyword, setKeyword] = useState("");

  return <Container minH={"95vh"} maxW={"conatiner.lg"} paddingY={"8"}>
    <Heading children="All Courses" m={"8"} textAlign={"center"}/>
    <Flex justifyContent="center" alignItems="center" flexDirection={"column"}>
        <Input 
            value={keyword} 
            onChange={e => setKeyword(e.target.value)} 
            placeholder='Search a Course...' 
            type={"text"}
            focusBorderColor='purple.600' 
            width={"2xl"} 
        />
    </Flex>
    <HStack >
     <Button minW={"60"}>
        <Text children="Category1"/>
     </Button>
    </HStack>
  </Container>
}

export default Courses
