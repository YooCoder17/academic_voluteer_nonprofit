import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	BoxProps,
	Button,
	Center,
	Divider,
	Heading,
	HStack,
	Icon,
	SimpleGrid,
	Spacer,
	Stack,
	StackProps,
	Text,
	VisuallyHidden,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { useContainerDimensions } from "@hooks/useContainerDimensions";
import { useEffect, useRef, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import { AllSubjects, NotesProps, Subject } from "types";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// use minified worker file
// for more documentation on this package, visit
// https://github.com/wojtekmaj/react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.min.js";

type NotesViewerProps = AllSubjects & BoxProps;

export default function NotesViewer({
	subjects,
	...boxProps
}: NotesViewerProps): JSX.Element {
	const [subject, setSubject] = useState("");
	const [pdfURL, setPdfURL] = useState("");
	return (
		<Container {...boxProps}>
			<ContainerInside>
				<SimpleGrid gap={3} columns={{ base: 1, md: subjects.length }}>
					{subjects.map((s: Subject) => (
						<Button
							key={s.title}
							onClick={() => {
								setSubject(s.title);
								setPdfURL("");
							}}
							bg={subject === s.title ? "white" : "transparent"}
							color={subject === s.title ? "brand.blue" : "white"}
							borderWidth={3}
							borderColor="white"
							pointerEvents={subject === s.title ? "none" : null}
						>
							{s.title}
						</Button>
					))}
				</SimpleGrid>
				<Divider mt={8} mb={14} borderColor="white" />
				{subject ? (
					<SimpleGrid gap={6} columns={{ base: 1, md: 2 }}>
						<NotesDropdown
							subject={subjects.find(
								(value) => value.title === subject
							)}
							onNotesSelect={(notes) => setPdfURL(notes.file.url)}
						/>
						<NotesPreview pdfURL={pdfURL} />
					</SimpleGrid>
				) : (
					<Text as="i">Select a subject above to get started!</Text>
				)}
			</ContainerInside>
		</Container>
	);
}

type NotesDropdownProps = {
	subject: Subject;
	onNotesSelect: (a: NotesProps) => void;
} & StackProps;

function NotesDropdown({
	subject,
	onNotesSelect,
	...stackProps
}: NotesDropdownProps): JSX.Element {
	return (
		<Stack
			{...stackProps}
			textAlign="left"
			spacing={0}
			rounded={5}
			overflow="hidden"
		>
			<Heading size="md" p={3} bg="brand.darkerBlue">
				{subject.title}
			</Heading>
			<VStack bg="#5A60ADCC" px={8} py={3} align="stretch" spacing={1.5}>
				{subject.content.map((clazz) => (
					<Box key={clazz.title}>
						<Heading size="sm" p={2} bg="#53599F" mb={1.5}>
							{clazz.title}
						</Heading>
						<Accordion bg="#5A60ADCC" allowMultiple>
							{clazz.content.map((unit) => (
								<AccordionItem border="none" key={unit.title}>
									<AccordionButton
										py={1.5}
										px={3}
										bg="#585EAB"
									>
										<Text fontSize={16} textAlign="left">
											{unit.title}
										</Text>
										<Spacer minW={10} />
										<AccordionIcon />
									</AccordionButton>
									<AccordionPanel bg="#656BB8CC" p={2}>
										<Stack spacing={0}>
											{unit.content.map((notes) => (
												<Box
													onClick={() =>
														onNotesSelect(notes)
													}
													fontSize={14}
													transition="all 0.2s ease"
													_hover={{
														background: "#fff5",
														cursor: "pointer",
													}}
													key={notes.title}
													px={2}
													py={0.5}
												>
													{notes.title}
												</Box>
											))}
										</Stack>
									</AccordionPanel>
								</AccordionItem>
							))}
						</Accordion>
					</Box>
				))}
			</VStack>
		</Stack>
	);
}

type NotesPreviewProps = { pdfURL: string } & StackProps;

function NotesPreview({
	pdfURL,
	...stackProps
}: NotesPreviewProps): JSX.Element {
	const [numPages, setNumPages] = useState(null);
	const pdfBox = useRef<HTMLDivElement>();
	const { width } = useContainerDimensions(pdfBox);
	useEffect(() => {
		setNumPages(null);
	}, [pdfURL]);

	function onDocumentLoadSuccess(success: any) {
		// console.log("loaded successfully!", success);
		setNumPages(success.numPages);
	}

	return (
		<Stack
			{...stackProps}
			textAlign="left"
			spacing={0}
			rounded={5}
			overflow="hidden"
		>
			<HStack p={3} bg="brand.darkerBlue">
				<Heading size="sm">Notes Preview</Heading>
				<Spacer />
				{pdfURL ? (
					<NextChakraLink href={pdfURL} isExternal>
						<Center>
							<Icon
								as={FaFileDownload}
								color="brand.yellow"
								transition="all 0.2s ease"
								_hover={{
									color: "white",
									transform: "scale(1.15)",
								}}
								_active={{ transform: "scale(1)" }}
							/>
							<VisuallyHidden>Download</VisuallyHidden>
						</Center>
					</NextChakraLink>
				) : null}
			</HStack>
			<Box bg="#5A60ADCC" px={8} py={3} borderBottomRadius={5}>
				{pdfURL ? (
					<Document
						file={pdfURL}
						onLoadSuccess={onDocumentLoadSuccess}
						onLoadError={console.error}
						error="Sorry, we were unable to load the document."
						externalLinkTarget="_blank"
					>
						<Box
							overflowX="hidden"
							overflowY="scroll"
							style={{ aspectRatio: "17/22" }}
						>
							<Stack overflow="visible" ref={pdfBox}>
								{[...Array(numPages).keys()].map((i) => (
									<Page
										pageIndex={i}
										width={width}
										error={`Sorry, we were unable to load page #${
											i + 1
										}.`}
										key={i}
									/>
								))}
							</Stack>
						</Box>
					</Document>
				) : (
					<Text as="i">Please select a file from the left!</Text>
				)}
			</Box>
		</Stack>
	);
}