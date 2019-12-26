---
id: components
title: Components
---

## Philosophy

We want to stay as organized as possible as our app scales. It's typically best if we keep all things pertaining to a particular component within its folder. This includes styles, actions, registrations and even sub-components. In this way, we don't end up with a massive entry file or scattered code all over the place making it increasingly difficult to keep up with what's going on. Lets take a nav bar for example:

There is the common pattern of ending up with something like this:

- `styles/nav.scss`
- `actions/nav.js`
- `components/nav/nav.riot`
- `components/nav/link.riot`
- `components/nav/submenu.riot`

`nav.scss` is registered in `app.scss`, which can be 100 lines of includes.

`component/nav/nav.riot` is registered in `index.js` which has 150 lines of imports and another 150 lines of component registrations

---

It would make more sense to keep all things pertaining to the app's nav bar inside of `components/nav`. In this scenario you end up with:

- `components/nav/style.scss`
- `components/nav/actions.js`
- `components/nav/nav.riot`
- `components/nav/link.riot`
- `components/nav/submenu.riot`
- `components/nav/index.js` - This is where you would register the components of nav


This dramatically cleans up entry files, and keeps your nav files in 1 place.

## Composition of a component

Continuing with the example of a nav, we would ideally compose it in the following manner:

`components/nav/index.js` - Reduce entry file size by registering component groups inside of an `index.js`
```js
import { register } from 'riot'

import NavMenu from './nav.riot';
import NavLink from './link.riot';
import SubMenu from './submenu.riot';
import SearchForm from './search.riot';
import LoginForm from './login.riot';
import UserMenu from './usermenu.riot';

[
    ['NavMenu', NavMenu],
    ['NavLink', NavLink],
    ['SubMenu', SubMenu],
    ['SearchForm', SearchForm],
    ['LoginForm', LoginForm],
    ['UserMenu', UserMenu],
].forEach(args => register(...args));
```

`actions.js`

```js
// all actions pertaining to nav
```

`index.scss` or `style.scss` - Likewise, import multiple SCSS files into 1 main `index.scss`

```sass
import "./nav";
import "./user-menu";
import "./search";
```

### Nested Components

If you end up with a component that has multiple nested components within it, it is best to continue the same pattern:

- `components/huge/index.js`
- `components/huge/index.scss`
- `components/huge/huge.riot`
- `components/huge/components/small/index.scss`
- `components/huge/components/small/index.js`
- `components/huge/components/small/small.riot`

This keeps things predictable


## Forms and Form Management

Forms can be handled using `final-form` with `riot-final-form`. And example is shown in `src/components/someForm.riot`. More on [Riot Final Form](https://github.com/damusix/riot-final-form).
