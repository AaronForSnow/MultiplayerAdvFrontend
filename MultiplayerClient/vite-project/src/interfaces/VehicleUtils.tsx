import { FC } from "react"
import { PlayerVehicle } from "./PlayerVehicle"
import RocketIcon from "../assets/rocket.svg";

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
        <img src={RocketIcon}></img>
    </div>
) 