import { Fragment } from "react/jsx-runtime";
import { useVehicleContext } from "./GameServerContext";
import { VehicleUtils } from "./interfaces/VehicleUtils";
import PlayerControls from "./PlayerControls";

function App() {
  const { vehicles } = useVehicleContext();

  if (!vehicles) {
    return <div>Loading vehicle data...</div>;
  }

  return (
    <>
      {vehicles.map((vehicle) => (
        <Fragment key={vehicle.id}>
        
        <VehicleUtils
          id={vehicle.id}
          xPos={vehicle.xPos}
          yPos={vehicle.yPos}
          angle={vehicle.angle}
          speed={vehicle.speed}
          turnLeft={vehicle.turnLeft}
          turnRight={vehicle.turnRight}
          moveForward={vehicle.moveForward}
          moveBackward={vehicle.moveBackward}
          forwardKey={vehicle.forwardKey}
          backwardKey={vehicle.backwardKey}
          leftKey={vehicle.leftKey}
          rightKey={vehicle.rightKey}
        />
      <PlayerControls vehicle={vehicle}/>
      </Fragment>
      ))}
    </>
  );
}

export default App;
