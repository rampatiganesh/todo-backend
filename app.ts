import express from "express"
import cors from "cors"
import { PrismaClient } from "@prisma/client"

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

// Get all tasks
app.get("/tasks", async (_req, res) => {
  const tasks = await prisma.task.findMany({ orderBy: { createdAt: "desc" } })
  res.json(tasks)
})

// Get single task (for Edit page)
app.get("/tasks/:id", async (req, res) => {
  const { id } = req.params
  const task = await prisma.task.findUnique({ where: { id: Number(id) } })
  res.json(task)
})

// Create new task
app.post("/tasks", async (req, res) => {
  const { title, color } = req.body
  if (!title) return res.status(400).json({ error: "Title required" })
  const task = await prisma.task.create({ data: { title, color } })
  res.json(task)
})

// Update task
app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params
  const { title, completed, color } = req.body
  const task = await prisma.task.update({
    where: { id: Number(id) },
    data: { title, completed, color },
  })
  res.json(task)
})

// Delete task
app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params
  await prisma.task.delete({ where: { id: Number(id) } })
  res.json({ message: "Task deleted" })
})

// Start server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000/tasks")
})
