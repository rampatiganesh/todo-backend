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

#Setup Prisma + Database
- Initialize Prisma: npx prisma init
- In .env file, add your MySQL connection: DATABASE_URL="mysql://root:@localhost:3306/todo_db"

#In prisma/schema.prisma, define your model:
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Task {
  id        Int      @id @default(autoincrement())
  title     String
  color     String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
#Run migration:
npx prisma generate



