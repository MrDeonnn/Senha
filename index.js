const prompt = require("prompt-sync");
const input = prompt();

const senhaCorreta = "2024";

var senha = input(`Digite a senha: `);

while (senha != senhaCorreta) {
  console.log(`Acesso negado`);
  senha = input(`Digite a senha: `);
}

console.log(`Acesso permitido`);
