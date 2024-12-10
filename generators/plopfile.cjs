module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/components/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/components/test.tsx.hbs',
      },
    ],
  });

  // Gerador para coleções
  plop.setGenerator('collection', {
    description: 'Create a collection',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your collection name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/app/(payload)/collections/{{camelCase name}}/index.ts',
        templateFile: 'templates/collections/Collection.tsx.hbs',
      },
    ],
  });
};
