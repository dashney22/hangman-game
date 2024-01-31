import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const HelpModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Button variant="primary" onClick={toggleModal}>
        Help
      </Button>

      <Modal show={showModal} onHide={toggleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Hangman Game Rules</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Guess the word by selecting letters from the alphabet. Each correct guess reveals the letters in the word. Each incorrect guess adds a part to the hangman.</p>
          <p>The game is won if the word is guessed correctly before the hangman is completed. The game is lost if the hangman is completed before the word is guessed.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HelpModal;
