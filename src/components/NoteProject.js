import React from 'react';
import NoteList from './NoteList';
import ArchiveList from './ArchiveList';
import { getInitialData } from '../utils/getData';
import { Container } from '../styles/styles.components/project.styles';
import GlobalStyles from '../styles/styles.components/Global';
import AddNote from './AddNote';
import NoteHeader from './NoteHeader';

class NoteProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: getInitialData(),
      search: "",
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);

    this.onArchiveHandler = this.onArchiveHandler.bind(this);

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

    onDeleteHandler(id) {
      const cards = this.state.cards.filter((card) => {
        return card.id !== id;
    })
    this.setState({ cards });
    }

    onArchiveHandler(id) {
      const updateCard = this.state.cards.map((card) => (card.id === id ? { ...card, archived: !card.archived } : card));
      this.setState({ cards: updateCard })
    }

    onAddNoteHandler({ title, body }) {
      this.setState((prevState) => {
        return {
          cards: [
            ...prevState.cards,
            {
              id: +new Date(),
              title,
              body,
              createdAt: new Date().toISOString(),
              archived: false,
            },
          ],
        };
      });
    }

    onSearchHandler(event) {
      this.setState(() => {
        return {
          search: event.target.value,
        };
      });
    }

  render() {
    const search = this.state.cards.filter((card) => card.title.toLowerCase().includes(this.state.search.toLowerCase()));
    const active = search.filter((card) => {
      return card.archived === false;
    });
    const archive = search.filter((card) => {
      return card.archived === true;
    });
    return (
      <>
      <GlobalStyles />
        <NoteHeader
        onSearch={this.onSearchHandler}
        />

      <Container>
        <h2>Buat Catatan</h2>
        <AddNote
          addNote={this.onAddNoteHandler}
        />
        <h2>Catatan Aktif</h2>
        <NoteList
        cards={active}
        onDelete={this.onDeleteHandler}
        onArchive={this.onArchiveHandler}
        />
        <h2>Catatan Arsip</h2>
        <ArchiveList
        onDelete={this.onDeleteHandler}
        onArchive={this.onArchiveHandler}
        cards={archive}
        />
      </Container>
    </>
    );
  }
}

export default NoteProject;
// function NoteProject() {
//     const cards = getInitialData();

//   return (
    // <>
    //   <GlobalStyles />
    // <Container>
    //     <h2>Catatan Aktif</h2>
    //     <NoteList cards={cards} />
    // </Container>
    // </>
//   );
// }

// export default NoteProject;