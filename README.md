# custom-components-lib

---

### Project documentation

1. Task: [custom-components-lib](https://drive.google.com/file/d/1C148FRnWfXVoRDslDWcYac3bEhebdIAV/view)
2. How to run the app:

- Go to `https://github.com/Anatoli-Paliukhovich/custom-components-lib/pull/1`
- Clone the repo locally `git@github.com:Anatoli-Paliukhovich/custom-components-lib.git`:

```bash
$ git clone git@github.com:Anatoli-Paliukhovich/custom-components-lib.git
```

- Go to folder `custom-components-lib`:

```bash
$ cd custom-components-lib
```

- Switch the branches:

```bash
$ git checkout custom-components-lib-dev
```

- Install all dependencies:

```bash
$ npm install
```

- Using the app as an npm package:

```bash
$ npm install innowise-custom-components-lib-ui
```

---

### Build scripts

```bash
# build in production mode
$ npm run build

# run storybook
$ npm run storybook

# run tests
$ npm run test

```

---

### The structure of files and folders

```

├── .husky
├── .storybook
├── src
│   ├── components
│   │   ├── Button
│   │   ├── Checkbox
│   │   ├── Input
│   │   ├── Modal
│	 │	  ├── Select
│   │   └── Switch
│   ├── stories
│   │   └── all the stories of the components
│   ├── unitTests
│   │   └── all the tests for the components
│   ├── common.module.scss
│   └── index.tsx
├── .prettierrc
├── declarations.d.ts
├── eslint.config.js
├── jest.config.ts
├── jest.d.ts
├── package-lock.json
├── package.json
├── README.md
├── setupTests.ts
├── tsconfig.json
└── webpack.config.ts

```

© [Anatoli Paliukhovich](https://github.com/Anatoli-Paliukhovich)
