robobit.select_model(RBModel.Mk3)
basic.showIcon(IconNames.Asleep)
let v_st = 20
let v_dr = 50
basic.forever(function () {
    while (robobit.sonar(RBPingUnit.Centimeters) >= 5) {
        robobit.move(RBMotor.Left, RBDirection.Forward, v_st)
        robobit.move(RBMotor.Right, RBDirection.Forward, v_dr)
        basic.pause(1000)
        v_st += 5
        v_dr += 5
    }
    robobit.stop(RBStopMode.Coast)
    while (robobit.sonar(RBPingUnit.Centimeters) <= 5) {
        robobit.goms(RBDirection.Forward, 100, 500)
    }
})
