# CryptoDev-FrontEnd

Welcome to our CryptoDev Reddit clone! This app allows you to interact with different forums, 
set your own avatar, make posts, and comment on posts. It uses user authentication and 
authorization in order to identify your user id and information that you use to sign up. 
Feel free to navigate the site and see what others post about and what forums are available
to browse. 

# Getting started: Run the following commands in your terminal to get going
Download repository
run bundle install
run npm install --prefix client
run run npm start --prefix client
run rails s

# This project uses the following ports:
React front-end: localhost:3000
Ruby back-end: localhost:4000

# Map of components
└── App
    ├── NavBar
    ├── Login
        |── LoginPage
        |── SignupForm
    |── Forum
        |── CreatePost
        |── Post
            |── Comment
            |── CreateComment
        |── PostPreview
    |── ForumSearch

# Models and associations
A forum has many posts
A User has many posts
A Post has many comments

# Features
Users can sign up for an account and login. If logged in, a user can create a Post, and comment on posts. If a user is not logged in, CryptoDev Forum is read only

# Collaborators
https://github.com/babux1
https://github.com/EricEinerson
https://github.com/personnamedmike
https://github.com/DiegoV27

# Licenses

MIT License

Copyright (c) [2022]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

--

# Last Updated March, 31, 2022