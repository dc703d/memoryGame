#Summary:

Match Master is a memory card matching game designed to challenge the players recall skills. The game revolves around a set of cards placed face down on the table and the player must select 2 cards. If they do not match, the cards are turned back around and the user must keep playing. If the cards match up, they are then removed are the player keeps going until all the cards are matched up. The aim is to solve the game in as few moves and as little time as possible!

##fisherYatesShuffle():

The shuffle function works by implementing the fisherYates algorithm which is a recognised effective alogrithm for shuffling arrays. This ensures the cards are shuffled every time the user plays to make sure the game is difficult every time.

##populateGrid():

The populateGrid function populates the cardGrid with div elements which contain the cards. These are then selected and the content (emoji) on each card is compared. If they are the same a class of 'boxMatch' is applied and the cards are removed from the table. Once every card contains this class, it means all the cards have been matched up and the user wins.

##allCardsMatched():

This function is used to carry out the commands ran if all the cards are matched. It makes sure all the cards contain the class 'boxMatch' and then stops the timer which has been running and adds in the high scores appropriately.

##Timer():

There are multiple timer functions which either start/stop/reset/update the timer. These are used throughout the code to call and make sure the timer which calculates how long the player completed the game in is accurate.

##Further Developments:

The next steps would be t incorporate a multiplayer setting where 2 players can play and score can be kept. The player which manages to match more cards on their turn would win. Another potential improvement could be adding levels with more or less cards to increase/decrease difficulty.
