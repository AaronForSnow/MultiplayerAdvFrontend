import { FC, ReactNode, useEffect, useState } from "react";
import { GameServerContextContext, VehicleFlags } from "./GameServerContext";
import { PlayerVehicle, updateVehicle } from "./interfaces/PlayerVehicle";

export const GameServerContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vehicles, setVehicles] = useState<PlayerVehicle[]>([
    {
      id: 1,
      type: "playerVehicle",
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
      type: "playerVehicle",
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
  const [isServer, setIsServer] = useState<boolean>(false);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5063/ws");

    ws.onopen = () => {
      console.log("WebSocket connection established.");
    };

    ws.onmessage = (event) => {
      const parsedData = JSON.parse(event.data)
      if (parsedData.type === "playerVehicle") //For the client (Display)
      {
        //this should be the list of all vihicles to print on the screan
        //call set all vehicles in context
      }
      else if(parsedData.type === "vehicleFlags") //In the server (update)
      {
        //this is a siglevehicles flags
        // if I am the server, i will update the vehicles in context and send the vehicle list for all to print
        setVehicleFlags(parsedData);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    setSocket(ws);

    return () => {
      ws.close(); // Cleanup
    };
  }, []);

  const sendMessage = () => {
    if (socket && vehicles) {
      socket.send(JSON.stringify(vehicles)); // Send message to server
    }
  };

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
        } else {
          return vehicle;
        }
      })
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVehicles((prevVehicles) =>
        prevVehicles.map((vehicle) => {
          updateVehicle(vehicle);
          return vehicle; 
        })
      );
    }, 1);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <GameServerContextContext.Provider
      value={{
        vehicles: vehicles,
        isServer: isServer,
        setIsServer: setIsServer,
        setVehicleFlags: setVehicleFlags,
        sendMessage: sendMessage
      }}
    >
      {children}
    </GameServerContextContext.Provider>
  );
};
