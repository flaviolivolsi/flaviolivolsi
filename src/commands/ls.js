import React from 'react';
import path from 'path';
import utils from '../utils';
import filesystem from '../data/filesystem';

/**
 * @TODO: list files according to args
 */

const List = ({ args = '.', state }) => {
  const formatDir = () => {
    const directory = path.resolve(state.currentDirectory, args);

    const children = directory === '/' ?
      filesystem : 
      utils.listDir(directory).children;

    if (!children) {
      return <span></span>;
    }

    return children.map((value, key) => {
      if (value.action && value.action === 'link') {
        return (
          <span key={key}>
            <a href={value.target} target="_blank">{value.name}</a>{" "}
          </span>
        );
      }

      return (
        <span key={key}>
          {value.name}{" "}
        </span>
      );
    });
  };

  return (
    <span className="ls">
      {formatDir()}
    </span>
  );
};

export default List;