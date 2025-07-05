import type { FC } from 'react';

import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from './providers/ThemeProvider';
import { AppRouter } from './routes/AppRouter';

const App: FC = () => (
  <HelmetProvider>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
