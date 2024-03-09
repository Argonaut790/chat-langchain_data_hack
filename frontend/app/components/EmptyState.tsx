import { MouseEvent } from "react";
import {
  Heading,
  Link,
  Card,
  CardHeader,
  Flex,
  Spacer,
} from "@chakra-ui/react";

export function EmptyState(props: { onChoice: (question: string) => any }) {
  const handleClick = (e: MouseEvent) => {
    props.onChoice((e.target as HTMLDivElement).innerText);
  };
  return (
    <div className="rounded flex flex-col items-center max-w-full md:p-8">
      <Flex marginTop={"25px"} grow={1} maxWidth={"800px"} width={"100%"}>
        <Card
          onMouseUp={handleClick}
          width={"48%"}
          backgroundColor={"#ffffff"}
          _hover={{ backgroundColor: "#ffffff" }}
          cursor={"pointer"}
          justifyContent={"center"}
        >
          <CardHeader justifyContent={"center"}>
            <Heading
              fontSize="md"
              fontWeight={"medium"}
              mb={1}
              color={"gray.700"}
              textAlign={"center"}
            >
              Today is a new day, and I'm excited to share my positivity!
            </Heading>
          </CardHeader>
        </Card>
        <Spacer />
        <Card
          onMouseUp={handleClick}
          width={"48%"}
          backgroundColor={"#ffffff"}
          _hover={{ backgroundColor: "#ffffff" }}
          cursor={"pointer"}
          justifyContent={"center"}
        >
          <CardHeader justifyContent={"center"}>
            <Heading
              fontSize="md"
              fontWeight={"medium"}
              mb={1}
              color={"gray.700"}
              textAlign={"center"}
            >
              I want to share a recent moment of happiness that made my day.
            </Heading>
          </CardHeader>
        </Card>
      </Flex>
      <Flex marginTop={"25px"} grow={1} maxWidth={"800px"} width={"100%"}>
        <Card
          onMouseUp={handleClick}
          width={"48%"}
          backgroundColor={"#ffffff"}
          _hover={{ backgroundColor: "#ffffff" }}
          cursor={"pointer"}
          justifyContent={"center"}
        >
          <CardHeader justifyContent={"center"}>
            <Heading
              fontSize="md"
              fontWeight={"medium"}
              mb={1}
              color={"gray.700"}
              textAlign={"center"}
            >
              Got a burst of inspiration and wanted to share it with you!
            </Heading>
          </CardHeader>
        </Card>
        <Spacer />
        <Card
          onMouseUp={handleClick}
          width={"48%"}
          backgroundColor={"#ffffff"}
          _hover={{ backgroundColor: "#ffffff" }}
          cursor={"pointer"}
          justifyContent={"center"}
        >
          <CardHeader justifyContent={"center"}>
            <Heading
              fontSize="md"
              fontWeight={"medium"}
              mb={1}
              color={"gray.700"}
              textAlign={"center"}
            >
              Feeling uplifted and ready to share some positivity!
            </Heading>
          </CardHeader>
        </Card>
      </Flex>
    </div>
  );
}
