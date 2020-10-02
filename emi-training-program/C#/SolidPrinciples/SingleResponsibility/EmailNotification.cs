using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace SingleResponsibility
{
    class EmailNotification
    {
        public static void SendEmail()
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient smtpClient = new SmtpClient();

                mail.From = new MailAddress("jonaitisdevmail@gmail.com");
                mail.To.Add(new MailAddress("jonaitisdevmail@gmail.com"));
                mail.Subject = "Single Responsibility Demo";
                mail.IsBodyHtml = true;
                mail.Body = "We will be discussing SOLID Principles.";

                smtpClient.Port = 587;
                smtpClient.Host = "smtp.gmail.com";
                smtpClient.EnableSsl = true;
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = new NetworkCredential("jonaitisdevmail@gmail.com", "Slaptazodis123!");
                smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;

                smtpClient.Send(mail);
                Console.WriteLine("Email sent successfully.");
            }
            catch (Exception e)
            {
                Console.WriteLine($"An error occurred: {e.Message}");
            }
        }
    }
}
