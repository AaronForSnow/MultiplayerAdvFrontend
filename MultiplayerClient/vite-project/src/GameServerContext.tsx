import { createContext, useContext } from "react";
import { PlayerVehicle } from "./interfaces/PlayerVehicle";


export interface VehicleContextInterface {
  vehicle: PlayerVehicle;
  setVehicleFlags: (setVehicleFlags: void) => void;
}

export const GameServerContextContext = createContext<VehicleContextInterface>({
    vehicle: {
        id: 0,
        xPos: 200,
        yPos: 200,
        angle: 0,
        speed: 0,
        turnLeft: false,
        turnRight: false,
        moveForward: false,
        moveBackward: false
    },
    setVehicleFlags: (setVehicleFlags: void) => {},//returns nothing, updates vehicle
});


export const useVehicleContext = () => {
  return useContext(GameServerContextContext)
}