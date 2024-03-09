# Task Management RESTful API

This project is a simple RESTful API built with Express.js for managing tasks. It allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks stored in memory.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

2. Navigate to the project directory:

3. Install dependencies `npm i`:

4. Start the server:



The server will start running on `http://localhost:5000` by default.

## Endpoints

The API exposes the following endpoints:

- `GET /task/fetch_task`: Retrieve a list of all tasks.
- `GET /task/fetch_task/:id`: Retrieve a specific task by ID.
- `POST /task/create_task`: Create a new task.
- `PUT /task/update_task/:id`: Update an existing task by ID.
- `DELETE /task/delete_task/:id`: Delete a task by ID.

## Request and Response Examples

### GET /task/fetch_task

**Request:**

```http
GET /task/fetch_task

{
  "taskList": [
    {
      "id": 1,
      "title": "Example Task 1",
      "description": "This is an example task",
      "date": "2024-03-10"
    },
    {
      "id": 2,
      "title": "Example Task 2",
      "description": "This is another example task",
      "date": "2024-03-11"
    }
  ]
}

POST /task/create_task
Content-Type: application/json

{
  "title": "New Task",
  "description": "This is a new task",
  "date": "2024-03-12"
}

{
  "msg": "task inserted",
  "task": {
    "id": 3,
    "title": "New Task",
    "description": "This is a new task",
    "date": "2024-03-12"
  }
}
