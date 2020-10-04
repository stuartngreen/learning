using System.Net.Mail;

namespace RegistrationAndLogin.Models.Entities
{
    public abstract class Email
    {
        private MailMessage _mailMessage = new MailMessage();

        public MailAddress From { get; set; }

        public MailAddress To { get; set; }

        public string Subject { get; set; }

        public bool IsBodyHtml { get; set; }

        public string Body { get; set; }

        public Email(MailAddress from, MailAddress to, string subject, bool isBodyHtml, string body)
        {
            _mailMessage.From = from;
            _mailMessage.To.Add(to);
            _mailMessage.Subject = subject;
            _mailMessage.IsBodyHtml = isBodyHtml;
            _mailMessage.Body = body;
        }

        public MailMessage GetMailMessage()
        {
            return _mailMessage;
        }
    }
}
