import { getArtInfo } from "@api/notion";
import {
	AspectRatio,
	Center,
	Divider,
	Heading,
	HStack,
	Icon,
	Image,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	UnorderedList,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { rounded } from "@styles/theme";
import React from "react";
import {
	RiDiscordLine,
	RiFacebookBoxLine,
	RiInstagramLine,
	RiLinkedinBoxLine,
	RiSpotifyLine,
	RiTwitterLine,
} from "react-icons/ri";
import { SiTiktok } from "react-icons/si";
import { ArtData } from "types";

export default function Community({
	artInfo,
}: {
	artInfo: ArtData;
}): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isOpenSpotify,
		onOpen: onOpenSpotify,
		onClose: onCloseSpotify,
	} = useDisclosure();
	return (
		<>
			<Container py={10}>
				<ContainerInside>
					<VStack textAlign="left">
						<HStack
							textAlign="left"
							flexDir={{ base: "column", md: "row" }}
							spacing={10}
						>
							<Stack boxSize="80%" mb={25}>
								<Stack
									backgroundColor="brand.transparent2"
									rounded={rounded}
									boxShadow="lg"
								>
									<AspectRatio ratio={1}>
										<Image
											src={artInfo.image}
											boxSize="100%"
											rounded={rounded}
											objectFit="cover"
											boxShadow="lg"
											transition="all 0.2s ease"
											_hover={{
												cursor: "pointer",
												transform: "scale(0.95)",
											}}
											onClick={onOpen}
										/>
									</AspectRatio>

									<Modal
										isOpen={isOpen}
										onClose={onClose}
										isCentered
										motionPreset="slideInRight"
									>
										<ModalOverlay />
										<ModalContent
											bg="brand.purple.dark"
											textAlign="left"
										>
											<ModalHeader>
												Monthly Art Contest Winner
											</ModalHeader>
											<ModalCloseButton />
											<ModalBody>
												This month's art contest prompt
												was:{" "}
												<Text>
													{artInfo.monthlyPrompt}
												</Text>
												<Text mt={5}>
													The winner is:
													<Heading size="sm">
														{artInfo.name}
													</Heading>
												</Text>
												<Heading size="sm" mt={5}>
													Artist Description:
												</Heading>
												<Text>
													{artInfo.description}
												</Text>
												<Heading size="sm" mt={5}>
													{artInfo.socialMedia.map(
														(
															social,
															key: number
														) => {
															return (
																<Text
																	mt={5}
																	key={key}
																>
																	Follow{" "}
																	{
																		artInfo.name
																	}{" "}
																	on{" "}
																	{
																		social.media
																	}
																	:{" "}
																	{social.link ? (
																		<NextLink
																			href={
																				social.link
																			}
																		>
																			{
																				social.tag
																			}
																		</NextLink>
																	) : (
																		<Text>
																			{
																				social.tag
																			}
																		</Text>
																	)}
																</Text>
															);
														}
													)}
												</Heading>
											</ModalBody>

											<ModalFooter>
												<Button
													mr={3}
													onClick={onClose}
												>
													Close
												</Button>
											</ModalFooter>
										</ModalContent>
									</Modal>
								</Stack>

								<Text textAlign="center">
									Winning artwork from the latest event!
								</Text>
							</Stack>

							<Stack w="100%">
								<Heading size="lg">Our Community</Heading>

								<Text fontSize="lg">
									Our organization features a global community
									of over 60,000 teenagers. In this diverse,
									open-minded, and inclusive community, you'll
									have opportunities to make new friends from
									all around the world.
								</Text>
							</Stack>
						</HStack>

						<HStack
							flexDir={{ base: "column", md: "row" }}
							//flexWrap="wrap"
							justify="center"
							spacing={{ base: 0, md: 10 }}
							textAlign="center"
						>
							<VStack
								w="100%"
								backgroundColor="brand.transparent"
								p="20px"
								rounded={rounded}
								boxShadow="lg"
								h="300px"
								justify="center"
							>
								<Heading>Events</Heading>
								<Heading size="sm" as="i">
									We organize community events, often with
									prizes, such as:
								</Heading>
								<UnorderedList textAlign="left">
									<ListItem>Competitions</ListItem>
									<ListItem>Hackathons</ListItem>
									<ListItem>Talent Show</ListItem>
									<ListItem>Movie Nights</ListItem>
									<ListItem>Game Nights</ListItem>
								</UnorderedList>
								{/* <Heading size="sm">
									Join our discord server to participate in
									these events!
								</Heading> */}
							</VStack>

							<VStack
								w="100%"
								backgroundColor="brand.transparent"
								p="20px"
								rounded={rounded}
								boxShadow="lg"
								h="300px"
								my="20px!important"
								justify="center"
							>
								<Heading mt="-15px">Music</Heading>
								<Heading size="sm" as="i">
									We curate playlists to help you study, with
									genres like:
								</Heading>
								<UnorderedList textAlign="left">
									<NextLink
										href="https://open.spotify.com/playlist/5xy112KNO4WBzaxR1tioT9?si=cbf67fcfe567406b&nd=1"
										isExternal
									>
										<ListItem>Study Lofi</ListItem>
									</NextLink>

									<NextLink
										href="https://open.spotify.com/playlist/2qfpV3Cv3LGASgLk5DDIwA?si=df83f8b734784065"
										isExternal
									>
										<ListItem>Jazz Lofi</ListItem>
									</NextLink>

									<NextLink
										href="https://open.spotify.com/playlist/3KUCDUAke9JNCi3EC3DR4A?si=b84da9bd407d43f2"
										isExternal
									>
										<ListItem>90s Pop</ListItem>
									</NextLink>

									<NextLink
										href="https://open.spotify.com/playlist/1lhX7W0NEvzMSsFCkQfxk4?si=5c16816fc6974f87"
										isExternal
									>
										<ListItem>2010-2015 Pop</ListItem>
									</NextLink>
								</UnorderedList>
								{/* 
								<Heading size="5px">
									Check out our Spotify for the complete list!
								</Heading> */}
							</VStack>

							<VStack
								w="100%"
								backgroundColor="brand.transparent"
								p="20px"
								rounded={rounded}
								boxShadow="lg"
								h="300px"
								justify="center"
							>
								<Heading mt="-15px">Daily</Heading>
								<Heading size="sm" as="i">
									We release daily opportunities and
									entertainment, such as:
								</Heading>
								<UnorderedList textAlign="left">
									<ListItem>
										Internship/ Job Openings
									</ListItem>
									<ListItem>Student Discounts</ListItem>
									<ListItem>Motivational Quotes</ListItem>
									<ListItem>Fun Questions</ListItem>
								</UnorderedList>
							</VStack>
						</HStack>
					</VStack>
					<Divider borderColor="white" mt="50px" />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside maxW="1000px">
					<HStack
						flexDir={{ base: "column", md: "row" }}
						spacing={{ base: 0, md: 10 }}
					>
						{/* disc box */}
						<VStack
							boxSize="100%"
							bg="brand.transparent"
							p="15px"
							rounded={rounded}
							boxShadow="lg"
							justify="center"
							spacing={5}
						>
							<NextLink
								href="https://discord.com/invite/school"
								isExternal
							>
								<Image
									src="\undraw\duck_group_shot.png"
									h="300px"
									objectFit="cover"
								/>
							</NextLink>

							<Heading size="md" color="white">
								Join our Discord. Come for the academic help,
								stay for the family!
							</Heading>
						</VStack>

						<Stack
							boxSize="100%"
							flexDir="column"
							my="20px!important"
							align={{ base: "center", md: "left" }}
							alignItems="stretch"
						>
							<Heading textAlign={{ base: "center", md: "left" }}>
								Our Discord Server
							</Heading>

							<Text
								fontSize="2xl"
								textAlign={{ base: "center", md: "left" }}
							>
								Our Discord server offers all of the features
								above, and more! Our 60k members are high school
								students who help each other with academics,
								extracurricular activities, and general life.
								Communication is through text chat, voice calls,
								and other methods!
							</Text>

							<NextLink
								href="https://discord.com/invite/school"
								isExternal
								w="fit-content"
							>
								<Button>Join Our Discord</Button>
							</NextLink>
						</Stack>
					</HStack>

					<Divider borderColor="white" my="50px" />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside>
					<VStack>
						<VStack spacing={4}>
							<Heading>Our Socials</Heading>
							<Container>
								<Heading
									fontSize="18px"
									mb="35px"
									color="white"
								>
									Check out our socials for tips,
									entertainment, music, podcasts,
									opportunities, and more!
								</Heading>
							</Container>
						</VStack>

						<HStack
							flexWrap="wrap"
							flexDir={{ base: "column", sm: "row" }}
							justify="center"
							align="center"
						>
							<Icon
								as={RiSpotifyLine}
								boxSize={100}
								color="white"
								onClick={onOpenSpotify}
								transition="all 0.2s ease"
								_hover={{
									cursor: "pointer",
									transform: "scale(1.20)",
								}}
							/>

							<Modal
								isOpen={isOpenSpotify}
								onClose={onCloseSpotify}
							>
								<ModalOverlay />
								<ModalContent bg="brand.purple.dark">
									<ModalHeader>Spotify</ModalHeader>
									<ModalCloseButton />
									<ModalBody>
										<Button variant="outline">
											<NextLink
												href="https://open.spotify.com/user/5lkgh8ryszqens1ywo58m5lv8?si=e3b58782d2e94498"
												isExternal
											>
												<Heading size="md">
													Our Spotify
												</Heading>
											</NextLink>
										</Button>

										<Text>
											{" "}
											Here are links to all of our
											playlists:{" "}
										</Text>

										<Center>
											<Divider
												borderColor="white"
												width="250px"
												mb="15px"
											/>
										</Center>

										<Heading size="md">
											Lofi Playlists:
										</Heading>

										<Text>
											<NextLink
												href="https://open.spotify.com/playlist/5xy112KNO4WBzaxR1tioT9?si=cbf67fcfe567406b&nd=1"
												isExternal
											>
												Study Lofi,
											</NextLink>
										</Text>

										<Text>
											<NextLink
												href="https://open.spotify.com/playlist/2qfpV3Cv3LGASgLk5DDIwA?si=df83f8b734784065"
												isExternal
											>
												Jazz Lofi,
											</NextLink>
										</Text>

										<Text>
											<NextLink
												href="https://open.spotify.com/playlist/42VuHYE30tU6olqgYCUGj9?si=4cdc91ce894b4d8c"
												isExternal
											>
												Rainy Day Lofi,
											</NextLink>
										</Text>

										<Text>
											<NextLink
												href="https://open.spotify.com/playlist/6WGCRBoHJ5NZRg6D3VM7DK?si=4b658781fd54463b"
												isExternal
											>
												Anime Lofi,
											</NextLink>
										</Text>

										<Text>
											<NextLink
												href="https://open.spotify.com/playlist/3DGBkdcT236zwEQqsaeiHc?si=c56fda3f5c994ddd"
												isExternal
											>
												Sleeping Lofi,
											</NextLink>
										</Text>

										<Divider
											borderColor="white"
											mt="10px"
											mb="10px"
										/>

										<Heading size="md">
											Pop Playlists:
										</Heading>

										<Text>
											<NextLink href="https://open.spotify.com/playlist/3KUCDUAke9JNCi3EC3DR4A?si=b84da9bd407d43f2">
												90s Pop,
											</NextLink>
										</Text>

										<Text>
											<NextLink
												href="https://open.spotify.com/playlist/2l050Xz8rnNfYqkyx47WTu?si=040ec727a26844bd"
												isExternal
											>
												2000-2009 Pop,
											</NextLink>
										</Text>

										<Text>
											<NextLink
												href="https://open.spotify.com/playlist/1lhX7W0NEvzMSsFCkQfxk4?si=5c16816fc6974f87"
												isExternal
											>
												2010-2015 Pop,
											</NextLink>
										</Text>

										<Text>
											<NextLink
												href="https://open.spotify.com/playlist/02oYO9n5qfmULA2deeQ4pR?si=1be766a9b13e4ccf"
												isExternal
											>
												2016-2017 Pop,
											</NextLink>
										</Text>

										<Text>
											<NextLink
												href="https://open.spotify.com/playlist/3zXZy9Xh93IY13jpqYf6AU?si=f58dac68060a46a6"
												isExternal
											>
												2018-2019 Pop,
											</NextLink>
										</Text>

										<Text>
											<NextLink
												href="https://open.spotify.com/playlist/1qyZMhC4rC1tc04FdfQr00?si=221b54418a0f4077"
												isExternal
											>
												2020-2021 Pop,
											</NextLink>
										</Text>
									</ModalBody>
									<ModalFooter>
										<Button
											colorScheme="purple"
											mr={3}
											onClick={onCloseSpotify}
										>
											Close
										</Button>
									</ModalFooter>
								</ModalContent>
							</Modal>

							<NextLink
								href="https://www.instagram.com/school.simplified/"
								isExternal
							>
								<Icon
									as={RiInstagramLine}
									boxSize={100}
									color="white"
									transition="all 0.2s ease"
									_hover={{
										cursor: "pointer",
										transform: "scale(1.20)",
									}}
								/>
							</NextLink>

							<NextLink
								href="https://www.facebook.com/SchoolSimple/"
								isExternal
							>
								<Icon
									as={RiFacebookBoxLine}
									boxSize={100}
									color="white"
									transition="all 0.2s ease"
									_hover={{
										cursor: "pointer",
										transform: "scale(1.20)",
									}}
								/>
							</NextLink>

							<NextLink
								href="https://discord.com/invite/school"
								isExternal
							>
								<Icon
									as={RiDiscordLine}
									boxSize={{ base: 100, md: 150 }}
									color="white"
									transition="all 0.2s ease"
									_hover={{
										cursor: "pointer",
										transform: "scale(1.20)",
									}}
								/>
							</NextLink>

							<NextLink
								href="https://www.tiktok.com/@schoolsimplified"
								isExternal
							>
								<Icon
									as={SiTiktok}
									boxSize={90}
									color="white"
									transition="all 0.2s ease"
									_hover={{
										cursor: "pointer",
										transform: "scale(1.20)",
									}}
								/>
							</NextLink>

							<NextLink
								href="https://twitter.com/schoolsimplify"
								isExternal
							>
								<Icon
									as={RiTwitterLine}
									boxSize={100}
									color="white"
									transition="all 0.2s ease"
									_hover={{
										cursor: "pointer",
										transform: "scale(1.20)",
									}}
								/>
							</NextLink>

							<NextLink
								href="https://www.linkedin.com/company/school-simplified"
								isExternal
							>
								<Icon
									as={RiLinkedinBoxLine}
									boxSize={100}
									color="white"
									transition="all 0.2s ease"
									_hover={{
										cursor: "pointer",
										transform: "scale(1.20)",
									}}
								/>
							</NextLink>
						</HStack>
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}

export async function getServerSideProps() {
	const artInfo = await getArtInfo();
	console.log(artInfo);
	return { props: { artInfo } };
}
