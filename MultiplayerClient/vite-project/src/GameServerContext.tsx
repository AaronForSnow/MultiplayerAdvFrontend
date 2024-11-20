import { createContext, useContext } from "react";
import { PlayerVehicle } from "./interfaces/PlayerVehicle";
 
export interface VehicleFlags {
  id: number,
  vehicleAction:
           | "moveForward"    // 'w' pressed
           | "moveBackward"   // 's' pressed
           | "turnLeft"       // 'a' pressed
           | "turnRight"      // 'd' pressed
           | "stopForwards"   // when user lets go of 'w' key
           | "stopBackwards"  // when user lets go of 's' key
           | "stopLeft"       // when user lets go of 'a' key
           | "stopRight"
}
 
export interface VehicleContextInterface {
  vehicle: PlayerVehicle;
  setVehicleFlags: (setVehicleFlags: VehicleFlags) => void;
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
    setVehicleFlags: (setVehicleFlags: VehicleFlags) => {},//returns nothing, updates vehicle
});
 
 
export const useVehicleContext = () => {
  return useContext(GameServerContextContext)
}
 