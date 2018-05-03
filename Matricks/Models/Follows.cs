using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Matricks.Models
{
    public class Follows
    {

        public int ID { get; set; }
       
        public int followingID { get; set; }
        public int followerID { get; set; }
    }
}
