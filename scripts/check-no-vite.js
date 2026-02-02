import fs from 'fs'
import path from 'path'

function walk(dir, cb) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const full = path.join(dir, file)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      if (['node_modules', 'dist', '.git'].includes(file)) continue
      walk(full, cb)
    } else {
      cb(full)
    }
  }
}

let found = []
walk(process.cwd(), (file) => {
  if (!file.match(/\.(js|ts|tsx|jsx|json|env|md)$/)) return
  const content = fs.readFileSync(file, 'utf8')
  if (/VITE_[A-Z0-9_]+/.test(content) || /import\.meta\.env\.VITE_/.test(content) || /process\.env\.VITE_/.test(content)) {
    found.push(file)
  }
})

if (found.length > 0) {
  console.error('\nERROR: Found references to VITE_ env variables in the repo (these may leak secrets into client bundles):')
  for (const f of found) console.error(' - ' + f)
  process.exit(1)
} else {
  console.log('No VITE_ usages found — safe to build.')
}
