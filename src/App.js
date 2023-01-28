import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed'
import "./App.css";
// import { render } from "@testing-library/react";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="b11bea1a-e47f-459f-ba3d-fdd4ac1525b6"
      userName="mdsaif12"
      userSecret="Saif1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
