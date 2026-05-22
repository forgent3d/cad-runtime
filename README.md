# @forgent3d/cad-runtime

Shared CAD runtime protocol, types, and pure utilities for Forgent3D cloud services.

This package is intentionally runtime-light:

- no Next.js imports
- no Cloudflare Worker bindings
- no React
- no database clients

`cad-agent` and `cf-sandbox` can both depend on this package without coupling their deploy targets together.
