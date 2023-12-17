import {Snake} from './snake';

export class Egg {
  pos: number;
  constructor(gridSize: number, snake?: Snake) {
    const freeCells = this.findFreeCell(gridSize, snake);
    const randomIntInRange = getIntBetweenZeroAndN(freeCells.length);
    this.pos = freeCells[randomIntInRange];
  }

  private findFreeCell (gridSize: number, snake?: Snake): number[] {
    const allCells: any = Array.from(Array(gridSize).keys());
    const freeCells = allCells; // init with all cells, then remove unused.
    if (snake != null) {
      snake.tail.forEach(elt => {
        allCells[elt.pos] = null;
      });
    }
    return freeCells.filter((cell: any) => cell != null);
  }
}

const getIntBetweenZeroAndN = (n: number) => {
  const rand = Math.random() * n;
  return Math.floor(rand);
}
