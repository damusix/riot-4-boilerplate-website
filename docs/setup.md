---
id: setup
title: Setup
---

In order to understand how to get going with this project, you must understand how it is setup. For the most part, anything outside of `index.html`, `src/` and `assets/` you probably should not touch unless you know what you're doing. We're going to focus solely inside of the `src/` folder.

## Structure

The app comes with a predefined structure and should likely stay that way. It's designed to promote a clean and uniform workflow. If you follow the pattern, you shouldn't run into much trouble.

### `404.riot`

- Your 404 page

### `actions.js`

- Where global actions should live. [More on actions](actions.md).
- This is where all DOM events are hooked up into the app. [More on events](events.md).

### `app.riot`

- Your main app component.
- This is where you nav and footer exist
- Also where you declare top level routes. [More on routes](routes.md).

### `app.scss`

- SASS entry point file

### `index.js`

- Webpack entry point file
- Base components are registered here
- Brings in `components/index.js`
- Brings in `shared/index.js`
- Local storage state is loaded into app state here
- Devtools is registered and can be disabled here. [More on devtools](https://github.com/damusix/riot-meiosis#rm-dev-tools).

### `store.js`

- Initial app state is defined
- State reducer is defined
- State stream is created
- App event emitter is created

### `components`

- This is where components and anything related to components should be organized

### `shared`

- Shared components that are used globally should be organized in here
- Should follow the same philosophy detailed in [components](components.md)

### `utils`

- Application utilities are organized here
- Comes with some useful utilities already

## State Management

State uses [riot-meiosis](https://github.com/damusix/riot-meiosis). You really only need to acquiant yourself with:
- [`connect()`](https://github.com/damusix/riot-meiosis#connectmaptostate-maptocomponentmycomponent)for connected riot components to state
- [`getState()`](https://github.com/damusix/riot-meiosis#getstate) for getting the application's current state
- [`getStream()`](https://github.com/damusix/riot-meiosis#getstream) for grabbing the state stream for pushing updates

Everything else is done for you. Check out how to use it briefly so you become familiarized with these functions. Most of the existing components should give you a good idea on how to use it.

To update state, you `getStream` and `stream.push()` a new state object. This is covered more in depth in the [actions section](actions.md).
