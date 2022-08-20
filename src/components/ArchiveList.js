import React from 'react';
import NoteCard from './NoteCard';
import { List } from '../styles/styles.components/list.styles';

class ArchiveList extends React.Component {
  render() {
    return this.props.cards.length > 0 ? (
      <List>
        {this.props.cards.map((card) => (
          <NoteCard key={card.id} id={card.id} onDelete={this.props.onDelete} onArchive={this.props.onArchive} card={card} />
        ))}
      </List>
    ) : (
      <p>Tidak ada catatan</p>
    );
  }
}

export default ArchiveList;
// function ArchiveList({cards, onDelete, onArchive}) {
//   const arsip = cards.filter((card) => card.archive === true);
//   if (arsip.length === 0) {
//     return <p>Catatan Tidak Ada</p>
//   } else {
//     return (
//         <>
//           <List>
//             {arsip.map((card) =>(
//                 <NoteCard 
//                 key={card.id}
//                 id={card.id}
//                 onDelete={onDelete}
//                 onArchive={onArchive}
//                 card={card}
//                 />
//             ))}
//           </List>
//         </>
//     );
//   }
// }

// export default ArchiveList