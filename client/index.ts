import { info } from "@trippler/tr_lib/shared"

let currentVehicle: number = 0
const vehicleAlpha: number = 200
const pedAlpha: number = 125

const applyGhost = (vehicle: number, ped: number): void => {
  SetEntityAlpha(vehicle, vehicleAlpha, false)
  SetEntityAlpha(ped, pedAlpha, false)
  currentVehicle = vehicle
}

const removeGhost = (ped: number) => {
  if (DoesEntityExist(currentVehicle)) {
    ResetEntityAlpha(currentVehicle)
    SetEntityAlpha(currentVehicle, 255, false)
  } else info(`vehicle entity does not exist`)
  ResetEntityAlpha(ped)
  SetEntityAlpha(ped, 255, false)
  currentVehicle = 0
}

const throwError = (message: string): never => {
  throw new Error(message)
}

setInterval(() => {
  let ped = PlayerPedId()
  let vehicle = GetVehiclePedIsIn(ped, false)

  if (vehicle != 0) applyGhost(vehicle, ped)
  else if (currentVehicle != 0) removeGhost(ped)
  else throwError('something was not well analysed went wrong')
}, 50)

/* SetGhostedEntityAlpha(
  alpha: number
); */