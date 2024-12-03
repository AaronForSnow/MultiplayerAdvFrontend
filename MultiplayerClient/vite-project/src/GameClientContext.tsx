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

export interface VehiclesWithType{
  vehicles: PlayerVehicle[];
  type: "PlayerVehicles"
}

export interface VehicleContextInterface {
  vehicles: VehiclesWithType,
  setVehicleFlags: (setVehicleFlags: VehicleFlags) => void;
}

export const GameClientContextContext = createContext<VehicleContextInterface>({
  vehicles: {vehicles:[], type:"PlayerVehicles"},
  setVehicleFlags: () => {},
});

export const useVehicleContext = () => {
  return useContext(GameClientContextContext);
};
