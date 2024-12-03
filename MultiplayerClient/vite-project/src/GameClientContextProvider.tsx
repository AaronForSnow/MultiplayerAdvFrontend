import { FC, ReactNode, useEffect, useState } from "react";
import { GameClientContextContext, VehicleFlags, VehiclesWithType } from "./GameClientContext";
import { PlayerVehicle } from "./interfaces/PlayerVehicle";

export const GameClientContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vehicles, setVehicles] = useState<VehiclesWithType>({
    type: "PlayerVehicles",
    vehicles: [],
  });
  const [socket, setSocket] = useState<WebSocket>();

  const setVehicleFlags = (flags: VehicleFlags) => {
    setVehicles((prevVehicles) => {
      const newList: VehiclesWithType = {
        type: "PlayerVehicles",
        vehicles: prevVehicles.vehicles.map((vehicle: PlayerVehicle) => {
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
          } else {
            return vehicle;
          }
        }),
      };
      return newList;
    });
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5063/ws");

    ws.onopen = () => {
      console.log("WebSocket connection established.");
    };

    ws.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
        setVehicles(parsedData);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (playerVehicles: VehicleFlags) => {
    if (socket && socket.readyState && playerVehicles) {
      socket.send(JSON.stringify(playerVehicles)); // Send message to server
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
        const newList: VehicleFlags = {
            type: "vehicleFlags",
            id: 0,
            vehicleAction: "turnLeft"
        };
        sendMessage(newList);

    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <GameClientContextContext.Provider
      value={{
        vehicles: vehicles,
        setVehicleFlags: setVehicleFlags
      }}
    >
      {children}
    </GameClientContextContext.Provider>
  );
};
