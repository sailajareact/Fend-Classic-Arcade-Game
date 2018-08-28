frontend-nanodegree-arcade-game
===============================

Check this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Game Instructions:
In this game you have a Player and Enemies (Bugs). The goal of the player 
is to reach the water, without colliding into any one of the enemies. 
The player can move left, right, up and down. The enemies move in varying 
speeds on the paved block portion of the scene. Once a the player collides 
with an enemy, the game is reset and the player moves back to the start 
square.Once the player reaches the water the game is won.

## Libraries and scripting languages used:
Javascript, ES5, CSS and HTML Canvas

## Planning:
* Creating canvas element and bringing the 2d context of that
* Drawing the canvas with the ground images, player and enemies
* it may look like just that image/character is moving or being
  drawn but that is not the case. What's really happening is the entire "scene"
  is being drawn over and over, presenting the illusion of animation. By using 
window.requesrtAnimationFrame() method.
