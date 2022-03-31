Comment.destroy_all
Post.destroy_all
User.destroy_all
Forum.destroy_all

puts "seeding... 🪴🪴🪴"

20.times do
    User.create(
        username: Faker::Twitter.screen_name, 
        password: Faker::Barcode.ean, 
        email: Faker::Internet.email,
        btc_address: Faker::Blockchain::Bitcoin.address,
        admin: false,
        avatar_url: Faker::Avatar.image
     )
end

Forum.create(title: "Solidity", description: "All things Solidity")

25.times do
    Post.create(
        title: Faker::Job.title,
        content: Faker::Quote.matz,
        user: User.all.sample,
        forum: Forum.first
    )
end

200.times do
    Comment.create(
        content: Faker::Quote.matz,
        user: User.all.sample,
        post: Post.all.sample
    )
end

puts "seeding done!"