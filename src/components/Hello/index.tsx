import * as React from 'react';
import { FunctionComponent } from 'react';

export interface HelloProps {
  compiler: string;
  framework?: string;
}

export const Hello: FunctionComponent<HelloProps> = props => (
  <h1>Hello from {props.compiler} and {props.framework}!</h1>
);

Hello.defaultProps = {
  framework: 'react',
};
