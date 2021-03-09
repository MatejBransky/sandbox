![bootcamp logo](./bootcamp-logo.jpg)

> This repository serves as an online course for learning React. It’s here to help those who want to learn more about React and frontend in order to develop a SPA.

<a name="introduction"></a>

# [Introduction](#introduction)

The best way of learning is by working on a real project.

> Please take note that by learning React, you will _not_ become a frontend developer. There are many other areas you should be able to handle.

<a name="goal"></a>

## [Goal](#goal)

The goal of this course is to give you a fundamental understanding of how to build a production-ready React web app.

The presenters demonstrated the best practices in building React applications — experience they gained by working on numerous projects.

<a name="source"></a>

## [Source](#source)

This online course was created by utilizing material from around the web.

<a name="prerequisites"></a>

## [Prerequisites](#prerequisites)

This course requires at least junior-level knowledge of programming, and relies on fundamental knowledge of React. Reading and understanding this [amazing official documentation](https://reactjs.org/docs/getting-started.html) should be enough to get you started. But before that I suggest this course from Kent C. Dodds: [The Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react) which is a little bit more updated because:

> One thing to note is that the docs take a "class component" focused approach and are currently being rewritten to utilize newer standard practices for React called React Hooks.

General frontend knowledge is beneficial, but not necessary.

## Table of contents

<!-- toc -->

- [Course Structure](#course-structure)
- [Lectures](#lectures)
  - [Part 1](#part-1)
    - [00 Introduction](#00-introduction)
    - [01 Project Setup](#01-project-setup)
    - [Homework 1](#homework-1)
  - [Part 2](#part-2)
    - [02 Project Architecture & React Router](#02-project-architecture--react-router)
      - [**Project architecture**](#project-architecture)
      - [**Routing**](#routing)
    - [03 Styling in React](#03-styling-in-react)
    - [Homework 2](#homework-2)
  - [Part 3](#part-3)
    - [04 State Management](#04-state-management)
    - [05 Data Fetching](#05-data-fetching)
    - [Homework 3](#homework-3)
  - [Part 4](#part-4)
    - [06 Forms](#06-forms)
      - [**Validation**](#validation)
      - [**Data Handling**](#data-handling)
      - [**Error Handling**](#error-handling)
      - [**The Solution**](#the-solution)
    - [07 Authentication](#07-authentication)
    - [Homework 4](#homework-4)
  - [Part 5](#part-5)
    - [08 Functional Programming](#08-functional-programming)
    - [09 HOCs, Render Props, Hooks](#09-hocs-render-props-hooks)
    - [Homework 5](#homework-5)
  - [Part 6](#part-6)
    - [10 Async Effects & Error Reporting](#10-async-effects--error-reporting)
    - [11 Testing in React](#11-testing-in-react)
    - [Homework 6](#homework-6)
  - [Part 7](#part-7)
    - [12 TypeScript](#12-typescript)
    - [13 SPA vs MPA, SSR vs Static Export](#13-spa-vs-mpa-ssr-vs-static-export)
    - [Homework 7](#homework-7)
  - [Part 8](#part-8)
    - [14 Optimizing React Apps](#14-optimizing-react-apps)
    - [15 Deployment](#15-deployment)
    - [Homework 8](#homework-8)
- [Used Technologies](#used-technologies)
- [Credits](#credits)

<!-- tocstop -->

<a name="course-structure"></a>

# [Course Structure](#course-structure)

<!-- TODO: Course Structure -->

<a name="lectures"></a>

# [Lectures](#lectures)

<!-- TODO: Lectures -->

<a name="part-1"></a>

## [Part 1](#part-1)

<a name="00-introduction"></a>

### [00 Introduction](#00-introduction)

Please note that the course was designed to require a lot of self-studying during homework assignments.

> We do recommend dedicating some extra time to studying the shared resources.

**Goal**: We are going to build together a **dashboard** <!-- make up a name of dashboard --> (MVP of MVP :D). We choose dashboard as a bare minimum to display all needed parts.

**MVP**

- _WIP_ <!-- TODO: list dashboard parts (features) -->

We will provide you with materials but the main activity is still up to you - learning and practising.

We will use this repository as the main source of truth.

**Prerequisites**

- basic **HTML** and **CSS** knowledge
- **JavaScript** knowledge
- [**Node.js**](https://nodejs.org/) and [**Yarn**](https://classic.yarnpkg.com/) installed
- **Code Editor** or **IDE** ([VS Code](https://code.visualstudio.com/) recommended)

**HTML & CSS**

It’s a bare minimum to build any website. There are many frameworks which are solving most of the issues, but still knowing the basics will boost your overall frontend knowledge. Pay attention to **semantics** and **accessibility**. A proper markup can improve User Experience.

- [Learn to Code HTML & CSS](https://learn.shayhowe.com/) - amazing course, worth reading even for experienced devs
- Overview of CSS concepts: https://www.taniarascia.com/overview-of-css-concepts/
- Accessibility resources:
  - https://developers.google.com/web/fundamentals/accessibility/
  - http://a11yproject.com/
- [BEM methodology](https://en.bem.info/methodology/quick-start/) - one way to name things (we're using naming convention: [two dashes style](https://en.bem.info/methodology/naming-convention/#two-dashes-style))

**JavaScript**

Since we are going to work with JavaScript like a lot, let’s be prepared for it!

- Install Node.js from [the official website](https://nodejs.org)
- https://javascript.info/ - great resource for learning
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - documentation loved by JS community, search JS references on google (something like "js map mdn") and prefer MDN links
- [video resources on egghead.io](https://egghead.io/q/javascript)
- [React docs](https://reactjs.org/docs/getting-started.html)
- [Learn RegEx](https://github.com/ziishaned/learn-regex)

**General knowledge**

- [Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf)
- Browser support: https://caniuse.com/
- [Visual Studio Code](https://code.visualstudio.com/#meet-intellisense) is recommended JavaScript code editor
  - install [recommended extensions](./.vscode/extensions.json) ([how to](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions))

<a name="01-project-setup"></a>

### [01 Project Setup](#01-project-setup)

There are many different project starters for different purposes. Let's stick with the [Vite.js](https://vitejs.dev/).

- instant server start
- hot module reloading
- out-of-the-box support for TypeScript, JSX, CSS and more
- optimized build for production
- 0 configuration web application bundler - new features, bug fixes and security updates with a simple update of vite package

**Config**

Config should respect requirements during deployment and one of them can be the possibility to change API URL or other deployment-related variable. During frontend development you can access environment variables via `process.env` or `import.meta.env` (depends on the used bundler) but they are **statically replaced** during production. This means that for various deployments with different config variables you have to build FE part of the app again so you can statically replace deployment-related variables. But that's too heavy solution.

It would be much better to just reuse once built FE bundle and just replace these variables during runtime. This can be achieved externally by e.g. bash where you can build JSON file with env variables and this file has to be publicly available so you can fetch it within your app (client side).

_If you insist on the best first load of your app then you can preload this JSON file in the HTML's `<head>` via:_

```html
<link rel="preload" as="fetch" href="/env.json" crossorigin />
```

**API**

Before we start to implement features, let’s get the API communication ready. And before any implementation, you should get familiar with whichever API you are going to use.

In our case we try to simplify API. API will be done without any sync with the real one. But it can be synced via Swagger or similar standard.

Because we don't build BE we use Mock Service Worker ([MSW.js](https://mswjs.io/)) which intercepts requests on the network level so during development we can write our code, covering data fetching, as with the real API.

_In addition to the temporary backup of the real API the MSW.js is also useful for testing and debugging._

**Code Quality Tools**

- [Prettier](https://prettier.io/) - Opinionated Code Formatter, [why Prettier?](https://prettier.io/docs/en/why-prettier.html)
  - Building and enforcing a style guide
  - It makes writing code more efficient!
- [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript/TypeScript and JSX
  - _Linting is the process of running a program that will analyze code for potential errors. It's essential for programming. Linting helps you to catch bugs and follow best practices during development and therefore making production code more stable._
- [Conventional commits](https://www.conventionalcommits.org/) - A specification for adding human and machine readable meaning to commit messages
  - It makes it easier to write automated tools on top of!
  - This convention dovetails with [SemVer](https://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.
- [Husky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged) - Having previous tools without enforcing isn’t enough. Let’s use pre-commit hooks!
  - husky: registers to Git hooks
  - lint-staged: run linters on git staged files

**Documentation**

Documentation is a very important piece of any software.

- Write docs
- How to run your project
- Put there any necessary information how to build a project
- How to contribute to it (guideline)
- Anything else relevant

<a name="homework-1"></a>

### [Homework 1](#homework-1)

- Create a private repository
- Invite your mentor
- Open a **Pull Request** with **Project Setup**
  - Project starter
  - Config
    - buildtime
    - runtime
  - API
    - mock requests
    - seed mock
    - fetch simple data <!-- TODO: specify type of data -->
  - Code quality tools
  - Documentation
- Read Main Concepts in [React docs](https://reactjs.org/docs/hello-world.html)

<a name="part-2"></a>

## [Part 2](#part-2)

<a name="02-project-architecture--react-router">

### [02 Project Architecture & React Router](#02-project-architecture--react-router)

#### **Project architecture**

React and it’s ecosystem gives users complete control over everything. [But there are two common categories of grouping](https://reactjs.org/docs/faq-structure.html#is-there-a-recommended-way-to-structure-react-projects):

1. Group by type
   - (+) no mental overhead
   - (-) becomes difficult to maintain, with growing gap
2. Group by feature
   - (+) follows rules of good project architecture (https://www.semanticscholar.org/paper/Clean-Architecture%3A-A-Craftsman%27s-Guide-to-Software-Martin/4e0e958168e6390a26493e2ba599f454de1dfdc2?p2df)
   - (-) you have to think about it in advance
   - (-) sometimes refactoring is necessary

This projects is more inclined to the second option. Each feature has everything it needs to work on its own, such as its own styles, assets...

<!-- TODO: add folder structure -->

#### **Routing**

Routing is the root mechanism of user interaction on the web.

Main functions from user's point of view are:

- Navigation
- Sharing
- Bookmarking

Two types of routing:

- Server-side
  - When browsing, the adjustment of a URL can make a lot of things happen. This will happen regularly by clicking on a link, which in turn will request a new page from the server. A whole new document is served to the user. Page is **refreshed**.
- Client-side
  - The route is handled internally by the JavaScript.
  - Routing between views is generally faster, because less data is processed.
  - It’s more seamless, since there is no page refresh and things like animations are easier to implement.

**Hash-based routing**

- example: `https://site.com/#/products`
- Anchor part of the URL to reflect state of the application
- Hash changes don’t trigger page reload
- Unintuitive

**[History API](https://developer.mozilla.org/en-US/docs/Web/API/History)**

- Provides methods for manipulating the browser’s history
- `window.history.back()`
- `window.history.forward()`
- `window.history.pushState()`

A common solution to client-side routing with React is the library [`react-router`](https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md) which seamlessly integrate History API within React application.

<a name="03-styling-in-react"></a>

### [03 Styling in React](#03-styling-in-react)

We have a _WIP_ <!-- TODO: fill in feature/page -->. Before we move further, let's implement some decent styles, so that the app is more pleasant to work with.

There are numerous ways how to style web app:

- CSS ([Sass](https://sass-lang.com/)) via classes (naming convention recommended - e.g. **[BEM](http://getbem.com/naming/)**, OOCSS, SMACSS, ...)
  - `(+)` complete control over styling
  - `(+)` you can choose prefered naming conventions
  - `(-)` requires high experience with styling so you know how to structure CSS/Sass files, hot to use properly CSS variables
  - `(-)` styles are global so you need a good way how to name and encapsulate component classes (BEM recommended)
  - `(-)` you have to found and define standards and conventions
  - `(-)` requires custom solution for accessibility, component composition, keyboard navigation, style overrides, etc.
- CSS frameworks
  - [Bootstrap](https://getbootstrap.com/)
    - `(+)` huge community
    - `(+)` customizable
    - `(-)` global CSS
    - `(-)` custom naming conventions
    - `(-)` historically influenced by jQuery
    - `(-)` only CSS/Sass with plain JS
  - atomic classes ([Tailwind CSS](https://tailwindcss.com/))
    - `(+)` framework agnostic
    - `(+)` CSS doesn't increase its size at one point because you reuse already existing styles
    - `(+)` you don't need to care about naming (you try to use low level classes directly in components)
    - `(-)` lang-in-lang (you are working with atomic classes which are just a thin layer between CSS properties and components) - basically you have whole styling in one huge string which doesn't offer any useful intelligent tool from CSS files (auto suggestion, linting, media queries, ...)
    - `(-)` logic required for customazibility of design system components is difficult (you are working with strings all the time)
    - `(-)` requires custom solution for accessibility, some components requires JS for a proper behavior
    - `(-)` responsive styles in tailwind requires a combination of pseudo-classes. This can get rather lengthy as your project grows. The API: `<img class="w-16 md:w-32 lg:w-48" src="...">`
- CSS-in-JS ([styled-components](https://styled-components.com/), [emotion](https://emotion.sh/), [Stitches](https://stitches.dev/) ...)
  - `(+)` framework agnostic
  - `(+)` component styles are isolated
  - `(-)` if you need friendly CSS classnames then you need to set bundler (not all of them support this feature)
  - `(-)` increase bundle size (common libraries require JS runtime for now...there are PoCs with compilation to static CSS files but it's usually tightly coupled with specific bundler)
  - `(-)` at one point it can decrease performance (only withing huge applications - dashboards are not one of them)
  - `(-)` requires custom solution for accessibility, some components requires JS for a proper behavior
- themeable React components ([Chakra UI](https://chakra-ui.com/), [Material UI](https://material-ui.com/), ...)
  - [Chakra UI](https://chakra-ui.com/)
    - `(-)` only for React
    - `(+)` provides the convenience of Tailwind and all these other benefits (handles semantic html structure, meeting the WAI-ARIA requirements, keyboard navigation, etc.) out the box
    - `(+)` accessible
    - `(+)` themeable
    - `(+)` composable
    - `(+/-)` uses CSS-in-JS under the hood (`emotion` + `styled-system`) - small price to pay when it comes to runtime
      - This runtime footprint is caused by style computations by `styled-system`, and className generation by `emotion`.
      - If your app deals with high, frequently changing data that is performance sensitive, you might notice this footprint as your app grows.
    - `(-)` built only for React apps
- web components (~ JS framework agnostic) ([Ionic](https://ionicframework.com/))
  - Ionic
    - `(+)` framework agnostic
    - `(+)` CSS + JS
    - `(+)` isolated components (CSS + JS)
    - `(-)` immature web components (problem with Shadow DOM during testing or debugging)
    - `(-)` long-standing issues
    - `(-)` poor framework focused docs (React is not the main JS adapter)
- OSS company-based design systems ([IBM Carbon](https://www.carbondesignsystem.com/components/overview), [Microsoft Fluent UI](https://developer.microsoft.com/en-us/fluentui#/controls/web) - [theme designer](https://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/7.0/theming-designer/index.html), [Adobe Spectrum](https://spectrum.adobe.com/), [Material UI](https://material-ui.com/),...)
  - `(+)` extensive API docs
  - `(+)` extensive design docs (do's & dont's)
  - `(+)` backed by huge players
  - `(-)` very specific design
  - `(-)` non-fully-customizable
  - `(-)` some of them are dinosaurs (class based React components, custom non-react logic, weird API usage)
- unstyled React components ([Radix UI](https://radix-ui.com/), [Reach UI](https://reach.tech/))
  - `(+)` CSS-solution agnostic (you can use raw CSS, Sass, CSS-in-JS, CSS modules,...)
  - `(+)` solves accessibility and component-related JS logic
  - `(-)` CSS architecture is on your own
  - `(-)` currently immature libraries
  - example how to use Radix UI primitives with CSS-in-JS library - Stitches: https://github.com/radix-ui/design-system (look into the `./components/` folder)

If you do multiple products with the same feeling then you should consider to use design system which is not only about CSS & HTML but it should also cover design decisions and best practices.

It's a good practice to have some showroom with all UI components. The common solution to this is [Storybook](https://storybook.js.org/).

<a name="homework-2"></a>

### [Homework 2](#homework-2)

- Set up React router
- Think about and implement the rest of the project architecture
- Fetch and display _WIP_ <!-- TODO: what feature -->
- Add styles for _WIP_ <!-- TODO: what feature -->

<a name="part-3"></a>

## [Part 3](#part-3)

<a name="04-state-management"></a>

### [04 State Management](#04-state-management)

> Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day (and even some built on top of others... There are hundreds of "easier redux" abstractions on npm). Despite the fact that state management is a hard problem, I would suggest that one of the things that makes it so difficult is that we often over-engineer our solution to the problem.
> -- <cite>Kent C. Dodds ([source](https://kentcdodds.com/blog/application-state-management-with-react))</cite>

How to think about React and state:

1. [don't break up component into multiple components prematurely](https://kentcdodds.com/blog/when-to-break-up-a-component-into-multiple-components)
2. use [state colocation](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster) (Separate your state into different logical pieces rather than in one big store, so a single update to any part of state does NOT trigger an update to every component in your app.
   )
   ![State Colocation](https://kentcdodds.com/static/f14c2d3af9a01a178dd70ab1e2449180/3145a/where-to-put-state.png)
   _source: [Kent C. Dodds Blog](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)_

3. use [component composition](https://youtu.be/3XaXKiXtNjw)
4. use [React context](https://kentcdodds.com/blog/how-to-use-react-context-effectively) for simpler global state (rather static values with few updates)
5. use [`react-query`](https://react-query.tanstack.com/)/[`useSWR`](https://swr.vercel.app/) for **[server state](https://react-query.tanstack.com/guides/does-this-replace-client-state)** (solves client caching, memoizing query results, background updates, deduping multiple requests for the same data into a single request,...)

   - [Application State Management with React (Server Cache vs UI State)](https://kentcdodds.com/blog/application-state-management-with-react#server-cache-vs-ui-state)
   - [Does React Query replace Redux, MobX or other global state managers?](https://react-query.tanstack.com/guides/does-this-replace-client-state)

6. in some scenarios it's useful to have a global state management but be aware of the all other solutions so you know when you need it:

   - [Redux](https://redux.js.org/)/[zustand](https://zustand.surge.sh/) - flux principles
   - [jotai](https://jotai.surge.sh/)/[Recoil](https://recoiljs.org/) - atomic principles
     - The state is split into atoms, which are much smaller and lighter than something like a redux store. They are created with `atom` functions and could be created independently from each other or on-demand. This allows for easier code-splitting.
     - Compared to regular React Context with `useState`, atoms can be used for high-frequency updates.
   - [MobX](https://mobx.js.org/)/[Valtio](https://github.com/pmndrs/valtio) - proxy state

7. [Don't Sync State. Derive It!](https://kentcdodds.com/blog/dont-sync-state-derive-it)

On the other side you can use global state management (like Redux, MobX, zustand, React Context...). It allows to subscribe/observe the state somewhere in the tree without any notice to their parent.

<a name="05-data-fetching"></a>

### [05 Data Fetching](#05-data-fetching)

> Out of the box, React applications do not come with an opinionated way of fetching or updating data from your components so developers end up building their own ways of fetching data. This usually means cobbling together component-based state and effect using React hooks, or using more general purpose state management libraries to store and provide asynchronous data throughout their apps.
>
> While most traditional state management libraries are great for working with client state, they are not so great at working with async or server state. This is because server state is totally different. For starters, server state:
>
> - Is persisted remotely in a location you do not control or own
> - Requires asynchronous APIs for fetching and updating
> - Implies shared ownership and can be changed by other people without your knowledge
> - Can potentially become "out of date" in your applications if you're not careful
>
> Once you grasp the nature of server state in your application, even more challenges will arise as you go, for example:
>
> - Caching... (possibly the hardest thing to do in programming)
> - Deduping multiple requests for the same data into a single request
> - Updating out of date data in the background
> - Knowing when data is "out of date"
> - Reflecting updates to data as quickly as possible
> - Performance optimizations like pagination and lazy loading data
> - Managing memory and garbage collection of server state
> - Memoizing query results with structural sharing
>
> If you're not overwhelmed by that list, then that must mean that you've probably solved all of your server state problems already and deserve an award. However, if you are like a vast majority of people, you either have yet to tackle all or most of these challenges and we're only scratching the surface!
>
> -- <cite>Tanner Linsley ([source](https://react-query.tanstack.com/overview))</cite>

<a name="homework-3"></a>

### [Homework 3](#homework-3)

- _WIP_ <!-- TODO: feature with POST request (new entity) --> feature on _WIP_ <!-- TODO: feature page -->
- Use `react-query`/`useSwr` for fetching data

<a name="part-4"></a>

## [Part 4](#part-4)

<a name="06-forms"></a>

### [06 Forms](#06-forms)

> Forms can be incredibly complex in React. We lose a lot of what the browser does by default as far as form validations and error reporting which leads to a lot of people writing a large amount of boilerplate.
>
> Usually the problems fall into one of three categories:
>
> #### **Validation**
>
> Without the aformentioned baked-in browser functionality, we are left with writing large amounts of code to do very simple checks and balances such as making sure a form is populated or that an email address matches a valid pattern.
>
> This often leads to a series of conditionals, often nested conditionals that make managing the state of the form more complex.
>
> #### **Data Handling**
>
> Once the user submits, you now need to have access to your data inside you submit handler, right? This often takes one of two shapes:
>
> 1. Assigning a reference to each element and then accessing data through those references, often requiring a large number of references to be created at the top of the function to be used later.
>
> 2. Creating a controlled component where the value of the inputs is derived by state and each keystroke updates the state of each input, requiring a large number of useState calls or a single JavaScript object that requires frequent cloning of the state to update a single piece on change.
>
> #### **Error Handling**
>
> With buggy validation, comes buggy error reporting where it is not uncommon to have multiple pieces of state toggling error messages off or a more complicated approach of something like an array of errors that must be mapped and rendered into the DOM. This is often handled completely manually and by hand on each input for each set of errors / validation rules.
>
> #### **The Solution**
>
> There are a few libraries that aim to solve this issue and make forms more accessible. We will be looking at [`react-hook-form`](https://react-hook-form.com/) which I recently discovered and fell in love with but another popular option is [Formik](https://formik.org/).
>
> These libraries seek to internalize these common issues and give a more declarative approach to building forms in React.
>
> -- <cite>Jody LeCompte ([source](https://dev.to/jodylecompte/hookify-your-react-forms-154o))</cite>

We try [`react-hook-form`](https://react-hook-form.com/).

- [Short video tutorial with `react-hook-form`](https://youtu.be/bU_eq8qyjic)
- Article: [Why react-hook-form is my new favorite form library](https://swizec.com/blog/why-reacthookform-is-my-new-favorite-form-library)

<a name="07-authentication"></a>

### [07 Authentication](#07-authentication)

Types of Flows:

- Server-side Sessions
- JSON Web Tokens

**Server-side Sessions**

- Client receives session id from the server
- Server has to make a record in a database

![Scheme of the Authentication via Server-side Sessions](./docs-assets/auth-server-side-sessions.png)

**JSON Web Tokens**

- Open standard that defines a way for securely transmitting information between parties as a JSON object
- header + claims + signature = [JWT](https://jwt.io/)
- The most common scenario is authorization
  - Access tokens
  - Refresh tokens
- [debugger example](https://jwt.io/#debugger-io)

![JWT debugger example](./docs-assets/auth-jwt.png)

**Types of Attacks**

- Cross-site scripting (XSS)
  - Type of vulnerability where attacker is able to inject JavaScript that will run on your page.
  - [React JSX Prevents Injection Attacks](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)
- Cross-Site Request Forgery (CSRF or XSRF)
  - Type of vulnerability that exploits how browser works with cookies.
    - A cookie can only be sent to the domains in which it is allowed
    - The cookie will be sent for a request regardless of whether you are on bank.com or i.hacked.you

**Where to store Tokens**

Choosing the right storage depends on the use-case, therefore you need to be aware of trade-offs you make.

Three options:

1. Web Storage (`localStorage` or `sessionStorage`)

   - By leveraging [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API), which provides mechanism to store key/values pairs in a developer friendly way.

     ![Token stored via Web Storage API](./docs-assets/auth-web-storage.png)

   - `(+)` Immune to CSRF
   - `(+)` Accessible only by JavaScript running on the same domain that created data
   - `(+)` Allows to use the most semantically correct approach
   - `(+)` It’s easy to authenticate specific requests
   - `(-)` Vulnerable to XSS
   - `(-)` Cannot be accessed by Javascript running in a sub-domain
   - `(-)` Only browser can perform authenticated requests

2. HTTP-only Cookie
   - The actual work is handled on the server, so you don't need to do anything client-side as the browser will automatically take care of things for you.
   - `(+)` Immune to XSS
   - `(+)` The browser automatically includes the token in any request that meets the cookie specification
   - `(+)` Can be created at a top-level domain and used by subdomains
   - `(+)` More options available for full control (`httpOnly`, `secure`, `sameSite`...)
   - `(-)` Vulnerable to CSRF
   - `(-)` It’s harder to authenticate specific requests
   - `(-)` Possible usage of the cookies in subdomains
   - `(-)` Semantically incorrect
3. JS accessible cookie

   - By leveraging [`document.cookie`](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie) browser API, which is not very developer friendly as Web Storage, therefore you will need to parse it yourself.

     ![Token stored in document.cookie](./docs-assets/auth-document-cookie.png)

   - `(+)` Immune to CSRF
   - `(+)` Can be created at a top-level domain and used by sub-domains
   - `(+)` Allows to use the most semantically correct approach
   - `(+)` It’s easy to authenticate specific requests
   - `(-)` Vulnerable to XSS
   - `(-)` Only browser can perform authenticated requests

There are several authentication services out there such as Firebase Authentication, Auth0, etc. In sum project, you might need more control over your authorization and user management with advanced features.

That’s where [Keycloak](https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter) is an excellent choice, It provides lots of features out of the box. Keycloak has built-in support for OpenID Connect and SAML 2.0 as well as a number of social networks such as Google, GitHub, Facebook, and Twitter.

We walk through the following steps:

1. Install Keycloak - Get Started with Keycloak Docker
2. Setup Realm, Client ID in Keycloak
3. Install `keycloak-js`
4. Setup Keycloak instance as needed
5. Routes restrict based on Keycloak Authentication & Authorization

<a name="homework-4"></a>

### [Homework 4](#homework-4)

- Complete _WIP_ <!-- TODO: feature with form --> form

<a name="part-5"></a>

## [Part 5](#part-5)

<a name="08-functional-programming"></a>

### [08 Functional Programming](#08-functional-programming)

<a name="09-hocs-render-props-hooks"></a>

### [09 HOCs, Render Props, Hooks](#09-hocs-render-props-hooks)

<a name="homework-5"></a>

### [Homework 5](#homework-5)

<a name="part-6"></a>

## [Part 6](#part-6)

<a name="10-async-effects-error-reporting"></a>

### [10 Async Effects & Error Reporting](#10-async-effects-error-reporting)

<a name="11-testing-in-react"></a>

### [11 Testing in React](#11-testing-in-react)

<a name="homework-6"></a>

### [Homework 6](#homework-6)

<a name="part-7"></a>

## [Part 7](#part-7)

<a name="12-typescript"></a>

### [12 TypeScript](#12-typescript)

[Prerequisites](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup#prerequisites)

[React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)

<a name="13-spa-vs-mpa-ssr-vs-static-export">

### [13 SPA vs MPA, SSR vs Static Export](#13-spa-vs-mpa-ssr-vs-static-export)

<a name="homework-7"></a>

### [Homework 7](#homework-7)

<a name="part-8"></a>

## [Part 8](#part-8)

<a name="14-optimizing-react-apps"></a>

### [14 Optimizing React Apps](#13-optimizing-react-apps)

<a name="15-deployment"></a>

### [15 Deployment](#15-deployment)

<a name="homework-8"></a>

### [Homework 8](#homework-8)

<a name="used-technologies"></a>

# [Used Technologies](#used-technologies)

<a name="credits"></a>

# [Credits](#credits)

Thanks belongs to the whole Open Source community for making it possible to create this type of course!
