import React from 'react';
import List from './commands/ls';
import Help from './commands/help';
import Whoami from './commands/whoami';
import Pwd from './commands/pwd';
import ChangeDirectory from './commands/cd';

export default {
  list: [
    'help',
    'whoami',
    'pwd',
    'ls [directory]',
    'cd <directory>'
  ],
  exec(command, state, callback) {
    command = command.toLowerCase();
    
    switch(true) {
      case /^whoami/.test(command): {
        return <Whoami />;
      }

      case /^pwd/.test(command): {
        return <Pwd { ...{ state } } />;
      }
      
      case /^help/.test(command): {
        return <Help />;
      }
      
      case /^ls(.*)/.test(command): {
        return <List {...{ args: (command.match(/^ls (.*)/) || [])[1], state }} />
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