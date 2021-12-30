import styled, { css } from 'styled-components';

type WrapperStyles = {
  variant?: 'primary' | 'secondary';
}

export const Wrapper = styled.button<WrapperStyles>`
  ${({ variant }) => css`
    background-color: ${variant === "primary" ? "lightblue" : "lightsalmon"};
    padding: 8px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
  `}
`