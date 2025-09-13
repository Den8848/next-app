# Goodface Test Task

Web Application - Dashboard Goodface | Test task front-end dev

**Repository:** [GitHub](https://github.com/Den8848/next-app)

## Description

- Create page layout based on design
- Responsiveness (desktop + mobile)
- Typing with TypeScript
- Use of TailwindCSS
- Semantic HTML

## Technologies

- Next.js
- TypeScript
- TailwindCSS
- shadcn/ui

## Requirements

- Node.js version 22.18.0 (specified in `.nvmrc`)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/Den8848/next-app
```

2. Use the correct Node.js version:

```bash
nvm use 22.18.0
```

3. Install dependencies:

```bash
npm install
```

4. Start the project:

```bash
npm run dev
```

## Answers for the questions

1. How would you organize the components (structure, approach to reuse)?

- I would use a component-based approach: small, isolated components (buttons, inputs, cards) that are easy to reuse. I would use props for customization and context/state for shared data to avoid code duplication.

2. How would you implement API work in a large-scale project?

- I would use a separate layer for working with the API, such as services or api, where all requests are described. For data state, I would use a global state manager (Redux, Zustand) or React Query for caching and synchronization. I would create types for requests/responses (TypeScript), error handling, and centralized error logging.

3. How would you scale pages, functionality, new blocks?

- Modular structure; UI reuse; lazy loading and code splitting.

4. What are the main risks do you see in the front-end part of such a project?

- Inefficient state, excessive re-rendering of components → slowdown. Lack of typing → errors during project development
