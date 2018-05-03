using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Matricks.Models
{
    public class Messages
    {
        public int ID { get; set; }
        public int messagetoID { get; set; }
        public int messagefromID { get; set; }
        public string Message { get; set; }
    }
}
