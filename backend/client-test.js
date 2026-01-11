

async function addTask(task){
    const options={
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'           
        },
        body : JSON.stringify({text : task})
    };

    const response = await fetch("http://localhost:3001/add" , options);
    const data = await response.json();

    console.log("Server response:", data);
}


async function displayTasks(){
    const response = await fetch("http://localhost:3001");
    if(!response.ok){
        throw new Error("server error: ${response.status}");
    }
    const data = await response.json();
    console.log("Current To-Do List:", data);
}

// We wrap in a main function so we can await them properly
async function main() {
    console.log("--- Adding a new task ---");
    await addTask("Learn Fetch API");

    console.log("\n--- Fetching updated list ---");
    await displayTasks();
}

main();