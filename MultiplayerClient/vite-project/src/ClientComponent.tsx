import React, { Fragment } from "react";
import { useVehicleContext } from "./GameClientContext";
import { VehicleUtils } from "./interfaces/VehicleUtils";
import PlayerControls from "./PlayerControls";

const ClientComponent = () => {
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

export default ClientComponent;
