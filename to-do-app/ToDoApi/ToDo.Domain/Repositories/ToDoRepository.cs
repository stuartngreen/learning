using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using ToDo_Domain.Entities;

namespace ToDo_Domain.Repositories
{
    public class ToDoRepository
    {
        private readonly string connectionString = "mongodb://localhost:27017";
        private readonly MongoClient mongoClient;
        private readonly IMongoDatabase mongoDatabase;
        private readonly IMongoCollection<ToDo> mongoCollection;

        public ToDoRepository()
        {
            mongoClient = new MongoClient(connectionString);
            mongoDatabase = mongoClient.GetDatabase("ToDoDB");
            mongoCollection = mongoDatabase.GetCollection<ToDo>("ToDoCollection");
        }

        public List<ToDo> GetAll()
        {
            return mongoCollection.Find(FilterDefinition<ToDo>.Empty).ToList();
        }

        public void InsertOne(ToDo newToDo)
        {
            newToDo.Id = ObjectId.GenerateNewId();

            mongoCollection.InsertOne(newToDo);
        }

        public void UpdateOne(ToDo toDo)
        {
            var filter = new BsonDocument("_id", toDo.Id);

            mongoCollection.UpdateOne(filter, new UpdateDefinitionBuilder<ToDo>()
                .Set(x => x.Title, toDo.Title)
                .Set(x => x.Description, toDo.Description)
                .Set(x => x.CreatedBy, toDo.CreatedBy)
                .Set(x => x.DueDate, toDo.DueDate)
                .Set(x => x.Priority, toDo.Priority)
                .Set(x => x.Status, toDo.Status)
            );
        }

        public void DeleteOne(string id)
        {
            FilterDefinition<ToDo> filter = new BsonDocument("_id", new ObjectId(id));

            mongoCollection.DeleteOne(filter);
        }
    }
}
