Full Backend Setup Guide (Express + Prisma + MySQL)
#Project Setup: create server folder inside todoapp 
#Clone the repo:
git clone https://github.com/rampatiganesh/todo-backend.git
- cd todoapp
- mkdir server
- cd server
- npm init -y


#Install Dependencies
- npm install express cors dotenv @prisma/client
- npm install -D typescript ts-node-dev @types/node @types/express @types/cors prisma

#Initialize TypeScript
- npx tsc --init

#Setup Database:
- Make sure MySQL is running
- Create a database (example: todo_db)
- Update .env file: DATABASE_URL="mysql://root:yourpassword@localhost:3306/todo_db"

#Prisma Migration: 
npx prisma migrate dev --name init_task_schema

#Generate Prisma client: 
npx prisma generate

#Running the Server:
npm run dev

#Server runs at: http://localhost:4000/tasks
