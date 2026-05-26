import { BrowserRouter as Router } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import AppRoutes from './components/AppRoutes';

function App() {
  const redirect = sessionStorage.getItem('redirect');

  if (redirect) {
    sessionStorage.removeItem('redirect');
    const redirectUrl = new URL(redirect);
    window.history.replaceState(null, '', `${redirectUrl.pathname}${redirectUrl.search}${redirectUrl.hash}`);
  }

  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <MotionConfig reducedMotion="user">
            <Layout>
              <AppRoutes />
            </Layout>
          </MotionConfig>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
