# Agent Instructions

## Package Manager
Use Hugo directly:
`hugo server -D`
`hugo`
`hugo --gc --minify`

## Commit Attribution
AI commits MUST include:
```text
Co-Authored-By: Claude Sonnet 4 <noreply@example.com>
```

## Commit Policy
- Never commit code.

## Validation
| Task | Command |
|------|---------|
| Local preview | `hugo server -D` |
| Production build | `hugo --gc --minify` |

## Key Conventions
- Edit `hugo.toml` for site metadata, profile text, and external links.
- Edit `layouts/index.html` for the custom homepage override.
- Treat `themes/PaperMod/` as the upstream theme; avoid local edits there unless intentionally overriding theme behavior.
- Keep generated output in `public/` out of source changes.
- Use `archetypes/default.md` for new content front matter.
- Keep this file concise; prefer existing Hugo and theme files for implementation details.
