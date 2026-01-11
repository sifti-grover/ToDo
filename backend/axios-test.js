const axios = require('axios');

async function addTask(task){
    const response = await axios.post("http://localhost:3001/add" , {text: task});
}
async function displayTasks(){
    const response = await axios.get("http://localhost:3001");
    console.log(response.data);
   
}

// We wrap in a main function so we can await them properly
async function main() {
    console.log("--- Adding a new task ---");
    await addTask("Learn Fetch API");

    console.log("\n--- Fetching updated list ---");
    await displayTasks();
}

main();