import {
	Center,
	Heading,
	Image,
	Text,
	VStack,
	Flex,
	SimpleGrid,
	Box,
	Stack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { motion } from "framer-motion";

type CardTestimonial = {
	name: string;
	title: string;
	content: string;
};

const cardTestimonial: CardTestimonial[] = [
	{
		name: "Devin S.",
		title: "Website Development Student",
		content:
			"I was able to start my own website with just React and Chakra UI. I'm so happy with it.",
	},
	{
		name: "Ally H.",
		title: "Website Development Student",
		content:
			"I was able to get started with web development with zero prior knowledge on the subject!",
	},
	{
		name: "Daniyal S.",
		title: "Java 101 Student",
		content:
			"I'm so glad I found Programming Simplified. It's a great place to learn.",
	},
	{
		name: "Kaylee A.",
		title: "Python 101 Student",
		content:
			"I've learned so much from this course! I'm so excited to continue learning!",
	},
];

export default function Testimonials(): JSX.Element {
	return (
		<>
			<Container
				bg="linear-gradient(180deg, rgba(90, 104, 210, 0.7) 0%, rgba(167, 178, 255, 0.476) 100%)"
				py={10}
				px={{ base: 0, lg: 40 }}
			>
				<Center>
					<ContainerInside>
						<Stack 					
						direction={{ base: "column", lg: "row" }}
						align="start"
						spacing={5}
					>
							<Stack mx={30} overflow="hidden" textAlign="left" align="self-start">
									<Image
										src="/ps/commas.svg"
										w={{
											base: "40px",
											md: "50px",
											lg: "55px",
										}}
										display={{ base: "block", md: "block" }}
										alt="commas"
										py={3}
									/>

										<Heading size="lg">
											Why Programming Simplified?
										</Heading>
										<Text>
											Programming Simplified is here to
											help you learn, grow and succeed.
										</Text>
										<Text>
											Here are some testimonials from
											students:
										</Text>
							</Stack>
								<Flex flexDir="column-reverse" align="stretch">
									<SimpleGrid
										columns={{ base: 1, lg: 2 }}
										mt={2}
										spacingX={26}
										spacingY={39}
										px={{ base: 5, lg: 10 }}
									>
										{cardTestimonial.map(
											(cardTestimonial) => (
												<motion.div
													initial="initial"
													whileInView="onView"
													variants={{
														onView: {
															opacity: 1,
															x: 0,
															transition: {
																duration: 1,
																delay: 0.3,
															},
														},
													}}
												>
													<Card
														{...cardTestimonial}
														key={
															cardTestimonial.title
														}
													/>
												</motion.div>
											)
										)}
									</SimpleGrid>
								</Flex>
						</Stack>
					</ContainerInside>
				</Center>
			</Container>
		</>
	);
}

function Card(props: CardTestimonial): JSX.Element {
	return (
		<VStack
			bg="#5A60ADCC"
			align="stretch"
			rounded={10}
			overflow="hidden"
			flex={1}
		>
			<Text px={3.5} py={2.5} flex={1} textAlign="left">
				{props.content}
			</Text>

			<Box bg="#5A60AD" px={3.5} py={1.5} textAlign="left">
				<Heading size="sm">{props.name}</Heading>

				<Text flex={1} textAlign="left" fontSize={14}>
					{props.title}
				</Text>
			</Box>
		</VStack>
	);
}
