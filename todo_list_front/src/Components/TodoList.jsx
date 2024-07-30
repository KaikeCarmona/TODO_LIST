import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, deleteTask } from '../Axios/api'; // Importar funções da API
import TaskModal from './ViewModal'; // Importar o componente modal
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: auto;
`;

const Header = styled.h1`
  font-size: 2.5em;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  background: #f9f9f9;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskDetails = styled.div`
  flex: 1;
`;

const TaskName = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

const TaskDate = styled.p`
  margin: 5px 0;
  color: #666;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  height: 100px;
`;

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false); // Para controlar o formulário de nova tarefa
  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    dueDate: '',
  });

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar tarefas.');
        setLoading(false);
      }
    };

    getTasks();
  }, []);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleAddTaskClick = () => {
    setIsAdding(true);
  };

  const handleChangeNewTask = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateTask = async () => {
    try {
      await createTask({
        nome_Tarefa: newTask.name,
        desc_tarefa: newTask.description,
        data_finalizacao: newTask.dueDate,
      });
      setNewTask({ name: '', description: '', dueDate: '' });
      setIsAdding(false);
      // Recarregar as tarefas após a criação
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error('Erro ao criar tarefa:', error.message);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      // Atualizar a lista de tarefas após a exclusão
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error.message);
    }
  };

  if (loading) return <p>Carregando tarefas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <h1>Lista de Tarefas</h1>
      {!isAdding ? (
        <>
          <Button onClick={handleAddTaskClick}>Adicionar Tarefa</Button>
          <TaskList>
            {tasks.map(task => (
              <TaskItem key={task.id}>
                <h2>{task.nome_Tarefa}</h2>
                <p>
                  Data de Conclusão: {task.data_finalizacao ? new Date(task.data_finalizacao).toLocaleDateString() : 'Não definida'}
                </p>
                <Button onClick={() => handleTaskClick(task)}>Ver Detalhes</Button>
                <Button onClick={() => handleDeleteTask(task.id)} style={{ backgroundColor: '#dc3545' }}>
                  Deletar
                </Button>
              </TaskItem>
            ))}
          </TaskList>
        </>
      ) : (
        <FormContainer>
          <h2>Adicionar Nova Tarefa</h2>
          <Input
            name="name"
            value={newTask.name}
            onChange={handleChangeNewTask}
            placeholder="Nome da Tarefa"
          />
          <TextArea
            name="description"
            value={newTask.description}
            onChange={handleChangeNewTask}
            placeholder="Descrição da Tarefa"
          />
          <Input
            type="date"
            name="dueDate"
            value={newTask.dueDate}
            onChange={handleChangeNewTask}
          />
          <Button onClick={handleCreateTask}>Salvar Tarefa</Button>
          <Button onClick={() => setIsAdding(false)}>Cancelar</Button>
        </FormContainer>
      )}
      {isModalOpen && (
        <TaskModal 
          task={selectedTask} 
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
};

export default TodoList;