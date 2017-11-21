describe('The Beer Song', () => {
   it('return when given the number greater than 1', () => {
       expect(beerSong(99)).toMatch('99 bottles of beer on the wall, 99 bottles of beer.\nTake one down, pass it around, 98 bottles of beer on the wall.')
   }); 
   it('return when given the number equals 1', () => {
       expect(beerSong(1)).toMatch('1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.')
   });
   it('return when given the number equals 0', () => {
    expect(beerSong(0)).toMatch('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.')
   });
   it('return when given the number less than 0', () => {
    expect(beerSong(-1)).toMatch('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.')
   });
});