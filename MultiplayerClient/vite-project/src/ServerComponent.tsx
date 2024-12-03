import { useVehicleContext } from "./GameServerContext";
import { VehicleUtils } from "./interfaces/VehicleUtils";
import PlayerControls from "./PlayerControls";
import { Fragment } from "react";

const ServerComponent = () => {
  const { vehicles } = useVehicleContext();

  return (
    <div>
      {vehicles.vehicles.map((vehicle) => (
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
          <PlayerControls vehicle={vehicle} />
        </Fragment>
      ))}{" "}
    </div>
  );
};

export default ServerComponent;
