﻿using Matricks.Models; // Needed for User Model
using Microsoft.EntityFrameworkCore; // Needed for DbContext and database

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Matricks.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }

        public DbSet<User> Users { get; set; }

        public DbSet<Photo> Photos { get; set; }
    }

}
