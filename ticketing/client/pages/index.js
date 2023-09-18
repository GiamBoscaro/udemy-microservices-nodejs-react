import Link from 'next/link';

// This is the React component. The instructions in here are
// executed inside the browser. The baseurl of the axios call
// executed here is the url in the browser (udemy.microservice-course.ticketing)
const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            View
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
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
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};

export default LandingPage;
