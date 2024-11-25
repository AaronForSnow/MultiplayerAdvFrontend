import { FC } from "react"
import RocketIcon from "../assets/rocket.svg";
import { PlayerVehicle } from "./PlayerVehicle";

export const VehicleUtils: FC<PlayerVehicle> = (vehicle: PlayerVehicle) => (

    <div
        style={{
            position: "fixed",
            rotate: `${vehicle.angle}deg`,
            fill: "#999999",
            width: `80px`,
            height: `80px`,
            top: `${vehicle.xPos}px`,
            left: `${vehicle.yPos}px`,
        }}
    >
        <img src={RocketIcon} style={{rotate: '270deg'}}></img>
    </div>
) 