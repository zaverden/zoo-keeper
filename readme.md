# Zu
## Description
Yet another tool to manage your yarn-workspaces-based mono-repository.

⚠️Current stage - prototyping. It means that nothing works yet.

`zu` allows you:

1. Setup several templates for your packages
2. Easily add new package from template (some file can be linked instead of coping, useful for shared config files)
3. Run scripts for all/several packages (parallel, respecting internal dependencies between packages)
4. Manage dependencies across all packages (install or upgrade to same dependency for all packages)

I'm creating this tool to handle my approach for project development: creating a lot of micro-packages (for more agile reuse) with same structure.

If you are looking for running scripts in monorepo - look at `oao`.

Inspired by [oao](https://www.npmjs.com/package/oao) and [yeoman](https://www.npmjs.com/package/yo).

## Roadmap
- [ ] Describe required commands
- [ ] Make a npm package
- [ ] Implement

## Decisions
### Modules
I use ES modules.

- I know they are not released yet
- I know VS code debugger can't hit breakpoints in `.mjs`
- I know that published package will be unusable without transpiling or `--experimental-modules` flag

But I'll solve it later. For now `esm` package covers my needs, and it event does not require the `--experimental-modules` flag.

### Opts parser
I started with `commander` but did not figure out how to make nested subcommands. `yargs` is pretty good for it. There is not the most elegant way to include subcommands, but it's enough.