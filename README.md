# Blog Post Application

The Blog Post Application is a full-stack web application designed to manage blog posts, comments, and user authentication. It provides a platform for users to create, edit, and publish blog posts, interact with comments in real-time, and manage their profiles.

## Features

- **Authentication**: Users can sign up, sign in, and sign out securely.
- **Blog Post Management**: Users can create, edit, and delete their blog posts.
- **Comment System**: Users can leave comments on blog posts and interact with existing comments.
- **User Profile**: Users have individual profiles where they can manage their information.
- **Dashboard**: Admin users have access to a dashboard for managing posts, comments, and users.
- **Responsive Design**: The application is designed to be responsive across various devices.

## Technologies Used

- **Frontend**: React.js, Redux, React Router, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase Authentication
- **Real-time Interaction**: Firebase Realtime Database
- **Deployment**: Vite (Frontend), Heroku (Backend), Firebase Hosting (Production)

## Getting Started

1. Clone the repository.
2. Navigate to the `client` directory and run `npm install` to install frontend dependencies.
3. Navigate to the `api` directory and run `npm install` to install backend dependencies.
4. Set up Firebase project and configure Firebase Authentication and Realtime Database.
5. Create a `.env` file in the `api` directory and add necessary environment variables.
6. Run the frontend and backend servers using `npm start` or `npm run dev`.
7. Access the application in your browser at `http://localhost:3000`.

## Contributing

Contributions to the Blog Post Application are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes and push to your fork.
5. Submit a pull request to the `main` branch of the original repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
