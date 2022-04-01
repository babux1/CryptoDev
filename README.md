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

    