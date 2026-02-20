#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

async function summarizeTasks(dir = process.cwd()) {
  const active = path.join(dir, 'tasks/active.md');
  const backlog = path.join(dir, 'tasks/backlog.md');
  const done = path.join(dir, 'tasks/done.md');

  const read = (f) => fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : 'Empty';

  console.log('🦞 Task Summary:');
  console.table({
    Active: read(active).split('\n').slice(0, 5).join('\n'),
    Backlog: read(backlog).split('\n').slice(0, 5).join('\n'),
    Done: read(done).split('\n').slice(0, 5).join('\n'),
  });
}

summarizeTasks(process.cwd());
