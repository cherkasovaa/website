import { type JSX, memo } from 'react';

export const InputLine = memo(({ text }: { text: string }): JSX.Element => {
  return (
    <div className="flex">
      <span>{'> ' + text}</span>
      <span className="animate-blink ml-1 h-5 w-1 bg-green-300"></span>
    </div>
  );
});
