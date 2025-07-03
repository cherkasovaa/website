import { useEffect, useState } from 'react';

import { commands } from '../../model/constants';

export const useTerminalAnimation = (): {
  displayedCommands: string[];
  currentText: string;
} => {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');

  useEffect(() => {
    if (currentIndex >= commands.length) return;

    const command = commands[currentIndex];
    let timeoutId: NodeJS.Timeout;

    const type = (charIndex: number): void => {
      if (charIndex >= command.text.length) {
        setDisplayedCommands((prev) => [...prev, command.text]);
        setCurrentText('');
        setCurrentIndex((prev) => prev + 1);
        return;
      }

      setCurrentText((prev) => prev + command.text[charIndex]);

      timeoutId = setTimeout(() => type(charIndex + 1), 50);
    };

    timeoutId = setTimeout(() => type(0), command.delay * 1000);

    return (): void => clearTimeout(timeoutId);
  }, [currentIndex]);

  return { displayedCommands, currentText };
};
