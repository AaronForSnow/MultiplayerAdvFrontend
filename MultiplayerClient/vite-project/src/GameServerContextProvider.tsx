import { FC, ReactNode, useEffect, useState } from "react";
import {
  GameServerContextContext,
  VehicleFlags,
  VehiclesWithType,
} from "./GameServerContext";
import { PlayerVehicle, updateVehicle } from "./interfaces/PlayerVehicle";

export const GameServerContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vehicles, setVehicles] = useState<VehiclesWithType>({
    type: "PlayerVehicles",
    vehicles: [
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
    ],
  });
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5063/ws");

    ws.onopen = () => {
      console.log("WebSocket connection established.");
    };

    ws.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      if (parsedData.type === "vehicleFlags") {
        console.log("The server is now setting flags");
        setVehicleFlags(parsedData);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (playerVehicles: VehiclesWithType) => {
    if (socket && socket.readyState && playerVehicles) {
      socket.send(JSON.stringify(playerVehicles)); // Send message to server
    }
  };

  const setVehicleFlags = (flags: VehicleFlags) => {
    setVehicles((prevVehiles) => {
      const newList: VehiclesWithType = {
        type: "PlayerVehicles",
        vehicles: prevVehiles.vehicles.map((vehicle: PlayerVehicle) => {
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
    const intervalId = setInterval(() => {
      setVehicles((prevVehicle) => {
        const newList: VehiclesWithType = {
          type: "PlayerVehicles",
          vehicles: prevVehicle.vehicles.map((vehicle) => {
            updateVehicle(vehicle);
            return vehicle;
          }),
        };
        sendMessage(newList);
        return newList;
      });
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [socket]);

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
