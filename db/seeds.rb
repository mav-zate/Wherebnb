# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

default_user = User.create!(email: 'user@default.com', first_name: 'default',
      last_name: 'user', password: 'password',
      profile_pic: File.open('app/assets/images/default_user.png'))

u1 = User.create!(email: 'edcarl@gmail.com', first_name: 'Araz',
      last_name: 'Aslanian', password: 'password',
      profile_pic: File.open('app/assets/images/default_user.png'))

u2 = User.create!(email: 'mendel@gmail.com', first_name: 'Maulik',
      last_name: 'Patel', password: 'password',
      profile_pic: File.open('app/assets/images/default_user.png'))

u3 = User.create!(email: 'thomas@gmail.com', first_name: 'Hassan',
      last_name: 'AbdulKhaleq', password: 'password',
      profile_pic: File.open('app/assets/images/default_user.png'))

u4 = User.create!(email: 'bolei@gmail.com', first_name: 'Danny',
      last_name: 'Wen', password: 'password',
      profile_pic: File.open('app/assets/images/default_user.png'))

u5 = User.create!(email: 'mav@gmail.com', first_name: 'Ethan',
      last_name: "O'Sullivan", password: 'password',
      profile_pic: File.open('app/assets/images/default_user.png'))



Bnb.destroy_all
m1 = Bnb.create!(title: 'Luxurious apartment magnificent view of NYC', host_id: u1.id, lat: 40.748184,
        lng: -73.992460, accomodation_count: 2, price: 63,
        security_deposit: 19, cleaning_fee: 5, weekly_discount: 0.14,
        monthly_discount: 0.23, wifi: true, internet: true, kitchen: true,
        parking: false, essentials: false, pets_allowed: false,
        smoking_allowed: false, rating: 5, bed_count: 1, room_type: 'private_room',
        home_type: 'condo', image: File.open('app/assets/images/manhattan_1.jpg'),
        general_description: "Luxury apartment building, an ideal place for you to live in to explore the city.
        With breathtaking manhattan skyline every morning and night, you will be living in a well-furnished Master-bedroom
        of a one bedroom apartment with plenty of storage room and space. Extremely close to Madison square garden and
        Empire state building, in fact the empire state is right outside your window.")

m2 = Bnb.create!(title: 'East Village Apartment Bedroom', host_id: u2.id, lat: 40.747269,
        lng: -74.001107,
        accomodation_count: 3, price: 54, security_deposit: 42,
        cleaning_fee: 43, weekly_discount: 0.43, monthly_discount: 0.74, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'shared_room',
        home_type: 'apartment', image: File.open('app/assets/images/manhattan_2.jpg'),
        general_description: "Luxury Building, Amazing view from bedroom. Live
        like your at a Resort in the Caribbean. in door and outdoor Pool, Hot tub,
        Basket ball court, Yoga Class, Gym, boxing gym, Great Location 5 Mins to
        TIME SQUARE. Laundry and dryer inside the apartment. Long stay are welcome.
        Daily cleaning. You can not beat the price, its better than a hotel. you get
        a nice Kitchen and a Living room for a cheaper price.")

m3 = Bnb.create!(title: 'East Village Bedroom', host_id: u3.id, lat: 40.734783,
        lng: -73.994412,
        accomodation_count: 5, price: 94, security_deposit: 32,
        cleaning_fee: 32, weekly_discount: 0.23, monthly_discount: 0.34,
        wifi: true, internet: true, kitchen: true, parking: true,
        essentials: true, pets_allowed: true, smoking_allowed: true,
        rating: 4, bed_count: 3, room_type: 'private_room',
        home_type: 'Villa', image: File.open('app/assets/images/manhattan_3.jpg'),
        general_description: "Spacious bedroom in a large East Village apartment!
        Access to a massive-semiprivate backyard shared only with neighbors. Big
        screen TV in the living room, fully functional kitchen and grand piano if
        you happen to enjoy playing.")

m4 = Bnb.create!(title: 'East Village, Spacious Private Room w Backyard', host_id: u4.id, lat: 40.729450,
        lng: -73.985486,
        accomodation_count: 45, price: 57, security_deposit: 45,
        cleaning_fee: 45, weekly_discount: 0.45, monthly_discount: 0.45, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 2, bed_count: 5, room_type: 'private_room',
        home_type: 'cottage', image: File.open('app/assets/images/manhattan_4.jpg'),
        general_description: "In the heart of one of the most hip neighborhood in NYC,
         the East Village. The room is a 5 min walk to the F train on 2 Avenue and
         walking distance from the major shopping districts, such as Soho, the West
         village and Union square. The room is comfortably located on the first floor
         and is close to the main visitors spots, such as Time Square, the Empire state
         Building, Madison Square Garden and The World Trade.")

m5 = Bnb.create!(title: 'Luxury High Floor Studio Close to Times Square', host_id: u5.id, lat: 40.736149,
        lng: -73.987374,
        accomodation_count: 23, price: 72, security_deposit: 23,
        cleaning_fee: 23, weekly_discount: 0.23, monthly_discount: 0.23, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'shared_room',
        home_type: 'ranch', image: File.open('app/assets/images/manhattan_5.jpg'),
        general_description: "located on 42nd street, blocks away from all the actions
        around times square and public transportations, this is a fully furnished 40+
        high floor studio with king size bed, and state of art kitchne appliances and
        bathroom appliances. Sunlit room overlooking downtown Manhattan and Hudson river.
        The ultra luxurious building has tons of amenity and its lobby has won several
        design awards and was featured in luxury magazines. Can host up to 4 with an air
        mattress to accommodate the extra people.")

a1 = Bnb.create!(title: 'One bedroom in Long Island City. 1 stop to midtown', host_id: u5.id, lat: 40.754845,
        lng: -73.938204,
        accomodation_count: 23, price: 39, security_deposit: 23,
        cleaning_fee: 23, weekly_discount: 0.23, monthly_discount: 0.23, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'private_room',
        home_type: 'ranch', image: File.open('app/assets/images/astoria_1.jpg'),
        general_description: "Welcome our future guest! I am a film maker but currently
        working in a IT company. My husband is doing his PhD in political science
        and teaching part time. Our 3 years old boy is very smart, cute, polite,
        resonable and friendly. We are looking to share a spare bedroom in our
        apartment with lovely visitors. It's a cozy, comfortable room that would
        be ideal for getting some rest after a day of adventure in the city. We are
        conveniently located, with Laguardia Airport and Midtown 20 minutes away.")


a2 = Bnb.create!(title: 'Thee Bohemian BNB Astoria', host_id: u5.id, lat: 40.759664,
        lng: -73.927879,
        accomodation_count: 23, price: 35, security_deposit: 23,
        cleaning_fee: 23, weekly_discount: 0.23, monthly_discount: 0.23, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'private_room',
        home_type: 'ranch', image: File.open('app/assets/images/astoria_2.jpg'),
        general_description: "Hi, I'm Matt & I've always had a deep appreciation for
        co-living situations & DIY aesthetics. My recent travels abroad living with a
        German family have inspired me to join the B&B community and create my own
        friendly environment welcoming others to experience NYC and all it has to
        offer. What makes this B&B unique is its relaxing/peaceful atmosphere. A
        place to rest, restore and enjoy some quality time before your next adventure.")

f1 = Bnb.create!(title: 'Double room (shared toilet)', host_id: u5.id, lat: 40.762673,
        lng: -73.826369,
        accomodation_count: 23, price: 27, security_deposit: 23,
        cleaning_fee: 23, weekly_discount: 0.23, monthly_discount: 0.23, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'private_room',
        home_type: 'ranch', image: File.open('app/assets/images/flushing_1.jpg'),
        general_description: "Father/Son happy to host at our quaint, sunny, 1 bedroom
        apartment in a safe neighborhood in Queens. Big, private patio available for your
        use. Subway is a 10 minute walk and 30 minute ride to Manhattan. Express bus to
        Manhattan is just a minute away from the apartment. Close to the supermarket,
        laundry, restaurants, etc. Near the US Open, Citi Field, JFK and LaGuardia Airports.
        Free wifi, satellite TV, linens, towels and all kitchen wares.")

f2 = Bnb.create!(title: 'Lovely Studio in Flushing/kew Garden', host_id: u5.id, lat: 40.756628,
        lng: -73.830177,
        accomodation_count: 23, price: 51, security_deposit: 23,
        cleaning_fee: 23, weekly_discount: 0.23, monthly_discount: 0.23, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'private_room',
        home_type: 'ranch', image: File.open('app/assets/images/flushing_2.jpg'),
        general_description: "The house is located in the heart of Flushing, one of the
        largest Tang communities in New York. After the Queen's Hospital, facing the park,
        the air is fresh and walk for three minutes to Flushing Hill Street, 10-15 minutes
        on the 7th subway station, directly to Manhattan 5 Avenue, 42 Street and Times Square,
        8 minutes walk to the Chinatown bus station, direct access to Manhattan Chinatown,
        Brooklyn, eight Avenue, (with parking spaces, near easy to get a car), go out to go two
        streets there are all kinds of Chinese restaurants and north and south Special flavor
        snacks, in your busy and tired journey, not only will give you the body and body and
        mind to bring very relaxed and comfortable, but also make you feel like home warm, new
        furniture and bedding, bath towels, slippers, bright Clean bathroom, bathroom including
        shampoo, conditioner and hair dryer, wireless free high speed internet, air conditioning
        heating, 24 hour hot and cold water supply our location near the food business shopping
        facilities, size supermarket, convenience store, large shopping mall Macy's, Target,
        BJ's, Best Buy, Marshalls, Bed Bath & Byond, Old Navy, fully stocked and affordable.
        (Including Japanese food, Korean food, American fast food), and affordable, to meet
        your mouth of the desire to meet the needs of your tongue, the United States, the
        United States, the United States, the United States, the United States,
        the United States, the United States, , A solution of nostalgia;
        Flushing is an important business district in China, the district business office")

f3 = Bnb.create!(title: 'Quiet little paradise', host_id: u5.id, lat: 40.762558,
        lng: -73.827927,
        accomodation_count: 23, price: 48, security_deposit: 23,
        cleaning_fee: 23, weekly_discount: 0.23, monthly_discount: 0.23, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'shared_room',
        home_type: 'ranch', image: File.open('app/assets/images/flushing_3.jpg'),
        general_description: "You’ll love my place because of Convenient location,
        privacy and the price!, the location, the ambiance, the people, the outdoors
        space, the neighborhood. My place is good for couples, solo adventurers,
        and business travelers.")

ad1 = Bnb.create!(title: 'Luxury apartment and rooms With 5star facilities',
        host_id: u5.id, lat: 24.523385, lng: 54.433828,
        accomodation_count: 23, price: 60, security_deposit: 23,
        cleaning_fee: 23, weekly_discount: 0.23, monthly_discount: 0.23, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'private_room',
        home_type: 'ranch', image: File.open('app/assets/images/ad_1.jpg'),
        general_description: "Spacious, bright, clean and modern luxury apartment. On
        the 45th floor with island and sea views. You will have your own private bathroom
        with shower room. On arrival you will be given an access card for you to access our
        3 gyms , Olympic size pool and other pools and jacuzzis, tennis, squash, basketball
        and football courts. As well as free access to our beauty spa. Outside lounge area
        and a trendy boutique with up market eateries, shops and cafes . And kids arcade &
        bowling. Directly Downstairs.")

ad2 = Bnb.create!(title: 'Jannah King / Twin Bedrooms', host_id: u5.id, lat: 24.496958,
        lng: 54.366811,
        accomodation_count: 23, price: 47, security_deposit: 23,
        cleaning_fee: 23, weekly_discount: 0.23, monthly_discount: 0.23, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'private_room',
        home_type: 'ranch', image: File.open('app/assets/images/ad_2.jpg'),
        general_description: "My place is close to the beach, public transport, nightlife,
        family-friendly activities, and the airport. My place is good for couples, business
        travellers, and big groups.")

ad3 = Bnb.create!(title: 'Breathtaking View in Prime Location', host_id: u5.id, lat: 24.475365,
        lng: 54.344619,
        accomodation_count: 23, price: 75, security_deposit: 23,
        cleaning_fee: 23, weekly_discount: 0.23, monthly_discount: 0.23, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'private_room',
        home_type: 'ranch', image: File.open('app/assets/images/ad_3.jpg'),
        general_description: "On the 34th floor over looking the Arabian gulf
        and the Business District. While in your very own master bedroom
        (ensuite bathroom) u can enjoy the views from your very ownprivate balcony
        or your super king size bed (200x200) equipped with a state of the art
        mattress, deep sleep guaranteed.")

ad4 = Bnb.create!(title: '1 bedroom with view in Marina Square - Reem Island', host_id: u5.id,
        lat: 24.463205, lng: 54.311690,
        accomodation_count: 23, price: 80, security_deposit: 23,
        cleaning_fee: 23, weekly_discount: 0.23, monthly_discount: 0.23, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'entire_home',
        home_type: 'ranch', image: File.open('app/assets/images/ad_4.jpg'),
        general_description: "Sounds like holiday everyday. Marina Square is a
        distinctive residential district in Reem Island (Abu Dhabi). Featuring landscaped
        spaces, swimming pools, gym, playgrounds and a mosque, Marina Square is an
        enviable address with also a mall with a Geant supermarket, restaurants,
        laundry service, currency exchange office, barber...The flat enjoyed an
        amazing view on Abu Dhabi and is fully furnitured and equiped.")

ad5 = Bnb.create!(title: 'Modern 2 bed w/ seaviews & balcony', host_id: u5.id,
        lat: 24.514455, lng: 54.366829,
        accomodation_count: 23, price: 74, security_deposit: 23,
        cleaning_fee: 23, weekly_discount: 0.23, monthly_discount: 0.23, wifi: true,
        internet: true, kitchen: true, parking: true, essentials: true, pets_allowed: true,
        smoking_allowed: true, rating: 3, bed_count: 2, room_type: 'entire_home',
        home_type: 'ranch', image: File.open('app/assets/images/ad_5.jpg'),
        general_description: "Modern 2 bedroom apartment fully furnished to a
        high standard. Beautiful balcony with harbour views, walking distance to
        convenience stores, cafes and restaurants. Table tennis within the apartment
        and gym & pool within the complex. ~35 mins in a taxi to Yas Marina F1.")




Review.destroy_all
r1 = Review.create!(bnb_id: m1.id, author_id: u2.id, body: 'Wonderful place with great hosts.',
                    accuracy: 5, communication: 5, cleanliness: 5, location: 5, check_in: 5, value: 5,
                    rating: 5)

r2 = Review.create!(bnb_id: m1.id, author_id: u3.id, body: 'Did not exceed my expectations',
                    accuracy: 3, communication: 3, cleanliness: 3, location: 3, check_in: 3, value: 3,
                    rating: 3)

r3 = Review.create!(bnb_id: m2.id, author_id: u4.id, body: 'This place was not good',
                    accuracy: 1, communication: 2, cleanliness: 2, location: 2, check_in: 3, value: 4,
                    rating: 2)

r4 = Review.create!(bnb_id: m3.id, author_id: u4.id, body: '5/5 would come back again',
                    accuracy: 5, communication: 5, cleanliness: 5, location: 5, check_in: 5, value: 5,
                    rating: 5)

r5 = Review.create!(bnb_id: m3.id, author_id: u5.id, body: 'Woo hoo!',
                    accuracy: 5, communication: 5, cleanliness: 5, location: 5, check_in: 5, value: 5,
                    rating: 5)

r6 = Review.create!(bnb_id: m3.id, author_id: u5.id, body: 'Woo hoo!',
                    accuracy: 5, communication: 5, cleanliness: 5, location: 5, check_in: 5, value: 5,
                    rating: 5)

r7 = Review.create!(bnb_id: m4.id, author_id: u5.id, body: 'Great view!!!',
                    accuracy: 5, communication: 5, cleanliness: 5, location: 5, check_in: 5, value: 5,
                    rating: 5)

r8 = Review.create!(bnb_id: a1.id, author_id: u5.id, body: 'Absolutely filthy!',
                    accuracy: 5, communication: 5, cleanliness: 5, location: 5, check_in: 5, value: 5,
                    rating: 5)

r9 = Review.create!(bnb_id: a2.id, author_id: u5.id, body: 'Not too shabby.',
                    accuracy: 1, communication: 1, cleanliness: 1, location: 1, check_in: 1, value: 1,
                    rating: 1)

r10 = Review.create!(bnb_id: f1.id, author_id: u5.id, body: 'Would come back for sure!',
                    accuracy: 4, communication: 4, cleanliness: 4, location: 4, check_in: 4, value: 4,
                    rating: 4)

r11 = Review.create!(bnb_id: f1.id, author_id: u5.id, body: 'Great place, great hosts, great trip.',
                    accuracy: 5, communication: 5, cleanliness: 5, location: 5, check_in: 5, value: 5,
                    rating: 5)

r12 = Review.create!(bnb_id: f2.id, author_id: u5.id, body: 'Astounding!',
                    accuracy: 5, communication: 5, cleanliness: 5, location: 5, check_in: 5, value: 5,
                    rating: 5)

r13 = Review.create!(bnb_id: ad1.id, author_id: u5.id, body: 'I would rather shell out the cash for a hotel',
                    accuracy: 2, communication: 2, cleanliness: 2, location: 2, check_in: 2, value: 2,
                    rating: 2)

r14 = Review.create!(bnb_id: ad1.id, author_id: u5.id, body: 'Beyond great!',
                    accuracy: 5, communication: 5, cleanliness: 5, location: 5, check_in: 5, value: 5,
                    rating: 5)

r15 = Review.create!(bnb_id: ad2.id, author_id: u5.id, body: 'Great',
                    accuracy: 4, communication: 4, cleanliness: 4, location: 4, check_in: 4, value: 4,
                    rating: 4)
