import React from 'react';
import styled from 'styled-components';

const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
`;

const TodoText = styled.span`
  font-size: 16px;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: ${props => props.color || '#007BFF'};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.hoverColor || '#0056b3'};
  }
`;

const TodoItem = ({ todo, onDelete, onView }) => {
  return (
    <TodoItemWrapper>
      <TodoText>{todo.name}</TodoText>
      <ButtonGroup>
        <Button color="#28a745" hoverColor="#218838" onClick={() => onView(todo)}>Ver</Button>
        <Button color="#FF6347" hoverColor="#cc5140" onClick={() => onDelete(todo)}>Excluir</Button>
      </ButtonGroup>
    </TodoItemWrapper>
  );
};

export default TodoItem;