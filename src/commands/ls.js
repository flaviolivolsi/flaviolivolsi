import React from 'react';
import utils from '../utils';
import filesystem from '../data/filesystem';

/**
 * @TODO: list files according to args
 */

const List = ({ args, state }) => {
  const formatDir = () => {
    const children = state.currentDirectory === '/' ?
      filesystem : 
      utils.listCurrentDir(state.currentDirectory).children;

    if (!children) {
      return <span></span>;
    }

    return children.map((value, key) => 
      <span key={key}>
        {value.name}{" "}
      </span>
    );
  };

  return (
    <span>{formatDir()}</span>
  );
};

export default List;