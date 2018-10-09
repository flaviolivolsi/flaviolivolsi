import path from "path";
import _ from "lodash";
import config from "../config";
import utils from "../utils";

const ChangeDirectory = ({ args, state, callback }) => {
  if (!args) {
    callback({
      currentDirectory: config.homeDir
    });

    return null;
  }

  let error = null;

  const newDir = path.resolve(state.currentDirectory, args);
  const newDirNode = utils.listDir(newDir);
  const currentDirNode = utils.listDir(state.currentDirectory);

  if (!_.isEqual(newDirNode, currentDirNode) || args === ".") {
    console.log(newDirNode);

    callback({
      currentDirectory: newDir
    });
  } else {
    error = `cd: no such file or directory: ${args}`;
  }

  return error;
};

export default ChangeDirectory;
