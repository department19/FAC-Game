# Squash-a-Bug!

*This web game is made as part of my portfolio to apply to FAC using only HTML, CSS and raw JS*

Squash-a-Bug is a simple game where the end user will "squash the bugs" through mouse input, point and click!

<img src="assets/green_bug.png">

Link to the game: https://department19.github.io/FAC-Game/

**it should be noted that the "bugs" are referred as "moles" in the code for clarity**

---

I picked this whack-a-mole format for my game since I generally enjoy playing first person shooter games, and as such developing a game that involved using the mouse as the main interactive element for the game seemed the most intuitive.

I decided to rebrand the game to "Squash-a-bug " part way through and making the game, hence the code is stuck with "mole" in it

## Planned Core Implementations
- A simple working point and click system to remove a "bug" when clicked on by the end user
- JS system of generating "bugs" in random spot on a set grid
- A point tally to increase for every "bug" squashed
- A timer to count down as a time limit

## Planned Advanced Implementations
- Level system
- Increasing of difficulty; additional holes or/and faster "bugs"

---

## Basic structure

The game is able to function on 2 general html elements;
- An area for the "bug" to appear in
- The visible "bug" to click on and the functional elements

### The game area

I originally started to use `display: grid` to form the area for the holes since it seemed the most intuitive, but switched to flexbox since my understanding of grid mechanics was was lacking. Going forward I may switch back to grid to get the holes to line up correctly, though flexbox may work in favour of the addition of more holes with an increase of difficulty. The web game currently doesn't have full responsiveness to different screen sizes and device widths.

Currently the code will account for additional holes to be added and still function

### The "bug" element

The visible part of the bug for the end client is a simple .png generated using an AI art generator.
I use JS to to create an `img` element when the DOM is loaded, then when the game is running, the `randomMole` function is called and appends the 

---

# Development Log

## addition of a button
Originally the call function of starting the game was placed at the bottom of the JS "script.js" file, this meant the web game immediately ran after the DOM had loaded.
This was useful while developing, since just refreshing constantly I could check for problems across multiple elements. But it also meant for an actual player, you would have to be immediately be ready to play or otherwise would lose out on time. Which from an accessibility stand point, is not great.
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
- ~~when using the stop game button, the length of time remaining in the next game started is incorrect~~
- 