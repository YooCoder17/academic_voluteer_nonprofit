import { getSubjects } from "@api/notion";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NotesSection from "@components/resources/notes_section";
import { AllSubjects } from "types";

/**
 * Notes and stuff
 *
 * @returns the Resources page
 */
export default function Resources({ subjects }: AllSubjects): JSX.Element {
	return (
		<>
			<Container bg="brand.transparent">
				<ContainerInside my={5}>
					<Flex
						flexDir={{ base: "column", sm: "row" }}
						alignItems="center"
						justifyContent="space-between"
					>
						<Box textAlign={{ base: "center", sm: "left" }}>
							<Heading mb={3}>Resources</Heading>
							<Text fontSize={20}>
								All the notes you'll ever want for your academic
								needs!
							</Text>
						</Box>
						<Image
							src="/undraw/file_bundle.svg"
							w={{ base: 200, md: 300, lg: 400 }}
							mt={{ base: 5, sm: 0 }}
						/>
					</Flex>
				</ContainerInside>
			</Container>

			<NotesSection subjects={subjects} />

			{/* <Container bg="brand.transparent">
				<ContainerInside my={5}>
					<Flex
						alignItems="center"
						justifyContent="space-between"
						flexDir={{ base: "column", sm: "row" }}
					>
						<Image
							src="/undraw/notes.svg"
							w={{ base: 200, md: 300, lg: 400 }}
							mb={{ base: 5, sm: 0 }}
						/>
						<Box textAlign={{ base: "center", md: "right" }}>
							<Heading mb={3}>
								Want community service hours?
							</Heading>
							<Text>
								Earn official volunteer hours by submitting
								notes to help our community!
							</Text>
						</Box>
					</Flex>
				</ContainerInside>
			</Container> */}
		</>
	);
}

export async function getServerSideProps() {
	const subjects = await getSubjects();
	return { props: { subjects } };
}
