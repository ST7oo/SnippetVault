// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDapL3cvMWXLORpsQKsVXFZgh2NiIBIxV4",
        authDomain: "snippet-vault.firebaseapp.com",
        databaseURL: "https://snippet-vault.firebaseio.com",
        projectId: "snippet-vault",
        storageBucket: "snippet-vault.appspot.com",
        messagingSenderId: "545796583805"
    }
};
