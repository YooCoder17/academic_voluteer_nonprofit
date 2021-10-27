import {
	Box,
	Heading,
	HStack,
	Text,
	Stack,
	Image,
	VStack,
} from "@chakra-ui/react";
import ContainerInside from "@components/containerInside";
import Button from "@components/button";
import ContainerBackground from "@components/containerBackground";
import { BlogListing } from "types";
import NextChakraLink from "@components/nextChakra";

export default function Blog({ listing }: { listing: BlogListing[] }) {
	return (
		<ContainerBackground py={10}>
			<ContainerInside>
				<Stack textAlign="left" spacing={5}>
					<Stack w={{ base: "100%", lg: "50%" }}>
						<Heading>
							Check out <br /> The Latest Read!
						</Heading>
						<Text>
							Check out the latest blog from our student authors
							and read about what they have to say!
						</Text>
						<Button w="fit-content">Read More</Button>
					</Stack>
					<HStack justify="center" spacing={{ base: 0, lg: 5 }}>
						<Card
							src={listing[0]?.icon}
							title={listing[0]?.title}
							href={listing[0]?.link}
						/>
						<Card
							src={listing[1]?.icon}
							title={listing[1]?.title}
							href={listing[1]?.link}
						/>
						<Card
							src={listing[2]?.icon}
							title={listing[2]?.title}
							href={listing[2]?.link}
						/>
					</HStack>
				</Stack>
				{/* <Box py={5}>
					<Flex
						align="center"
						justify="center"
						flexDir={{ base: "column", md: "row" }}
					>
						<Box>
							<Heading
								textAlign={{ base: "center", md: "left" }}
								fontSize="2xl"
								mb={3}
							>
								Why Us?
							</Heading>
							<Text
								textAlign={{ base: "center", md: "left" }}
								maxW="60ch"
							>
								School Simplified believes that quality
								education should be accessible to all students.
								As an organization run by students and for
								students, we want to help you succeed!
							</Text>
						</Box>
						<Image
							src="/timmy/25.png"
							alt="Timmy with puzzle pieces"
							w={{ base: 150, sm: 250, md: 300, lg: 400 }}
							ml={{ base: 0, md: 8 }}
							mt={{ base: 8, md: 0 }}
						/>
					</Flex>
				</Box> */}
			</ContainerInside>
		</ContainerBackground>
	);
}

function Card({ src, title, href }) {
	return (
		<VStack>
			<NextChakraLink href={`/blog/${href ?? ""}`}>
				<Box rounded={20} w="100%" bg="brand.transparent">
					<Image src={src} rounded={20} />
				</Box>
			</NextChakraLink>
			<Heading>{title}</Heading>
		</VStack>
	);
}
