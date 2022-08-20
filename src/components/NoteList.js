import React from 'react';
import NoteCard from './NoteCard';
import { List } from '../styles/styles.components/list.styles';


function NoteList({ cards, onDelete, onArchive }) {
  const main = cards.filter((card) => card.archived !== true);
  if (main.length === 0) {
    return <p>Catatan Tidak Ada</p>
  } else {
    return (
    <>
      <List>
        {main.map((card) => (
          <NoteCard 
            key={card.id}
            id={card.id}
            onDelete={onDelete}
            onArchive={onArchive}
            card={card}
          />
        ))}
      </List>
    </>
    );
  }
}

export default NoteList;