import React from 'react';
import { showFormattedDate } from '../utils/getData';
import { Board, Content } from '../styles/styles.components/card.styles';
import ActionButton from './ActionButton';

function NoteCard({ id, card, onDelete, onArchive }) {
  return (
    <Board>
      <Content>
        <h3>{card.title}</h3>
        <span>{ showFormattedDate(card.createdAt) }</span>
        <p>{card.body}</p>
        <ActionButton id={id} onDelete={onDelete} onArchive={onArchive} />
      </Content>
    </Board>
  );
}

export default NoteCard;