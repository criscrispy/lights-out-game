import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows : 5,
    ncols : 5,  
    chanceLightStartsOn : 0.25,
  }

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon : false,
      board : this.createBoard(),
    }
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {

    // let board = Array(this.props.nrows)
    //   .fill([])
    //   .map(() => Array.from({ length: this.props.ncols }, i => {
    //     return Math.random() < this.props.chanceLightStartsOn
    //   }));
    // return board
    let board = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn) 
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coordinates) {
    console.log('flipping', coordinates)
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coordinates.split("-").map(Number);


    function flipCell(y, x) {
      // if this coordinates is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell(the cell you clicked on) and the cells around it
    flipCell(y, x) // flip clicked cell
    flipCell(y, x-1) // flip left
    flipCell(y, x+1) // flip right
    flipCell(y-1, x) // flip top cell
    flipCell(y+1, x) // flip bottom cell


  //   // win when every cell is turned off
  //   // TODO: determine is the game has been won
    let hasWon = board.every(row => row.every(cell => !cell));
    this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else 
    if(this.state.hasWon){
      return (
        <div className="Board-title-winner">
          <div className="Winner">
            <span className="neon-orange">YOU</span>
            <span className="neon-blue">WIN</span>
            {/* <span role='img' aria-label='claping partying face' className='emoji'>👏🥳</span> */}
          </div>
        </div>
      )
    }

    // TODO
    // make table board

    // let tableRowWithBoards = Array(this.props.nrows)
    //   .fill([])
    //   .map((rowValue, rowIndex) => Array(this.props.ncols).fill(<Cell isLit = {this.state.board[rowIndex]}/>)
    //   );

    let tableRowWithCells = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        let coordinates = `${y}-${x}`;
          row.push(
            <Cell 
              key={coordinates} 
              isLit={this.state.board[y][x]}
              flipCellsAroundMe ={() => this.flipCellsAround(coordinates)}
              
            />
          )
      }
    tableRowWithCells.push(<tr key={y}>{row}</tr>);
    }
    return (
      <div>
        <div className="Board-title-top">
          <div className="neon-orange">Lights</div>
        </div>
        <table className="Board">
          <tbody>{tableRowWithCells}</tbody>
        </table>
        <div className="Board-title-bottom">
          <div className="neon-blue">Out</div>
        </div>
      </div>
 
    );
  }
}

    // TODO


export default Board;
