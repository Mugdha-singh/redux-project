# React Redux Todo List App

A simple and efficient Todo List application built with React and Redux Toolkit. This project serves as a practical example of state management in React using Redux, demonstrating core concepts like slices, reducers, and actions for creating, deleting, and updating tasks.

## Key Features

-   **Add Tasks**: Quickly add new tasks to your list.
-   **Delete Tasks**: Remove tasks you no longer need.
-   **Mark as Done**: Toggle tasks as complete with a visual strikethrough.
-   **Centralized State Management**: All application state is managed cleanly using Redux Toolkit.
-   **Immutable Updates**: State is updated immutably to ensure predictable behavior and efficient re-rendering.

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **Redux Toolkit**: The official, recommended way to write Redux logic. It simplifies store setup and reducer logic.
-   **React-Redux**: Official React bindings for Redux.
-   **Vite**: A modern frontend build tool that provides a faster and leaner development experience.
-   **CSS**: Basic styling for a clean and intuitive user interface.

## Project Structure

/src
├── app
│ └── store.js # Redux store configuration
├── components
│ ├── AddForm.jsx # Component for adding new todos
│ └── Todo.jsx # Main component to display the todo list
├── features
│ └── todo
│ └── todoSlice.js # Redux slice with reducers and actions for todos
├── App.css # Main styles for the application
├── App.jsx # Root App component
└── main.jsx # Entry point of the application


## Setup and Installation

Follow these steps to get the project running on your local machine.

**1. Clone the repository:**

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

**2. Install dependencies:**

Using npm:
npm install

**3. Start the development server:**

npm run dev

## How It Works

The application's state is managed by a single Redux store. The `todoSlice` defines the state structure and the reducers that handle state updates.

-   **addTodo(task)**: Dispatched from the `AddForm` component. It takes the task string as a payload, generates a new todo object with a unique ID using `nanoid`, and adds it to the `todos` array.
-   **deleteTodo(id)**: Dispatched from the `Todo` component. It takes the todo's `id` as a payload and filters the `todos` array, returning a new array without the specified todo.
-   **markAsDone(id)**: Dispatched from the `Todo` component. It takes the todo's `id` and maps over the `todos` array, creating a new array where the `isDone` property of the target todo is toggled.

Components use the `useSelector` hook to read data from the store and the `useDispatch` hook to dispatch actions. This decouples the state logic from the UI components, making the application more maintainable and scalable.

## License

This project is licensed under the MIT License.