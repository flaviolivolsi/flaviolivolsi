import _ from 'lodash';
import config from '../config';
import utils from '../utils';

const ChangeDirectory = ({ args, state, callback }) => {
  if (state.currentDirectory === '/' && args === '..') {
    return null;
  }

  if (!args) {
    callback({
      currentDirectory: config.homeDir
    });
    
    return null;
  }

  let error = null;
  
  const currentDir = _.filter(state.currentDirectory.split('/'));
  const currentDirNode = utils.listCurrentDir(state.currentDirectory);
  
  let newDir = currentDir;

  if (args === '..') {
    newDir = _.dropRight(currentDir);
  } else if (!_.isEqual(utils.listCurrentDir(`/${newDir.join('/')}/${args}`), currentDirNode)) {
    newDir.push(args);
  } else {
    error = `cd: no such file or directory: ${args}`;
  }

  callback({
    currentDirectory: `/${newDir.join('/')}`
  });

  return error;
};

export default ChangeDirectory;