frontend-nanodegree-arcade-game
===============================

Check this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric)

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Game Instructions:
In this game you have a Player and Enemies (Bugs). The goal of the player 
is to reach the water, without colliding into any one of the enemies. 
The player can move left, right, up and down. The enemies move in varying 
speeds on the paved block portion of the scene. Once a the player collides 
with an enemy, the game is reset and the player moves back to the start 
square.Once the player reaches the water the game is won.

To check the [**demo**](https://sailajareact.github.io/Fend-Classic-Arcade-Game/) here

## Libraries and scripting languages used:
Javascript, ES5, CSS and HTML Canvas

## How to run project locally:
1. clone this project
git clone [**repo**](https://github.com/sailajareact/Fend-Classic-Arcade-Game.git)
to your local machine
2. serve index.html file in the browser 

## Planning:
* Creating canvas element and bringing the 2d context of that
* Drawing the canvas with the ground images, player and enemies
* it may look like just that image/character is moving or being
  drawn but that is not the case. What's really happening is the entire "scene"
  is being drawn over and over, presenting the illusion of animation. By using 
window.requesrtAnimationFrame() method.
