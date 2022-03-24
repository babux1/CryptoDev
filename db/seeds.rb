Comment.destroy_all
Post.destroy_all
User.destroy_all
Forum.destroy_all



10.times do
    User.create(
        username: Faker::Twitter.screen_name, 
        password: Faker::Barcode.ean, 
        email: Faker::Internet.email,
        btc_address: Faker::Blockchain::Bitcoin.address,
        admin: false
     )
end


10.times do
    Forum.create(
        title: Faker::ProgrammingLanguage.name,
        comments: Faker::Quote.famous_last_words
    )
end


10.times do
        Post.create(
        title: Faker::TvShows::Community.quotes,
        user: User.all.sample,
        forum: Forum.all.sample
    )
end

10.times do
    Comment.create(
        content: Faker::Marketing.buzzwords,
        user: User.all.sample,
        post: Post.all.sample
    )
end

puts "seeding done!"