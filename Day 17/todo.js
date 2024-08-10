let todo = [];

let choice = prompt("Enter your choice");

while(true){
    if(choice == "quit"){
        console.log("---------------------")
        console.log("Quitting app")
        console.log("---------------------")
        break;
    }

    if(choice == "list"){
        console.log("---------------------")
        for(task of todo){
            console.log(task)
        }
    } else if(choice == "add"){
        todo.push(prompt("Enter task"))
        console.log("---------------------")
        console.log("Task added")
    } else if(choice == "remove"){
        console.log("---------------------")
        let del = parseInt(prompt("Choose which task to delete"))
        todo.splice(del,1)
        console.log("Task deleted successfully")
    }

    choice = prompt("Enter your choice");
}