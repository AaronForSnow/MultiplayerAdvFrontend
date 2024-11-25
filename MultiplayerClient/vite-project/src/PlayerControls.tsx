import React, { useEffect, useContext } from "react";
import { GameServerContextContext } from "./GameServerContext";

const PlayerControls: React.FC = () => {
  const { setVehicleFlags, vehicles } = useContext(GameServerContextContext);

  const handleKeyDown = (
    event: KeyboardEvent,
    forward: string,
    backward: string,
    left: string,
    right: string
  ) => {
    {
      vehicles.map((vehicle) => {
        switch (event.key.toLowerCase()) {
          case forward:
            setVehicleFlags({ id: vehicle.id, vehicleAction: "moveForward" });
            break;
          case left:
            setVehicleFlags({ id: vehicle.id, vehicleAction: "turnLeft" });
            break;
          case backward:
            setVehicleFlags({ id: vehicle.id, vehicleAction: "moveBackward" });
            break;
          case right:
            setVehicleFlags({ id: vehicle.id, vehicleAction: "turnRight" });
            break;
        }
      });
    }
  };

  // const handleKeyUp = (event: KeyboardEvent) => {
  //   switch (event.key.toLowerCase()) {
  //     case "w":
  //       setVehicleFlags({ id: vehicle.id, vehicleAction: "stopForwards" });
  //       break;
  //     case "a":
  //       setVehicleFlags({ id: vehicle.id, vehicleAction: "stopLeft" });
  //       break;
  //     case "s":
  //       setVehicleFlags({ id: vehicle.id, vehicleAction: "stopBackwards" });
  //       break;
  //     case "d":
  //       setVehicleFlags({ id: vehicle.id, vehicleAction: "stopRight" });
  //       break;
  //   }
  // };

  useEffect(() => {
    window.addEventListener("keydown", (event) =>
      handleKeyDown(event, "w", "s", "a", "d")
    );

    return () => {
      window.removeEventListener("keydown", (event) =>
        handleKeyDown(event, "w", "s", "a", "d")
      );
    };
  }, []);

  return null;
};

export default PlayerControls;
