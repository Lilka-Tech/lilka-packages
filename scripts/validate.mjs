import { readdir, readFile } from 'node:fs/promises';
for (const relative of await readdir('free', { recursive: true })) {
  if (!relative.endsWith('/package.json')) continue;
  const payload = JSON.parse(await readFile(`free/${relative}`, 'utf8'));
  if (!payload.type || !(payload.name || payload.entrypoint?.name) || !(payload.version || payload.semver)) throw new Error(`Missing identity: ${relative}`);
  if (payload.type === 'skill') {
    const main = payload.files?.find((file) => file.path === 'SKILL.md');
    if (!main?.content?.trim() || /^(zsh:|bash:|fatal:|404:)/.test(main.content)) throw new Error(`Invalid skill content: ${relative}`);
  }
}
console.log('Official package validation passed');
