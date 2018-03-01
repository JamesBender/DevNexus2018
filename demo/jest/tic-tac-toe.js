export class TicTacToe  {
    constructor() {
        this.board = [[], [], []];
    }

    getWinner() {
        return this.board[0][0];
    }

    addToken(x, y, token) {
        this.board[x][y] = token;
    }
}