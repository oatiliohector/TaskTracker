const { Command } = require('commander');
const program = new Command();

program
  .version('1.0.0')
  .description('A simple hello world CLI')
  .action(() => {
    console.log('Hello World');
  });

program.parse(process.argv);
