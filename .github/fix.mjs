import { readFileSync, writeFileSync } from 'node:fs'

const content = readFileSync('./spec.ts', { encoding: 'utf-8' })

writeFileSync('./spec.ts', content.replace(
  `"application/json": WithRequired<components["schemas"]["check_updatable"], "name" | "method" | "target" | "regions" | "type" | "enabled">;`,
  `"application/json": WithRequired<components["schemas"]["check_updatable"], "name" | "target" | "regions" | "type" | "enabled">;`
))
