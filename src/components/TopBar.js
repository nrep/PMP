import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Link, Icon } from "@quarkly/widgets";
import ActiveMenuItem from "./ActiveMenuItem";
import { MdSearch } from "react-icons/md";
const defaultProps = {
	"display": "flex",
	"height": "50px",
	"justify-content": "space-between",
	"background": "#15b6c0"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"flex": "1"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"flex": "2",
			"border-style": "solid",
			"border-width": "0px 1px",
			"border-color": "#aaa8a8",
			"display": "flex",
			"justify-content": "space-between"
		}
	},
	"activeMenuItem": {
		"kind": "ActiveMenuItem",
		"props": {}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"flex": "1",
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"border-width": 0,
			"border-color": "rgba(255, 255, 255, 0.31)",
			"border-style": "solid",
			"hover-flex": "1",
			"hover-border-style": "none",
			"hover-box-shadow": "inset 2px 2px 4px 4px #1a959f",
			"hover-background": "#22a2ac",
			"children": <Link href="#" font="bold 16px Ubuntu" text-decoration-line="initial" color="#ffffff">
				Services
			</Link>
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"flex": "1",
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"border-color": "rgba(255, 255, 255, 0.31)",
			"border-style": "solid",
			"hover-flex": "1",
			"hover-border-style": "none",
			"hover-box-shadow": "inset 2px 2px 4px 4px #1a959f",
			"hover-background": "#22a2ac",
			"border-width": "0px 0px 0px 0.5px",
			"children": <Link href="#" font="bold 16px Ubuntu" text-decoration-line="initial" color="#ffffff">
				Doctors
			</Link>
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"flex": "1",
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"border-color": "rgba(255, 255, 255, 0.31)",
			"border-style": "solid",
			"hover-flex": "1",
			"hover-border-style": "none",
			"hover-box-shadow": "inset 2px 2px 4px 4px #1a959f",
			"hover-background": "#22a2ac",
			"border-width": "0px 0px 0px 0.5px",
			"children": <Link href="#" font="bold 16px Ubuntu" text-decoration-line="initial" color="#ffffff">
				News
			</Link>
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"flex": "1",
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"border-color": "rgba(255, 255, 255, 0.31)",
			"border-style": "solid",
			"hover-flex": "1",
			"hover-border-style": "none",
			"hover-box-shadow": "inset 2px 2px 4px 4px #1a959f",
			"hover-background": "#22a2ac",
			"border-width": "0px 0px 0px 0.5px",
			"children": <Link href="#" font="bold 16px Ubuntu" text-decoration-line="initial" color="#ffffff">
				About
			</Link>
		}
	},
	"box6": {
		"kind": "Box",
		"props": {
			"flex": "1",
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"border-color": "rgba(255, 255, 255, 0.31)",
			"border-style": "solid",
			"hover-flex": "1",
			"hover-border-style": "none",
			"hover-box-shadow": "inset 2px 2px 4px 4px #1a959f",
			"hover-background": "#22a2ac",
			"border-width": "0px 0px 0px 0.5px",
			"children": <Link href="#" font="bold 16px Ubuntu" text-decoration-line="initial" color="#ffffff">
				Contact
			</Link>
		}
	},
	"box7": {
		"kind": "Box",
		"props": {
			"flex": "1",
			"display": "flex",
			"justify-content": "center"
		}
	},
	"box8": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"background": "#22a2ac"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdSearch,
			"color": "#ffffff",
			"padding": "0px 13px 0px 13px",
			"height": "100%",
			"box-shadow": "inset 1px 1px 2px 2px #1a959f"
		}
	}
};

const TopBar = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")} />
		<Box {...override("box1")}>
			<ActiveMenuItem {...override("activeMenuItem")} />
			<Box {...override("box2")} />
			<Box {...override("box3")} />
			<Box {...override("box4")} />
			<Box {...override("box5")} />
			<Box {...override("box6")} />
		</Box>
		<Box {...override("box7")}>
			<Box {...override("box8")}>
				<Icon {...override("icon")} />
			</Box>
		</Box>
		{children}
	</Box>;
};

Object.assign(TopBar, { ...Box,
	defaultProps,
	overrides
});
export default TopBar;