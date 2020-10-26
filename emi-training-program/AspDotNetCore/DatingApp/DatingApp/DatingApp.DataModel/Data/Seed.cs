using DatingApp.DataModel.Context;
using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using DatingApp.DataModel.Entities;

namespace DatingApp.DataModel.Data
{
    public static class Seed
    {
        public static void SeedUsers(AppDbContext appDbContext)
        {
            if (!appDbContext.User.Any())
            {
                var userData = File.ReadAllText("D:\\Learning\\Projects\\AspDotNetCore\\DatingApp\\DatingApp\\DatingApp.DataModel\\Data\\UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);

                foreach (var user in users)
                {
                    byte[] passwordHash, passwordSalt;
                    CreatePasswordHash("password", out passwordHash, out passwordSalt);
                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    user.Name = user.Name.ToLower();
                    appDbContext.User.Add(user);
                }

                appDbContext.SaveChanges();
            }
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
