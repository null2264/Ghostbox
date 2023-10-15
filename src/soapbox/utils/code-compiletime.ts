import { execSync } from 'child_process';

import pkg from '../../../package.json';

const { GITHUB_REF_NAME, GITHUB_SHA } = process.env;

const shortRepoName = (url: string) => new URL(url).pathname.substring(1);
const trimHash = (hash: string) => hash.substring(0, 7);

const tryGit = (cmd: string) => {
  try {
    return String(execSync(cmd));
  } catch (e) {
    return undefined;
  }
};

const version = (pkg: Record<string, any>) => {
  // Try to discern from GitHub CI first
  if (GITHUB_REF_NAME === `v${pkg.version}` || GITHUB_REF_NAME === 'stable') {
    return pkg.version;
  }

  if (typeof GITHUB_SHA === 'string') {
    return `${pkg.version}-${trimHash(GITHUB_SHA)}`;
  }

  // Fall back to git directly
  const head = tryGit('git rev-parse HEAD');
  const tag = tryGit(`git rev-parse v${pkg.version}`);

  if (head && head !== tag) return `${pkg.version}-${trimHash(head)}`;

  // Fall back to version in package.json
  return pkg.version;
};

const data = {
  name: pkg.name,
  displayName: pkg.displayName,
  url: pkg.repository.url,
  repository: shortRepoName(pkg.repository.url),
  version: version(pkg),
  homepage: pkg.homepage,
  ref: GITHUB_REF_NAME || GITHUB_SHA || tryGit('git rev-parse HEAD'),
};

export type Code = typeof data;

export default () => ({
  data: data,
});
