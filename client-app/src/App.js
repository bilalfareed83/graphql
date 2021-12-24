import "./App.css";
import { ApolloProvider } from "@apollo/client";
import client from "./config/gqlConfig";
import Students from "./component/students";

function App() {
  return (
    <ApolloProvider client={client}>
      <Students />
    </ApolloProvider>
  );
}

export default App;
