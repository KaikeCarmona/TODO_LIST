// src/ViewModal.jsx
import React, { useState, useEffect } from 'react';
import { updateTask } from '../Axios/api'; // Importar corretamente a função updateTask
import styled from 'styled-components';

// Estilos para o Modal
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  min-height: 100px;
`;

const Button = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  
  &:hover {
    background: #0056b3;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ViewModal = ({ task, onClose }) => {
  const [updatedTask, setUpdatedTask] = useState({
    name: task.nome_Tarefa,
    description: task.desc_tarefa,
    dueDate: task.data_finalizacao ? new Date(task.data_finalizacao).toISOString().split('T')[0] : '',
  });

  useEffect(() => {
    setUpdatedTask({
      name: task.nome_Tarefa,
      description: task.desc_tarefa,
      dueDate: task.data_finalizacao ? new Date(task.data_finalizacao).toISOString().split('T')[0] : '',
    });
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await updateTask(task.id, {
        nome_Tarefa: updatedTask.name,
        desc_tarefa: updatedTask.description,
        data_finalizacao: updatedTask.dueDate,
      });
      onClose(); // Fecha o modal após a atualização
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error.message);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Editar Tarefa</h2>
        <FormContainer>
          <Input
            type="text"
            name="name"
            value={updatedTask.name}
            onChange={handleChange}
            placeholder="Nome da Tarefa"
          />
          <TextArea
            name="description"
            value={updatedTask.description}
            onChange={handleChange}
            placeholder="Descrição da Tarefa"
          />
          <Input
            type="date"
            name="dueDate"
            value={updatedTask.dueDate}
            onChange={handleChange}
          />
          <Button onClick={handleSave}>Salvar</Button>
          <Button onClick={onClose}>Cancelar</Button>
        </FormContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default ViewModal;