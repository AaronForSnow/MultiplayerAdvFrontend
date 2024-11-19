// import { useEffect, useState } from "react";
import { VehicleUtils } from "./interfaces/VehicleUtils";
// import { PlayerVehicle } from "./interfaces/PlayerVehicle";


function App() {
  // const [vehicle, setVehicle] = useState<PlayerVehicle>();
  return (
    <>
      <VehicleUtils id={1} xPos={20} yPos={20} speed={0} angle={45} turnLeft={false} turnRight={false} moveForward={false} moveBackward={false} />
    </>
  );
}

export default App;
