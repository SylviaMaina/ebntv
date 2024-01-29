// analytics.js
import ReactGA from 'react-ga';

const initGA = () => {
  ReactGA.initialize('GTM-PL3JXMXZ'); // Replace with your actual Measurement ID
};

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export { initGA, logPageView };
