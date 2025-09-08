'use client';

import { type JSX } from 'react';

import { motion } from 'framer-motion';

import { useTerminalAnimation } from '../lib/hooks/useTerminalAnimation';

import { CommandLines } from './CommandLines';
import { InputLine } from './InputLine';

export const Terminal = (): JSX.Element => {
  const { displayedCommands, currentText } = useTerminalAnimation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="m-auto h-72 w-full max-w-md justify-self-center overflow-hidden rounded-lg border border-gray-700 bg-gray-900 font-mono text-sm text-green-400 shadow-2xl shadow-neutral-900 md:h-82 md:justify-self-start md:text-base lg:h-72"
    >
      <div className="mb-4 flex items-center space-x-2 bg-gray-800 px-6 py-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-3 text-sm text-gray-500">alina@portfolio:~</div>
      </div>

      <div className="h-64 overflow-y-auto px-6">
        <CommandLines lines={displayedCommands} />

        <InputLine text={currentText} />
      </div>
    </motion.div>
  );
};
