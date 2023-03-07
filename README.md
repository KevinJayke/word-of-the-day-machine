# Getting Started

## Setting up the Environment Variables

To use the DicoLink API in your project, you will need an API key from the DicoLink API. If you haven't already, you can get an API key by following the instructions on the DicoLink API documentation: https://api.dicolink.com/api/inscription

Once you have your API key, you need to configure the `.env` file at the root of your project. In a `.env` file you created, add the following:

`REACT_APP_API_KEY=<your-cool-api-key>`
`REACT_APP_BASE_URL=https://api.dicolink.com/v1/mots`

Make sure to replace `<your-cool-api-key>` with your actual API key.

## Running the App

To run the app, you can use the following command in your terminal:

`yarn start`

This will start the app in development mode and open it in your default browser at http://localhost:3000.

The page will automatically reload if you make changes to the code. You can also see any lint errors in the console.

## Available Scripts

In addition to `yarn start`, there are other scripts available in the project:

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn eject`

Removes the single build dependency and copies all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc.) into the project.

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Conclusion

With these steps, you should be able to set up your project to use the DicoLink API and run it in development mode. Feel free to explore the other available scripts and customize your project as needed. If you have any issues or questions, refer to the documentation or reach out to the DicoLink support team.
