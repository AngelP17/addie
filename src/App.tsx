import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
