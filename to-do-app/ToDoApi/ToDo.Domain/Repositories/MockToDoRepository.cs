/*
using System;
using System.Collections.Generic;
using System.Text;
using ToDo_Domain.Entities;
using ToDo_Domain.Enums;

namespace ToDo_Domain.Repositories
{
    public class MockToDoRepository
    {
        public List<ToDo> GetAll()
        {
            List<ToDo> mockList = new List<ToDo>
            {
                new ToDo{
                  Id= 1,
                  Title= "vulputate elementum nullam",
                  Description= "semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel",
                  DueDate= new DateTime(),
                  Priority= 42,
                  CreatedAt= new DateTime(),
                  CreatedBy= "Jada",
                  Status = Status.ToDo
                },
                new ToDo{
                    Id = 2,
                    Title = "eget eros elementum pellentesque quisque",
                    Description = "luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse",
                    DueDate = new DateTime(),
                    Priority = 76,
                    CreatedAt = new DateTime(),
                    CreatedBy = "Ellette",
                    Status = Status.InProgress
                },
               new ToDo {
                    Id = 3,
                    Title = "justo sit amet sapien dignissim vestibulum",
                    Description = "massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea",
                    DueDate = new DateTime(),
                    Priority = 6,
                    CreatedAt =new DateTime(),
                    CreatedBy = "Morissa",
                    Status = Status.Completed
                },
               new ToDo {
                    Id = 4,
                    Title = "congue etiam justo",
                    Description = "interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum",
                    DueDate = new DateTime(),
                    Priority = 19,
                    CreatedAt =new DateTime(),
                    CreatedBy = "Hedda",
                    Status = Status.ToDo
                },
               new ToDo {
                    Id = 5,
                    Title = "tellus semper interdum",
                    Description = "nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit",
                    DueDate =new DateTime(),
                    Priority = 18,
                    CreatedAt = new DateTime(),
                    CreatedBy = "Laurena",
                    Status = Status.ToDo
                },
               new ToDo {
                    Id = 6,
                    Title = "vivamus in felis eu sapien cursus",
                    Description = "massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus",
                    DueDate = new DateTime(),
                    Priority = 3,
                    CreatedAt =new DateTime(),
                    CreatedBy = "Selena",
                    Status = Status.ToDo
                },
               new ToDo {
                    Id = 7,
                    Title = "congue vivamus metus",
                    Description = "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum",
                    DueDate = new DateTime(),
                    Priority = 23,
                    CreatedAt = new DateTime(),
                    CreatedBy = "Marilyn",
                    Status = Status.InProgress
                },
               new ToDo {
                    Id = 8,
                    Title = "ipsum dolor sit amet",
                    Description = "aliquet massa id lobortis convallis tortor risus dapibus augue vel",
                    DueDate = new DateTime(),
                    Priority = 45,
                    CreatedAt = new DateTime(),
                    CreatedBy = "Jessa",
                    Status = Status.ToDo
                },
               new ToDo {
                    Id = 9,
                    Title = "sapien arcu sed augue aliquam",
                    Description = "justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus",
                    DueDate = new DateTime(),
                    Priority = 50,
                    CreatedAt =new DateTime(),
                    CreatedBy = "Della",
                    Status = Status.Completed
                },
               new ToDo {
                    Id = 10,
                    Title = "maecenas pulvinar lobortis est phasellus",
                    Description = "nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
                    DueDate = new DateTime(),
                    Priority = 44,
                    CreatedAt =new DateTime(),
                    CreatedBy = "Hollyanne",
                    Status = Status.ToDo
                },
               new ToDo {
                    Id = 11,
                    Title = "tellus nulla ut erat id",
                    Description = "turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam",
                    DueDate = new DateTime(),
                    Priority = 36,
                    CreatedAt =new DateTime(),
                    CreatedBy = "Daffy",
                    Status = Status.InProgress
                },
              new ToDo  {
                    Id = 12,
                    Title = "curabitur at ipsum",
                    Description = "id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
                    DueDate =new DateTime(),
                    Priority = 59,
                    CreatedAt = new DateTime(),
                    CreatedBy = "Marlee",
                    Status = Status.ToDo
                },
               new ToDo {
                    Id = 13,
                    Title = "quis augue luctus tincidunt",
                    Description = "aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi",
                    DueDate = new DateTime(),
                    Priority = 24,
                    CreatedAt =new DateTime(),
                    CreatedBy = "Rosanne",
                    Status = Status.ToDo
                },
               new ToDo {
                    Id = 14,
                    Title = "in tempus sit amet",
                    Description = "vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero",
                    DueDate = new DateTime(),
                    Priority = 42,
                    CreatedAt =new DateTime(),
                    CreatedBy = "Violet",
                    Status = Status.InProgress
                },
               new ToDo {
                    Id = 15,
                    Title = "porta volutpat erat quisque",
                    Description = "dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et",
                    DueDate = new DateTime(),
                    Priority = 76,
                    CreatedAt =new DateTime(),
                    CreatedBy = "Zea",
                    Status = Status.ToDo
                },
               new ToDo {
                    Id = 16,
                    Title = "lacus at velit vivamus vel nulla",
                    Description = "nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor",
                    DueDate = new DateTime(),
                    Priority = 54,
                    CreatedAt = new DateTime(),
                    CreatedBy = "Brigitta",
                    Status = Status.Completed
                },
               new ToDo {
                    Id = 17,
                    Title = "felis fusce posuere felis sed",
                    Description = "mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum",
                    DueDate = new DateTime(),
                    Priority = 65,
                    CreatedAt = new DateTime(),
                    CreatedBy = "Anita",
                    Status = Status.InProgress
                },
               new ToDo {
                    Id = 18,
                    Title = "eros elementum pellentesque",
                    Description = "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu",
                    DueDate = new DateTime(),
                    Priority = 47,
                    CreatedAt = new DateTime(),
                    CreatedBy = "Cyndia",
                    Status = Status.ToDo
                },
               new ToDo {
                    Id = 19,
                    Title = "ridiculus mus etiam vel augue vestibulum",
                    Description = "odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras",
                    DueDate = new DateTime(),
                    Priority = 72,
                    CreatedAt = new DateTime(),
                    CreatedBy = "Nonna",
                    Status = Status.InProgress
                },
              new ToDo  {
                    Id = 20,
                    Title = "feugiat et eros",
                    Description = "aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis",
                    DueDate = new DateTime(),
                    Priority = 9,
                    CreatedAt =new DateTime(),
                    CreatedBy = "Sada",
                    Status = Status.ToDo
                }
            };

            return mockList;
        }
    }
}
*/