import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  init() {
    this.paddleRightVelocity = new Phaser.Math.Vector2(0, 0);
    this.LeftScore = 0;
    this.RightScore = 0;

    this.pause = false;
  }

  preload() {}
  create() {
    this.scene.run("background");
    this.physics.world.setBounds(-100, 0, 1000, 500);

    // Ball
    this.ball = this.add.circle(400, 250, 10, 0xffffff, 1);
    this.physics.add.existing(this.ball);
    this.ball.body.setCircle(10);
    this.ball.body.setBounce(1, 1);

    this.ball.body.setCollideWorldBounds(true, 1, 1);

    this.resetBall();

    // Left Paddle (player)
    this.paddleLeft = this.add.rectangle(50, 250, 30, 100, 0xffffff, 1);
    this.physics.add.existing(this.paddleLeft, true);

    this.physics.add.collider(this.paddleLeft, this.ball);

    // Right Paddle (computer)

    this.paddleRight = this.add.rectangle(750, 250, 30, 100, 0xffffff, 1);
    this.physics.add.existing(this.paddleRight, true);

    this.physics.add.collider(this.paddleRight, this.ball);

    // Scores
    this.leftScoreLabel = this.add
      .text(300, 25, "0", {
        fontSize: 48,
      })
      .setOrigin(0.5, 0.5);
    this.rightScoreLabel = this.add
      .text(500, 25, "0", {
        fontSize: 48,
      })
      .setOrigin(0.5, 0.5);
  }

  update() {
    if (this.pause == true) {
      return;
    }

    // PLAYER //
    /** @type {Phaser.Physics.Arcade.StaticBody} */
    const paddleLeftBody = this.paddleLeft.body;

    //this.paddleLeft.x = this.input.mousePointer.x;
    this.paddleLeft.y = this.input.mousePointer.y;
    paddleLeftBody.updateFromGameObject();

    // CPU //
    /** @type {Phaser.Physics.Arcade.StaticBody} */
    const paddleRightBody = this.paddleRight.body;

    const diff = this.ball.y - this.paddleRight.y;

    if (Math.abs(diff) < 10) {
      return;
    }

    if (diff < 0) {
      this.paddleRightVelocity.y = -1;
      if (this.paddleRightVelocity.y < -10) {
        this.paddleRightVelocity.y = -10;
      }
      //ball above paddle
    } else if (diff > 0) {
      this.paddleRightVelocity.y = 1;
      if (this.paddleRightVelocity.y > 10) {
        this.paddleRightVelocity.y = 10;
      }
      //ball below
    }

    this.paddleRight.y += this.paddleRightVelocity.y;
    paddleRightBody.updateFromGameObject();

    // Ball hits back wall
    if (this.ball.x < -30) {
      //scored on left side
      this.incrementRightScore();
      this.resetBall();
    } else if (this.ball.x > 830) {
      //scored on right side
      this.incrementLeftScore();
      this.resetBall();
    }

    // Score and Winning Conditions
    if (this.LeftScore >= 3) {
      //player wins
      this.LeftScore = 0;
      this.RightScore = 0;
      this.pause = true;
      this.scene.run("win");
    } else if (this.RightScore >= 3) {
      //cpu wins
      this.LeftScore = 0;
      this.RightScore = 0;
      this.pause = true;
      this.scene.run("loss");
    }
  }

  incrementLeftScore() {
    this.LeftScore += 1;
    this.leftScoreLabel.text = this.LeftScore;
  }

  incrementRightScore() {
    this.RightScore += 1;
    this.rightScoreLabel.text = this.RightScore;
  }

  resetBall() {
    const angle = Phaser.Math.Between(0, 360);
    const vector = this.physics.velocityFromAngle(angle, 200); //convert from angle to vector

    this.ball.x = 400;
    this.ball.y = 250;
    this.ball.body.setVelocity(vector.x, vector.y); // initial velocity set
  }
}
