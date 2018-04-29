using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using DatingProject.Models;
using Matricks.Models; // Need the User Reference

namespace Matricks.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(string user, string password);
        Task<User> Login(string userName, string password);

        bool ValidateUserName(string userName);
    }
}
