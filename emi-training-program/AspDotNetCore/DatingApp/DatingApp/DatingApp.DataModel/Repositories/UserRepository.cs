using DatingApp.DataModel.Context;
using DatingApp.DataModel.Entities;
using DatingApp.DataModel.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatingApp.DataModel.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _appDbContext;

        public UserRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _appDbContext.User.Include(x => x.Photos).ToListAsync();
        }

        public async Task<User> GetByIdAsync(int id)
        {
            return await _appDbContext.User.Where(user => user.Id == id).Include(x => x.Photos).FirstOrDefaultAsync();
        }

        public async Task<bool> SaveAllChangesAsync()
        {
            return await _appDbContext.SaveChangesAsync() > 0;
        }

        public void Update(User user)
        {
            _appDbContext.Entry(user).State = EntityState.Modified;
        }
    }
}
