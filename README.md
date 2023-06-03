Task App
========

A simple task management app built with React Native. The app allows users to add tasks, view tasks, and delete tasks. Tasks are stored using Redux for state management. The app also utilizes a custom hook, `useFetch`, to fetch a list of users from an external API.

Features
--------

-   Add tasks: Users can add new tasks to the task list.
-   View tasks: The app displays a list of tasks with their details.
-   Delete tasks: Users can delete tasks from the task list.
-   Redux integration: Tasks are stored and managed using `Redux-Toolkit `for state management.
-   `useFetch` custom hook: The app utilizes the `useFetch` custom hook to fetch data from an external API.

Installation
------------

1.  Clone the repository:

    bashCopy code

    `git clone https://github.com/frescobar/tasks.git`

2.  Navigate to the project directory:

    bashCopy code

    `cd task-app`

3.  Install the dependencies:

    bashCopy code

    `npm install`

Usage
-----


1.  Run the app on a connected device or emulator:

    For Android:

    bashCopy code

    `expo start --android`

    Make sure you have a device connected or an emulator running.

2.  The app will launch on the device/emulator, and you can start using it to manage tasks.

Testing
-------

To run the tests, use the following command:

bashCopy code

`npm run test`

This command will execute the test cases written using the Jest testing framework. The tests cover various components, hooks, and Redux functionality to ensure the app's functionality is working as expected.

Contributing
------------

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to create an issue or submit a pull request.

License
-------

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).
