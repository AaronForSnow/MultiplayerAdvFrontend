import { FC, ReactNode, useEffect, useState } from "react";
import { GameServerContextContext, VehicleFlags } from "./GameServerContext";
import { PlayerVehicle } from "./interfaces/PlayerVehicle";
 
export const GameServerContextProvider: FC<{ children: ReactNode }> = ({
    children,
  }) => {
    const [vehicle, setVehicle] = useState<PlayerVehicle>();
    const setVehicleFlags = (
     flags: VehicleFlags    
    ) => {
        switch(flags.vehicleAction){
            case "moveForward":
              setVehicle({ , moveForward: true });
              break;
        }
     }
 
    useEffect(() => {
     
    }, []);
 
    return (
      <GameServerContextContext.Provider
        value={{
          vehicle: vehicle!,
          setVehicleFlags: setVehicleFlags
        }}
      >
        {children}
      </GameServerContextContext.Provider>
    );
  };