# Memory Game

### Game Rules
* At the start of the game, the player is presented with a grid of 24 facedown cards.
* Each card should look identical face down but has a face-up value that is matched by only one other card on the table.
* When the player clicks a card, it flips over revealing its value.
* When one card is already revealed, if the player clicks another card, its value is then also revealed, and the two face-up cards’ values are compared.
    * If they are matched, then indicate this in the UI somehow.
    * If they are different, then they should flip back down.
* The game is continued until there are no cards left to match.


### Extra Features

__Settings Modal__
- Functionality to restart current game
- Changing difficulty settings (that is, changing the number of cards to be flipped)
- Changing the card theme (images on cards)
- Changing the UI theme (dark vs. light mode)


__Leaderboard__
- Persist the top scores at each difficulty level.