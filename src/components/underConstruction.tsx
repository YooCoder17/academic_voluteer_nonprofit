import { Stack, VStack, Image, Heading, Text, Button } from "@chakra-ui/react";
import Container from "./container";
import ContainerInside from "./containerInside";
import NextChakraLink from "./nextChakra";

export default function UnderConstruction(): JSX.Element {
	return (
		<Container>
			<ContainerInside py={10}>
				<Stack
					spacing={5}
					justify="center"
					align="center"
					direction={{ base: "column", sm: "row" }}
				>
					<VStack spacing={3}>
						<Heading>Under Construction</Heading>
						<Text>
							Thanks for checking in! Timmy is working hard on
							creating this webpage for everyone.
						</Text>
						<Text>We hope to work with you soon!</Text>
						<NextChakraLink href="/" _hover={{ cursor: "auto" }}>
							<Button _hover={{ cursor: "pointer" }}>
								Return to Home
							</Button>
						</NextChakraLink>
					</VStack>
					<Image
						src="/timmy/29.png"
						w={{ base: 200, sm: 250, md: 300 }}
					/>
				</Stack>
			</ContainerInside>
		</Container>
	);
}
