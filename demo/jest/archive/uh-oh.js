import { TicTacToe } from './tic-tac-toe';

describe('When I am playing tic tac toe', () => {

    let gameGenerator;

    beforeEach(() => {
        gameGenerator = new TicTacToe();
    });

    describe('and the top row is all Xs', () => {
        let result;

        beforeEach(() => {
            gameGenerator.addToken(0, 0, 'X');
            gameGenerator.addToken(0, 1, 'X');
            gameGenerator.addToken(0, 2, 'X');
            result = gameGenerator.getWinner();
        });

        it('then X should be the winner', () => {
            expect(result).toBe('X');
        });

        it('then Y should not be the winner', () => {
            expect(result).not.toBe('Y');
        });

        it('then there should be a winner', () => {
            expect(result).not.toBeUndefined();
        })
    });

    describe('and the board is empty', () => {
    
        let result;

        beforeEach(() => {
            result = gameGenerator.getWinner();
        });

        it('then there is no winner', () => {
            expect(result).toBeUndefined();
        });

        it('then X should not be the winnder', () => {
            expect(result).not.toBe('X');
        });
    });
});

xtest('this should work', () => {    
    expect(gameGenerator).toBeTruthy();
});

xtest('if the board is empty then there is not winner', () => {
    const result = gameGenerator.getWinner();
    expect(result).toBeUndefined();
});

xtest('if the top row is all X then X should be the winner', () => {
    gameGenerator.addToken(0, 0, 'X');
    gameGenerator.addToken(0, 1, 'X');
    gameGenerator.addToken(0, 2, 'X');

    const result = gameGenerator.getWinner();
    expect(result).toBe('X');
})


export class TicTacToe  {
    constructor() {
        this.board = [[], [], [], ];
    }
    
    getWinner() { 
        return this.board[0][0];
    }

    addToken(x, y, token) {
        this.board[x][y] = token;
    }
}