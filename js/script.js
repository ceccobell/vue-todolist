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
            ],
            newToDoText: null

        }
    },
    methods: {
        removeToDo(index) {
            this.todoList.splice(index, 1)
        },

        addToDo() {
            let element = {
                text: this.newToDoText,
                done: false
            }
            this.todoList.push(element)
            this.newToDoText = null
        }
    }
}).mount('#app')