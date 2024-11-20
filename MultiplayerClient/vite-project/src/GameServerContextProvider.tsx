import { FC, ReactNode, useEffect, useState } from "react";
import { GameServerContextContext } from "./GameServerContext";
import { PlayerVehicle } from "./interfaces/PlayerVehicle";

export const GameServerContextProvider: FC<{ children: ReactNode }> = ({
    children,
  }) => {
    const [vehicle, setVehicle] = useState<PlayerVehicle>();
    const setVehicleFlags = (
        id: number,
        vehicleAction:
           | "moveForward"    // 'w' pressed
           | "moveBackward"   // 's' pressed
           | "turnLeft"       // 'a' pressed
           | "turnRight"      // 'd' pressed
           | "stopForwards"   // when user lets go of 'w' key
           | "stopBackwards"  // when user lets go of 's' key
           | "stopLeft"       // when user lets go of 'a' key
           | "stopRight"      // when user lets go of 'd' key
     ) => {
        switch(vehicleAction){
            case "moveForward":
                
                break;
        }
     }
  
    useEffect(() => {
      
    }, []);
  
    return (
      <GameServerContextContext.Provider
        value={{
          vehicle: vehicle,
        }}
      >
        {children}
      </GameServerContextContext.Provider>
    );
  };
  