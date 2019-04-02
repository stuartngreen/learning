using System;
using System.Collections.Generic;
using System.Text;
using ToDo_Domain.Entities;
using ToDo_Domain.Repositories;

namespace ToDo_Domain.Services
{
    public class ToDoService
    {
        private readonly ToDoRepository _toDoRepository;

        // Do transformations etc. here... for now this service just passes from/to the repo.

        public ToDoService()
        {
            _toDoRepository = new ToDoRepository();
        }

        public List<ToDo> GetAll()
        {
            return _toDoRepository.GetAll();
        }

        public void InsertOne(ToDo newToDo)
        {
            _toDoRepository.InsertOne(newToDo);
        }

        public void UpdateOne(ToDo toDo)
        {
            _toDoRepository.UpdateOne(toDo);
        }

        public void DeleteOne(string id)
        {
            _toDoRepository.DeleteOne(id);
        }
    }
}
