#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function summarizeTasks(dir = process.cwd()) {
  const tasksDir = path.join(dir, 'tasks');
  
  if (!fs.existsSync(tasksDir)) {
    console.log('🦞 No tasks/ directory found');
    return;
  }
  
  const read = (filename) => {
    const f = path.join(tasksDir, filename);
    return fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : '';
  };
  
  const countLines = (content) => {
    return content ? content.split('\n').filter(l => l.trim()).length : 0;
  };
  
  const active = read('active.md');
  const backlog = read('backlog.md');
  const done = read('done.md');
  
  console.log('🦞 Task Summary');
  console.log('================');
  console.log(`Active:   ${countLines(active)} lines`);
  console.log(`Backlog:  ${countLines(backlog)} lines`);
  console.log(`Done:     ${countLines(done)} lines`);
  console.log('');
  
  // Show current task
  if (active) {
    const lines = active.split('\n');
    let inCurrent = false;
    let currentTasks = [];
    
    for (const line of lines) {
      if (line.startsWith('## Current')) {
        inCurrent = true;
        continue;
      }
      if (inCurrent && line.startsWith('## ')) {
        break;
      }
      if (inCurrent && line.includes('- [ ]')) {
        currentTasks.push(line.replace('- [ ]', '').trim());
      }
    }
    
    if (currentTasks.length > 0) {
      console.log('Current:');
      currentTasks.forEach(t => console.log(`  → ${t}`));
    }
  }
}

summarizeTasks(process.cwd());