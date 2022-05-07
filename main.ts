input.onSound(DetectedSound.Loud, function () {
    _ = !(_)
    if (_) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let _ = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
