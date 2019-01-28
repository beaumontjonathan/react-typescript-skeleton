import * as React from 'react';
import { HTMLProps, FunctionComponent } from 'react';
import styled from 'theme';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  text: string;
}

const StyledButton = styled('button')`
  color: ${({ theme: { primaryColor } }) => primaryColor};
`;

export const Button: FunctionComponent<ButtonProps> = ({ text }) => (
  <StyledButton>
    {text}
  </StyledButton>
);
