# Simple To-Do Backend API

A lightweight REST API for managing tasks, built with **Node.js** and **Express**.

This project was built to understand the core concepts of backend development, specifically **CRUD operations** (Create, Read, Update, Delete), **RESTful routing**, and **middleware**.

## Features

* **View All Tasks:** Retrieve the full list of to-do items.
* **Add Tasks:** Create new tasks with a unique ID.
* **Update Tasks:** Modify the text of existing tasks using their ID.
* **Delete Tasks:** Remove specific tasks from the list.
* **In-Memory Storage:** Uses a Javascript array to store data during the session.

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Testing:** Postman (for API request testing)

## How to Run

1.  **Clone the repository** (or download the files).
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the server:**
    ```bash
    node to-do.js
    ```
4.  The server will start on `http://localhost:3001`.

## API Endpoints

| Method | Endpoint | Description | Request Body / Params |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Get all tasks | None |
| **POST** | `/add` | Create a new task | JSON: `{ "text": "Buy milk" }` |
| **PUT** | `/update/:id` | Update a task's text | Param: `id`, JSON: `{ "text": "New text" }` |
| **DELETE** | `/delete/:id` | Remove a task | Param: `id` (e.g., `/delete/1`) |

## Future Improvements

Current items I am working on to improve this project:
* [ ] **Database Integration:** Connect to **MongoDB** so tasks don't disappear when the server restarts.
* [ ] **Status Toggling:** Add a route to mark tasks as "Completed" (`true`/`false`).
* [ ] **Frontend:** Build a simple React interface to interact with this API.

## Learning Outcomes

Building this project helped me master:
* **REST API Architecture** (GET vs POST vs PUT vs DELETE).
* **Express Middleware** (`express.json`) for parsing request bodies.
* **Route Parameters** (`/:id`) for targeting specific data items.
* **Array Methods** (`filter`, `find`, `push`) for data manipulation.

---
*Built with ❤️ by Sifti Grover*
