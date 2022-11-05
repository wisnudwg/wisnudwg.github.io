import '../styles/globals.scss'
import 'antd/dist/antd.css';

import React from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import BaseLayout from '../components/BaseLayout/BaseLayout.component';
import nav from '../constants/nav';

function App({ Component, pageProps }) {
  const router = useRouter();
  const [history, setHistory] = React.useState([]);
  const menus = nav.menus.map(el => el.href);

  React.useEffect(() => {
    // console.log(router?.route);
    const newHistory = [ ...history, router?.route ];
    setHistory(newHistory);
  }, [router.route]);

  const constructMotionProps = () => ({
    key: router.route,
    initial: {
      opacity: 0,
      x: history.length > 1 && menus.indexOf(history[history.length-1]) > menus.indexOf(history[history.length-2]) ? '100%' : '-100%',
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: history.length > 1 && menus.indexOf(history[history.length-1]) > menus.indexOf(history[history.length-2]) ? '100%' : '-100%',
    },
    transition: {
      duration: 0.5,
    },
  });

  return (
    <BaseLayout>
      <AnimatePresence mode="wait">
        <motion.div { ...constructMotionProps() }>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </BaseLayout>
  );
}

export default App
