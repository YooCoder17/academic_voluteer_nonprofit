import { ChakraProvider, Box } from "@chakra-ui/react";
import Footer from "@components/footer";
import Header from "@components/header";
import { pageview } from "@lib/gtag";
import theme from "@styles/theme";
import { META } from "config";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Head>
				<title>{META.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ChakraProvider theme={theme}>
				<Header />
				<Box w="100%" h="50px" />

				<Component {...pageProps} />

				<Footer />
			</ChakraProvider>
		</>
	);
}
