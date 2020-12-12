import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"display": "flex",
	"justify-content": "center",
	"align-items": "stretch",
	"flex": "1",
	"background": "#22a2ac",
	"box-shadow": "inset 2px 2px 4px 4px #1a959f"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "bold 16px Ubuntu",
			"color": "#ffffff",
			"children": "Home"
		}
	}
};

const ActiveMenuItem = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		{children}
	</Box>;
};

Object.assign(ActiveMenuItem, { ...Box,
	defaultProps,
	overrides
});
export default ActiveMenuItem;