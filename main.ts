import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = 'The approver declined, nobody read the pre-read, and Legal owns the only blocker, so this meeting has quorum without authority—adjourned.';

try {
  const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDirectory, { recursive: true });
  // Write only the sentence; a newline would add an unnecessary byte.
  writeFileSync(join(outputDirectory, 'entry.txt'), entry, 'utf8');
} catch (error) {
  console.error('Failed to create entry.txt in the configured output directory:', error);
  process.exitCode = 1;
}
