const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                {
                    text: "Compra il pane",
                    done: false
                },
                {
                    text: "Porta fuori il cane",
                    done: true
                },
                {
                    text: "Fai esercizio fisico",
                    done: false
                },
                {
                    text: "Leggi un libro",
                    done: true
                },
                {
                    text: "Pulisci la casa",
                    done: false
                }
            ]

        }
    },
    methods: {
        removeToDo(index) {
            this.todoList.splice(index, 1)
        }
    }
}).mount('#app')