
## Introduction

Api Template

## Technologies Used

- Dependencies: Yarn
- Server: Node.js
- ORM: Prisma.js
- Other Libraries: Prettier (Code formatter), ESLint (Linter)

## Requirements

- Install Node.js latest version

## Getting Started

1. **Install Dependencies**: Run `yarn` to install required dependencies.
2. **Start the Application**: Use `yarn dev` to start the application.

## Configure files

1. **Configure Eslint**: Use `yarn add eslint --dev`.
1. 2. **Install Eslint -> File Rules**: Use `yarn add eslint --dev`
2. **Configure Typescript -> Type errors**: Use `yarn add typescript @types/node --dev`.
2. 1. **Configure Typescript -> File Rules**: Use `npx tsc --init`.

## ADD package.json

1. **Configure Build**: Use {  
  "scripts": {  
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",  
    "build": "yarn lint && tsc"  
  }  
}.  

