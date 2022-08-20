import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import { Action } from '../styles/styles.components/action.styles';

function ActionButton ({ id, onDelete, onArchive }) {

  return (
    <Action>
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} />
    </Action>
  )
}

export default ActionButton;