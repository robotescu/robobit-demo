robobit.select_model(RBModel.Mk3)
basic.showIcon(IconNames.Asleep)
// asteapta 5s
basic.pause(5000)
// Porneste inainte la viteza maxima
robobit.go(RBDirection.Forward, 100)
// Am considerat ca alb e 0 si negru e 1 - trebuie verificat
basic.forever(function () {
    if (robobit.readLine(RBLineSensor.Right) == 0 && robobit.readLine(RBLineSensor.Left) == 0) {
        // daca ambii senzori vede alb, atunci franeaza, da inapoi si intoarce in alta directie
        robobit.stop(RBStopMode.Brake)
        robobit.goms(RBDirection.Reverse, 100, 400)
        robobit.rotatems(RBRobotDirection.Left, 60, 500)
    } else if (robobit.readLine(RBLineSensor.Right) == 0) {
        // daca senzorul din dreapta vede alb, franeaza si vireaza spre stanga
        robobit.stop(RBStopMode.Brake)
        robobit.rotatems(RBRobotDirection.Left, 60, 400)
    } else if (robobit.readLine(RBLineSensor.Left) == 0) {
        // daca senzorul din stanga vede alb, franeaza si vireaza spre dreapta
        robobit.stop(RBStopMode.Brake)
        robobit.rotatems(RBRobotDirection.Right, 60, 400)
    }
    // daca este pe negru mergi inainte la vit maxima
    robobit.go(RBDirection.Forward, 100)
})
