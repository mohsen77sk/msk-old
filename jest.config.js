const {
  getJestProjects
} = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/web-app',
    '<rootDir>/apps/web-api',
    '<rootDir>/libs/app/shell/feature',
    '<rootDir>/libs/app/shell/ui/layout',
    '<rootDir>/libs/app/shell/ui/media-watcher',
    '<rootDir>/libs/app/shell/ui/splash-screen',
    '<rootDir>/libs/app/shell/ui/tailwind',
    '<rootDir>/libs/app/home/feature',
    '<rootDir>/libs/app/shared/animations',
    '<rootDir>/libs/app/shared/app-config',
    '<rootDir>/libs/app/shared/data-access/api',
    '<rootDir>/libs/app/shared/data-access/models',
    '<rootDir>/libs/app/shared/directives/scroll-reset',
    '<rootDir>/libs/app/shared/directives/scrollbar',
    '<rootDir>/libs/app/shared/pipes/find-by-key',
    '<rootDir>/libs/app/shared/ui/drawer',
    '<rootDir>/libs/app/shared/ui/navigation',
    '<rootDir>/libs/app/shared/utils',
    '<rootDir>/libs/shared/utils',
  ],
};
