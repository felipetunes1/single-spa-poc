import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import { Jumbotron, Container, Row, Col, Button, ListGroup } from "react-bootstrap";

function calculateWinner(squares) {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];
   for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
         return { player: squares[a], line: lines[i] };
      }
   }
   return null;
}

function calculateDraw(squares) {
   return squares.filter(a => !a).length === 0;

}

function Square(props) {
   return (
      <button className="square" onClick={props.onClick} style={{ color: props.winner ? 'red' : 'black' }}>
         {props.value}
      </button>
   );
}


class Board extends React.Component {

   renderSquare(i, key) {
      return (
         <Square
            value={this.props.squares[i]}
            winner={this.props.winner.filter(value => value === i).length}
            onClick={() => this.props.onClick(i, key)}
         />
      );
   }

   render() {
      return (
         <div>
            {[0, 1, 2].map((posX, indexX) =>
               (
                  <div className="board-row" key={indexX}>
                     {[0, 1, 2].map((posY, indexY) => this.renderSquare(((indexX * 3) + indexY), `(${indexY + 1},${indexX + 1})`))}
                  </div>
               )
            )}
         </div>
      );
   }
}

class Game extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         history: [
            {
               squares: Array(9).fill(null)
            }
         ],
         stepNumber: 0,
         xIsNext: true,
         asc: true
      }
   }

   handleClick(i, position) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
         return;
      }

      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
         history: history.concat([
            {
               squares: squares,
               position: position
            }
         ]),
         stepNumber: history.length,
         xIsNext: !this.state.xIsNext,
         asc: this.state.asc
      });
   }

   jumpTo(step) {
      this.setState({
         stepNumber: step,
         xIsNext: (step % 2) === 0
      })
   }

   reOrder() {

      this.setState({
         history: this.state.history,
         stepNumber: this.state.stepNumber,
         xIsNext: this.state.xIsNext,
         asc: !this.state.asc
      })
   }

   render() {

      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      const draw = calculateDraw(current.squares);

      const moves = history.map((step, move) => {
         const desc = `GO TO ${move ? "MOVE $" + move + " - " + step.position : "START"}`;
         return (
            <ListGroup.Item key={move} onClick={() => this.jumpTo(move)} style={{ fontWeight: move === this.state.stepNumber ? "bold" : "normal" }}>{desc}
            </ListGroup.Item>
         );
      });

      const status = winner && winner.player ?
         `Winner: ${winner.player}` :
         draw ?
            `Draw` :
            `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

      return (
         <Container>
            <Row>
               <Col>
               </Col>
               <Col>{status}</Col>
               <Col></Col>
            </Row>
            <Row>
               <Col>
                  <ListGroup.Item>
                     <Button onClick={() => this.reOrder()}>Reorder</Button>
                  </ListGroup.Item>
                  {this.state.asc ? moves : moves.reverse()}

               </Col>
               <Col>
                  <Board
                     squares={current.squares}
                     winner={winner ? winner.line : []}
                     onClick={(i, pos) => this.handleClick(i, pos)}
                  />
               </Col>
               <Col></Col>
            </Row>
         </Container>
      );
   }
}

// ========================================
export default function Root(props) {
   return (
      <Container>
         <Jumbotron><h3>App Games</h3></Jumbotron>
         <Game />
      </Container>
   );
}

