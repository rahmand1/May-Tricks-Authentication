using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using DatingProject.Models;
using DatingProject.Models; // Need the User Reference

namespace DatingProject.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(string user, string password);
        Task<User> Login(string userName, string password);

        bool ValidateUserName(string userName);
    }
}
