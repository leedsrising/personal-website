import '../../App.css';
import React, { useState } from 'react';

import TopNav from '../../TopNav.jsx'

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Link from '@mui/material/Typography';

function ProjectModal(title_text, description_text) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Link onClick={handleOpen}><p class="mui-override"><i>GroopCam</i></p></Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>Better photosharing. On the <a href="https://apps.apple.com/us/app/groopcam/id1496034307">app store</a></p>
        </Box>
      </Modal>
    </div>
  );
}



export default function Projects() {
    const GroopCamTitle = <p>GroopCam</p>

    return (
      <div class="Home">
        <TopNav/>
        <main style={{ padding: "1rem 0" }}>
          <h2>projects</h2>
          <ProjectModal/>
        </main>
      </div>
      
    );
  }