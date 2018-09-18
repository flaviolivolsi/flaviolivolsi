import filesystem from '../data/filesystem';
import _ from 'lodash';

export default {
  listCurrentDir: (directory) => {
    const currentDir = _.filter(directory.split('/'));

    if (!currentDir.length) {
      return;
    }

    const findNode = val => {
      return currentDir[i] === val.name && val.type === 'directory';
    };

    let directoryIsFound = true;
    let i = 0;
    let node;

    while (directoryIsFound) {
      let current_node = _.find(node ? node.children || [] : filesystem, findNode);

      node = current_node || node;
      directoryIsFound = !!current_node;
      i++;
    }

    return node;
  }
};