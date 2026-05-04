#!/usr/bin/env node
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, delimiter } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const pkgRoot = resolve(here, '..')
const env = { ...process.env, FREDDIE_EXTRA_CC_ROOTS: [pkgRoot, process.env.FREDDIE_EXTRA_CC_ROOTS || ''].filter(Boolean).join(delimiter) }
const child = spawn('npx', ['--yes', 'freddie', ...process.argv.slice(2)], { stdio: 'inherit', env, shell: true })
child.on('exit', code => process.exit(code ?? 0))
