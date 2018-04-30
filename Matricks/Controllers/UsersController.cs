﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Matricks.Data;
using Microsoft.Extensions.Configuration;
using System.Collections;
using Matricks.Models;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using Matricks.DTOs;


namespace Matricks.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    public class UsersController : Controller
    {


        private readonly IUserRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(IUserRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        [HttpGet("user")]
        //[Authorize]
        public async Task<UserDetailedDTO> GetUser(int id)
        {
            var User = await _repo.GetUser(id);
            var userDetails = _mapper.Map<UserDetailedDTO>(User);
            return userDetails;
        }
        [HttpGet("Users")]
        //[Authorize]
        public async Task<IEnumerable<UserBriefDTO>> GetUsers()
        {
            var Users = await _repo.GetUsers();
            var userBriefDetails = _mapper.Map<IEnumerable<UserBriefDTO>>(Users);
            return userBriefDetails;
        }




    }
}