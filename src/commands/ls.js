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
      {args && <p>Sorry, <i>ls</i> command doesn't support arguments yet. Use <i>cd [directory]</i> and then <i>ls</i> in order to display the content of another directory.</p>}
      {formatDir()}
    </span>
  );
};

export default List;