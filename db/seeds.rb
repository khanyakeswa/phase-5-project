User.destroy_all

puts "🌱 Seeding users..."

u1 = User.create(
    first_name: "Khanya",
    last_name: "Keswa",
    password_digest: "password",
    email: "khanya.keswa@gmail.com",
)