import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {



  private currentUser = new BehaviorSubject<any>([
    {
      "Username": "Fannie",
      "Gender": "female",
      "BirthDate": "1995-05-24",
      "Password": "password",
      "Name": "Fannie",
      "Created": "2017-10-06",
      "LastActive": "2017-10-06",
      "Introduction": "Incididunt reprehenderit aliqua dolore incididunt esse consectetur. Consequat sint minim proident veniam tempor aliqua sint magna exercitation ex esse cillum sunt. Id dolore do proident reprehenderit fugiat officia ullamco veniam est cupidatat amet Lorem excepteur irure. Pariatur dolore irure veniam id qui est excepteur et deserunt exercitation aliqua in labore aliquip.\r\n",
      "LookingFor": "Mollit sunt eu voluptate cupidatat irure in non laboris laboris cupidatat tempor. Aute pariatur ea elit exercitation occaecat. Eiusmod aliquip do in non minim sunt non sit adipisicing. Aute fugiat aliquip exercitation eu laborum nulla Lorem eiusmod cupidatat consectetur id. Eu magna enim enim culpa est ullamco.\r\n",
      "Interests": "Sit ut incididunt nisi aliqua mollit ad sunt qui est cillum amet aute dolore.",
      "City": "Devon",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/women/8.jpg",
          "isProfilePic": true,
          "description": "Excepteur non mollit consequat consectetur."
        }
      ]
    },
    {
      "Username": "Joann",
      "Gender": "female",
      "BirthDate": "1966-06-03",
      "Password": "password",
      "Name": "Joann",
      "Created": "2017-08-07",
      "LastActive": "2017-08-07",
      "Introduction": "Laboris anim exercitation consequat ullamco consectetur non aliquip ut ex. Enim aute cillum eu magna sunt elit officia Lorem. Quis do consectetur nulla consequat aliquip esse sint sunt laborum sint ullamco.\r\n",
      "LookingFor": "Nisi ex laboris adipisicing dolor consectetur velit consequat nulla non in consequat non. Irure cillum ut do deserunt officia in non eu incididunt reprehenderit ex. Eu reprehenderit amet aliquip consectetur esse ullamco magna cillum aliquip id. Officia deserunt in mollit est laboris et. Tempor non amet reprehenderit ex enim.\r\n",
      "Interests": "Ullamco et ad irure incididunt laborum veniam.",
      "City": "Indio",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/women/94.jpg",
          "isProfilePic": true,
          "description": "Lorem est velit eiusmod laboris dolore eiusmod enim officia voluptate nisi fugiat incididunt exercitation."
        }
      ]
    },
    {
      "Username": "Angelia",
      "Gender": "female",
      "BirthDate": "1961-08-28",
      "Password": "password",
      "Name": "Angelia",
      "Created": "2018-02-21",
      "LastActive": "2018-02-21",
      "Introduction": "Laboris dolore Lorem voluptate ullamco sunt et excepteur incididunt fugiat excepteur. Est reprehenderit proident consectetur dolore sint deserunt et nostrud et velit elit voluptate. Irure veniam esse excepteur duis tempor duis est.\r\n",
      "LookingFor": "Mollit nisi magna est fugiat veniam officia. Ad adipisicing cillum pariatur aliquip eiusmod exercitation. Deserunt dolore sint sit eiusmod labore. Id nulla nulla nisi dolore aute minim pariatur.\r\n",
      "Interests": "Elit tempor ex quis ullamco commodo ad qui reprehenderit deserunt sint sunt do.",
      "City": "Allamuchy",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/women/48.jpg",
          "isProfilePic": true,
          "description": "Pariatur incididunt cupidatat laborum dolor aliquip fugiat quis."
        }
      ]
    },
    {
      "Username": "Myrtle",
      "Gender": "female",
      "BirthDate": "1988-06-21",
      "Password": "password",
      "Name": "Myrtle",
      "Created": "2018-02-19",
      "LastActive": "2018-02-19",
      "Introduction": "Cillum adipisicing velit ex velit enim deserunt proident velit excepteur. Aliquip qui nostrud occaecat ad qui cillum incididunt fugiat culpa ex ea. Labore adipisicing adipisicing sint reprehenderit excepteur mollit enim eu Lorem esse. Id nostrud cupidatat duis adipisicing aliqua elit nulla commodo sunt sint. Id tempor cupidatat qui culpa qui mollit duis ea reprehenderit aute ipsum sunt nisi. Ipsum non laborum elit dolor Lorem. Aliqua duis fugiat sint nisi cillum labore aute voluptate consequat.\r\n",
      "LookingFor": "Irure cupidatat pariatur esse Lorem ut ipsum. Ea sunt cillum et commodo fugiat ullamco id est ea. Dolor cillum dolor officia pariatur consectetur aliqua anim. Sunt non laborum do mollit cillum nulla elit et. Est exercitation ad labore nulla Lorem eiusmod. Eiusmod est sint exercitation aliquip elit laborum ipsum velit aliqua.\r\n",
      "Interests": "Ipsum fugiat anim occaecat laboris eiusmod aliquip fugiat elit tempor dolor reprehenderit consequat dolore.",
      "City": "Gadsden",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/women/76.jpg",
          "isProfilePic": true,
          "description": "Nisi ex enim adipisicing ut sunt do qui."
        }
      ]
    },
    {
      "Username": "Lesley",
      "Gender": "female",
      "BirthDate": "1968-12-14",
      "Password": "password",
      "Name": "Lesley",
      "Created": "2017-12-27",
      "LastActive": "2017-12-27",
      "Introduction": "Exercitation incididunt enim magna aliquip proident minim magna in ea aliqua magna. Quis proident anim anim amet. Amet eiusmod ipsum tempor est duis nisi id officia laboris. Lorem nulla consectetur magna commodo voluptate eiusmod ex laborum culpa veniam et.\r\n",
      "LookingFor": "Et adipisicing laboris commodo cupidatat deserunt ut non mollit Lorem. Qui cillum nostrud ullamco consequat ipsum elit excepteur in elit nostrud deserunt. Nisi ad incididunt id ex reprehenderit sunt occaecat sunt excepteur esse ullamco. Sint nostrud laborum voluptate commodo non elit enim laboris aliquip. Cillum irure laboris pariatur irure labore sit ex exercitation. Exercitation nulla aliqua sit nostrud ea sunt excepteur consequat.\r\n",
      "Interests": "Eu labore reprehenderit incididunt cupidatat et reprehenderit velit ea irure enim.",
      "City": "Fowlerville",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/women/34.jpg",
          "isProfilePic": true,
          "description": "Sit ullamco labore eu incididunt non ipsum nostrud aliquip occaecat magna dolor."
        }
      ]
    },
    {
      "Username": "Cleveland",
      "Gender": "male",
      "BirthDate": "1962-11-08",
      "Password": "password",
      "Name": "Cleveland",
      "Created": "2017-09-10",
      "LastActive": "2017-09-10",
      "Introduction": "Pariatur irure cupidatat deserunt qui sunt commodo enim anim dolore velit do sunt in nulla. Incididunt adipisicing ut culpa eiusmod quis ex officia velit. Cupidatat aliqua ex commodo cillum. Proident ut labore deserunt pariatur tempor. Ut culpa mollit aliqua cillum dolor ea consequat est laboris reprehenderit pariatur adipisicing sunt.\r\n",
      "LookingFor": "Cupidatat Lorem labore irure ut sunt elit quis reprehenderit. Sit enim cillum eiusmod nostrud Lorem deserunt tempor. Cillum voluptate proident quis cupidatat cillum duis dolore proident veniam Lorem do sunt aliqua enim. Aliquip cupidatat sit in deserunt.\r\n",
      "Interests": "Culpa enim voluptate eiusmod irure aliqua.",
      "City": "Mapletown",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/men/75.jpg",
          "isProfilePic": true,
          "description": "Id velit aute occaecat nostrud."
        }
      ]
    },
    {
      "Username": "Medina",
      "Gender": "male",
      "BirthDate": "1966-06-01",
      "Password": "password",
      "Name": "Medina",
      "Created": "2018-01-05",
      "LastActive": "2018-01-05",
      "Introduction": "Cillum nisi et dolor in elit velit ea deserunt consectetur. Tempor sit labore laboris culpa ad. Ut esse qui do id non reprehenderit et minim sit ea culpa Lorem eu et. Sunt laborum consequat exercitation ea.\r\n",
      "LookingFor": "Culpa mollit in cupidatat mollit proident exercitation fugiat labore eiusmod velit magna dolor. Sint incididunt amet fugiat aliquip velit ipsum et labore elit ut officia ut. Labore nulla mollit qui excepteur. Et ea nostrud anim ea laboris velit deserunt cillum exercitation aliquip commodo. Id ad sit laborum non fugiat officia dolore pariatur aliquip amet. Ex fugiat aliqua officia deserunt. Pariatur exercitation fugiat ipsum dolore eu culpa sunt mollit enim.\r\n",
      "Interests": "Laboris amet Lorem nulla sit.",
      "City": "Mammoth",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/men/37.jpg",
          "isProfilePic": true,
          "description": "Id pariatur quis ad officia culpa enim Lorem id enim eiusmod ea ipsum incididunt."
        }
      ]
    },
    {
      "Username": "Daugherty",
      "Gender": "male",
      "BirthDate": "1962-12-11",
      "Password": "password",
      "Name": "Daugherty",
      "Created": "2018-03-07",
      "LastActive": "2018-03-07",
      "Introduction": "Aliquip qui nisi pariatur et tempor sint veniam. Duis duis ea sint labore consectetur reprehenderit sunt sit deserunt velit nulla reprehenderit fugiat sunt. Do pariatur exercitation qui voluptate culpa dolor consectetur officia consectetur officia. Minim nulla occaecat pariatur ullamco Lorem quis nulla enim aliquip. Et culpa eu cillum nisi nostrud voluptate minim qui laboris aute mollit et. Dolore culpa deserunt irure ea commodo consequat aliquip. Id ullamco proident dolore qui sint ut irure ullamco consectetur deserunt sint.\r\n",
      "LookingFor": "Tempor do aute sit consectetur nostrud. Qui labore irure do consequat ex commodo fugiat reprehenderit non fugiat. Ut exercitation deserunt laborum cupidatat labore proident duis nostrud laboris commodo fugiat mollit.\r\n",
      "Interests": "Deserunt esse duis cillum enim amet voluptate eu.",
      "City": "Hiko",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/men/31.jpg",
          "isProfilePic": true,
          "description": "Ullamco cupidatat sit ullamco aliquip aute minim culpa."
        }
      ]
    },
    {
      "Username": "Chavez",
      "Gender": "male",
      "BirthDate": "1987-06-23",
      "Password": "password",
      "Name": "Chavez",
      "Created": "2017-09-22",
      "LastActive": "2017-09-22",
      "Introduction": "Duis eu officia do elit amet adipisicing adipisicing do dolore laborum do. Duis tempor laborum sunt commodo non commodo adipisicing commodo voluptate tempor. Consectetur veniam culpa labore esse.\r\n",
      "LookingFor": "Eu anim laboris laboris magna est anim ex adipisicing sint qui laborum. Excepteur sunt eu anim eiusmod quis. Labore exercitation est laboris dolor magna Lorem qui aliquip voluptate minim exercitation. In sint dolor aliqua cupidatat anim culpa velit sint id quis Lorem. Pariatur magna adipisicing aliqua nisi aute officia aliquip consequat id consectetur.\r\n",
      "Interests": "Mollit amet nisi do est ipsum cupidatat anim id ad laboris do labore.",
      "City": "Ticonderoga",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/men/72.jpg",
          "isProfilePic": true,
          "description": "Dolore occaecat deserunt dolor commodo tempor."
        }
      ]
    },
    {
      "Username": "Cole",
      "Gender": "male",
      "BirthDate": "1991-03-08",
      "Password": "password",
      "Name": "Cole",
      "Created": "2017-12-08",
      "LastActive": "2017-12-08",
      "Introduction": "Commodo eu labore qui incididunt. Proident et occaecat irure minim dolore quis ipsum esse consequat. Pariatur proident labore laboris pariatur consectetur. Et dolor ullamco enim ut proident. Deserunt Lorem minim dolore labore ipsum id. Nulla non id ex non occaecat minim ullamco. Velit adipisicing incididunt consectetur aliquip labore mollit velit.\r\n",
      "LookingFor": "Id ut Lorem fugiat proident in do id do veniam quis reprehenderit est occaecat. Laborum incididunt tempor adipisicing excepteur minim. Minim nisi qui cupidatat duis. Amet proident ad eu consectetur duis. Tempor magna aute esse tempor aliqua dolor quis et magna ipsum eu nostrud minim. Aute duis proident elit anim exercitation. Sit velit et eu officia ullamco nulla reprehenderit esse cillum fugiat exercitation dolor Lorem.\r\n",
      "Interests": "Incididunt occaecat do ex laboris eiusmod aliqua consequat anim amet qui.",
      "City": "Matthews",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/men/46.jpg",
          "isProfilePic": true,
          "description": "Cillum eu elit cupidatat et non magna tempor."
        }
      ]
    }
  ]);


  private localDB = new BehaviorSubject<any>([
    {
      "Username": "Fannie",
      "Gender": "female",
      "BirthDate": "1995-05-24",
      "Password": "password",
      "Name": "Fannie",
      "Created": "2017-10-06",
      "LastActive": "2017-10-06",
      "Introduction": "Incididunt reprehenderit aliqua dolore incididunt esse consectetur. Consequat sint minim proident veniam tempor aliqua sint magna exercitation ex esse cillum sunt. Id dolore do proident reprehenderit fugiat officia ullamco veniam est cupidatat amet Lorem excepteur irure. Pariatur dolore irure veniam id qui est excepteur et deserunt exercitation aliqua in labore aliquip.\r\n",
      "LookingFor": "Mollit sunt eu voluptate cupidatat irure in non laboris laboris cupidatat tempor. Aute pariatur ea elit exercitation occaecat. Eiusmod aliquip do in non minim sunt non sit adipisicing. Aute fugiat aliquip exercitation eu laborum nulla Lorem eiusmod cupidatat consectetur id. Eu magna enim enim culpa est ullamco.\r\n",
      "Interests": "Sit ut incididunt nisi aliqua mollit ad sunt qui est cillum amet aute dolore.",
      "City": "Devon",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/women/8.jpg",
          "isProfilePic": true,
          "description": "Excepteur non mollit consequat consectetur."
        }
      ]
    },
    {
      "Username": "Joann",
      "Gender": "female",
      "BirthDate": "1966-06-03",
      "Password": "password",
      "Name": "Joann",
      "Created": "2017-08-07",
      "LastActive": "2017-08-07",
      "Introduction": "Laboris anim exercitation consequat ullamco consectetur non aliquip ut ex. Enim aute cillum eu magna sunt elit officia Lorem. Quis do consectetur nulla consequat aliquip esse sint sunt laborum sint ullamco.\r\n",
      "LookingFor": "Nisi ex laboris adipisicing dolor consectetur velit consequat nulla non in consequat non. Irure cillum ut do deserunt officia in non eu incididunt reprehenderit ex. Eu reprehenderit amet aliquip consectetur esse ullamco magna cillum aliquip id. Officia deserunt in mollit est laboris et. Tempor non amet reprehenderit ex enim.\r\n",
      "Interests": "Ullamco et ad irure incididunt laborum veniam.",
      "City": "Indio",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/women/94.jpg",
          "isProfilePic": true,
          "description": "Lorem est velit eiusmod laboris dolore eiusmod enim officia voluptate nisi fugiat incididunt exercitation."
        }
      ]
    },
    {
      "Username": "Angelia",
      "Gender": "female",
      "BirthDate": "1961-08-28",
      "Password": "password",
      "Name": "Angelia",
      "Created": "2018-02-21",
      "LastActive": "2018-02-21",
      "Introduction": "Laboris dolore Lorem voluptate ullamco sunt et excepteur incididunt fugiat excepteur. Est reprehenderit proident consectetur dolore sint deserunt et nostrud et velit elit voluptate. Irure veniam esse excepteur duis tempor duis est.\r\n",
      "LookingFor": "Mollit nisi magna est fugiat veniam officia. Ad adipisicing cillum pariatur aliquip eiusmod exercitation. Deserunt dolore sint sit eiusmod labore. Id nulla nulla nisi dolore aute minim pariatur.\r\n",
      "Interests": "Elit tempor ex quis ullamco commodo ad qui reprehenderit deserunt sint sunt do.",
      "City": "Allamuchy",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/women/48.jpg",
          "isProfilePic": true,
          "description": "Pariatur incididunt cupidatat laborum dolor aliquip fugiat quis."
        }
      ]
    },
    {
      "Username": "Myrtle",
      "Gender": "female",
      "BirthDate": "1988-06-21",
      "Password": "password",
      "Name": "Myrtle",
      "Created": "2018-02-19",
      "LastActive": "2018-02-19",
      "Introduction": "Cillum adipisicing velit ex velit enim deserunt proident velit excepteur. Aliquip qui nostrud occaecat ad qui cillum incididunt fugiat culpa ex ea. Labore adipisicing adipisicing sint reprehenderit excepteur mollit enim eu Lorem esse. Id nostrud cupidatat duis adipisicing aliqua elit nulla commodo sunt sint. Id tempor cupidatat qui culpa qui mollit duis ea reprehenderit aute ipsum sunt nisi. Ipsum non laborum elit dolor Lorem. Aliqua duis fugiat sint nisi cillum labore aute voluptate consequat.\r\n",
      "LookingFor": "Irure cupidatat pariatur esse Lorem ut ipsum. Ea sunt cillum et commodo fugiat ullamco id est ea. Dolor cillum dolor officia pariatur consectetur aliqua anim. Sunt non laborum do mollit cillum nulla elit et. Est exercitation ad labore nulla Lorem eiusmod. Eiusmod est sint exercitation aliquip elit laborum ipsum velit aliqua.\r\n",
      "Interests": "Ipsum fugiat anim occaecat laboris eiusmod aliquip fugiat elit tempor dolor reprehenderit consequat dolore.",
      "City": "Gadsden",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/women/76.jpg",
          "isProfilePic": true,
          "description": "Nisi ex enim adipisicing ut sunt do qui."
        }
      ]
    },
    {
      "Username": "Lesley",
      "Gender": "female",
      "BirthDate": "1968-12-14",
      "Password": "password",
      "Name": "Lesley",
      "Created": "2017-12-27",
      "LastActive": "2017-12-27",
      "Introduction": "Exercitation incididunt enim magna aliquip proident minim magna in ea aliqua magna. Quis proident anim anim amet. Amet eiusmod ipsum tempor est duis nisi id officia laboris. Lorem nulla consectetur magna commodo voluptate eiusmod ex laborum culpa veniam et.\r\n",
      "LookingFor": "Et adipisicing laboris commodo cupidatat deserunt ut non mollit Lorem. Qui cillum nostrud ullamco consequat ipsum elit excepteur in elit nostrud deserunt. Nisi ad incididunt id ex reprehenderit sunt occaecat sunt excepteur esse ullamco. Sint nostrud laborum voluptate commodo non elit enim laboris aliquip. Cillum irure laboris pariatur irure labore sit ex exercitation. Exercitation nulla aliqua sit nostrud ea sunt excepteur consequat.\r\n",
      "Interests": "Eu labore reprehenderit incididunt cupidatat et reprehenderit velit ea irure enim.",
      "City": "Fowlerville",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/women/34.jpg",
          "isProfilePic": true,
          "description": "Sit ullamco labore eu incididunt non ipsum nostrud aliquip occaecat magna dolor."
        }
      ]
    },
    {
      "Username": "Cleveland",
      "Gender": "male",
      "BirthDate": "1962-11-08",
      "Password": "password",
      "Name": "Cleveland",
      "Created": "2017-09-10",
      "LastActive": "2017-09-10",
      "Introduction": "Pariatur irure cupidatat deserunt qui sunt commodo enim anim dolore velit do sunt in nulla. Incididunt adipisicing ut culpa eiusmod quis ex officia velit. Cupidatat aliqua ex commodo cillum. Proident ut labore deserunt pariatur tempor. Ut culpa mollit aliqua cillum dolor ea consequat est laboris reprehenderit pariatur adipisicing sunt.\r\n",
      "LookingFor": "Cupidatat Lorem labore irure ut sunt elit quis reprehenderit. Sit enim cillum eiusmod nostrud Lorem deserunt tempor. Cillum voluptate proident quis cupidatat cillum duis dolore proident veniam Lorem do sunt aliqua enim. Aliquip cupidatat sit in deserunt.\r\n",
      "Interests": "Culpa enim voluptate eiusmod irure aliqua.",
      "City": "Mapletown",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/men/75.jpg",
          "isProfilePic": true,
          "description": "Id velit aute occaecat nostrud."
        }
      ]
    },
    {
      "Username": "Medina",
      "Gender": "male",
      "BirthDate": "1966-06-01",
      "Password": "password",
      "Name": "Medina",
      "Created": "2018-01-05",
      "LastActive": "2018-01-05",
      "Introduction": "Cillum nisi et dolor in elit velit ea deserunt consectetur. Tempor sit labore laboris culpa ad. Ut esse qui do id non reprehenderit et minim sit ea culpa Lorem eu et. Sunt laborum consequat exercitation ea.\r\n",
      "LookingFor": "Culpa mollit in cupidatat mollit proident exercitation fugiat labore eiusmod velit magna dolor. Sint incididunt amet fugiat aliquip velit ipsum et labore elit ut officia ut. Labore nulla mollit qui excepteur. Et ea nostrud anim ea laboris velit deserunt cillum exercitation aliquip commodo. Id ad sit laborum non fugiat officia dolore pariatur aliquip amet. Ex fugiat aliqua officia deserunt. Pariatur exercitation fugiat ipsum dolore eu culpa sunt mollit enim.\r\n",
      "Interests": "Laboris amet Lorem nulla sit.",
      "City": "Mammoth",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/men/37.jpg",
          "isProfilePic": true,
          "description": "Id pariatur quis ad officia culpa enim Lorem id enim eiusmod ea ipsum incididunt."
        }
      ]
    },
    {
      "Username": "Daugherty",
      "Gender": "male",
      "BirthDate": "1962-12-11",
      "Password": "password",
      "Name": "Daugherty",
      "Created": "2018-03-07",
      "LastActive": "2018-03-07",
      "Introduction": "Aliquip qui nisi pariatur et tempor sint veniam. Duis duis ea sint labore consectetur reprehenderit sunt sit deserunt velit nulla reprehenderit fugiat sunt. Do pariatur exercitation qui voluptate culpa dolor consectetur officia consectetur officia. Minim nulla occaecat pariatur ullamco Lorem quis nulla enim aliquip. Et culpa eu cillum nisi nostrud voluptate minim qui laboris aute mollit et. Dolore culpa deserunt irure ea commodo consequat aliquip. Id ullamco proident dolore qui sint ut irure ullamco consectetur deserunt sint.\r\n",
      "LookingFor": "Tempor do aute sit consectetur nostrud. Qui labore irure do consequat ex commodo fugiat reprehenderit non fugiat. Ut exercitation deserunt laborum cupidatat labore proident duis nostrud laboris commodo fugiat mollit.\r\n",
      "Interests": "Deserunt esse duis cillum enim amet voluptate eu.",
      "City": "Hiko",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/men/31.jpg",
          "isProfilePic": true,
          "description": "Ullamco cupidatat sit ullamco aliquip aute minim culpa."
        }
      ]
    },
    {
      "Username": "Chavez",
      "Gender": "male",
      "BirthDate": "1987-06-23",
      "Password": "password",
      "Name": "Chavez",
      "Created": "2017-09-22",
      "LastActive": "2017-09-22",
      "Introduction": "Duis eu officia do elit amet adipisicing adipisicing do dolore laborum do. Duis tempor laborum sunt commodo non commodo adipisicing commodo voluptate tempor. Consectetur veniam culpa labore esse.\r\n",
      "LookingFor": "Eu anim laboris laboris magna est anim ex adipisicing sint qui laborum. Excepteur sunt eu anim eiusmod quis. Labore exercitation est laboris dolor magna Lorem qui aliquip voluptate minim exercitation. In sint dolor aliqua cupidatat anim culpa velit sint id quis Lorem. Pariatur magna adipisicing aliqua nisi aute officia aliquip consequat id consectetur.\r\n",
      "Interests": "Mollit amet nisi do est ipsum cupidatat anim id ad laboris do labore.",
      "City": "Ticonderoga",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/men/72.jpg",
          "isProfilePic": true,
          "description": "Dolore occaecat deserunt dolor commodo tempor."
        }
      ]
    },
    {
      "Username": "Cole",
      "Gender": "male",
      "BirthDate": "1991-03-08",
      "Password": "password",
      "Name": "Cole",
      "Created": "2017-12-08",
      "LastActive": "2017-12-08",
      "Introduction": "Commodo eu labore qui incididunt. Proident et occaecat irure minim dolore quis ipsum esse consequat. Pariatur proident labore laboris pariatur consectetur. Et dolor ullamco enim ut proident. Deserunt Lorem minim dolore labore ipsum id. Nulla non id ex non occaecat minim ullamco. Velit adipisicing incididunt consectetur aliquip labore mollit velit.\r\n",
      "LookingFor": "Id ut Lorem fugiat proident in do id do veniam quis reprehenderit est occaecat. Laborum incididunt tempor adipisicing excepteur minim. Minim nisi qui cupidatat duis. Amet proident ad eu consectetur duis. Tempor magna aute esse tempor aliqua dolor quis et magna ipsum eu nostrud minim. Aute duis proident elit anim exercitation. Sit velit et eu officia ullamco nulla reprehenderit esse cillum fugiat exercitation dolor Lorem.\r\n",
      "Interests": "Incididunt occaecat do ex laboris eiusmod aliqua consequat anim amet qui.",
      "City": "Matthews",
      "Photos": [
        {
          "url": "https://randomuser.me/api/portraits/men/46.jpg",
          "isProfilePic": true,
          "description": "Cillum eu elit cupidatat et non magna tempor."
        }
      ]
    }
  ]);

  localChange = this.localDB.asObservable();

  seeUser = this.currentUser.asObservable();


  constructor() { }

  updateCurrentUser(s: string) {
    for (let u of this.localDB.value)
    {
      if (u.Username == s)
        this.currentUser.next(u);

    }


  }

  updateMyData(localChange) {

    this.localDB.next(localChange);
  }

}
