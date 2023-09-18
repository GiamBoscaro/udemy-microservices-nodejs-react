import buildClient from '../api/build-client';

// This is the React component. The instructions in here are
// executed inside the browser. The baseurl of the axios call
// executed here is the url in the browser (udemy.microservice-course.ticketing)
const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

// This function is used to fetch data before sending the page to
// the browser. This is executed on the server side. The baseurl of the axios call
// executed here is the localhost inside the Docker container (127.0.0.1:80)
// BEWARE: in the scenario that we are navigating in the application without refreshing
// (so using the Router to navigate) then getInitialProps WILL GET EXECUTED IN THE BROWSER!
LandingPage.getInitialProps = async (context, client, currentUser) => {
  // context contains req, the request that is coming from the client requesting
  // the html page, and so it contains many useful headers from the client
  return {};
};

export default LandingPage;
