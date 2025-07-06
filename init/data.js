const sampleListings = [
  {
    "title": "Taj Lake Palace Udaipur",
    "description": "Floating marble palace built circa 1743, now a luxury heritage hotel offering private boat access, royal butlers, and lakeside dining.",
    "image": {
      "filename": "taj-lake-palace-udaipur",
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 80000,
    "location": "P.O. Box 5, Lake Pichola, Udaipur 313001, Rajasthan",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.6802,
        24.5751
      ]
    },
    "category": ["palace", "famous_city"]
  },
  {
    "title": "Burj Al Arab Dubai",
    "description": "World's most luxurious hotel featuring a distinctive sail-shaped silhouette, private beach, helicopter pad, and 24-carat gold iPad amenities.",
    "image": {
      "filename": "burj-al-arab-dubai",
      "url": "https://mediaoffice.ae/-/media/2021/may/10-05/02/burj-al-arab-1.jpg"
    },
    "price": 120000,
    "location": "Jumeirah Beach Road, Dubai, UAE",
    "country": "United Arab Emirates",
    "geometry": {
      "type": "Point",
      "coordinates": [
        55.185978,
        25.14105
      ]
    },
    "category": ["beach", "famous_city"]
  },
  {
    "title": "The Ritz-Carlton Tokyo",
    "description": "Sky-high luxury hotel occupying floors 45-53 of Tokyo Midtown, offering panoramic city views, Michelin-starred dining, and traditional Japanese hospitality.",
    "image": {
      "filename": "ritz-carlton-tokyo",
      "url": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 95000,
    "location": "Tokyo Midtown, 9-7-1 Akasaka, Minato-ku, Tokyo 107-6245",
    "country": "Japan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.7302,
        35.6664
      ]
    },
    "category": ["famous_city"]
  },
  {
    "title": "Four Seasons Bora Bora",
    "description": "Overwater bungalows and beachfront villas on a private motu, featuring Mount Otemanu views, lagoon access, and world-class spa treatments.",
    "image": {
      "filename": "four-seasons-bora-bora",
      "url": "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 150000,
    "location": "Motu Tehotu, Bora Bora 98730, French Polynesia",
    "country": "French Polynesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -151.7415,
        -16.5004
      ]
    },
    "category": ["mountain"]
  },
  {
    "title": "Aman Venice",
    "description": "16th-century palazzo on the Grand Canal offering opulent suites, private garden, canal-side dining, and exclusive access to Venetian cultural experiences.",
    "image": {
      "filename": "aman-venice",
      "url": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 110000,
    "location": "Palazzo Papadopoli, Calle Tiepolo 1364, 30125 Venice VE",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.3271,
        45.4372
      ]
    },
    "category": ["famous_city"]
  },
  {
    "title": "Singita Serengeti House",
    "description": "Exclusive-use safari lodge in the heart of Serengeti offering private game drives, infinity pool, chef-prepared meals, and unparalleled wildlife viewing.",
    "image": {
      "filename": "singita-serengeti-house",
      "url": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 200000,
    "location": "Serengeti National Park, Grumeti Reserves, Tanzania",
    "country": "Tanzania",
    "geometry": {
      "type": "Point",
      "coordinates": [
        34.5679,
        -2.3333
      ]
    },
    "category": ["forests"]
  },
  {
    "title": "Nayara Gardens Costa Rica",
    "description": "Adult-only luxury resort featuring private villas with plunge pools, sloth sanctuary visits, rainforest canopy tours, and volcano views.",
    "image": {
      "filename": "nayara-gardens-costa-rica",
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 75000,
    "location": "Arenal Volcano National Park, Alajuela Province, Costa Rica",
    "country": "Costa Rica",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -84.7036,
        10.4631
      ]
    },
    "category": ["beach"]
  },
  {
    "title": "Cheval Blanc Randheli",
    "description": "Maldivian paradise featuring overwater villas, private island experiences, LVMH luxury services, and world-class diving in pristine coral reefs.",
    "image": {
      "filename": "cheval-blanc-randheli",
      "url": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 180000,
    "location": "Noonu Atoll, 20026 Randheli, Maldives",
    "country": "Maldives",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.2537,
        5.4653
      ]
    },
    "category": ["beach"]
  },
  {
    "title": "The Plaza New York",
    "description": "Legendary Fifth Avenue hotel offering timeless elegance, Central Park views, world-class shopping access, and presidential suite accommodations.",
    "image": {
      "filename": "the-plaza-new-york",
      "url": "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 85000,
    "location": "768 5th Ave, New York, NY 10019, United States",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -73.9742,
        40.7644
      ]
    },
    "category": ["famous_city"]
  },
  {
    "title": "Amangiri Utah",
    "description": "Desert sanctuary carved into dramatic sandstone formations, offering private pavilions, spa treatments, slot canyon excursions, and stargazing experiences.",
    "image": {
      "filename": "amangiri-utah",
      "url": "https://lh3.googleusercontent.com/p/AF1QipPmD1vYoq6qKdgey0xtvNsJZG5pBLMmaZI9hygc=s1360-w1360-h1020-rw"
    },
    "price": 130000,
    "location": "1 Kayenta Road, Canyon Point, UT 84741, United States",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -111.6021,
        37.0234
      ]
    },
    "category": ["famous_city"]
  },
  {
    "title": "Giraffe Manor Nairobi",
    "description": "Boutique manor hotel where endangered Rothschild giraffes roam freely, offering intimate wildlife encounters, colonial elegance, and exclusive conservation experiences.",
    "image": {
      "filename": "giraffe-manor-nairobi",
      "url": "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 140000,
    "location": "Gogo Falls Road, Nairobi 00100, Kenya",
    "country": "Kenya",
    "geometry": {
      "type": "Point",
      "coordinates": [
        36.7607,
        -1.3611
      ]
    },
    "category": ["beach", "mountain"]
  },
  {
    "title": "Jade Mountain St. Lucia",
    "description": "Architectural wonder featuring infinity pool sanctuaries, open-wall design, Piton mountain views, and personalized butler service in tropical paradise.",
    "image": {
      "filename": "jade-mountain-st-lucia",
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 165000,
    "location": "Morne Chastanet Road, Soufriere, St. Lucia",
    "country": "Saint Lucia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -61.0706,
        13.8294
      ]
    },
    "category": ["mountain"]
  },
  {
    "title": "Castello di Casole Tuscany",
    "description": "10th-century castle estate featuring vineyard suites, private wine tastings, truffle hunting, cooking classes, and panoramic Tuscan countryside views.",
    "image": {
      "filename": "castello-di-casole-tuscany",
      "url": "https://lh3.googleusercontent.com/proxy/zXFlppzt8lPq9OapRpBecm_CwD8MjeqptfMI_2Admn-ezoscDdFm9vD8ZhDeBvWUh3Ghn2NDwpnhL1XwBX3O1qEf5jM8ejjqY5CqQluL6wjAOaobc8oJzuW7jdrg2mlS3LhV0nAa49RTjTKK7U_zcLE7FX0fRg=s1360-w1360-h1020-rw"
    },
    "price": 90000,
    "location": "Località Querceto, 53031 Casole d'Elsa SI, Italy",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.0431,
        43.3469
      ]
    },
    "category": ["famous_city", "palace"]
  },
  {
    "title": "Six Senses Bhutan",
    "description": "Luxury lodge network across five valleys offering meditation retreats, traditional hot stone baths, monastery visits, and exclusive cultural immersion experiences.",
    "image": {
      "filename": "six-senses-bhutan",
      "url": "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 125000,
    "location": "Paro Valley, Bhutan",
    "country": "Bhutan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        89.403,
        27.4305
      ]
    },
    "category": ["famous_city"]
  },
  {
    "title": "Kakslauttanen Arctic Resort",
    "description": "Arctic wilderness experience featuring glass igloos, northern lights viewing, reindeer safaris, ice restaurants, and traditional Finnish sauna experiences.",
    "image": {
      "filename": "kakslauttanen-arctic-resort",
      "url": "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 70000,
    "location": "Kakslauttanen, 99830 Saariselkä, Finland",
    "country": "Finland",
    "geometry": {
      "type": "Point",
      "coordinates": [
        27.2886,
        68.3347
      ]
    },
    "category": ["artic", "mountain"]
  },
  {
    "title": "Nihi Sumba Indonesia",
    "description": "Remote island sanctuary offering private beaches, world-class surfing, spa treatments, horse riding, and authentic cultural experiences with local communities.",
    "image": {
      "filename": "nihi-sumba-indonesia",
      "url": "https://nihi.com/wp-content/uploads/2024/04/RajaMandaka_MainPool.jpg"
    },
    "price": 155000,
    "location": "Hoba Wawi, Sumba Barat, East Nusa Tenggara 87271, Indonesia",
    "country": "Indonesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        119.2456,
        -9.6561
      ]
    },
    "category": ["beach"]
  },
  {
    "title": "The Brando Tetiaroa",
    "description": "Private island eco-luxury resort on Marlon Brando's former estate, featuring overwater villas, marine research station, and sustainable luxury experiences.",
    "image": {
      "filename": "the-brando-tetiaroa",
      "url": "https://pacificbeachcomber.com/wp-content/uploads/2019/06/TheBrando_180718_0981.jpg"
    },
    "price": 220000,
    "location": "Tetiaroa Island, French Polynesia",
    "country": "French Polynesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -149.5833,
        -17.05
      ]
    },
    "category": ["forests"]
  },
  {
    "title": "Explora Patagonia Chile",
    "description": "Remote lodge offering guided explorations of Torres del Paine, glacier trekking, wildlife photography, gourmet dining, and panoramic Patagonian landscapes.",
    "image": {
      "filename": "explora-patagonia-chile",
      "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 175000,
    "location": "Torres del Paine National Park, Magallanes Region, Chile",
    "country": "Chile",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -73.0076,
        -51.2536
      ]
    },
    "category": ["forests", "mountain"]
  },
  {
    "title": "Longitude 131° Australia",
    "description": "Luxury tented pavilions overlooking Uluru, offering indigenous cultural experiences, gourmet dining, camel expeditions, and exclusive access to sacred sites.",
    "image": {
      "filename": "longitude-131-australia",
      "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 160000,
    "location": "Yulara Drive, Yulara NT 0872, Australia",
    "country": "Australia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        131.035,
        -25.2437
      ]
    },
    "category": ["artic", "mountain"]
  },
  {
    "title": "Treehotel Sweden",
    "description": "Unique treetop accommodations designed by leading architects, featuring mirror cubes, bird's nests, UFO rooms, and immersive forest experiences.",
    "image": {
      "filename": "treehotel-sweden",
      "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 65000,
    "location": "Edeforsväg 2A, 960 24 Harads, Sweden",
    "country": "Sweden",
    "geometry": {
      "type": "Point",
      "coordinates": [
        20.9732,
        66.0845
      ]
    },
    "category": ["forests"]
  },
  {
    "title": "Hotel de Glace Quebec",
    "description": "North America's only ice hotel rebuilt annually, featuring ice sculptures, frozen furniture, thermal sleeping bags, and vodka bar carved from ice.",
    "image": {
      "filename": "hotel-de-glace-quebec",
      "url": "https://lh3.googleusercontent.com/proxy/hstG79-wOrKshCpVB-q_0Fkb3QYRHbRlp970ddozWawPcjFsl6QZWbLQybAITJj2Vf-99bCVPgkOh6rjLha4wJh1ko_p50QTDhuSMo42MNzeo4uXLz7cVNZmjey0duu5ojm1riCb5PRBUw7-CLb5Bp320Np3ayg=s1360-w1360-h1020-rw"
    },
    "price": 55000,
    "location": "9530 Rue de la Faune, Charlesbourg, QC G1G 5H9, Canada",
    "country": "Canada",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.3053,
        46.957
      ]
    },
    "category": ["artic"]
  },
  {
    "title": "Alila Villas Uluwatu",
    "description": "Clifftop villas with infinity pools overlooking Indian Ocean, featuring contemporary Balinese architecture, spa treatments, and world-class surfing access.",
    "image": {
      "filename": "alila-villas-uluwatu",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 85000,
    "location": "Jl. Belimbing Sari, Pecatu, Uluwatu, Bali 80364, Indonesia",
    "country": "Indonesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1237,
        -8.8296
      ]
    },
    "category": ["beach"]
  },
  {
    "title": "Qasr Al Sarab Desert Resort",
    "description": "Desert palace in the heart of Empty Quarter, offering camel trekking, falconry experiences, dune dining, and traditional Bedouin cultural immersion.",
    "image": {
      "filename": "qasr-al-sarab-desert-resort",
      "url": "https://www.americanexpress.com/en-us/travel/discover/photos/100473/74488/1600/Deluxe_Garden_Room_King_Bed_Qasr_Al_Sarab_Desert_Resort_by_Anantara_Guest_Room.jpg?ch=560"
    },
    "price": 100000,
    "location": "Liwa Desert, Abu Dhabi, United Arab Emirates",
    "country": "United Arab Emirates",
    "geometry": {
      "type": "Point",
      "coordinates": [
        54.383,
        23.171
      ]
    },
    "category": ["beach", "famous_city"]
  },
  {
    "title": "Belmond Hotel Splendido",
    "description": "Legendary Portofino clifftop hotel with Mediterranean gardens, yacht charter services, Michelin-starred dining, and panoramic Italian Riviera views.",
    "image": {
      "filename": "belmond-hotel-splendido",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Belmond_Hotel_Splendido%2C_Portofino%2C_Italy.jpg/1200px-Belmond_Hotel_Splendido%2C_Portofino%2C_Italy.jpg"
    },
    "price": 115000,
    "location": "Salita Baratta 16, 16034 Portofino GE, Italy",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        9.2099,
        44.3033
      ]
    },
    "category": ["forests", "mountain", "famous_city"]
  },
  {
    "title": "Ashford Castle Ireland",
    "description": "800-year-old castle offering falconry school, private lake activities, medieval banquets, golf course, and authentic Irish aristocratic experiences.",
    "image": {
      "filename": "ashford-castle-ireland",
      "url": "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npNyZ9w2NUyAtOFxP2VEfggivhWSVMlbJoPqZZvGxrYFLIsxLkghISVeK65rXnttj20S8x2xxRnK2CXc8pVsax9OgyPVU14p2XAjf9RC1LuAhf_8fcPjsVXnIsExLMpB4frW1SZDA=s1360-w1360-h1020-rw"
    },
    "price": 105000,
    "location": "Cong, Co. Mayo F31 CA48, Ireland",
    "country": "Ireland",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -9.285,
        53.5332
      ]
    },
    "category": ["palace"]
  },
  {
    "title": "Huacachina Oasis Peru",
    "description": "Desert oasis boutique lodge surrounded by sand dunes, offering sandboarding adventures, pisco tastings, stargazing experiences, and traditional Peruvian cuisine.",
    "image": {
      "filename": "huacachina-oasis-peru",
      "url": "https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 45000,
    "location": "Huacachina, Ica 11001, Peru",
    "country": "Peru",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -75.7636,
        -14.0875
      ]
    },
    "category": ["mountain", "beach", "famous_city"]
  },
  {
    "title": "Conrad Maldives Rangali Island",
    "description": "Dual-island resort featuring the world's first underwater restaurant, overwater villas, marine biology experiences, and exclusive seaplane transfers.",
    "image": {
      "filename": "conrad-maldives-rangali-island",
      "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/666186111.jpg?k=f0f069472e0da6040b407b825c7e7ef593d14bf5062a6b5af5f822ba25e7c675&o=&hp=1"
    },
    "price": 145000,
    "location": "Rangali Island, Alifu Dhaalu Atoll 20026, Maldives",
    "country": "Maldives",
    "geometry": {
      "type": "Point",
      "coordinates": [
        72.7828,
        3.617
      ]
    },
    "category": ["beach"]
  },
  {
    "title": "Fogo Island Inn Canada",
    "description": "Contemporary architectural marvel on remote island, featuring local artisan furnishings, iceberg watching, Northern Lights viewing, and sustainable luxury.",
    "image": {
      "filename": "fogo-island-inn-canada",
      "url": "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    },
    "price": 95000,
    "location": "210 Main Rd, Joe Batt's Arm, NL A0G 4M0, Canada",
    "country": "Canada",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -54.2318,
        49.6831
      ]
    },
    "category": ["famous_city"]
  },
  {
    "title": "Neemrana Fort Palace",
    "description": "15th-century hilltop fort palace featuring heritage suites, traditional Rajasthani architecture, vintage car rides, and panoramic Aravalli Hills views.",
    "image": {
      "filename": "neemrana-fort-palace",
      "url": "https://lh3.googleusercontent.com/p/AF1QipPWNxZL1PszcxWV7UaZY4KEYMQLHrjvu0yip_E0=s1360-w1360-h1020-rw"
    },
    "price": 60000,
    "location": "Village & Post Neemrana, Tehsil Kotputli, Alwar 301705, Rajasthan",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        76.8166,
        27.9881
      ]
    },
    "category": ["forests", "palace", "mountain"]
  },
  {
    "title": "The Oberoi Grand Kolkata",
    "description": "Colonial-era luxury hotel in the heart of Kolkata, featuring Victorian architecture, traditional Bengali cuisine, heritage walks, and proximity to cultural landmarks.",
    "image": {
      "filename": "the-oberoi-grand-kolkata",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/OberoiGrandHotelKolkata_gobeirne.jpg/1200px-OberoiGrandHotelKolkata_gobeirne.jpg"
    },
    "price": 35000,
    "location": "15 Jawaharlal Nehru Road, Kolkata 700013, West Bengal",
    "country": "India",
    "geometry": {
      "type": "Point",
      "coordinates": [
        88.3495,
        22.5636
      ]
    },
    "category": ["famous_city"]
  }
];

module.exports = { data: sampleListings };
