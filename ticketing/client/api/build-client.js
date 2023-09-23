import axios from 'axios';

export default ({ req }) => {
  // Since we do not know if the call is being executed from the client or
  // browser, we use this check to understand it
  if (typeof window === 'undefined') {
    // We are on the server
    // The axios call will be executed from inside the container, in the k8s cluster
    // so I need to point to the ingress
    return axios.create({
      baseURL: process.env.BASE_URL,
      // ingress doesn't proxy the host http://ingress-nginx-controller.ingress-nginx.svc.cluster.local
      // but recognizes only udemy.microservice-course.ticketing
      // But inside the req.headers there is the Host header that is: Host: udemy.microservice-course.ticketing
      // so nginx will be able to proxy the request. Inside req there is also the cookie used for the auth
      // For easyness, all client headers will be sent. Even if the call is executed on the server side,
      // it will figure just as a call coming from the browser
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    // If we are on the browser, no particular thing to do. Everything will be handled by
    // the browser, and the base URL will be the URL in the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};
