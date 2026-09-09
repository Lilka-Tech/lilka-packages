# Official Lilka packages

Publisher-owned packages referenced by the public [Lilka Marketplace catalog](https://github.com/Lilka-Tech/lilka-marketplace). Executable payloads belong here, never in the catalog repository.

The initial history was extracted with `git subtree split --prefix=packages` from `Lilka-Tech/lilka-marketplace` at commit `0a5f169`. Original package commits, authors, and upstream license files are preserved. Source repository and pinned upstream commits remain in each redistributed package.

During migration, four skill files containing a shell error instead of source content were recovered from their declared upstream commit through the GitHub Contents API. No upstream commit was substituted. Consumers reference a full publisher commit SHA and SHA-256 digest of the canonical JSON package.
