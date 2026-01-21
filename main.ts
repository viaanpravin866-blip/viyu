music.play(music.stringPlayable("C G F D C5 - C5 F ", 120), music.PlaybackMode.LoopingInBackground)
basic.showIcon(IconNames.SmallHeart)
basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
	
})
