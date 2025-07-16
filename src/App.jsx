import { ThemeProvider } from './components/ThemeProvider';
import ThemeToggleButton from './components/ThemeToggleButton';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
      <Home />
    </ThemeProvider>
  );
}

export default App;
