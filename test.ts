let sprite1: Sprite = sprites.create(sprites.food.bigBurger);
sprite1.x = sprite1.image.width / 2;
sprite1.y = sprite1.x;

let sprite2: Sprite = sprites.create(transformSprites.scale2x(sprite1.image));

let sprite3: Sprite = sprites.create(sprites.food.bigBurger);
sprite3.x = screen.width - sprite3.image.width / 2;
sprite3.y = sprite1.y;

for (let dir: number = 0; dir <= 360; dir += 10) {
    rotate(dir);
}   // for (dir)

for (let dir: number = 0; dir >= -360; dir -= 10) {
    rotate(dir);
}   // for (dir)

function rotate(dir: number): void {
    transformSprites.rotateSprite(sprite1, dir);
    transformSprites.rotateSprite(sprite2, dir);
    sprite2.say(dir + " degrees");
    loops.pause(500)
}   // rotate()