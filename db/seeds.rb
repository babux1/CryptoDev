Comment.destroy_all
Post.destroy_all
User.destroy_all
Forum.destroy_all

puts "seeding... 🪴🪴🪴"


50.times do
    User.create(
        username: Faker::Twitter.screen_name, 
        password: Faker::Barcode.ean, 
        email: Faker::Internet.email,
        btc_address: Faker::Blockchain::Bitcoin.address,
        admin: false
     )
end


Forum.create(title: "Solidity", description: "All things Solidity")
Forum.create(title: "Ethereum", description: "Ethereum general discussion")
Forum.create(title: "Bitcoin", description: "All things Bitcoin")


100.times do
    Post.create(
        title: Faker::Job.title,
        content: Faker::Quote.matz,
        user: User.all.sample,
        forum: Forum.first
    )
end

1000.times do
    Comment.create(
        content: Faker::Quote.matz,
        user: User.all.sample,
        post: Post.all.sample
    )
end

puts "seeding done!"