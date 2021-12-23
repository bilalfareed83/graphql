import logo from "./logo.svg";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import client from "./config/gqlConfig";
import Students from "./component/students";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Students />
      </div>
    </ApolloProvider>
  );
}

export default App;
