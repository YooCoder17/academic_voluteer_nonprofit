import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	return (
		<>
			<Container
				bg="#636EE0CD"
				as="header"
				py="10px"
				w="100%"
				position="fixed"
				zIndex={1000}
				backdropFilter="blur(5px)"
			>
				<ContainerInside>
					<Flex
						justify="space-between"
						align="center"
						flexWrap="wrap"
					>
						<Link href="/" _hover={{}}>
							<Flex justify="center" align="center">
								<Image src="/logo.png" w={30} />
								<Heading size="md" ml={2.5}>
									School Simplified
								</Heading>
							</Flex>
						</Link>
						{/* <Flex>
							<Link href="/about" mr="7px">
								About Us
							</Link>
							<Link href="/contact" mr="7px">
								Contact
							</Link>
							<Link href="/donate">Donate</Link>
						</Flex> */}
						OH SHIT IT BROKE
					</Flex>
				</ContainerInside>
			</Container>
			<Box w="100%" h="50px" />
		</>
	);
}
