let Wobble = 0
basic.forever(function () {
    led.plotBarGraph(
    Wobble,
    10
    )
    if (Wobble > 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 500 || input.acceleration(Dimension.X) < -500) {
        Wobble += 1
        basic.pause(100)
    }
})
