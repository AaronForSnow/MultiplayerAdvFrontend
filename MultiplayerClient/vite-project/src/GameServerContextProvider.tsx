import { FC, ReactNode, useEffect, useState } from "react";
import { GameServerContextContext, VehicleFlags } from "./GameServerContext";
import { PlayerVehicle, updateVehicle } from "./interfaces/PlayerVehicle";

export const GameServerContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vehicles, setVehicles] = useState<PlayerVehicle[]>([
    {
      id: 1,
      xPos: 200,
      yPos: 200,
      angle: 0,
      speed: 0,
      turnLeft: false,
      turnRight: false,
      moveForward: false,
      moveBackward: false,
      forwardKey: "w",
      backwardKey: "s",
      leftKey: "a",
      rightKey: "d",
    },
    {
      id: 2,
      xPos: 300,
      yPos: 200,
      angle: 0,
      speed: 0,
      turnLeft: false,
      turnRight: false,
      moveForward: false,
      moveBackward: false,
      forwardKey: "u",
      backwardKey: "j",
      leftKey: "h",
      rightKey: "k",
    },
  ]);

  const setVehicleFlags = (flags: VehicleFlags) => {
    setVehicles((prevVehicles) => 
     prevVehicles.map((vehicle) => {
        if (vehicle.id === flags.id) {
          switch (flags.vehicleAction) {
            case "moveForward":
              return {
                ...vehicle,
                moveForward: true,
              };
            case "moveBackward":
              return {
                ...vehicle,
                moveBackward: true,
              };
            case "turnLeft":
              return {
                ...vehicle,
                turnLeft: true,
              };
            case "turnRight":
              return {
                ...vehicle,
                turnRight: true,
              };
            case "stopForwards":
              return {
                ...vehicle,
                moveForward: false,
              };
            case "stopBackwards":
              return {
                ...vehicle,
                moveBackward: false,
              };
            case "stopLeft":
              return {
                ...vehicle,
                turnLeft: false,
              };
            case "stopRight":
              return {
                ...vehicle,
                turnRight: false,
              };
            default:
              return vehicle;
            }
          }
          return vehicle;
      })
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVehicles((prevVehicles) =>
        prevVehicles.map((vehicle) => {
          updateVehicle(vehicle);
          return vehicle; // Ensure you return the updated vehicle
        })
      );
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <GameServerContextContext.Provider
      value={{
        vehicles: vehicles,
        setVehicleFlags: setVehicleFlags,
      }}
    >
      {children}
    </GameServerContextContext.Provider>
  );
};
