# Todo App - React Redux Toolkit + Spring Boot

A full-stack todo list application built with React, Redux Toolkit, RTK Query for the frontend, and Java Spring Boot for the backend.

## Features

- **Frontend (React + Redux Toolkit)**:
  - Redux Toolkit for state management
  - RTK Query for API calls with automatic caching
  - Custom middleware for action logging
  - Todo CRUD operations (Create, Read, Update, Delete)
  - Filter todos by status (All, Active, Completed)
  - Responsive UI with inline styles

- **Backend (Spring Boot)**:
  - RESTful API with CRUD endpoints
  - JPA/Hibernate for database operations
  - H2 in-memory database
  - CORS configuration for frontend integration

## Project Structure

```
.
├── backend/                    # Spring Boot backend
│   ├── src/
│   │   └── main/
│   │       ├── java/com/example/todoapp/
│   │       │   ├── TodoAppApplication.java
│   │       │   ├── config/
│   │       │   │   └── WebConfig.java
│   │       │   ├── controller/
│   │       │   │   └── TodoController.java
│   │       │   ├── model/
│   │       │   │   └── Todo.java
│   │       │   └── repository/
│   │       │       └── TodoRepository.java
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
└── frontend/                   # React frontend
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── AddTodo.js
    │   │   ├── TodoItem.js
    │   │   └── TodoList.js
    │   ├── features/todos/
    │   │   ├── todosApi.js     # RTK Query API
    │   │   └── todosSlice.js   # Redux slice with actions/reducers
    │   ├── store/
    │   │   └── store.js        # Redux store with middleware
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    └── package.json
```

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- Node.js 14+ and npm

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. (Optional) Configure CORS in `src/main/resources/application.properties`:
   ```properties
   cors.allowed.origins=http://localhost:3000
   ```

3. Build and run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:8080`

4. (Optional) Access H2 Console:
   - URL: `http://localhost:8080/h2-console`
   - JDBC URL: `jdbc:h2:mem:tododb`
   - Username: `sa`
   - Password: (leave empty)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. (Optional) Configure API URL in `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:8080/api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   The frontend will start on `http://localhost:3000`

## API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/{id}` - Get a specific todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/{id}` - Update a todo
- `DELETE /api/todos/{id}` - Delete a todo

## Redux Architecture

### Store Configuration
The Redux store is configured with:
- **todosSlice**: Manages filter state
- **todosApi**: RTK Query API slice for server communication
- **Custom Middleware**: Logs all dispatched actions and state changes

### RTK Query
RTK Query automatically handles:
- Caching and invalidation
- Loading states
- Error handling
- Refetching on focus/reconnect

### Actions and Reducers
- **setFilter**: Action to change the filter (all/active/completed)
- Reducer automatically updates the filter state

## Technologies Used

### Frontend
- React 18.2
- Redux Toolkit 1.9.7
- RTK Query
- React Redux 8.1.3

### Backend
- Spring Boot 3.1.5
- Spring Data JPA
- H2 Database
- Maven

## Development

### Running Tests

Backend:
```bash
cd backend
mvn test
```

Frontend:
```bash
cd frontend
npm test
```

### Building for Production

Backend:
```bash
cd backend
mvn clean package
java -jar target/todoapp-0.0.1-SNAPSHOT.jar
```

Frontend:
```bash
cd frontend
npm run build
```

## License

This project is open source and available under the MIT License.
