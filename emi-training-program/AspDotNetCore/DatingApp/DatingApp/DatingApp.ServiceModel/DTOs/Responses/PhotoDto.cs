using System;
using System.Collections.Generic;
using System.Text;

namespace DatingApp.ServiceModel.DTOs.Responses
{
    public class PhotoDto
    {
        public int Id { get; set; }

        public string Url { get; set; }

        public bool IsMain { get; set; }
    }
}
