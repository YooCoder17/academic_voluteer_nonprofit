import {
	AspectRatio,
	Heading,
	Image,
	Stack,
	Text,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	ModalFooter,
} from "@chakra-ui/react";
import Button from "@components/button";
import NextLink from "@components/nextChakra";
import { rounded } from "@styles/theme";
import React from "react";
import { ArtData } from "types";

export default function Art({
    artInfo
}: {
    artInfo: ArtData;
}): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Stack boxSize="80%" mb={25}>
			<Stack
				backgroundColor="brand.transparent2"
				rounded={rounded}
				boxShadow="lg"
			>
				<AspectRatio ratio={1}>
					<Image
						src={artInfo.image}
						alt="art winner"
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
					<ModalContent bg="brand.purple.dark" textAlign="left">
						<ModalHeader>Monthly Art Contest Winner</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							This month's art contest prompt was:{" "}
							<Text>{artInfo.monthlyPrompt}</Text>
							<Text mt={5}>
								The winner is:
								<Heading size="sm">{artInfo.name}</Heading>
							</Text>
							<Heading size="sm" mt={5}>
								Artist Description:
							</Heading>
							<Text>{artInfo.description}</Text>
							<Heading size="sm" mt={5}>
								{artInfo.socialMedia.map(
									(social, key: number) => {
										return (
											<Text mt={5} key={key}>
												Follow {artInfo.name} on{" "}
												{social.media}:{" "}
												{social.link ? (
													<NextLink
														href={social.link}
													>
														{social.tag}
													</NextLink>
												) : (
													<Text>{social.tag}</Text>
												)}
											</Text>
										);
									}
								)}
							</Heading>
						</ModalBody>

						<ModalFooter>
							<Button mr={3} onClick={onClose}>
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
	);
}