import express from "express";
import task from "./tasks/task.js";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(express.json());

app.get("/task/fetch_task", (req, res) => {
  return res.status(200).json({
    taskList: task,
  });
});

app.get("/task/fetch_task/:id", (req, res) => {
  const taskId = req.params.id;
  try {
    task.forEach((e) => {
      if (e.id == taskId) {
        return res.status(200).json({
          task: e,
        });
      } else {
        return res.status(400).json({
          error: "task with this id not found",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: "something went wrong",
      error: error,
    });
  }
});

app.post("/task/create_task", (req, res) => {
  const { title, description, date } = req.body;

  if (title == "" && description == "" && date == "") {
    return res.status(400).json({
      error: "Field Are Required",
    });
  }

  try {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      date,
    };
    task.push(newTask);

    return res.status(200).json({
      msg: "task inserted",
      task: newTask,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "something went wrong",
      error: error,
    });
  }
});

app.put("/task/update_task/:id", (req, res) => {
  const taskId = req.params.id;
  const { title, description, date } = req.body;

  if (title == "" && description == "" && date == "") {
    return res.status(400).json({
      error: "Field Are Required",
    });
  }

  try {
    task.forEach((e) => {
      if (e.id == taskId) {
        e.title = title;
        e.description = description;
        e.created_at = date;

        return res.status(200).json({
          task: e,
        });
      } else {
        return res.status(400).json({
          error: "task with this id not found",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: "something went wrong",
      error: error,
    });
  }

  return res.status(200).json({
    msg: "task updated",
    task: newTask,
  });
});

app.delete("/task/delete_task/:id", (req, res) => {
  const taskId = req.params.id;

  try {
    task.forEach((e, i) => {
      if (e.id == taskId) {
        task.splice(i, 1);
        return res.status(200).json({
          msg: "task deleted",
        });
      } else {
        return res.status(400).json({
          error: "task with this id not found",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: "something went wrong",
      error: error,
    });
  }
});

app.listen(8080, () => {
  console.log("server is listening on port: 8080");
});
