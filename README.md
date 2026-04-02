# tag-testing

A test repository demonstrating automated versioning and changelog generation using Conventional Commits.

## 📦 Release Process

### Branch Strategy

| Branch    | Purpose                                    | Version Format                    |
| --------- | ------------------------------------------ | --------------------------------- |
| `develop` | Integration branch for completed features  | `1.2.0-beta.0`, `1.2.0-beta.1`, … |
| `main`    | Production branch for stable releases only | `1.2.0`, `1.3.0`, …               |

### How It Works

1. **Merge PR to `develop` or `main`** → Workflow automatically bumps version in `package.json` and updates `CHANGELOG.md`
2. **Create a tag manually** → Triggers approval workflow
3. **After approval** → Publishes to npm
   - Tags **with `-`** (e.g., `1.2.0-beta.0`) → published as `beta`
   - Tags **without `-`** (e.g., `1.2.0`) → published as `latest`

---

## 📝 Conventional Commits

The version bump type is determined **automatically** based on commit message prefixes:

```
<type>(<optional scope>): <description>
```

### Commit Types and Version Impact

| Prefix      | When to Use                          | Version Bump                |
| ----------- | ------------------------------------ | --------------------------- |
| `feat:`     | New feature                          | **minor** – `1.1.0 → 1.2.0` |
| `fix:`      | Bug fix                              | **patch** – `1.1.0 → 1.1.1` |
| `perf:`     | Performance improvement              | **patch**                   |
| `refactor:` | Code refactoring (no feature/bugfix) | no bump                     |
| `docs:`     | Documentation only                   | no bump                     |
| `chore:`    | Maintenance tasks (config, deps)     | no bump                     |
| `test:`     | Tests                                | no bump                     |
| `ci:`       | CI/CD configuration                  | no bump                     |

### Breaking Changes → Major Bump

Indicate breaking changes with an exclamation mark after the type:

```bash
feat!: change API response structure
```

### Examples

```bash
# New feature → minor bump (1.1.0 → 1.2.0)
git commit -m "feat(auth): add OAuth login support"

# Bug fix → patch bump (1.1.0 → 1.1.1)
git commit -m "fix(api): handle 404 errors correctly"

# Breaking change → major bump (1.0.0 → 2.0.0)
git commit -m "feat!: change API response structure"
```

---

## ⚠️ Important: Pull After Each Release

After each automated release, the workflow commits changes back to the repository:

- Updated version in `package.json`
- Updated `CHANGELOG.md`

**Always pull before pushing new changes:**

```bash
# After merging to develop
git pull origin develop

# After merging to main
git pull origin main
```

Without pulling, Git will reject your push due to diverged history.
