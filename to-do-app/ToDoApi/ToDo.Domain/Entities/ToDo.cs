using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;
using ToDo_Domain.Enums;

namespace ToDo_Domain.Entities
{
    public class ToDo
    {
        [BsonElement("_id")]
        public ObjectId? Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("createdBy")]
        public string CreatedBy { get; set; }

        [BsonElement("createdAt")]
        public DateTime CreatedAt { get; set; }

        [BsonElement("dueDate")]
        public DateTime DueDate { get; set; }

        [BsonElement("priority")]
        public int Priority { get; set; }

        [BsonElement("status")]
        public Status Status { get; set; }
    }
}
