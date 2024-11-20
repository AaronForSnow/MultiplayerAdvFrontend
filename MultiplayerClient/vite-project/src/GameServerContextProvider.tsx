import { FC, ReactNode, useEffect, useState } from "react";
import { GameServerContextContext, VehicleFlags } from "./GameServerContext";
import { PlayerVehicle, updateVehicle } from "./interfaces/PlayerVehicle";

export const GameServerContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vehicle, setVehicle] = useState<PlayerVehicle>();

  const setVehicleFlags = (flags: VehicleFlags) => {
    setVehicle((prevVehicle) => {
      if (!prevVehicle) return;
      switch (flags.vehicleAction) {
        case "moveForward":
          return {
            ...prevVehicle,
            moveForward: true,
          };
        case "moveBackward":
          return {
            ...prevVehicle,
            moveBackward: true,
          };
        case "turnLeft":
          return {
            ...prevVehicle,
            turnLeft: true,
          };
        case "turnRight":
          return {
            ...prevVehicle,
            turnRight: true,
          };
        case "stopForwards":
          return {
            ...prevVehicle,
            moveForward: false,
          };
        case "stopBackwards":
          return {
            ...prevVehicle,
            moveBackward: false,
          };
        case "stopLeft":
          return {
            ...prevVehicle,
            turnLeft: false,
          };
        case "stopRight":
          return {
            ...prevVehicle,
            turnRight: false,
          };
        default:
          return prevVehicle;
      }
    });
  };

  useEffect(() => {
    if (!vehicle) return;

    const intervalId = setInterval(() => {
      setVehicle(updateVehicle(vehicle));
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, [vehicle]);

  useEffect(() => {
    setVehicle({
      id: 1,
      xPos: 200,
      yPos: 200,
      angle: 0,
      speed: 0,
      turnLeft: false,
      turnRight: false,
      moveForward: false,
      moveBackward: false,
    });
  }, []);

  return (
    <GameServerContextContext.Provider
      value={{
        vehicle: vehicle!,
        setVehicleFlags: setVehicleFlags,
      }}
    >
      {children}
    </GameServerContextContext.Provider>
  );
};
