import { fileURLToPath } from 'node:url';
import { startHttpServer } from './app.js';
import { allPassed, runChecks } from './doctor.js';

try { process.loadEnvFile(fileURLToPath(new URL('../../.env', import.meta.url))); } catch { /* no .env */ }
const checks = runChecks();
if (!allPassed(checks)) {
  for (const c of checks.filter((x) => x.level === 'fail')) console.error(`[diagram-prove-lab] refusing to start: ${c.id}: ${c.detail}`);
  process.exit(1);
}
const { url } = await startHttpServer();
if (process.env.MODE && process.env.MODE !== 'mock') console.warn(`[diagram-prove-lab] MODE=${process.env.MODE} is not a known mode (only MODE=mock changes anything)`);
console.log(`[diagram-prove-lab] ${url} (loopback unless PROVE_BIND is set)`);
