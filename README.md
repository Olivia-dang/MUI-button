## Getting Started

run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run Storybook server

```bash
npm run storybook
```

It will redirect to [http://localhost:6006/](http://localhost:6006/) with your browser

# Process of creating and setting up this app

- Install NextJS with TypeScript (https://nextjs.org/docs/basic-features/typescript)
- Install Tailwind (https://tailwindcss.com/docs/guides/nextjs)
- Storybook (https://storybook.js.org/docs/react/get-started/install)
- Install Material UI
  - To install Material-UI, run the following command in your React project's root directory.
  ```
  npm install @material-ui/core
  #Or if you prefer yarn, run the following command.
  yarn add @material-ui/core
  ```
  - optional: fonts and icons
    - https://www.pluralsight.com/guides/installing-and-using-material-ui-with-react
- If there's error with postcss
  - `npm install -d @storybook/addon-postcss`
- Configuration MUI with NExt JS : https://www.williamkurniawan.com/blog/step-by-step-guidelines-to-implement-material-ui-in-next-js-2020
