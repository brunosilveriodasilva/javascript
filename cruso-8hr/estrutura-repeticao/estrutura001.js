/* let i = 0
while (i < 3) {
    console.log("Miau\n");
    i++;
} */

/* for (let i = 0; i < 10; i++) {
    console.log(`Número da repetição for: ${i}`);
}  |*/  

const tarefas = [
    {
        id: 1,
        texto: "Lorem text0",
        completo: true,
    },
    {
        id: 2,
        texto: "Lorem text1",
        completo: false,
    },
    {
        id: 3,
        texto: "Lorem text2",
        completo: true,
    },
    {
        id: 4,
        texto: "Lorem text3",
        completo: true,
    }
]

for (let i = 0; i < tarefas.length; i++) {
    console.log(`Tarefa ${i + 1}: ${tarefas[i].texto}`);
}

for (let tarefa of tarefas) {
    console.log(`Tarefa: ${tarefa.id}: ${tarefa.texto}`);
}