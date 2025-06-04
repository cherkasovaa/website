import type { FC } from 'react';

import { ThemeProvider } from './providers/ThemeProvider';
import { AppRouter } from './routes/AppRouter';

const App: FC = () => (
  <ThemeProvider>
    <AppRouter />
  </ThemeProvider>
);

export default App;
