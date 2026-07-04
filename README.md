# lecaros.info

Personal Hugo site for José Lecaros Cisterna.

## Stack
- Hugo
- PaperMod theme
- Custom homepage override in `layouts/index.html`

## Main Files
- `hugo.toml` - site title, base URL, profile mode, and navigation links
- `layouts/index.html` - custom landing page
- `archetypes/default.md` - default front matter for new content
- `themes/PaperMod/` - vendored theme
- `public/` - generated site output

## Local Workflows
```bash
hugo server -D
hugo --gc --minify
```
