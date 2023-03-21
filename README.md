# 💬 Chat Application Frontend

This is the frontend for a chat application built using React.js. The application allows users to search for conversations by contact name, view all conversations in the left sidebar, and create new conversations in a pop-up modal. Users can send messages and receive alerts for errors and successful actions.

## Technologies

- React.js
- React Router
- React Hooks
- Redux

## Setup

To run this project, follow these steps:

1. Clone the repository to your local machine using 
2. Install the required dependencies using `npm i`
3. Run the project using `npm start`
4. Open the application in your browser at `http://localhost:3000`

## Features

### Search for Conversations

Users can search for conversations by contact name using the search bar in the left sidebar.

### View All Conversations

All conversations are displayed in the left sidebar, each with the contact name and text of the last message sent in the chat.

### Add New Contact

Users can add new contact by clicking the "Conversations" button in the left sidebar.Add there name and profile image url.

### Send Messages

Users can send messages in the current selected conversation using the text input field in the right side view.

### Handle Errors and Success Alerts

The application handles errors and success alerts and displays appropriate notifications to the user.

## Directory Structure 

    React_Album
    |------ public
    |         └---index.html
    |------ src
    |         |---action
    |         |     └--- index.js
    |         |---component
    |         |         |---LeftBar
    |         |         |       |--- leftBar.js
    |         |         |       └--- leftBar.css
    |         |         |---rightBar
    |         |                 |--- rightBar.js
    |         |                 └--- rightBar.css 
    |         |         
    |         |---data
    |         |     └--- conversation.js
    |         |---pages
    |         |      └ ---chat.css
    |         |      └ --- Chat.js   
    |         |
    |         |---reducer
    |         |      └--- index.js
    |         |---store
    |         |      └--- store.js
    |         |---App.css
    |         |--- App.js
    |         |---index.css
    |         └--- index.js
    |------ .gitignore
    |------ package.json
    |------ package-lock.json
    └------ README.md


## Author

- [@Rajy Philip](https://github.com/RajyPhilip)