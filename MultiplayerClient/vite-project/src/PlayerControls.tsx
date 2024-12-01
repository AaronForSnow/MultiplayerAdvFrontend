import React, { useEffect, useContext } from "react";
import { GameServerContextContext } from "./GameServerContext";
import { PlayerVehicle } from "./interfaces/PlayerVehicle";

const PlayerControls: React.FC<{vehicle: PlayerVehicle}> = ({vehicle}) => {
  const { setVehicleFlags } = useContext(GameServerContextContext);

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
            setVehicleFlags({ id: vehicle.id, vehicleAction: "moveForward", type: "vehicleFlags" });
            break;
          case left:
            setVehicleFlags({ id: vehicle.id, vehicleAction: "turnLeft", type: "vehicleFlags" });
            break;
          case backward:
            setVehicleFlags({ id: vehicle.id, vehicleAction: "moveBackward" , type: "vehicleFlags"});
            break;
          case right:
            setVehicleFlags({ id: vehicle.id, vehicleAction: "turnRight", type: "vehicleFlags" });
            break;
        }
      
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

    const myEvent =  (event: KeyboardEvent) =>
      handleKeyDown(event, vehicle.forwardKey, vehicle.backwardKey, vehicle.leftKey, vehicle.rightKey)

    window.addEventListener("keydown", myEvent
    );

    return () => {
      window.removeEventListener("keydown", myEvent
      );
    };
  }, []);

  return null;
};

export default PlayerControls;
