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
            newToDoText: null,

        }
    },
    methods: {

        removeToDo(index) {
            this.todoList.splice(index, 1)
        },

        addToDo() {
            if (this.newToDoText.trim() != "") {
                let element = {
                    text: this.newToDoText,
                    done: false
                }
                this.todoList.push(element)
                this.newToDoText = ""
            }
        },

        changeDoneItem(index) {
            if (this.todoList[index].done) {
                this.todoList[index].done = false;
            } else {
                this.todoList[index].done = true;
            }
        },

        countToDoDone() {
            return this.todoList.filter(item => item.done).length
        },

        allToDo() {
            return this.todoList.length
        }

    }
}).mount('#app')