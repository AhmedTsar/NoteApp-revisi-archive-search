import React from 'react';
import { Delete } from '../styles/styles.components/delete.styles';

function DeleteButton({ onDelete, card }) {
  return (
    <Delete
    onClick={() => { window.confirm( 'Anda yakin ingin menghapus Kartu ini?') && onDelete(card.id) }}
    >Hapus
    </Delete>
  )
}

export default DeleteButton