# task-sum 🦞

CLI tool that summarizes OpenClaw task files in your `tasks/` directory.

## Install

```bash
# Clone and install
git clone https://github.com/ericandersonopenclaw/openclaw-task-sum.git
cd openclaw-task-sum
npm install -g

# Or run directly from the project directory
node task-sum.js
```

## Usage

Run from any directory with a `tasks/` subdirectory:

```bash
task-sum
```

## Output Example

```
🦞 Task Summary
================
Active:   12 lines
Backlog:  8 lines
Done:     24 lines

Current:
  → TASK-0030: Fix and publish task-sum to npm
  → TASK-0031: Fix and publish openclaw-cli to npm
  → TASK-0032: Explore and document what else in ~ could be published
```

## How It Works

The tool reads three files from the `tasks/` directory:
- `tasks/active.md` - Current active tasks
- `tasks/backlog.md` - Pending/backlogged tasks
- `tasks/done.md` - Completed tasks

It counts non-empty lines in each and displays:
1. Line counts for each category
2. List of currently active tasks

## Development

```bash
# Test
npm test

# Run directly
node task-sum.js
```

## License

MIT
