import { useState } from "react";
import { GameServerContextProvider } from "./GameServerContextProvider";
import { GameClientContextProvider } from "./GameClientContextProvider";
import ServerComponent from "./ServerComponent";
import ClientComponent from "./ClientComponent";

function App() {
  const [isServer, setIsServer] = useState<boolean>(false);

  return (
    <>
      {isServer ? (
        <GameServerContextProvider>
          <ServerComponent/>
        </GameServerContextProvider>
      ) : (
        <GameClientContextProvider>
           <ClientComponent/>
        </GameClientContextProvider>
      )}

      <button onClick={() => setIsServer(true)}>Make me Server</button>
      {isServer ? <div>I am the Server</div> : <div>I am the client</div>}
    </>
  );
}

export default App;
