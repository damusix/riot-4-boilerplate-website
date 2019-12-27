---
id: styles
title: Styles and SASS
---

Styles are used in 2 ways. There are the global styles for base components that live in `src/scss`, and there are component styles. The base styles are based on [milligram.io](https://milligram.io/). You can learn about how that is set up there.

The entry point for SASS is `src/app.sass`. In there you will find the following:

```scss
@import "./scss/vars";
@import "./scss/mixins/index";
@import "./scss/base/index";
@import "./components/index";
@import "./shared/index";
```

You should not need to add anything else in this file for the lifetime of your app, and here's why:

- ### `src/scss/_vars`
    - Declare all of your variables in here
- ### `src/scss/mixins/index`
    - All of your mixins are imported into this file and are accessible throughout your styles
- ### `src/scss/base/index`
    - Your base styles are imported in this file. This includes grids, buttons, typography, etc. Anything you add belongs in the `scss/base` folder and should be imported in that folder's `index.sass` file
- ### `components/index`
    - All of your component styles should be imported in this file.
- ### `shared/index`
    - All of your shard components' styles should be imported in this file.

By following this, you keep this file slim and don't have to think about it. You styles should be declared inside a folder's `index.scss`.