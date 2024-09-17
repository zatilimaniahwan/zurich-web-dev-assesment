# Zurich Web Development Assessment

### Pages

This project contains the following folders:

1. api: Contains the hooks and auth subfolders:

- hooks: Includes a custom API hook for fetching user data from a specified endpoint.
- auth: Contains NextAuth configuration and a sample file listing unauthorized emails. This sample list is used to handle cases where users should be denied access, addressing a limitation of the Google OAuth API which lacks an endpoint for retrieving test users from Google Cloud Platform (GCP).

2. auth: Houses the Unauthorized and Sign-In pages, which render components from the views folder.

The main content is rendered in `index.tsx`.

### Store

All the redux data stored in `user-slice.ts`.

### Type

The types folder was created to store global data types.

### Styles

The styles folder contains the global CSS used throughout the project.

### Utils

The utils folder contains authentication functionality used by the sign-in and sign-out components.

### Views

This folder contains components used in the modules within the pages folder. The components folder includes shared and child components utilized by parent components and does not contain any business logic.

### Middleware

This project uses middleware to manage access based on authentication. The middleware checks the token's validity to authenticate the user and redirects them to the appropriate page.

### Tests

This folder contains unit tests for authentication and email masking functionalities, as well as tests for components like the button and email visibility.

## Steps to setup the Google Oauth in local

1. Create a `.env.local` file with the following information. Please fill in the details based on the document attached to the email.

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
