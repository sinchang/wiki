# Should I explicitly separate "import" and "import type" statements?

Quote from https://github.com/microsoft/TypeScript/issues/39861#issuecomment-668131921

If you don’t have a specific need for type-only imports, you could consider them a stylistic choice. My personal suggestion for how to consider that stylistic choice is

- Best style: do not use import type. This style choice eliminates meaningless distinctions and reduces cognitive load, giving you more time and resources to think about things that matter.
- Second-best style: enable "importsNotUsedAsValues": "error" in your tsconfig, then use import type only where the errors force you to.
- Worst style: use import type as much as possible, separating values and types from the same module into separate import statements. There is simply no reason to do this, and since there are currently no tools that would enforce this style, it would fall on you to analyze and separate your declarations manually, wasting your valuable coding time.
