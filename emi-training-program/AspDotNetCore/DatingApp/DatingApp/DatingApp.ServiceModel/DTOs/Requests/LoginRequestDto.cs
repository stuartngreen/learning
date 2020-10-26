using System;
using System.Collections.Generic;
using System.Text;

namespace DatingApp.ServiceModel.DTOs.Requests
{
    public class LoginRequestDto
    {
        public string Name { get; set; }

        public string Password { get; set; }
    }
}
