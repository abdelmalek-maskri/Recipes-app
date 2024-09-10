# Recipe App

This Recipe App allows users to view, search, and create their own recipes. It includes several key features such as theming options (dark/light mode), real-time recipe searching, and the ability to add new recipes. The app has been built using React, React Router for navigation, and a context-based theme selector.

Stay tuned for upcoming improvements, as I plan to integrate APIs and reinforce the app with AI functionality. The database is now powered by Firestore.

**Live Demo**: You can check out the app live at [perfecto-recipes.netlify.app](https://perfecto-recipes.netlify.app)

## Features

- **Recipe Listing**: Display a list of recipes in a grid format.
- **Recipe Details**: Click on a recipe to view the details.
- **Search Recipes**: Search through the list of recipes by names.
- **Create Recipes**: Add your own recipes, including title, ingredients, and cooking method.
- **Theming**: Switch between light and dark modes using the ThemeSelector.
- **Responsive Design**: Recipe cards adapt to different screen sizes.

## Upcoming Features

- **API Integration**: Upcoming integration of third-party APIs for more recipe options.
- **AI Enhancement**: In the future, the app will include AI functionality to suggest and generate recipes based on ingredients or preferences.
- **Firestore Integration**: The app uses Firestore for data storage and management.

## Requirements

To run this app, you need to have the following:

- **Node.js**: You can download Node.js from [here](https://nodejs.org/).
- **React**: This app uses React for the UI.
- **React Router**: For routing between the Home, Create, and Recipe pages.
- **Firebase**: Set up Firebase and Firestore for data management. Follow [Firebase setup instructions](https://firebase.google.com/docs/web/setup) to configure Firestore.


## Setup

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/yourusername/recipe-app.git


The app includes dark and light modes, which can be switched via the ThemeSelector component. These themes are applied globally across the app.

Example
The current default theme color is a soothing green #62937F. Feel free to customize the theme color by modifying the theme provider context.


## Stay Tuned

I'm working hard to improve this app by integrating more features and making it smarter using AI. The app's database is ready but hasn't been published to GitHub yet. More exciting updates are coming soon!
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


