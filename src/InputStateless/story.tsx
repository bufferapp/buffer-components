import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-actions' or i... Remove this comment to see the full error message
import { action } from '@storybook/addon-actions';
// @ts-expect-error TS(2307): Cannot find module '@storybook/addon-a11y' or its ... Remove this comment to see the full error message
import { withA11y } from '@storybook/addon-a11y';
import Input from './index';

const input = {
  value: 'user123',
  onChange: action('on-change'),
};

storiesOf('InputStateless', module)
  .addDecorator(withA11y)
  .add('default', () => <Input input={input} />)
  .add('with label', () => <Input input={input} label="Username" />)
  .add('with error', () => (
    <Input
      label="Username"
      input={input}
      meta={{
        error: 'unknown user',
        touched: true,
      }}
    />
  ))
  .add('with placeholder', () => <Input label="Username" placeholder="ex: kitteh1234" />)
  .add('with type = password', () => <Input input={input} type="password" />)
  .add('with type = email', () => (
    <Input
      input={{
        value: 'test@test.com',
        // @ts-expect-error TS(2322): Type '{ value: string; onChange: any; }' is not as... Remove this comment to see the full error message
        onChange: action('on-change'),
      }}
      type="email"
    />
  ))
  .add('with submitting = true', () => (
    <Input
      input={input}
      meta={{
        submitting: true,
      }}
    />
  ))
  // @ts-expect-error TS(2322): Type '{ input: { value: string; onChange: any; }; ... Remove this comment to see the full error message
  .add('focused', () => <Input input={input} focused />)
  .add('onFocus + onBlur', () => (
    <Input input={input} onFocus={action('on-focus')} onBlur={action('on-blur')} />
  ))
  .add('with type = textarea', () => <Input type="textarea" input={input} />)
  .add('with type = textarea & with label', () => (
    <Input type="textarea" input={input} label="Username" />
  ))
  .add('with type = textarea & with error', () => (
    <Input
      type="textarea"
      label="Username"
      input={input}
      meta={{
        error: 'unknown user',
        touched: true,
      }}
    />
  ))
  .add('with type = textarea & with placeholder', () => (
    <Input type="textarea" label="Username" placeholder="ex: kitteh1234" />
  ))
  .add('with type = textarea & with submitting = true', () => (
    <Input
      type="textarea"
      input={input}
      meta={{
        submitting: true,
      }}
    />
  ))
  // @ts-expect-error TS(2322): Type '{ type: string; input: { value: string; onCh... Remove this comment to see the full error message
  .add('with type = textarea & focused', () => <Input type="textarea" input={input} focused />)
  .add('with type = textarea & onFocus + onBlur', () => (
    <Input type="textarea" input={input} onFocus={action('on-focus')} onBlur={action('on-blur')} />
  ));
