﻿using CloudinaryDotNet.Actions;
using DatingApp.Api.Services.Interfaces;
using DatingApp.DataModel.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Api.Services
{
    public class PhotoService : IPhotoService
    {
        private readonly IPhotoRepository _photoRepository;

        public PhotoService(IPhotoRepository photoRepository)
        {
            _photoRepository = photoRepository;
        }

        public async Task<ImageUploadResult> AddPhotoAsync(IFormFile formFile)
        {
            return await _photoRepository.AddPhotoAsync(formFile);
        }

        public async Task<DeletionResult> DeletePhotoAsync(string publicId)
        {
            return await _photoRepository.DeletePhotoAsync(publicId);
        }
    }
}
