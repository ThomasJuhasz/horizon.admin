export const Configuration = {
    // TODO: refactor - should be a build parameter.
    apiBaseUrl: 'https://horizon-api.azurewebsites.net',
    // apiBaseUrl: "http://localhost:62702",

    defaultLanguage: 'en',

    // false will be only viable when we have a token based authentication service on /authentication/authenticate
    fakeLogin: false
};
