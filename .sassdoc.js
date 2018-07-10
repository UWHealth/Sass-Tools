const pkg = require('./package.json');

module.exports = {
    dest: './docs',
    exclude: ['./test/*'],
    package: {
        title: 'UW Health Sass Tools',
        name: '@uwhealth/sass-tools',
        version: pkg.version,
        license: pkg.license,
        homepage: pkg.homepage,
        description: pkg.description
    },
    theme: 'default',
    autofill: ["requires", "throws", "content"],
    groups: {
        config: "Configuration",
        core: "Core API",
        grid: "Grid",
        math: "Math",
        utils: "Sass Utilities",
        undefined: "General",
    },
    sort: [
        'group<',
        'access>',
        'file>',
        'line<',
    ],
    basePath: 'https://github.com/UWHealth/sass-tools/tree/master',
    'no-update-notifier': false,
    verbose: true,
    strict: false,
    privatePrefix: /^[_-]/g,
    display: {
        alias: true,
        access: ["public"]
    }
}
