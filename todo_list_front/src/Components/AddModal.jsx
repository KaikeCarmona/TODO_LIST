import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const AddTodoModal = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      name,
      description,
      dueDate,
    };
    onSubmit(newTodo);
    onClose();
  };

  return (
    <ModalBackground>
      <ModalContent>
        <ModalHeader>
          <h2>Adicionar Atividade</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nome da atividade"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
            <SubmitButton type="submit">Concluir</SubmitButton>
          </form>
        </ModalBody>
      </ModalContent>
    </ModalBackground>
  );
};

export default AddTodoModal;