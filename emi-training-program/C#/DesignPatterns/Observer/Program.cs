using System;

namespace Observer
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create product and users
            var doveSoap = new Product() { Id = 1, Name = "Dove Soap", Price = 9.99 };
            var john = new User() { Name = "John", Email = "john@company.com" };
            var jane = new User() { Name = "Jane", Email = "jane@company.com" };

            // Create the subject
            var doveSoapAlert = new ProductAvailabilityAlert(doveSoap, "Out of Stock");

            // Create observers
            var johnsDoveSoapAlert = new UserAlert(john, doveSoapAlert);
            var janesDoveSoapAlert = new UserAlert(jane, doveSoapAlert);

            // Change the stock availability
            doveSoapAlert.SetStockStatus("In Stock");
        }
    }
}
