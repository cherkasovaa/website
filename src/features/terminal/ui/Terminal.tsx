import { type JSX, useEffect, useState } from 'react';

import { motion } from 'motion/react';

import { commands } from '../model/constants';

export const Terminal = (): JSX.Element => {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [currentText, setCurrentText] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return (): void => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= commands.length) return;

    const command = commands[currentIndex];

    const initialTimeout = setTimeout(() => {
      let i = 0;

      const typingInterval = setInterval(() => {
        if (i < command.text.length) {
          setCurrentText((prev) => prev + command.text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setDisplayedCommands((prev) => [...prev, command.text]);
          setCurrentText('');
          setCurrentIndex((prev) => prev + 1);
        }
      }, 50);

      return (): void => clearTimeout(typingInterval);
    }, command.delay * 1000);

    return (): void => clearTimeout(initialTimeout);
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-72 w-full max-w-md justify-self-center overflow-hidden rounded-lg border border-gray-700 bg-gray-900 font-mono text-sm text-green-400 shadow-2xl shadow-neutral-900 md:justify-self-start md:text-base"
    >
      <div className="mb-4 flex items-center space-x-2 bg-gray-800 px-6 py-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-3 text-sm text-gray-500">alina@portfolio:~</div>
      </div>

      <div className="h-64 overflow-y-auto px-6">
        {displayedCommands.map((cmd, index) => (
          <div key={`${cmd}_${index}`} className="mb-2">
            <span>{cmd}</span>
          </div>
        ))}

        <div className="flex">
          <span>{'>' + currentText}</span>
          <span className={`ml-1 h-5 w-1 bg-green-300 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </div>
      </div>
    </motion.div>
  );
};
