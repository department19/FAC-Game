# Squash-a-Bug!

*This webgame is made as part of my portfolio to apply to FAC using only HTML, CSS and raw JS*

Squash-a-Bug is a simple game where the end user will "squash the bugs" through mouse input, point and click!

*insert image here*

## Planned Core Implementations
- A simple working point and click system to remove a "bug" when clicked on by the end user
- JS system of generating "bugs" in random spot on a set grid
- A point tally to increase for every "bug" squashed
- A timer to count down as a time limit

## Planned Advanced Implementations
- Level system
- Increasing of difficulty; additional holes, faster "bugs"

## Basic structure


### styling the grid

I originally started to use `display: grid` to form the area for the holes since it seemed the most intuitive, but switched to flexbox since my understanding of grid mechanics was was lacking.

---

# Development Log

## addition of a button
Originally the web game immediately ran after the DOM had loaded, which meant that the player had to be immediately be ready to play or otherwise would lose out on time. Which from an accessibility stand point, is not great.
Hence the addition of a button to trigger the start of the game instead was a natural progression.
### button continued
Following the addition of the button, I decided add a stop button, capable of force stopping the game, that would replace the start one when the game is running and revert back to the start button when the game is stopped.

## click vs mousedown

I originally used an `addeventlistener` set with `click` as it seemed most intuitive, but in this format, the event listener can only trigger the function when it detects both an input of the mouse being pressed, followed by the release of the same click. As a result, this make the game feel a bit sluggish since the game doesn't react to your immediate input.

In response to this I learned that there is a `mousedown` type available to the  event listener, which only needs to track for when the end user clicks down. As a result this feels way more responsive for the end user, since the the input from the user immediately feedbacks a response in the game.

---
# Bugs to be squashed!

## random mole timeout 
- the system to timeout the "bugs" are inconsistent and I cannot figure out why.
- are the "bugs" spawning on the same tile?
- when using the stop game button, the length of time remaining in the next game started is incorrect