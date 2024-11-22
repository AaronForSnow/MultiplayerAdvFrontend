import { useVehicleContext } from "./GameServerContext";
import { VehicleUtils } from "./interfaces/VehicleUtils";
import PlayerControls from "./PlayerControls";


function App() {
  const {vehicle} = useVehicleContext();

  if (!vehicle) {
    return <div>Loading vehicle data...</div>;
  }

  return (
    <>
      <VehicleUtils id={vehicle.id} xPos={vehicle.xPos} yPos={vehicle.yPos} angle={vehicle.angle} speed={vehicle.speed} turnLeft={vehicle.turnLeft} turnRight={vehicle.turnRight} moveForward={vehicle.moveForward} moveBackward={vehicle.moveBackward} />
      <PlayerControls/>
    </>
  );
}

export default App;
