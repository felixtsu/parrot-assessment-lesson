info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    if (info.score() == 10) {
        music.jumpUp.play()
    } else {
        music.baDing.play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let skullAngle = 0
let skull: Sprite = null
let food: Sprite = null
game.splash("Hurry!", "Eat the cherries!")
let player = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(player)
player.setFlag(SpriteFlag.StayInScreen, true)
for (let index = 0; index < 10; index++) {
    food = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
    food.setPosition(randint(20, 140), randint(20, 100))
}
for (let index = 0; index < 2; index++) {
    skull = sprites.create(sprites.castle.skellyFront, SpriteKind.Enemy)
    skullAngle = randint(0, 360)
    skull.setFlag(SpriteFlag.BounceOnWall, true)
    skull.setVelocity(20 * Math.sin(skullAngle), 20 * Math.cos(skullAngle))
    skull.setPosition(randint(20, 140), randint(20, 100))
}
info.startCountdown(10)
