using RegistrationAndLogin.Models.Entities;
using System;
using System.Net;
using System.Net.Mail;

namespace RegistrationAndLogin.Services
{
    public class MailService
    {
        private SmtpClient _smtpClient = new SmtpClient();

        public MailService()
        {
            _smtpClient.Port = 587;
            _smtpClient.Host = "smtp.gmail.com";
            _smtpClient.EnableSsl = true;
            _smtpClient.UseDefaultCredentials = false;
            _smtpClient.Credentials = new NetworkCredential("jonaitisdevmail@gmail.com", "Slaptazodis123!");
            _smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
        }

        public void SendRegistrationEmail(string recipient, string toAddress)
        {
            var email = new RegistrationEmail(recipient, toAddress).GetMailMessage();

            try
            {
                Console.WriteLine("Sending registration confirmation email - please wait...");
                _smtpClient.Send(email);
                Console.WriteLine("Registration email sent successfully.");
            }
            catch (Exception e)
            {
                Console.WriteLine($"An error occurred while sending the registration email: {e.Message}");
            }
        }
    }
}
