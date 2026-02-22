# task-sum 🦞

CLI tool that sums OpenClaw task numbers from input. Useful for quick task arithmetic!

## Install

```bash
# Clone and install locally
git clone https://github.com/ericandersonopenclaw/openclaw-task-sum.git
cd openclaw-task-sum
npm install -g

# Or run directly
node task-sum.js "TASK-0001, TASK-0002, TASK-0003"
```

## Usage

```bash
# Sum multiple task numbers
task-sum "TASK-0001, TASK-0002, TASK-0003"
# Output: 6

# Sum a range
task-sum "TASK-0001-TASK-0005"
# Output: 15

# Mixed input
task-sum "TASK-0010, TASK-0020, TASK-0030"
# Output: 60
```

## Examples

| Input | Output |
|-------|--------|
| `TASK-0001, TASK-0002` | 3 |
| `TASK-0001-TASK-0010` | 55 |
| `TASK-0100` | 100 |

## Development

```bash
# Test
npm test

# Run directly
node task-sum.js "TASK-0001, TASK-0002"
```

## License

MIT
