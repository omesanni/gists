# Github Gists Project
This app was built with ReactJS.

## Start app locally
1. `Make sure you have node (v12.18.1 and above) and npm installed on your system`
2. `Create a new token in your github at https://github.com/settings/tokens`
3. `Clone this repo`
4. `npm install`
5. `create .env file at root of the project folder and enter your github token in the form of GITHUB_TOKEN=XXXX`
6. `npm start`
7. `Open browser at http://localhost:3000`

## Troubleshoot

I noticed that any time I push to github and try to use the app, the personal access token I created which is used with each network
request to github api is revoked. If this occurs you could either:

    1. Create a new token in your github at https://github.com/settings/tokens. After doing that, copy the token and replace in line 6
        of gists.ts file located at src/api/ folder.
    
    2. Remove the HEADERS object in both api functions in gists.ts file located at src/api/ folder. By doing so you can use the github
        api freely but github will place a limit on how many requests you can make to their api.

