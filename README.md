# React Dashboard Boilerplate

This is a professional Front-end boilerplate for building fast, robust, and adaptable web applications.

It's developed with some specific development philosophy but, you're free to architect your code in the way that you want.

## Features

1. Boilerplate fully typed with `TypeScript`
2. Configured with `Ant Design`
3. Less, Scss, CSS & styled-components can be use if needed
4. It has the translation & styled-components default theme with typed configuration
5. Configured with `React Router V6` which has the more optimised features than previous version
6. Has access control features
7. An architecture philosophy has been used
8. It has the fallback UI for internal server error & unauthorised

## Quick start

1. You'll need to have Node >= 14.18.1 and npm >= 6.14.15 on your machine.
2. Clone this repo using `git clone --depth=1 https://github.com/sonjoydatta/react-boilerplate.git <YOUR_PROJECT_NAME>`
3. Enter to the project directory: `cd <YOUR_PROJECT_NAME>`
4. Run `yarn or npm install` in order to install dependencies.
5. At this point you can run `yarn dev or npm dev` to see the app at `http://localhost:3000`
6. You may need to a `.env` file. For development `.env.development`

Now you are ready to buzz!

## .env example

`.env`

```
VITE_BACKEND_API_URL=https://reqres.in/api
```

`.env.development`

```
VITE_BACKEND_API_URL=https://example.com/api
```

## License

The code is available under the [MIT license](LICENSE.md).
