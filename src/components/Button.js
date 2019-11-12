import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import Button from "@material-ui/core/Button";
import { radius, color } from "../theme";

// const StyledButton = styled(({ color, radius, ...props }) => (
// 	<Button {...props} />
// ))`
// 	&& {
// 		box-shadow: 0px 10px 20px rgba(62, 33, 222, 0.1);
// 		background: #5940e3;
// 		border-radius: ${props => props.radius};
// 		border: 0;
// 		color: ${props => props.color};
// 		height: 48px;
// 		padding: 0 30px;

// 		font-family: Roboto, sans-serif;
// 		font-style: normal;
// 		font-weight: bold;
// 		line-height: 1;
// 		font-size: 34px;
// 	}
// 	&:hover {
// 		box-shadow: 0px 20px 30px rgba(62, 33, 222, 0.2);
// 		background: #5940e3;
// 	}
// `;

// const StyledBtn = props => {
// 	const { children } = props;
// 	return (
// 		<div>
// 			<StyledButton {...props}>{children}</StyledButton>
// 		</div>
// 	);
// };

const StyledButton = styled.button`
	box-shadow: 0px 10px 20px rgba(62, 33, 222, 0.1);
	background: ${props => (props.isDisabled ? color.disabled : color.brand)};
	border-radius: ${props => props.radius};
	border: 0;
	color: ${props => props.color};
	height: 48px;
	padding: 0 30px;

	font-family: Roboto, sans-serif;
	font-style: normal;
	font-weight: bold;
	line-height: 1;
	font-size: 34px;
	transition: all 0.3s;
	outline: 0;
	cursor: pointer;

	&:hover {
		box-shadow: 0px 20px 30px rgba(62, 33, 222, 0.2);
		transition: all 0.3s;
	}
`;

const StyledBtn = props => {
	const { children, isDisabled } = props;
	return (
		<div>
			<StyledButton {...props} isDisabled={isDisabled}>
				{children}
			</StyledButton>
		</div>
	);
};

StyledButton.propTypes = {
	radius: PropTypes.oneOf([radius.soft, radius.medium, radius.hard]),
	isDisabled: PropTypes.bool,
	color: PropTypes.oneOf([color.white])
};

StyledButton.defaultProps = {
	radius: radius.soft,
	isDisabled: false
};

export default StyledBtn;
