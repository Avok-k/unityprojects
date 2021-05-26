basic.forever(function () {
    serial.writeLine("pitch=" + input.rotation(Rotation.Pitch))
    serial.writeLine("roll=" + input.rotation(Rotation.Roll))
})
