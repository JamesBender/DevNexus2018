import { TicTacToe } from './tic-tac-toe';

// const service = new TicTacToe();

describe('When I am Tic Tac Toe', () =>{

    let service = new TicTacToe();

    describe('when I have an empty board', () =>{
        it('then should be no winner', () => {
            expect(service).toBeTruthy();
        });
    });    

    describe('and the top row is full of X', () => {

        let result;

        beforeEach(() => {
            service.addToken(0, 0, 'X');
            service.addToken(0, 1, 'X');
            service.addToken(0, 2, 'X');
            result = service.getWinner();
        });

        it('then X should be the winner', () => {
            expect(result).toBe('X');
        });

        it('then Y should not be the winner', () => {
            expect(result).not.toBe('Y');
        })
    });
});





xtest('the service should exist', () => {
    expect(service).toBeTruthy();
});

xtest('when the board is empty then no winner', () => {
    const result = service.getWinner();
    expect(result).toBeUndefined();
});

xtest('if the top row is all X then the winner is X ', () => {
    service.addToken(0, 0, 'X');
    service.addToken(0, 1, 'X');
    service.addToken(0, 2, 'X');
    const result = service.getWinner();
    expect(result).toBe('X');
});