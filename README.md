# Issue with v2 addons in Ember engines within an Embroider app

It seems that my engine hosted by my Embroider app is unable to resolve components from my local v2 addon. I get this error `Error: Attempted to resolve 'my-component', which was expected to be a component, but nothing was found.`, when that component very much exists from one of my local v2 addons and other apps can resolve it (Yes, the v2 addons are all built). My Embroider app can resolve it, my engine when hosted by a Broccoli app can resolve it, but my engine hosted by an Embroider app cannot.

This is a repo to reproduce the issue being had. 

## Reproduction Steps

- Run `pnpm install` from the root to install all node packages
- Run `pnpm -r build-addon` to build the v2 addon
- Run `pnpm --filter my-test-app start` to run the ember app
- Load the app in the browser at `http://localhost:4200/`
- Click "Go To Engine"
- Observe Error in console

You can see in `addons/my-addon-one/src/components/my-test-title` the component being used. It is simple and only outputs a header tag.
You can see where it is being used in `engines/my-engine/addon/home/template.hbs`. It is a simple usage. If you remove the use of `<MyTestTitle />` the error goes away and the engine loads without issue. 