import React, { useState } from 'react';
import invitation from '../invitation.svg'

function PDFViewer() {
  return (
    <div>
		<img className="w-100" src={invitation} alt="Invitation"></img>
    </div>
  );
}
export default PDFViewer;