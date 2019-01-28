import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Button } from '.';

storiesOf('(component) Hello', module)
  .addDecorator(withKnobs)
  .add('default',
    withInfo({ inline: false })
    (() => <Button text="asdf" />)
  );
