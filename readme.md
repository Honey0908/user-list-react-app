# Use List React App

This is a simple React application that displays a list of users and their details. When the user hovers over a user's name, additional details about the user are displayed.

[deploy Link](https://elegant-alpaca-f8db03.netlify.app/)

## Technologies

- React
- Redux
- Redux Toolkit
- CSS

### Installation

To run the app, you need to have Node.js and npm installed on your machine. Then, follow these steps:

- Clone this repository to your local machine
- Open a terminal window and navigate to the project directory
- Run `npm install` to install the project dependencies
- Run `npm run dev` to start the development server

## Folder Structure

```sh
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── favicon.png
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   ├── Components
│   │   ├── HoveredUser
│   │   │   ├── HoveredUser.jsx
│   │   │   └── HoveredUser.module.css
│   │   ├── ProgessBar
│   │   │   ├── ProgressBar.jsx
│   │   │   └── ProgressBar.module.css
│   │   ├── User
│   │   │   ├── User.jsx
│   │   │   └── User.module.css
│   │   └── UserListTable
│   │       ├── UserListTable.jsx
│   │       └── UserListTable.module.css
│   ├── main.jsx
│   ├── pages
│   │   └── UserListContainer
│   │       ├── UserListContainer.jsx
│   │       └── UserListContainer.module.css
│   └── store
│       ├── index.jsx
│       └── UserSlice.jsx
└── vite.config.js
```
