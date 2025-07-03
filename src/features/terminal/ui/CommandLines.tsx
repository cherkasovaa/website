import { type JSX, memo } from 'react';

export const CommandLines = memo(({ lines }: { lines: string[] }): JSX.Element => {
  return (
    <>
      {lines.map((cmd, index) => (
        <div key={cmd + index} className="mb-2">
          <span>{'> ' + cmd}</span>
        </div>
      ))}
    </>
  );
});
