import Contaier from "react-bootstrap/Container";
import Forms from "./components/Forms";
import BookList from "./components/BookList";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Contaier
        className="py-3 mt-3"
        style={{
          backgroundColor: "lightcyan",
        }}
      >
        <h1 className="text-center text-info mb-3">My Book</h1>
        <hr />
        <Forms />
        <hr />
        <BookList />
      </Contaier>
    </ApolloProvider>
  );
}

export default App;
