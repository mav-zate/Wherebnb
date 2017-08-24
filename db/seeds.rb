# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
u1 = User.create!(email: 'edcarl@gmail.com', first_name: 'Edcarl',
      last_name: 'Adraincem', password: 'password')

u2 = User.create!(email: 'mendel@gmail.com', first_name: 'Mendel',
      last_name: 'Konikov', password: 'password')

u3 = User.create!(email: 'thomas@gmail.com', first_name: 'Thomas',
      last_name: 'Dorrian', password: 'password')

u4 = User.create!(email: 'bolei@gmail.com', first_name: 'Bolei',
      last_name: 'Zhang', password: 'password')

u5 = User.create!(email: 'mav@gmail.com', first_name: 'Maverick',
      last_name: 'Alzate', password: 'password')

Bnb.destroy_all
bnb1 = Bnb.create!(title: 'Penthouse condo', host_id: u1.id, lat: Faker::Address.unique.latitude,
        lng: Faker::Address.unique.longitude, accomodation_count: 2, price: 63,
        security_deposit: 19, cleaning_fee: 5, weekly_discount: 0.14,
        monthly_discount: 0.23, wifi: true, internet: true, kitchen: true,
        parking: false, essentials: false, pets_allowed: false,
        smoking_allowed: false, rating: 5, bed_count: 1, room_type: 'entire home',
        home_type: 'condo')

bnb2 = Bnb.create!(title: 'Cozy apartment', host_id: u2.id, lat: Faker::Address.unique.latitude,
        lng: Faker::Address.unique.longitude,
        accomodation_count: 3, price: 54, security_deposit: 23,
        cleaning_fee: 43, weekly_discount: 0.43, monthly_discount: 0.74, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'private room',
        home_type: 'apartment')

bnb3 = Bnb.create!(title: 'Seaside Villa', host_id: u3.id, lat: Faker::Address.unique.latitude,
        lng: Faker::Address.unique.longitude,
        accomodation_count: 5, price: 345, security_deposit: 32,
        cleaning_fee: 32, weekly_discount: 0.23, monthly_discount: 0.34,
        wifi: true, internet: true, kitchen: true, parking: true,
        essentials: true, pets_allowed: true, smoking_allowed: true,
        rating: 4, bed_count: 3, room_type: 'private room',
        home_type: 'Villa')

bnb4 = Bnb.create!(title: 'Cozy cottage', host_id: u4.id, lat: Faker::Address.unique.latitude,
        lng: Faker::Address.unique.longitude,
        accomodation_count: 45, price: 45, security_deposit: 45,
        cleaning_fee: 45, weekly_discount: 0.45, monthly_discount: 0.45, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 2, bed_count: 5, room_type: 'shared room',
        home_type: 'cottage')

bnb5 = Bnb.create!(title: 'Rustic ranch', host_id: u5.id, lat: Faker::Address.unique.latitude,
        lng: Faker::Address.unique.longitude,
        accomodation_count: 23, price: 23, security_deposit: 23,
        cleaning_fee: 23, weekly_discount: 0.23, monthly_discount: 0.23, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'shared room',
        home_type: 'ranch')
