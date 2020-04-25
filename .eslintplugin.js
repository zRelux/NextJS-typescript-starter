module.exports = {
  rules: {
    'no-typescript-as': {
      create: function(context) {
        return {
          TSAsExpression(node) {
            context.report(node, 'Do not use as operator');
          }
        };
      }
    },
    'no-index-import': {
      create: function(context) {
        return {
          ImportDeclaration(node) {
            if (node.source.value === './index') {
              context.report({
                node,
                message: 'use . instead of ./index',
                fix: function(fixer) {
                  return fixer.replaceTextRange(node.source.range, "'.'");
                }
              });
            }
          }
        };
      }
    }
  }
};
