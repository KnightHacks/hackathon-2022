<h1 align="center">
  2022 Knight Hacks Hackathon Site
</h1>

This repository is the home for the frontend code of the 2022 Knight Hacks Hackathon Website.

## Installation

```shell
https://github.com/KnightHacks/hackathon-2022.git
cd hackathon-2022
npm install
```

## Setup Environment Variables

Create a .env file declaring the API_ENDPOINT and OAUTH_AUTH_REDIRECT variables. 

API_ENDPOINT is the url pointing to the backend you are using.

OAUTH_AUTH_REDIRECT is the url that your application should return to after completing Github oAuth.

Example: 

.env
```
REACT_APP_API_ENDPOINT=http://localhost:4000
REACT_APP_OAUTH_AUTH_REDIRECT=http://localhost:3000/auth_redirect
```

## Getting Started

To run a live development server, run the following in a terminal:

```shell
npm run start
```

This will host the website at http://localhost:3000. As you make updates to the
code, the development server will automatically reload the page.
