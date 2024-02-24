import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box backgroundColor="white" borderRadius={12} >
      <Image src={imageSrc} borderRadius={12} />
      <Box padding={6}>
        <VStack align="baseline">
          <Heading color="black" size="md" >{title}</Heading>
          <Text color="grey" >{description}</Text>
          <Text color="black" >See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </VStack>
      </Box>
    </Box>
  )
};

export default Card;
