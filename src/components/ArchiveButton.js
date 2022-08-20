import React from 'react';
import { Arsip } from '../styles/styles.components/archive.styles';
import { getInitialData } from '../utils/getData';

function ArchiveButton({ id, onArchive }) {
  const data = getInitialData();
  return (
    <Arsip
          onClick={() => onArchive(id)}
          >
            {data.archived ? "Pindahkan" : "Arsipkan"}
          </Arsip>
  )
}

export default ArchiveButton