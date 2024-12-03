import React, { useEffect, useContext } from "react";
import { GameServerContext } from "./GameServerContext";
import { PlayerVehicle } from "./interfaces/PlayerVehicle";

const ServerPlayerControls: React.FC<{ vehicle: PlayerVehicle }> = ({ vehicle }) => {
  const { setVehicleFlags } = useContext(GameServerContext);

  const handleKeyDown = (
    event: KeyboardEvent,
    forward: string,
    backward: string,
    left: string,
    right: string
  ) => {
    {
      switch (event.key.toLowerCase()) {
        case forward:
          setVehicleFlags({
            id: vehicle.id,
            vehicleAction: "moveForward",
            type: "vehicleFlags",
          });
          break;
        case left:
          setVehicleFlags({
            id: vehicle.id,
            vehicleAction: "turnLeft",
            type: "vehicleFlags",
          });
          break;
        case backward:
          setVehicleFlags({
            id: vehicle.id,
            vehicleAction: "moveBackward",
            type: "vehicleFlags",
          });
          break;
        case right:
          setVehicleFlags({
            id: vehicle.id,
            vehicleAction: "turnRight",
            type: "vehicleFlags",
          });
          break;
      }
    }
  };

  useEffect(() => {
    const myEvent = (event: KeyboardEvent) =>
      handleKeyDown(
        event,
        vehicle.forwardKey,
        vehicle.backwardKey,
        vehicle.leftKey,
        vehicle.rightKey
      );
    window.addEventListener("keydown", myEvent);

    return () => {
      window.removeEventListener("keydown", myEvent);
    };
  }, []);

  return null;
};

export default ServerPlayerControls;
