namespace Registration.Services.Interfaces
{
    public interface IValidationService
    {
        bool ValidateUsername(string username);

        bool ValidatePassword(string password);
    }
}
