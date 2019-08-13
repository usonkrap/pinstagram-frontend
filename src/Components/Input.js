import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.input`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
`;

const Input = ({ placeholder, requeird, value, onChange, type, className }) => (
  <Container
    placeholder={placeholder}
    requeird={requeird}
    value={value}
    onChange={onChange}
    type={type}
    className={className}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  requeird: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default Input;
