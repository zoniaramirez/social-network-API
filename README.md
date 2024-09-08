# Social Network API

## Table of Contents
- [Description](#description)
- [Installations](#installations)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Links](#links)

## Description
The Social Network API is a backend application that provides RESTful API endpoints for managing users, thoughts, and reactions in a social network. It allows users to create accounts, post thoughts, react to thoughts, and manage friendships.

## Installations
1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Start the server**:
    ```bash
    npm start
    ```

## Usage
Once the server is running, you can use Insomnia to interact with the API endpoints. The base URL for the API is `http://localhost:3001/api`.

## API Endpoints
### Users
- **POST /api/users**: Create a new user
- **GET /api/users**: Get all users
- **GET /api/users/:userId**: Get a user by ID
- **PUT /api/users/:userId**: Update a user by ID
- **DELETE /api/users/:userId**: Delete a user by ID

### Friends
- **POST /api/users/:userId/friends/:friendId**: Add a friend
- **DELETE /api/users/:userId/friends/:friendId**: Remove a friend

### Thoughts
- **POST /api/thoughts**: Create a new thought
- **GET /api/thoughts**: Get all thoughts
- **GET /api/thoughts/:thoughtId**: Get a thought by ID
- **PUT /api/thoughts/:thoughtId**: Update a thought by ID
- **DELETE /api/thoughts/:thoughtId**: Delete a thought by ID

### Reactions
- **POST /api/thoughts/:thoughtId/reactions**: Add a reaction to a thought
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**: Remove a reaction from a thought

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JavaScript**

## Links
[Google Drive Video Link](https://drive.google.com/file/d/1zvkd9_dRS_QF4gKVVaHzGDrs2ScbfyUI/view?usp=sharing)

[GitHub Repo](https://github.com/zoniaramirez/social-network-API)