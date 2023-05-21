// Variables and Block Scope->{}

//scope->Area where variable is defined or acccessible

let score = 90; //global scope-> if not inside any function or block

if (true) {
  let score = 50; //Block Scope
  console.log(score);
}
