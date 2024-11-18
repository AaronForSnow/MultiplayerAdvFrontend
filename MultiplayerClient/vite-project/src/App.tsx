import RocketIcon from "./assets/rocket.svg";
import { VehicleUtils } from "./interfaces/VehicleUtils";

function App() {
  return (
    <>
      <VehicleUtils id={1} xPos={20} yPos={20} rotation={String(80)} speed={""} angle={0} />
    </>
  );
}

export default App;
