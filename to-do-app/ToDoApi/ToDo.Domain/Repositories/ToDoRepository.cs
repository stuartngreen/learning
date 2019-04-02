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

        // Db client -> MongoClient
        private readonly MongoClient mongoClient;

        // Db reference -> MongoDatabase
        private readonly IMongoDatabase mongoDatabase;

        // Collection reference -> MongoCollection
        private readonly IMongoCollection<ToDo> mongoCollection;

        public ToDoRepository()
        {
            mongoClient = new MongoClient(connectionString);
            mongoDatabase = mongoClient.GetDatabase("ToDoDB");
            mongoCollection = mongoDatabase.GetCollection<ToDo>("ToDoCollection");
        }

        public List<ToDo> GetAll()
        {
            var toDos = mongoCollection.Find(FilterDefinition<ToDo>.Empty).ToList();
            return toDos;
        }

        public void InsertOne(ToDo newToDo)
        {
            // Replace null id
            newToDo.Id = ObjectId.GenerateNewId();

            mongoCollection.InsertOne(newToDo);
        }

        public void UpdateOne(ToDo toDo)
        {
            // Perform update here
        }

        public void DeleteOne(string id)
        {
            // Some alternatives:
            // var filter = Builders<ToDo>.Filter.Eq("_id", new ObjectId(id));
            // var filter = FilterDefinition<ToDo>.Equals("_id", new ObjectId(id));
            // mongoCollection.DeleteOne(x => x.Id == new ObjectId(id));

            FilterDefinition<ToDo> filter = new BsonDocument("_id", new ObjectId(id));
            mongoCollection.DeleteOne(filter);
        }
    }
}
