function beerSong(beerNumber) {

    return beerNumber > 1 ? `${beerNumber} bottles of beer on the wall, ${beerNumber} bottles of beer.\nTake one down, pass it around, ${beerNumber-1} bottles of beer on the wall.` : (beerNumber === 1 ? `${beerNumber} bottle of beer on the wall, ${beerNumber} bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.` : `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`);
}