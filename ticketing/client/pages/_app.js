import 'bootstrap/dist/css/bootstrap.css';

// Next.JS wraps all the components in a "app component". This file will
// overwrite that component. Component is any of our React component that
// will be wrapped (example: index.js). pageProps will be passed to all components,
// so we can have a global css.
export default ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
