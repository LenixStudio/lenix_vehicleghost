let currentVehicle = 0

setInterval(() => {
  let ped = PlayerPedId()
  let vehicle = GetVehiclePedIsIn(ped, false)
  
  if (vehicle != 0) {
    SetEntityAlpha(vehicle, 200, false)
    SetEntityAlpha(ped, 125, false)
    currentVehicle = vehicle
  } else if (currentVehicle != 0) {
    if (DoesEntityExist(currentVehicle)) {
      ResetEntityAlpha(currentVehicle)
      SetEntityAlpha(currentVehicle, 255, false)
    }
    ResetEntityAlpha(ped)
    SetEntityAlpha(ped, 255, false)
    currentVehicle = 0
  }
}, 50)
/* SetGhostedEntityAlpha(
	alpha: number
); */