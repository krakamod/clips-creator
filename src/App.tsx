import CssBaseline from '@shared/ui-kit/components/CssBaseline';
import { ThemeProvider } from '@shared/ui-kit/styles';
import NewBrandKitPage from '@modules/brandKit/NewBrandKitPage';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NewBrandKitPage />
    </ThemeProvider>
  );
};

export default App;
