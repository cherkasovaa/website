import { memo } from 'react';

export const CommandLines = memo(function CommandLines({ lines }: { lines: string[] }) {
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
