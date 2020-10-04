using System.Net.Mail;

namespace RegistrationAndLogin.Models.Entities
{
    public class RegistrationEmail : Email
    {
        public RegistrationEmail(string recipient, string toAddress)
            : base(
                new MailAddress("jonaitisdevmail@gmail.com"),
                new MailAddress(toAddress),
                "Registration successful!",
                true,
                $"Hi {recipient}! Your have successfully registered on our system. Thank you."
            )
        {
        }
    }
}
