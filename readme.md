# aoe-chess.com-pieces
A chrome extension to replace the standard pieces in Chess.com with unit from AoE2. Note that this can only 

## Sample

![Chess.com AoE Board](/images/aoe_board_3.PNG)

## Insipiration and Example
Online chess traffic has increased nearly 40% month-over-month since the release of Netflix's The Queen's Gambit on Oct. 23, 2020. In Beth Harmon's final match, she opens with the series' namesake: The Queen's Gambit (1. d4 d5 2. c4).  There have been numerous articles covering the recent rise in chess. This project was built to determine if the influx of new players from the popular series also led to a similar boost in the relative use of the opening.

By analyzing all games played on lichess.org over the past two months(~150 million), we can compare the popularity of an opening. A PGN (Portable Game Notation) is a plain text record of of both game metadata (date, player ELOs, winner, time control, etc) as well as the moves made in the game.  Running the app against lichess.org's Oct and Nov databases against the opening 1. d4 d5 2. c4, we see the following:

<br/>


## Installation
1. Clone the repo.
2. Download the full record of games for Oct, Nov from https://database.lichess.org/. Unzip the files to ./data
3. ``` pip install -r requirements.txt ```
4. ```env\scripts\activate```
5. ```python app.py```
6. Open http://127.0.0.1:5000/

