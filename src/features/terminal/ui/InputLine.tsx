import { memo } from 'react';

export const InputLine = memo(function InputLine({ text }: { text: string }) {
  return (
    <div className="flex">
      <span>{'> ' + text}</span>
      <span className="animate-blink ml-1 h-5 w-1 bg-green-300"></span>
    </div>
  );
});
