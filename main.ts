radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.setGroup(7)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.Y))
})
