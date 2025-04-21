6S2026 by tcetx
📌 Bonus Tips
You can update the version in package.json to republish later:

bash
Copy
Edit
npm version patch
npm publish
To unpublish (within 72h):

bash
Copy
Edit
npm unpublish tcetx --force

✅ 2. Bump the Version in package.json
NPM requires version numbers to change with every publish.

Use one of these:

bash
Copy
Edit
npm version patch   # 1.0.0 → 1.0.1 (bug fix / small change)
npm version minor   # 1.0.1 → 1.1.0 (new features)
npm version major   # 1.1.0 → 2.0.0 (breaking changes)
This will:

Update the version in package.json

Create a Git tag (optional)

