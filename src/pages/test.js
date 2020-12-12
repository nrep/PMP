import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { FaClinicMedical } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.TopBar height="60px" />
		<Section height="600px" padding="0 0 0 0" display="block" background="url(https://images.unsplash.com/photo-1575654417486-6289490869b7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000)">
			<Override slot="SectionContent" width="100%" border-style="none" />
			<Box
				width="186px"
				height="75px"
				box-shadow="1px 0 3px 1px rgba(0, 0, 0, 0.21)"
				border-width="0.5px"
				border-style="solid"
				border-color="rgba(128, 128, 128, 0)"
				position="absolute"
				bottom="auto"
				left="62px"
				right="auto"
				top="17px"
				background="#ffffff"
				z-index="1"
				border-radius="4px"
				display="flex"
				align-items="center"
				padding="0px 20px 0px 20px"
			>
				<Box display="flex" height="100%" align-items="center">
					<Icon category="fa" icon={FaClinicMedical} color="#1a049a" />
				</Box>
				<Box
					flex="1"
					height="100%"
					display="flex"
					flex-direction="column"
					justify-content="space-evenly"
					margin="0px 0px 0px 10px"
					padding="0px 0px 0px 10px"
				>
					<Text margin="0px 0px 0px 0px" padding="0px 0px 0px 0px" font="12px Acme" letter-spacing="1.5px">
						POLYCLINIQUE
					</Text>
					<Text margin="0px 0px 0px 0px" padding="0px 0px 0px 0px" font="bold 12px Acme" letter-spacing="1.5px">
						MEDICALE
					</Text>
					<Text margin="0 0px 0px 0px" font="bolder 16px Acme" color="#1a049a" letter-spacing="2px">
						LA{" "}PROVIDENCE
					</Text>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});