# Zurich Web Development Assessment

## Pages

This project contains the following folders:

1. api: Contains the hooks and auth subfolders:

- hooks: Includes a custom API hook for fetching user data from a specified endpoint.
- auth: Contains NextAuth configuration and a sample file listing unauthorized emails. This sample list is used to handle cases where users should be denied access, addressing a limitation of the Google OAuth API which lacks an endpoint for retrieving test users from Google Cloud Platform (GCP).

2. auth: Houses the Unauthorized and Sign-In pages, which render components from the views folder.

The main content is rendered in `index.tsx`.

## Store

All the redux data stored in `user-slice.ts`.

## Type

The types folder was created to store global data types.

## Styles

The styles folder contains the global CSS used throughout the project.

## User Data Fetching Hooks

This module provides hooks functions for fetching user data from an API. It includes functions for fetching users by page and for fetching all users, with specific filtering criteria applied.

### Overview

- `fetchUsersByPage` : Fetches a specific page of users from the API.

- `UseFetchUsersData` : Fetches all users from the API, applying filters to include only those whose first name starts with "G" or last name starts with "W".

### Function

- Function: `fetchUsersByPage`

  - Parameters: `page` - The page number to fetch.

  - Returns: `Promise<UserResponse>` - A promise that resolves with the data for the requested page of users.

  - Description:
    - Fetches a page of users from the API endpoint `https://reqres.in/api/users?page=${page}`.
    - Returns the API response data.

- Function: `UseFetchUsersData`

  - Returns: `Promise<User[]>` - A promise that resolves with an array of filtered users.

  - Description:
    - Fetches all pages of users from the API.
    - Filters users to include only those whose first name starts with "G" or last name starts with "W".
    - Uses parallel requests to fetch all pages after the first.
    - Logs any errors encountered during the fetching process.

## Authentication Utility Functions

This module provides utility functions for handling user authentication in a Next.js application using NextAuth.js and Redux. It includes functions for signing out and signing in users with Google.

### Overview

- `signOutUser` : Signs out the user by clearing the user state in the Redux store and calling NextAuth's `signOu`t` method. On successful sign-out, the user is redirected to the sign-in page. Errors during sign-out are logged to the console.

- `signInUser` : Signs in the user with Google and redirects them to the home page upon successful sign-in.

### Function

- Function: `signOutUser`

  - Parameters: dispatch - The Redux dispatch function (AppDispatch).

  - Returns: Promise<void> - An asynchronous operation with no direct return value.

  - Description:
    - Calls nextAuthSignOut to sign out the user and redirects them to the sign-in page (/auth/signin).
    - Dispatches clearUser to clear the user state in the Redux store.
    - Logs any errors that occur during sign-out to the console.

- Function: `signInUser`

  - Parameters: None

  - Returns: void

  - Description:
    - Initiates the sign-in process with Google using nextAuthSignIn.
    - Redirects the user to the home page (/) upon successful sign-in.

## Views

This folder contains components used in the modules within the pages folder. The components folder includes shared and child components utilized by parent components and does not contain any business logic.

## Middleware

This middleware function is designed for a Next.js application using NextAuth.js for authentication. It checks if a user is authenticated and handles redirection based on their authentication status.

### Overview

The middleware function intercepts incoming requests and checks if the user is authenticated by verifying the presence of a JWT token. If the user is not authenticated and trying to access the root page (/), they are redirected to the sign-in page. Authenticated users or requests to other pages are allowed to proceed.

<b>Function: `middleware`</b>

- Parameters: request - An instance of NextRequest.
- Returns: NextResponse - A response object that can either redirect the user or allow the request to proceed.

<b>Functionality</b>

1. Token Extraction: The middleware extracts the JWT token from the request using the `getToken` function.

2. Redirection: If the user is not authenticated `(!token)` and is trying to access the root page `(/)`, the middleware redirects them to the sign-in page `(/auth/signin)`.

3. Allow Request: If the user is authenticated or the request is not for the root page, the middleware allows the request to proceed.

## Tests

This folder contains unit tests for authentication and email masking functionalities, as well as tests for components like the button and email visibility.

## Steps to setup the Google Oauth in local

1. Create a `.env.local` file with the following information at the root level. Please fill in the details based on the document attached to the email.

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
```

For the `NEXTAUTH_SECRET` can use the secret provided in the document. If you want to generate by your ownself, can run this command in the terminal

```
openssl rand -base64 32
```

2. For testing the Google Oauth,

- Authorized email - can use any personal gmail email.
- Unauthorized email - can use provided email in the document attached in the email

## Commands in the project

1. Install the dependecies

```
npm i
```

2. Run the dev environment

```
npm run dev
```

3. Run the test

```
npm run test
```

4. Run the test in watch environment

```
npm run test:watch
```

5. Run the linting functionality

```
npm run lint
```
