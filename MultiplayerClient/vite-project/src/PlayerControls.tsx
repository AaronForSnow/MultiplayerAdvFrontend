import React, { useEffect, useContext } from "react";
import { GameServerContextContext } from "./GameServerContext";

const PlayerControls: React.FC = () => {
  const { setVehicleFlags, vehicle } = useContext(GameServerContextContext);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key.toLowerCase()) {
      case "w":
        setVehicleFlags({ id: vehicle.id, vehicleAction: "moveForward" });
        break;
      case "a":
        setVehicleFlags({ id: vehicle.id, vehicleAction: "turnLeft" });
        break;
      case "s":
        setVehicleFlags({ id: vehicle.id, vehicleAction: "moveBackward" });
        break;
      case "d":
        setVehicleFlags({ id: vehicle.id, vehicleAction: "turnRight" });
        break;
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    switch (event.key.toLowerCase()) {
      case "w":
        setVehicleFlags({ id: vehicle.id, vehicleAction: "stopForwards" });
        break;
      case "a":
        setVehicleFlags({ id: vehicle.id, vehicleAction: "stopLeft" });
        break;
      case "s":
        setVehicleFlags({ id: vehicle.id, vehicleAction: "stopBackwards" });
        break;
      case "d":
        setVehicleFlags({ id: vehicle.id, vehicleAction: "stopRight" });
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []); 

  return null; 
};

export default PlayerControls;
