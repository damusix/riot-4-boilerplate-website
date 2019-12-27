---
id: get-started
title: Get Started
sidebar_label: Example Page
---

The purpose for making this project is to dramatically reduce the time it takes between "I want to use Riot" and using Riot. Lets get started making your first single page Riot app!

## About this boilerplate

1. There are a handful of things that are prepared for you such node aliases and build scripts
1. The project builds out to static files that you can host anywhere
1. It comes with a deploy script to deploy to AWS using terraform
1. This boilerplate is for you to make your own. Feel free to strip away or add anything you do(n't) need or like!

## Installation

``` bash
git clone https://github.com/damusix/riot-4-boilerplate MY_PROJECT
cd MY_PROJECT
npm install
```

Remove original git info and make it your own
``` bash
rm -rf .git
git init
```

## Start your project!
``` bash
npm start
```

And that's it! You can get started building a Riot app.


## Deployment

To prepare your app for deployment, assets will build into `assets/` folder:

``` bash
npm run build
```

Then, once you have setup your `project.tfvars` and created your infrastructure, you can deploy your website.

``` bash
npm run deploy
```

For more information on how to setup deployment, see [deployment guide](deployment.md).


## What this boilerplate comes with

I've added a series of tools and libraries that I personally use to help facilitate development. I prefer minimalism and like to keep to DOM standards as much as possible, hence why I use Riot in the first place and have been using it for years. To me, project size matters in order to offer the best possible experience, and in order to accomplish this, one must use simple but effective tools that do not add much size to your build package.

- SASS starter kit based on [Milligram IO](http://milligram.io)
- [BiancoJS](https://github.com/biancojs/bianco) - A great utility for DOM events, HTML element style and attribute manipulation, viewport, pointer events, etc.
- [AnimeJS](https://animejs.com) - Minimal but awesome animation library
- [Fontawesome 5](http://fontawesome.io) - Best icons on the net
- [AxiosJS](https://github.com/axios/axios) - AJAX support
- [Final Form](https://final-form.org/) + [Riot Final Form](https://github.com/damusix/riot-final-form) - Manage forms and form state using modern tools. I have also created a wrapper for riot components to use FF.
- [Riot Meiosis](https://github.com/damusix/riot-meiosis) - State management based on streams.
- [Riot Route]((https://github.com/riot/route/tree/dev).) - Official Riot 4 router
- [Jest](https://jestjs.io/) - Test using JSDOM and Jest


## Shortcuts (node aliases)

When projects scale out, you tend to get into a sort of hell of nested imports. In order to mitigate that, these shortcuts were added for convenience. Instead of doing `import X from '../../../../../x`, you start from an alias `import X from '@/x'`.

- `~/*` aliases `src/*`
- `+/*` aliases `src/shared/*`
- `@/*` aliases `src/components/*`
- `#/*` aliases `src/utils/*`

```js
// "~" is "./src"
import Store from "~/store"

// "+" is "./src/shared"
import Alerts from "+/alerts/Alerts"

// "@" is "./src/components"
import TestStuff from "@/test.riot";

// "#" is "./src/utils"
import KeyCodes from "#/keycodes";
```