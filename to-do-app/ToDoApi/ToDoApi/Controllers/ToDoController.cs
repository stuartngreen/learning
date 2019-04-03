using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using ToDo_Domain.Entities;
using ToDo_Domain.Services;

namespace ToDoApi.Controllers
{
    [Route("todos")]
    [ApiController]
    public class ToDoController : Controller
    {
        private readonly ToDoService _toDoService;
        public ToDoController()
        {
            _toDoService = new ToDoService();
        }

        [HttpGet]
        public List<ToDo> GetAll()
        {
            return _toDoService.GetAll();
        }

        [HttpGet("{id}")]
        public List<ToDo> GetOne(int id)
        {
            return _toDoService.GetAll();
        }

        [HttpPost]
        public void InsertOne(ToDo newToDo)
        {
            _toDoService.InsertOne(newToDo);
        }

        [HttpPut("update/{id}")]
        public void UpdateOne(ToDo updateToDo, [FromRoute]string id)
        {
            updateToDo.Id = new ObjectId(id);
            _toDoService.UpdateOne(updateToDo);
        }

        [HttpDelete("delete/{id}")]
        public void DeleteOne([FromRoute]string id)
        {
            _toDoService.DeleteOne(id);
        }
    }
}