const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ createdBy: req.user.id });
  res.json(tasks);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
