import _ from "lodash";

//chunk
const arrayPrueba = ['a', 'b', 'c', 'd', 'e', 'f'];
const arraySegmentado = _.chunk(arrayPrueba, 2)
console.log("Segmentando en arrays de 2:", arraySegmentado);

console.log(_.random(2, 10));
console.log(_.sample(arrayPrueba));
console.log(_.shuffle(arrayPrueba));