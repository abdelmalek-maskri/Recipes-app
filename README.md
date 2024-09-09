# Recipe App

This Recipe App allows users to view, search, and create their own recipes. It includes several key features such as theming options (dark/light mode), real-time recipe searching, and the ability to add new recipes. The app has been built using React, React Router for navigation, and a context-based theme selector.

Stay tuned for upcoming improvements, as I plan to integrate APIs and reinforce the app with AI functionality. The database is ready, but hasn't been published yet.

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
- **Database Integration**: The database is already in place but will be fully integrated and published soon.

## Requirements

To run this app, you need to have the following:

- **Node.js**: You can download Node.js from [here](https://nodejs.org/).
- **React**: This app uses React for the UI.
- **React Router**: For routing between the Home, Create, and Recipe pages.
- **json-server**: A mock API server to manage recipes for development purposes.

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

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
