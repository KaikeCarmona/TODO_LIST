const Tarefa = require("../model/tarefa.js");

// classe Controller foi criada pra executar a exportação dos metodos de maneira mais simples.
class Controller {
  //findTask é responsavel por fazer a requisição de todas as linhas do banco de dados.
  static async findTask(req, res) {
    Tarefa.findAll()
      .then((result) => res.json(result))
      .catch((error) => {
        console.error("Erro ao buscar tarefas:", error);
        res.status(500).json({ error: "Erro interno do servidor" });
      });
  }

  //finTaskOne é responsavel por fazer a busca por um elemento expecifico do banco de dados, como parametro é passado o id.
  static async findTaskone(req, res) {
    try {
      const idTask = req.params.id;
      const task = await Tarefa.findByPk(idTask);

      //se a tarefa não existir, retorna uma mensagem
      if (task === null) {
        console.log("Tarefa não encontrada!");
      } else {
        res.status(201).json(task);
      }
    } catch (error) {
      console.error("Erro ao buscar a tarefa:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  //createTask é responsavel por criar novas linhas no banco de dados.
  static async createTask(req, res) {
    try {
      const { nome_Tarefa, desc_tarefa, data_finalizacao } = req.body;
      const novaTarefa = await Tarefa.create({
        nome_Tarefa,
        desc_tarefa,
        data_finalizacao,
      });
      res.status(201).json(novaTarefa);
    } catch (error) {
      console.error("Erro ao criar nova tarefa:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  //updateTask é responsavel por fazer a alteração em algum dado expecifico, sendo passado como parametro de alteração o id.
  static async updateTask(req, res) {
    try {
      const id = req.params.id;
      const { nome_Tarefa, desc_tarefa, data_finalizacao } = req.body;

      const taskUpdated = await Tarefa.findByPk(id);

      if (!taskUpdated) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }

      await taskUpdated.update({
        nome_Tarefa,
        desc_tarefa,
        data_finalizacao,
      });

      res.json(taskUpdated);
    } catch (error) {
      console.error("Erro ao alterar nova tarefa:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  //deleteTask é responsavel por deletar o dado do banco de dados, sendo passado como parametro o id.
  static async deleteTask(req, res) {
    try {
      const idTask = req.params.id;
      if (!idTask) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }

      await Tarefa.destroy({
        where: {
          id: idTask,
        },
      });

      res.json("A tarefa " + idTask + " foi excluida!");
    } catch (error) {
      console.error("Erro ao deletar a tarefa", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

//erro ao esportar mais de uma função//
module.exports = Controller;
