sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    count += 1
    info.changeScoreBy(1)
    otherSprite.destroy()
    otherSprite.startEffect(effects.smiles, 200)
    if (count > 9) {
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
info.onLifeZero(function () {
    game.over(false)
})
let level = 0
let skullAngle = 0
let skull: Sprite = null
let food: Sprite = null
let count = 0
count = 0
game.splash("Hurry!", "Eat the cherries!")
let player = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(player)
player.setFlag(SpriteFlag.StayInScreen, true)
for (let index = 0; index < 10; index++) {
    food = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
    food.setPosition(Math.randomRange(20, 140), Math.randomRange(20, 100))
}
for (let index = 0; index < 2; index++) {
    skull = sprites.create(sprites.castle.skellyFront, SpriteKind.Enemy)
    skullAngle = Math.randomRange(0, 360)
    skull.setFlag(SpriteFlag.BounceOnWall, true)
    skull.setVelocity(20 * Math.sin(skullAngle), 20 * Math.cos(skullAngle))
    skull.setPosition(Math.randomRange(20, 140), Math.randomRange(20, 100))
}
info.startCountdown(10)
player.say("Level " + level, 1000)
