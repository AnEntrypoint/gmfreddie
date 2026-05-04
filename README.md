# gmfreddie

[Freddie](https://github.com/AnEntrypoint/freddie) preloaded with
[gm-cc](https://github.com/AnEntrypoint/gm-cc) as a Claude Code plugin.

```
bun x gmfreddie
```

That's it. Freddie boots in the current directory; gm-cc's skills, agents,
and hooks are auto-discovered from `gmfreddie`'s `node_modules` by Freddie's
host (no symlinks, no config files, no launcher logic). Local Freddie
configuration in `./.freddie/` of your cwd is honored as usual.

This package contains exactly two source files:

- `package.json` — declares `freddie` and `gm-cc` as dependencies
- `bin/gmfreddie.mjs` — one statement: `import 'freddie/bin/freddie.js'`

All plugin loading happens inside Freddie via [plugsdk](https://github.com/AnEntrypoint/plugsdk).

## Why this exists

`bun x freddie` works, but it doesn't ship gm-cc. Add `gm-cc` as a peer dep
of any project and Freddie will pick it up. `gmfreddie` is just the
preconfigured combination so you can run one command.

## Versions

This package pins compatible versions of `freddie` and `gm-cc`. Bump together.

## License

MIT
