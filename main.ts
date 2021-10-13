devices.onGamepadButton(MesDpadButtonInfo._4Up, function () {
    MotorDriver.MotorRun(Motor.A, Dir.forward, 10)
    MotorDriver.MotorRun(Motor.B, Dir.forward, 16)
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
devices.onGamepadButton(MesDpadButtonInfo.BUp, function () {
    MotorDriver.MotorStop(Motor.A)
    MotorDriver.MotorStop(Motor.B)
})
devices.onGamepadButton(MesDpadButtonInfo._3Up, function () {
    MotorDriver.MotorRun(Motor.A, Dir.forward, 16)
    MotorDriver.MotorRun(Motor.B, Dir.forward, 10)
})
devices.onGamepadButton(MesDpadButtonInfo._2Up, function () {
    MotorDriver.MotorRun(Motor.A, Dir.backward, 10)
    MotorDriver.MotorRun(Motor.B, Dir.backward, 10)
})
devices.onGamepadButton(MesDpadButtonInfo._1Up, function () {
    MotorDriver.MotorRun(Motor.A, Dir.forward, 16)
    MotorDriver.MotorRun(Motor.B, Dir.forward, 16)
})
devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
    MotorDriver.MotorRun(Motor.A, Dir.forward, 10)
    MotorDriver.MotorRun(Motor.B, Dir.forward, 10)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
