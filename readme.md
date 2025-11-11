# Open-Kanban

A self-hosted kanban board for managing small projects.

![](./docs/prevPic.png)

## Requirements

- Docker v28+

## Installation & Setup

1. `cp .env.example .env`
2. `docker compose up --build`

## Configuration

If you need to configure database access or the server authorization key, adjust the corresponding values in the .env file.

### Initial Setup

To ensure that the service works properly, you need to run initial migrations and create a user.

After the service has started successfully, run the following commands:
1. `docker exec -it backend sh` // Enter the backend service environment
2. `yarn add -D mikro-orm` // Install CLI tools for schema versioning
3. `yarn migration:up`
4. `yarn db:seed`

Updating versions

To update open-kanban versions, use the first 3 commands from the previous section.