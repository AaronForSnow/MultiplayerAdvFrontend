import { createContext, useContext } from "react";
import { PlayerVehicle } from "./interfaces/PlayerVehicle";

export interface VehicleFlags {
  id: number;
  type: "vehicleFlags"
  vehicleAction:
    | "moveForward" // 'w' pressed
    | "moveBackward" // 's' pressed
    | "turnLeft" // 'a' pressed
    | "turnRight" // 'd' pressed
    | "stopForwards" // when user lets go of 'w' key
    | "stopBackwards" // when user lets go of 's' key
    | "stopLeft" // when user lets go of 'a' key
    | "stopRight";
}

export interface VehicleContextInterface {
  vehicles: PlayerVehicle[];
  isServer: boolean;
  setIsServer: (statement: boolean) => void;
  setVehicleFlags: (setVehicleFlags: VehicleFlags) => void;
  sendMessage: (event: MessageEvent<PlayerVehicle[]>) => void;
}

export const GameServerContextContext = createContext<VehicleContextInterface>({
  vehicles: [],
  isServer: false,
  setIsServer: () => {},
  setVehicleFlags: () => {},
  sendMessage: () => {}
});

export const useVehicleContext = () => {
  return useContext(GameServerContextContext);
};
