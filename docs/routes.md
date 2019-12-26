---
id: routes
title: Routes
---

Router is based on [riot route](https://github.com/riot/route) and is initiated in `app.riot`. You can find out more information about how to use Riot router there.

In order to use the router's features, you must place any routes inside of the `<router>` component. Nav and footer should both go inside of these. Any sub-routes inside of components should not need to be wrapped inside of another `<router>` component because it already exists inside of one.

Nested routes should be fine. For example:

`comp1.riot`:
```html
<comp1>

    <route path="/comp1/cheerios"><cheerios /></route>
    <route path="/comp1/honey-bunches"><honey-bunches /></route>
    <route path="/comp1/apple-jacks"><apple-jacks /></route>
</comp1>
```

`app.riot`:
```html
<app>
    ...
    <route path="/comp1/:cereal"><comp1 /></route>
    ...
</app>
```

This leads to better organizational patterns and is encouraged.