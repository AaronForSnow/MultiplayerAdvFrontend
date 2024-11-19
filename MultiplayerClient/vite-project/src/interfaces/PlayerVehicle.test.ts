import { expect, test } from 'vitest'
import { PlayerVehicle, updateVehicle } from './PlayerVehicle'


test('vehicle is new vehicle', () => {
  
    const testVehicle: PlayerVehicle = {
      id: 1,
      xPos: 200,
      yPos: 200,
      angle: 180,
      speed: 2,
      turnLeft: false,
      turnRight: false,
      moveForward: false,
      moveBackward: false
    }
  expect(testVehicle.id).toBe(1)
  expect(testVehicle.xPos).toBe(200)
  expect(testVehicle.angle).toBe(180)
})
test('vehicle updates properly', () => {
  
  const testVehicle: PlayerVehicle = {
    id: 1,
    xPos: 200,
    yPos: 200,
    angle: 180,
    speed: 0,
    turnLeft: false,
    turnRight: false,
    moveForward: false,
    moveBackward: false
  }
expect(testVehicle.id).toBe(1)
expect(testVehicle.xPos).toBe(200)
expect(testVehicle.angle).toBe(180)
expect(testVehicle.speed).toBe(0)



testVehicle.moveForward = true
const newVehicle = updateVehicle(testVehicle)
expect(newVehicle.id).toBe(1)
expect(newVehicle.speed).toBe(1)

})
