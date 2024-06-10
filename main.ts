robobit.select_model(RBModel.Mk3)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    while (robobit.sonar(RBPingUnit.Centimeters) >= 5) {
        robobit.move(RBMotor.Left, RBDirection.Forward, 30)
        robobit.move(RBMotor.Right, RBDirection.Forward, 60)
    }
    robobit.stop(RBStopMode.Coast)
    while (robobit.sonar(RBPingUnit.Centimeters) <= 5) {
        robobit.goms(RBDirection.Forward, 100, 500)
    }
})
