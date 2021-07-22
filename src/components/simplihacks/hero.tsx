import { Box, Flex, Text, Image, Heading, Link } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React from "react";

type ButtonType = {
    link: string;
    text: string;
}

const buttons: ButtonType[] = [
	{
		link: "https://b5s8rxcywdj.typeform.com/to/vvH5SbWk",
		text: "Sign Up"
	},
	{
		link: "https://discord.gg/school",
		text: "Discord"
	},
	{
		link: "https://simplihacks.devpost.com/",
        text: "DevPost"
	},
];

export default function Hero(): JSX.Element {
	return (
		<>
			<Container py={19}>
				<ContainerInside>
					<Flex justify="center" align="center" flexWrap="wrap" py={3}>
                        <Box textAlign="center" mt={3}>
                            <Heading fontSize={40}>Simplihacks</Heading>
                            <Text fontSize={29}>
                                June 19-20 2021
                            </Text>
                            {buttons.map((button, i: number) => {
                                return (
                                    <Link href={button.link} target="_blank" key={i}>
                                        <Button m={3}>{button.text}</Button>
                                    </Link>
                                );
                            })}
                        </Box>
						<Box>
							<Image
								maxW="400px"
								src="/timmy/29.png"
								alt="Timmy hacking"
								display="block"
							/>
						</Box>
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
