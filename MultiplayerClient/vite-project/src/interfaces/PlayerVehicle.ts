import { V } from "vitest/dist/chunks/reporters.D7Jzd9GS.js";

export interface PlayerVehicle {
  id: number;
  xPos: number;
  yPos: number;
  angle: number;
  speed: number;
  turnLeft: boolean;
  turnRight: boolean;
  moveForward: boolean;
  moveBackward: boolean;
}

export const updateVehicle = (vehicle: PlayerVehicle) => {
  if (vehicle.moveForward) {
    vehicle.speed += 1;
    vehicle.moveForward = false;
  }
  if (vehicle.moveBackward) {
    vehicle.speed -= 1;
    vehicle.moveBackward = false;
  }
  if (vehicle.turnLeft) {
    vehicle.angle += 45;
    vehicle.turnLeft = false;
  }
  if (vehicle.turnRight) {
    vehicle.angle -= 45;
    vehicle.turnRight = false;
  }

  const pi = Math.PI;
  const radians = vehicle.angle * (pi / 180);
  vehicle.xPos += Math.cos(radians) * vehicle.speed;
  vehicle.yPos += Math.sin(radians) * vehicle.speed;

  return {
    ...vehicle,
  };
};
