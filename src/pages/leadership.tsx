/* eslint-disable react/no-array-index-key */
/* eslint-disable sonarjs/no-duplicate-string */
import { getGovernanceData } from "@api/notion";
import {
	Box,
	Divider,
	Flex,
	Heading,
	HStack,
	Stack,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	VStack,
	Center,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import StaffCard from "@components/staffcard";
import { useState } from "react";
import { GovernanceDocument, GovernanceSection, Person } from "types";

export default function About({ data }: { data: any }): JSX.Element {
	const [senior, setSenior] = useState(true);
	return (
		<>
			<Container>
				<ContainerInside>
					<Box>
						<Heading size="2xl" my={7}>
							Leadership
						</Heading>

						<Divider bg="white" />
						<Center my={5}>
							<ExecutiveButton
								onClick={() => {
									!senior && setSenior(true);
								}}
								left
								active={senior}
							>
								Senior Executives
							</ExecutiveButton>
							<ExecutiveButton
								onClick={() => {
									senior && setSenior(false);
								}}
								active={!senior}
							>
								Executives
							</ExecutiveButton>
						</Center>
						<Heading fontSize={30} mb={5}>
							Executive Profiles
						</Heading>
						<Flex justifyContent="center" flexWrap="wrap">
							{(senior ? seniorExecs : execs).map(
								(staff: Person, i: number) => {
									return (
										<StaffCard
											title={staff.title}
											name={staff.name}
											img={staff.img}
											key={i}
										/>
									);
								}
							)}
						</Flex>

						<Divider bg="white" />

						<Box mt={5}>
							<Heading fontSize={30}>Board of Directors</Heading>
						</Box>
						<Table variant="simple" colorScheme="whiteAlpha">
							<Thead>
								<Tr>
									<Th>
										<Heading fontSize={17}>Name</Heading>
									</Th>
									<Th>
										<Heading fontSize={17}>Title</Heading>
									</Th>
								</Tr>
							</Thead>
							<Tbody>
								{boardOfDirectors.map((staff) => (
									<Tr key={staff.name}>
										<Td fontWeight="bold" fontSize={20}>
											{staff.name}
										</Td>
										<Td fontSize={20}>{staff.title}</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
						<Divider bg="white" />

						<VStack py={5}>
							<Heading fontSize={30}>Founders</Heading>
							<HStack
								py={2}
								spacing={{ base: 0, sm: 10 }}
								flexDir={{ base: "column", sm: "row" }}
							>
								<Text fontSize={20} fontWeight="bold">
									Ethan Wu
								</Text>
								<Text fontSize={20} fontWeight="bold">
									Nathanael Ma
								</Text>
								<Text fontSize={20} fontWeight="bold">
									Ethan Hsu
								</Text>
								<Text fontSize={20} fontWeight="bold">
									Jason Mei
								</Text>
							</HStack>
						</VStack>
					</Box>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside>
					<Divider bg="white" />
					<Flex
						textAlign={{ base: "center", sm: "left" }}
						justify="center"
						mt={5}
						flexDir={{ base: "column", sm: "row" }}
					>
						{data.map((section: GovernanceSection) => {
							return (
								<Stack key={section.title} flex={1} my={3}>
									<Heading fontSize={20}>
										{section.title}
									</Heading>
									<Stack>
										{section.docs.map(
											(doc: GovernanceDocument) => {
												return (
													<NextLink
														key={doc.href}
														href={doc.href}
													>
														<Text>{doc.title}</Text>
													</NextLink>
												);
											}
										)}
									</Stack>
								</Stack>
							);
						})}
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}

export async function getServerSideProps() {
	const data = await getGovernanceData();
	return {
		props: {
			data,
		},
	};
}

const seniorExecs: Person[] = [
	{
		name: "Ethan Hsu",
		title: "Chief Executive Officer & President",
		img: "/staff/EthanHsu.jpg",
	},
	{
		name: "Lauren Hsieh",
		title: "Chief of Staff & Corporate Secretary ",
		img: "/staff/LaurenHsieh.jpg",
	},

	{
		name: "Param Patil",
		title: "Chief Advancements Officer ",
		img: "/staff/ParamPatil.jpg",
	},
	{
		name: "Harry Chow",
		title: "Chief Marketing Officer",
		img: "/staff/HarryChow.jpg",
	},
	{
		name: "Masa Murry",
		title: "Senior Vice President of Global Marketing",
		img: "/staff/MasaMurry.jpg",
	},
	{
		name: "Jason Mei",
		title: "Executive Vice President of Information Technology",
		img: "/staff/JasonMei.jpg",
	},
	{
		name: "Diana Zheng",
		title: "Corporate Treasurer",
		img: "/staff/DianaZheng.jpg",
	},
	{
		name: "Anncine Lin",
		title: "Chief Human Resources Officer",
		img: "/staff/AnncineLin.jpg",
	},
	{
		name: "Bhavyasri Suggula",
		title: "Executive Projects Director",
		img: "/staff/BhavyasriSuggula.jpg",
	},
	{
		name: "Hazim Arafa",
		title: "President of Programming Simplified",
		img: "/staff/HazimArafa.jpg",
	},
	{
		name: "David Sun",
		title: "President of National Chapters",
		img: "/staff/DavidSun.jpg",
	},

	{
		name: "Aarush Goradia",
		title: "President of Student Activities",
		img: "/staff/AarushGoradia.jpg",
	},
];

const execs: Person[] = [
	{
		name: "Jiahao Zhang",
		title: "Global Vice President of Advancement",
		img: "/staff/JiahaoZhang.jpg",
	},
	{
		name: "Yasmeen Elkheir",
		title: "Vice President of Operations, Programming Simplified",
		img: "/staff/YasmeenElkheir.jpg",
	},
	{
		name: "Isamar Zhu",
		title: "Vice President of Staff, Programming Simplified",
		img: "/staff/IsamarZhu.jpg",
	},
	{
		name: "Josh Schram",
		// name: "Josh Schram",
		title: "Vice President of Academics",
		img: "/staff/JoshSchram.jpg",
	},
	{
		name: "Rohit Choudhary",
		title: "Vice President of Academics, Digital",
		img: "/staff/RohitChoudhary.jpg",
	},

	{
		name: "Rohit Penta",
		title: "Vice President of Technology, Digital",
		img: "/staff/RohitPenta.jpg",
	},
	// {
	// 	name: "Max Konzerowsky",
	// 	title: "Vice President of Information-Technology, School Simplified Digital",
	// 	img: "/staff/MaxKonzerowsky.jpg",
	// },
	// {
	// 	name: "Nicholas Zhang",
	// 	title: "Vice President of Information-Technology, School Simplified Digital",
	// 	img: "/staff/NicholasZhang.jpg",
	// },

	// {
	// 	name: "Soap E",
	// 	// name: "Sophia Bhatia",
	// 	title: "Vice President of Community Engagement",
	// 	img: "/staff/soape.jpg",
	// },
	// {
	// 	name: "Noah Bondi",
	// 	title: "National VP of Communications (Chapters)",
	// 	img: "/staff/NoahBondi.jpg",
	// },
	// {
	// 	name: "Vivek Anandh",
	// 	title: "National VP of Information-Technology (Chapters)",
	// 	img: "/staff/VivekAnandh.jpg",
	// },
	{
		name: "Gavin Hecock",
		title: "Vice President of Student Activities",
		img: "/staff/GavinHecock.jpg",
	},
	{
		name: "Christina Dong",
		title: "Marketing Vice President of Student Activities",
		img: "/staff/ChristinaDong.jpg",
	},
	// {
	// 	name: "Adrian Sucahyo",
	// 	title: "Vice President of Operations, Chapters",
	// 	img: "/staff/AdrianSucahyo.jpg",
	// },
];

const boardOfDirectors: Person[] = [
	{
		name: "Ethan Hsu",
		title: "Chairperson",
		img: "/staff/default.png",
	},
	{
		name: "Nathanael Ma",
		title: "Lead Director",
		img: "/staff/default.png",
	},
	{
		name: "Madison Li",
		title: "Lead Director",
		img: "/staff/default.png",
	},
	{
		name: "Lauren Hsieh",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Diana Zheng",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Harry Chow",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Rohit Choudhary",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Atsi Gupta",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Isaias Vilato",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Param Patil",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Kayla Laguana",
		title: "Director",
		img: "/staff/default.png",
	},
];

function ExecutiveButton(props) {
	const { children, onClick, left, active } = props;
	return (
		<Box
			onClick={onClick}
			maxW="200px"
			py={3}
			w="100%"
			bg={
				active
					? "linear-gradient(90deg, #FFA270 0%, #e6c068 100%)"
					: "brand.transparent"
			}
			borderLeftRadius={left ? "100px" : 0}
			borderRightRadius={left ? 0 : "100PX"}
			transition="all 0.1s ease-in"
			_hover={{
				bg: "brand.transparent2",
				cursor: "pointer",
			}}
			{...props}
		>
			{children}
		</Box>
	);
}
