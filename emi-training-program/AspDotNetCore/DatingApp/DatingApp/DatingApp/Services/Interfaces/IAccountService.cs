﻿using DatingApp.DataModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Api.Services.Interfaces
{
    public interface IAccountService
    {
        Task<User> Register(string name, string password, string gender); // etc

        Task<User> Login(string name, string password);

        Task<bool> UserExists(string name);
    }
}
