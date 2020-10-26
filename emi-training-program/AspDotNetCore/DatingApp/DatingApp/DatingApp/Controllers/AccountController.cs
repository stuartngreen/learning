using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.Api.Services.Interfaces;
using DatingApp.DataModel.Context;
using DatingApp.DataModel.Entities;
using DatingApp.ServiceModel.DTOs.Requests;
using DatingApp.ServiceModel.DTOs.Responses;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;

        public AccountController(IAccountService accountService, ITokenService tokenService, IMapper mapper)
        {
            _accountService = accountService;
            _mapper = mapper;
            _tokenService = tokenService;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            if (await _accountService.UserExists(registerDto.Name))
            {
                return BadRequest("Username already exists.");
            }

            var newUser = await _accountService.Register(registerDto.Name, registerDto.Password, registerDto.Gender);

            return Ok(_mapper.Map<UserDetailsDto>(newUser));
        }

        //[HttpPost("login")]
        //public async Task<ActionResult<LoginDto>> Login(string name, string password)
        //{
        //    if (!await UserExists(name))
        //    {
        //        return BadRequest("Invalid username.");
        //    }

        //    var user = await _appDbContext.User.SingleOrDefaultAsync(user => user.Name == name.ToLower());

        //    var hmac = new HMACSHA512(user.PasswordSalt);
        //    var hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));

        //    if (!Enumerable.SequenceEqual(hash, user.PasswordHash))
        //    {
        //        return Unauthorized("Invalid password.");
        //    }

        //    return new LoginDto
        //    {
        //        Username = name
        //    };
        //}

        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginRequestDto login)
        {
            if (!await _accountService.UserExists(login.Name))
            {
                return Unauthorized("Invalid User!!");
            }
            var user = await _accountService.Login(login.Name, login.Password);
            if (user == null)
            {
                return Unauthorized("Invalid Password!!");
            }
            var response = _mapper.Map<LoginDto>(user);
            response.Token = _tokenService.CreateToken(user);
            return Ok(response);
        }
    }
}