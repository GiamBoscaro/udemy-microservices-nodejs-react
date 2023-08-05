import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

// Next.JS wraps all the components in a "app component". This file will
// overwrite that component. Component is any of our React component that
// will be wrapped (example: index.js). pageProps will be passed to all components,
// so we can have a global css.
const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

// The parameters of getInitialProps in _app.js is different from all the other Components.
// In the other components is just the context, here it has much more information. The context
// is inside the ctx property
AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  // If you call getInitialProps from _app.js, the getInitialProps of the Components
  // will not be called anymore, and must be called manually
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data
  };
};

export default AppComponent;
