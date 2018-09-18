import React from 'react';
import List from './commands/ls';
import Help from './commands/help';
import Whoami from './commands/whoami';
import ChangeDirectory from './commands/cd';

export default {
  list: [
    'help',
    'whoami',
    'ls',
    'cd [directory]'
  ],
  exec(command, state, callback) {
    switch(true) {
      case /^whoami/.test(command): {
        return <Whoami />;
      }
      
      case /^help/.test(command): {
        return <Help />;
      }
      
      case /^ls(.*)/.test(command): {
        return <List {...{ args: (command.match(/^cd (.*)/) || [])[1], state }} />
      }
      
      case /^cd(.*)/.test(command): {
        return <ChangeDirectory {...{ args: (command.match(/^cd (.*)/) || [])[1], state, callback }} />
      }

      default: {
        return <span>sh: command not found: {command}</span>;
      }
    }
  }
}