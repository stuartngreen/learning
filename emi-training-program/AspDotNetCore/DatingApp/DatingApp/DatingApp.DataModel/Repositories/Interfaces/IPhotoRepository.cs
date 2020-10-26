using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DatingApp.DataModel.Repositories.Interfaces
{
    public interface IPhotoRepository
    {
        Task<ImageUploadResult> AddPhotoAsync(IFormFile formFile);

        Task<DeletionResult> DeletePhotoAsync(string publicId);
    }
}
