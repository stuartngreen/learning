using System;
using System.Collections.Generic;
using System.Text;

namespace Observer
{
    public class ProductAvailabilityAlert : ISubject
    {
        private List<IObserver> _observers = new List<IObserver>();

        private Product _product;

        private string _stockStatus;

        public ProductAvailabilityAlert(Product product, string stockStatus)
        {
            _product = product;
            _stockStatus = stockStatus;
        }

        public void SetStockStatus(string stockStatus)
        {
            Console.WriteLine($"Product \"{_product.Name}\" availability changed from \"{_stockStatus}\" to \"{stockStatus}\".");
            _stockStatus = stockStatus;
            NotifyObservers();
        }

        public void AddObserver(IObserver observer)
        {
            _observers.Add(observer);
        }

        public void RemoveObserver(IObserver observer)
        {
            _observers.Remove(observer);
        }

        public void NotifyObservers()
        {
            foreach(IObserver observer in _observers)
            {
                observer.alert(_stockStatus, _product);
            }
        }
    }
}
