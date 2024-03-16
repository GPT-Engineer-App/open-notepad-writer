import React from "react";
import { Button, Box, Heading, Textarea, VStack } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

const Index = () => {
  const [text, setText] = React.useState("");

  const handleOpenNotepad = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "note.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Box p={8}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Notepad App
        </Heading>
        <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write your note here..." size="lg" height="300px" />
        <Button leftIcon={<FaEdit />} colorScheme="blue" size="lg" onClick={handleOpenNotepad}>
          Open Notepad
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
