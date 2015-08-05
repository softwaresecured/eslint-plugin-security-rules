module.exports = {
    rules: {
      'no-unsafe-regex': require('./lib/rules/no-unsafe-regex'),
      'no-timing-attacks': require('./lib/rules/no-timing-attacks'),
      'no-csrf-before-method-override': require('./lib/rules/no-csrf-before-method-override')
    },
    rulesConfig: {
      'no-unsafe-regex': 2,
      'no-timing-attacks': 2,
      'no-csrf-before-method-override': 2
    }
};
