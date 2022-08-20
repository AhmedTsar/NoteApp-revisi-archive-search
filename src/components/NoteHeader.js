import React from 'react';
import { Header, Search } from '../styles/styles.components/header.styles';


function NoteHeader({ searchTitle, onSearch }) {
  return (
    <Header>
        <h1>Project Notes</h1>
        <Search>
            <input
               type='text'
               value={searchTitle}
               placeholder='  Cari Catatan...'
               onChange={(event) => onSearch(event)}
            />
        </Search>
    </Header>
  );
}

export default NoteHeader;