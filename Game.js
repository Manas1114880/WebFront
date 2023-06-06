class Game {
    constructor() {
        this.b = new Board(this);
        console.log(this.b.state);
        // this.checkWin(this.b.state);
    }

    isSame(x) {
        for (var i = 0; i < x.length; i++) {
            if (x[i] == "blank" || x[0] != x[i])
                return 0;
        }
        return x[0];
    }

    zRotate(iterate) {
        if (iterate == 0)
            return this.b.state;

        var stateRotate = new Array(this.b.size);
        var tempRotate = new Array(this.b.size);
        for (var i = 0; i < this.b.size; i++) {
            stateRotate[i] = new Array(this.b.size);
            tempRotate[i] = new Array(this.b.size);
            for (var j = 0; j < this.b.size; j++) {
                stateRotate[i][j] = new Array(this.b.size);
                tempRotate[i][j] = new Array(this.b.size);
            }
        }
        for (var i = 0; i < stateRotate.length; i++) {
            for (var j = 0; j < stateRotate.length; j++) {
                for (var k = 0; k < stateRotate.length; k++) {
                    tempRotate[i][j][k] = this.b.state[i][j][k];
                }
            }
        }

        for (var x = 0; x < iterate; x++) {
            for (var i = 0; i < stateRotate.length; i++) {
                for (var j = 0; j < stateRotate.length; j++) {
                    for (var k = 0; k < stateRotate.length; k++) {
                        stateRotate[i][j][k] = tempRotate[i][k][this.b.size - j - 1];
                    }
                }
            }
            for (var i = 0; i < stateRotate.length; i++) {
                for (var j = 0; j < stateRotate.length; j++) {
                    for (var k = 0; k < stateRotate.length; k++) {
                        tempRotate[i][j][k] = stateRotate[i][j][k];
                    }
                }
            }
        }
        return stateRotate;
    }

    yRotate(iterate) {
        if (iterate == 0)
            return this.b.state;

        var stateRotate = new Array(this.b.size);
        var tempRotate = new Array(this.b.size);
        for (var i = 0; i < this.b.size; i++) {
            stateRotate[i] = new Array(this.b.size);
            tempRotate[i] = new Array(this.b.size);
            for (var j = 0; j < this.b.size; j++) {
                stateRotate[i][j] = new Array(this.b.size);
                tempRotate[i][j] = new Array(this.b.size);
            }
        }

        for (var i = 0; i < stateRotate.length; i++) {
            for (var j = 0; j < stateRotate.length; j++) {
                for (var k = 0; k < stateRotate.length; k++) {
                    tempRotate[i][j][k] = this.b.state[i][j][k];
                }
            }
        }

        for (var x = 0; x < iterate; x++) {
            for (var i = 0; i < stateRotate.length; i++) {
                for (var j = 0; j < stateRotate.length; j++) {
                    for (var k = 0; k < stateRotate.length; k++) {
                        stateRotate[i][j][k] = tempRotate[k][this.b.size - i - 1][j];
                    }
                }
            }
            for (var i = 0; i < stateRotate.length; i++) {
                for (var j = 0; j < stateRotate.length; j++) {
                    for (var k = 0; k < stateRotate.length; k++) {
                        tempRotate[i][j][k] = stateRotate[i][j][k];
                    }
                }
            }
        }
        return stateRotate;
    }

    checkWin() {
        var vals = new Array(this.b.size);

        // Multi-board diagonals
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < vals.length; j++) {
                vals[j] = this.zRotate(i)[j][j][j];
            }
            console.log("Cross-board " + (i + 1) + ": " + vals.toString());
            if (this.isSame(vals) != 0) {
                alert(this.b.players[this.b.activePlayer] + " wins!");
                return true;
            }

        }

        // Single board diagonals
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < this.b.size; j++) {
                for (var k = 0; k < this.b.size; k++) {
                    vals[k] = this.zRotate(i)[k][k][j];
                }
                console.log("Diagonal " + (i + 1) + ": " + vals.toString());
                if (this.isSame(vals) != 0) {
                    alert(this.b.players[this.b.activePlayer] + " wins!");
                    return true;
                }
            }
        }

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < this.b.size; j++) {
                for (var k = 0; k < this.b.size; k++) {
                    vals[k] = this.yRotate(i)[k][k][j];
                }
                console.log("Diagonal " + (i + 5) + ": " + vals.toString());
                if (this.isSame(vals) != 0) {
                    alert(this.b.players[this.b.activePlayer] + " wins!");
                    return true;
                }
            }
        }

        for (var j = 0; j < this.b.size; j++) {
            for (var k = 0; k < this.b.size; k++) {
                vals[k] = this.b.state[j][k][k];
            }
            console.log("Diagonal " + (j + 9) + ": " + vals.toString());
            if (this.isSame(vals) != 0) {
                alert(this.b.players[this.b.activePlayer] + " wins!");
                return true;
            }
        }

        // Columns
        for (var l = 0; l < 2; l++) {
            for (var i = 0; i < vals.length; i++) {
                for (var j = 0; j < vals.length; j++) {
                    for (var k = 0; k < vals.length; k++) {
                        vals[k] = this.zRotate(l)[i][j][k];
                    }
                    console.log("Column " + (j + 1) + ": " + vals.toString());
                    if (this.isSame(vals) != 0) {
                        alert(this.b.players[this.b.activePlayer] + " wins!");
                        return true;
                    }
                }
            }
        }

        for (var l = 0; l < 2; l++) {
            for (var i = 0; i < vals.length; i++) {
                for (var j = 0; j < vals.length; j++) {
                    for (var k = 0; k < vals.length; k++) {
                        vals[k] = this.yRotate(l)[i][j][k];
                    }
                    console.log("Column " + (j + 5) + ": " + vals.toString());
                    if (this.isSame(vals) != 0) {
                        alert(this.b.players[this.b.activePlayer] + " wins!");
                        return true;
                    }
                }
            }
        }
        return false;
    }
}