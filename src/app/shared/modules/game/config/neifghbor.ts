

export function upperNeighbor(cell: number, dimension: number, latticeSize: number): number {
  const props = getNeighborProperties(cell, latticeSize, dimension);
  return (cell + props.distanceToNeighbor) % props.rangelength + props.rangestart;
}

export function lowerNeighbor(cell: number, dimension: number, latticeSize: number): number {
  const props = getNeighborProperties(cell, latticeSize, dimension);
  return (cell - props.distanceToNeighbor + props.rangelength) % props.rangelength + props.rangestart
}

function getNeighborProperties(cell: any, latticeSize: any, dimension: any) {
  const rangelength = getRangeLength(latticeSize, dimension);
  return {
    distanceToNeighbor: getDistanceToNeighbor(latticeSize, dimension),
    rangelength: rangelength,
    rangestart: getRangeStart(cell, rangelength)
  }
}

function getDistanceToNeighbor(size: number, dimension: number) {
  return pow(size, dimension-1);
}

function getRangeLength(size: number, dimension: number) {
  return pow(size, dimension);
}

function getRangeStart(cell: any, rangelength: any) {
  return Math.floor(cell / rangelength) * rangelength;
}

function pow(basis: number, exponent: number) {
  return Math.pow(basis, exponent);
}
