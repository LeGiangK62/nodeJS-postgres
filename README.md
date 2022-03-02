# NestJS + PostgreSQL

Source with workshop video

[Building a REST API with NestJS and Prisma - Marc Stammerjohann | Prisma Day 2021](https://www.youtube.com/watch?v=mmbd5hcQUaY)

[Building a REST API with NestJS and Prisma](https://www.notion.so/marcjulian/Building-a-REST-API-with-NestJS-and-Prisma-8296846a0fc54ac0b445ae9364805669)

---

# Create a new project with nestJS:

```bash
nest new NAME

```

# INsert Prisma in to nestJS project:

```bash
	npm install prisma --save-dev

	npx prisma init
```

# Seed, load or create database

1. Update db in url into prisma scheme:
    
    ```bash
    npx prisma db pull
    ```
    
2. Update db in url from prisma schema:
    
    ```bash
    npx prisma migrate dev --name init
    ```
    
3. Seed db from seed.ts
    
    ```bash
    npx prisma db seed
    ```
    
    Remember to add prisma.seed into package  - [link](https://www.prisma.io/docs/guides/database/seed-database)
    
    ```json
    			{
    			  "name": "my-project",
    			  "version": "1.0.0",
    			  "prisma": {
    			    "seed": "ts-node prisma/seed.ts"
    			  },
    			  "devDependencies": {
    			    "@types/node": "^14.14.21",
    			    "ts-node": "^9.1.1",
    			    "typescript": "^4.1.3"
    			  }
    			}
    ```
    

# Generate Prisma Client

Redone this when update schema:

```bash
	npx prisma generate
```

# Generate Module and service

```bash

nest generate module prisma
nest generate service prisma
```

# Generate all module, source, controller for new

```bash
nest generate resource
```