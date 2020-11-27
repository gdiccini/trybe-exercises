let p = 'Bishop';

let pl = p.toLowerCase();

switch (pl){
    case 'knight':
    console.log('L shape');
    break;
    case 'bishop':
    console.log('diagonals');
    break;
    case 'king':
    console.log('1 square in any direction');
    break;
    case 'queen':
    console.log('any number of squares in any direction');
    break;
    case 'paws':
    console.log('one square foward');
    break;
    case 'rook':
    console.log('horizontally or vertically any number of squares');
    break;
    default:
    console.log('invalid name');
}