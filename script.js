// Curated local movie data keeps the project simple and independent of a movie API.
// Static catalog: 125 Hindi-language Indian films, 20 Telugu films, and 125 US English-language films.
const movies = [
    {
        "title": "The Godfather",
        "year": 1972,
        "rating": 8.687,
        "genre": "Drama",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take ca",
        "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "id": 1000,
        "runtime": "175 min"
    },
    {
        "title": "The Dark Knight",
        "year": 2008,
        "rating": 8.533,
        "genre": "Action",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effecti",
        "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "id": 1001,
        "runtime": "152 min"
    },
    {
        "title": "The Green Mile",
        "year": 1999,
        "rating": 8.506,
        "genre": "Fantasy",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tri",
        "poster": "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
        "id": 1002,
        "runtime": "189 min"
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "year": 2003,
        "rating": 8.502,
        "genre": "Adventure",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne ",
        "poster": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "id": 1003,
        "runtime": "201 min"
    },
    {
        "title": "Pulp Fiction",
        "year": 1994,
        "rating": 8.5,
        "genre": "Thriller",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        "poster": "https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
        "id": 1004,
        "runtime": "154 min"
    },
    {
        "title": "Forrest Gump",
        "year": 1994,
        "rating": 8.465,
        "genre": "Comedy",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
        "poster": "https://image.tmdb.org/t/p/w500/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg",
        "id": 1005,
        "runtime": "142 min"
    },
    {
        "title": "Psycho",
        "year": 1960,
        "rating": 8.412,
        "genre": "Horror",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled"
        ],
        "description": "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother.",
        "poster": "https://image.tmdb.org/t/p/w500/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
        "id": 1006,
        "runtime": "109 min"
    },
    {
        "title": "Se7en",
        "year": 1995,
        "rating": 8.381,
        "genre": "Crime",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. S",
        "poster": "https://image.tmdb.org/t/p/w500/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
        "id": 1007,
        "runtime": "127 min"
    },
    {
        "title": "A Clockwork Orange",
        "year": 1971,
        "rating": 8.175,
        "genre": "Sci-Fi",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "thoughtful"
        ],
        "description": "In a near-future Britain, young Alexander DeLarge and his pals get their kicks beating and raping anyone they please. When not destroying the lives of others, Alex swoons to the music of Beethoven. The state, eager to crack down on juvenile",
        "poster": "https://image.tmdb.org/t/p/w500/4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
        "id": 1008,
        "runtime": "137 min"
    },
    {
        "title": "Memento",
        "year": 2000,
        "rating": 8.175,
        "genre": "Mystery",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "Leonard Shelby is tracking down the man who raped and murdered his wife. The difficulty of locating his wife's killer, however, is compounded by the fact that he suffers from a rare, untreatable form of short-term memory loss. Although he c",
        "poster": "https://image.tmdb.org/t/p/w500/nzlv62aC0octS5AklAiWpXLX9Z0.jpg",
        "id": 1009,
        "runtime": "113 min"
    },
    {
        "title": "Monsters, Inc.",
        "year": 2001,
        "rating": 7.9,
        "genre": "Animation",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Lovable Sulley and his wisecracking sidekick Mike Wazowski are the top scare team at Monsters, Inc., the scream-processing factory in Monstropolis. When a little girl named Boo wanders into their world, it's the monsters who are scared sill",
        "poster": "https://image.tmdb.org/t/p/w500/wFSpyMsp7H0ttERbxY7Trlv8xry.jpg",
        "id": 1010,
        "runtime": "92 min"
    },
    {
        "title": "Roman Holiday",
        "year": 1953,
        "rating": 7.891,
        "genre": "Romance",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "Overwhelmed by her suffocating schedule, touring European princess Ann takes off for a night while in Rome. When a sedative she took from her doctor kicks in, however, she falls asleep on a park bench and is found by an American reporter, J",
        "poster": "https://image.tmdb.org/t/p/w500/8lI9dmz1RH20FAqltkGelY1v4BE.jpg",
        "id": 1011,
        "runtime": "119 min"
    },
    {
        "title": "Grizzly Man",
        "year": 2005,
        "rating": 7.535,
        "genre": "Documentary",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "wonder"
        ],
        "description": "Follows the story of \"Grizzly Man\" Timothy Treadwell and what the thirteen summers in a National Park in Alaska were like in his attempt to protect the grizzly bears. The film is full of unique images and a look into the spirit of a man who",
        "poster": "https://image.tmdb.org/t/p/w500/zuZWpcuye25rpsiZ4XzsAvmLDHG.jpg",
        "id": 1012,
        "runtime": "103 min"
    },
    {
        "title": "The Godfather Part II",
        "year": 1974,
        "rating": 8.572,
        "genre": "Drama",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
        "poster": "https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        "id": 1013,
        "runtime": "202 min"
    },
    {
        "title": "Paths of Glory",
        "year": 1957,
        "rating": 8.252,
        "genre": "Action",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "A commanding officer defends three scapegoats on trial for a failed offensive that occurred within the French Army in 1916.",
        "poster": "https://image.tmdb.org/t/p/w500/hGg1UCQSHlXfv2HI9bDHT2OQBam.jpg",
        "id": 1014,
        "runtime": "88 min"
    },
    {
        "title": "Toy Story",
        "year": 1995,
        "rating": 7.984,
        "genre": "Fantasy",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their o",
        "poster": "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        "id": 1015,
        "runtime": "81 min"
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": 2001,
        "rating": 8.439,
        "genre": "Adventure",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer an",
        "poster": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        "id": 1016,
        "runtime": "179 min"
    },
    {
        "title": "Rear Window",
        "year": 1954,
        "rating": 8.337,
        "genre": "Thriller",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
        "poster": "https://image.tmdb.org/t/p/w500/ILVF0eJxHMddjxeQhswFtpMtqx.jpg",
        "id": 1017,
        "runtime": "113 min"
    },
    {
        "title": "The Great Dictator",
        "year": 1940,
        "rating": 8.28,
        "genre": "Comedy",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
        "poster": "https://image.tmdb.org/t/p/w500/nhMXB8GTdswYMCL9nepDZymJCOr.jpg",
        "id": 1018,
        "runtime": "125 min"
    },
    {
        "title": "The Shining",
        "year": 1980,
        "rating": 8.202,
        "genre": "Horror",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled"
        ],
        "description": "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
        "poster": "https://image.tmdb.org/t/p/w500/uAR0AWqhQL1hQa69UDEbb2rE5Wx.jpg",
        "id": 1019,
        "runtime": "144 min"
    },
    {
        "title": "Taxi Driver",
        "year": 1976,
        "rating": 8.124,
        "genre": "Crime",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Suffering from insomnia, disturbed loner Travis Bickle takes a job as a New York City cabbie, haunting the streets nightly, growing increasingly detached from reality as he dreams of cleaning up the filthy city.",
        "poster": "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
        "id": 1020,
        "runtime": "114 min"
    },
    {
        "title": "Eternal Sunshine of the Spotless Mind",
        "year": 2004,
        "rating": 8.09,
        "genre": "Sci-Fi",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "thoughtful"
        ],
        "description": "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to corre",
        "poster": "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
        "id": 1021,
        "runtime": "108 min"
    },
    {
        "title": "Vertigo",
        "year": 1958,
        "rating": 8.135,
        "genre": "Mystery",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friend's wife, all the while becoming dangerously obsessed with her.",
        "poster": "https://image.tmdb.org/t/p/w500/15uOEfqBNTVtDUT7hGBVCka0rZz.jpg",
        "id": 1022,
        "runtime": "128 min"
    },
    {
        "title": "Finding Nemo",
        "year": 2003,
        "rating": 7.8,
        "genre": "Animation",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetar",
        "poster": "https://image.tmdb.org/t/p/w500/5lc6nQc0VhWFYFbNv016xze8Jvy.jpg",
        "id": 1023,
        "runtime": "100 min"
    },
    {
        "title": "Notorious",
        "year": 1946,
        "rating": 7.716,
        "genre": "Romance",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "In order to help bring Nazis to justice, U.S. government agent T.R. Devlin recruits Alicia Huberman, the American daughter of a convicted German war criminal, as a spy. As they begin to fall for one another, Alicia is instructed to win the ",
        "poster": "https://image.tmdb.org/t/p/w500/4RERYb1NIQrJHYY5e8nUlYM7t2z.jpg",
        "id": 1024,
        "runtime": "103 min"
    },
    {
        "title": "Bowling for Columbine",
        "year": 2002,
        "rating": 7.517,
        "genre": "Documentary",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "wonder"
        ],
        "description": "This is not a film about gun control. It is a film about the fearful heart and soul of the United States, and the 280 million Americans lucky enough to have the right to a constitutionally protected Uzi. From a look at the Columbine High Sc",
        "poster": "https://image.tmdb.org/t/p/w500/4XsiTsZcNCRSkee1o0fdr5OqYRT.jpg",
        "id": 1025,
        "runtime": "120 min"
    },
    {
        "title": "Schindler's List",
        "year": 1993,
        "rating": 8.57,
        "genre": "Drama",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        "id": 1026,
        "runtime": "195 min"
    },
    {
        "title": "The Matrix",
        "year": 1999,
        "rating": 8.252,
        "genre": "Action",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        "poster": "https://image.tmdb.org/t/p/w500/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
        "id": 1027,
        "runtime": "136 min"
    },
    {
        "title": "Donnie Darko",
        "year": 2001,
        "rating": 7.762,
        "genre": "Fantasy",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.",
        "poster": "https://image.tmdb.org/t/p/w500/j2AtZFsflxiluaNtajMTI0Avm8C.jpg",
        "id": 1028,
        "runtime": "114 min"
    },
    {
        "title": "The Lord of the Rings: The Two Towers",
        "year": 2002,
        "rating": 8.423,
        "genre": "Adventure",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "Frodo Baggins and the other members of the Fellowship continue on their sacred quest to destroy the One Ring--but on separate paths. Their destinies lie at two towers--Orthanc Tower in Isengard, where the corrupt wizard Saruman awaits, and ",
        "poster": "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
        "id": 1029,
        "runtime": "179 min"
    },
    {
        "title": "Dial M for Murder",
        "year": 1954,
        "rating": 8.002,
        "genre": "Thriller",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "When her American lover visits London, a wealthy woman’s jealous husband hatches a plan to murder her and inherit her fortune.",
        "poster": "https://image.tmdb.org/t/p/w500/2gDCAgl2iBQNuJuk6p2xtuS1ewg.jpg",
        "id": 1030,
        "runtime": "105 min"
    },
    {
        "title": "City Lights",
        "year": 1931,
        "rating": 8.247,
        "genre": "Comedy",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "A tramp falls in love with a beautiful blind flower girl. His on-and-off friendship with a wealthy man allows him to be the girl's benefactor and suitor.",
        "poster": "https://image.tmdb.org/t/p/w500/ugmakEL5y294I5bXgiBqApuZpwc.jpg",
        "id": 1031,
        "runtime": "87 min"
    },
    {
        "title": "Alien",
        "year": 1979,
        "rating": 8.17,
        "genre": "Horror",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled"
        ],
        "description": "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of ",
        "poster": "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
        "id": 1032,
        "runtime": "117 min"
    },
    {
        "title": "Reservoir Dogs",
        "year": 1992,
        "rating": 8.112,
        "genre": "Crime",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr.",
        "poster": "https://image.tmdb.org/t/p/w500/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
        "id": 1033,
        "runtime": "99 min"
    },
    {
        "title": "2001: A Space Odyssey",
        "year": 1968,
        "rating": 8,
        "genre": "Sci-Fi",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "thoughtful"
        ],
        "description": "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
        "poster": "https://image.tmdb.org/t/p/w500/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
        "id": 1034,
        "runtime": "149 min"
    },
    {
        "title": "Citizen Kane",
        "year": 1941,
        "rating": 7.969,
        "genre": "Mystery",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "Newspaper magnate Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to",
        "poster": "https://image.tmdb.org/t/p/w500/sav0jxhqiH0bPr2vZFU0Kjt2nZL.jpg",
        "id": 1035,
        "runtime": "119 min"
    },
    {
        "title": "Shrek",
        "year": 2001,
        "rating": 7.773,
        "genre": "Animation",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecra",
        "poster": "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
        "id": 1036,
        "runtime": "90 min"
    },
    {
        "title": "What's Eating Gilbert Grape",
        "year": 1993,
        "rating": 7.66,
        "genre": "Romance",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "Gilbert Grape is a small-town young man with a lot of responsibility. Chief among his concerns are his mother, who is so overweight that she can't leave the house, and his mentally impaired younger brother, Arnie, who has a knack for findin",
        "poster": "https://image.tmdb.org/t/p/w500/8FxWgsfDNosewo7H65oE4QkOb7g.jpg",
        "id": 1037,
        "runtime": "118 min"
    },
    {
        "title": "Bob Dylan – Don't Look Back",
        "year": 1967,
        "rating": 7.384,
        "genre": "Documentary",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "wonder"
        ],
        "description": "In this wildly entertaining vision of one of the twentieth century’s greatest artists, Bob Dylan is surrounded by teen fans, gets into heated philosophical jousts with journalists, and kicks back with fellow musicians Joan Baez, Donovan, an",
        "poster": "https://image.tmdb.org/t/p/w500/2kd5XfH2MhFlChq7DkjxWBLoYPF.jpg",
        "id": 1038,
        "runtime": "96 min"
    },
    {
        "title": "12 Angry Men",
        "year": 1957,
        "rating": 8.565,
        "genre": "Drama",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of eac",
        "poster": "https://image.tmdb.org/t/p/w500/zhG3vKWyDRaZYoaww1UVAi29T9h.jpg",
        "id": 1039,
        "runtime": "97 min"
    },
    {
        "title": "Saving Private Ryan",
        "year": 1998,
        "rating": 8.23,
        "genre": "Action",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the ",
        "poster": "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
        "id": 1040,
        "runtime": "169 min"
    },
    {
        "title": "Edward Scissorhands",
        "year": 1990,
        "rating": 7.72,
        "genre": "Fantasy",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "A small suburban town receives a visit from a castaway unfinished science experiment named Edward.",
        "poster": "https://image.tmdb.org/t/p/w500/e0FqKFvGPdQNWG8tF9cZBtev9Em.jpg",
        "id": 1041,
        "runtime": "105 min"
    },
    {
        "title": "Back to the Future",
        "year": 1985,
        "rating": 8.327,
        "genre": "Adventure",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' r",
        "poster": "https://image.tmdb.org/t/p/w500/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg",
        "id": 1042,
        "runtime": "116 min"
    },
    {
        "title": "North by Northwest",
        "year": 1959,
        "rating": 7.964,
        "genre": "Thriller",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Advertising man Roger Thornhill is mistaken for a spy, triggering a deadly cross-country chase.",
        "poster": "https://image.tmdb.org/t/p/w500/kNOFPQrel9YFCVzI0DF8FnCEpCw.jpg",
        "id": 1043,
        "runtime": "137 min"
    },
    {
        "title": "The Apartment",
        "year": 1960,
        "rating": 8.2,
        "genre": "Comedy",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "Bud Baxter is a minor clerk in a huge New York insurance company, until he discovers a quick way to climb the corporate ladder. He lends out his apartment to the executives as a place to take their mistresses. Although he often has to deal ",
        "poster": "https://image.tmdb.org/t/p/w500/hhSRt1KKfRT0yEhEtRW3qp31JFU.jpg",
        "id": 1044,
        "runtime": "126 min"
    },
    {
        "title": "The Thing",
        "year": 1982,
        "rating": 8.07,
        "genre": "Horror",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled"
        ],
        "description": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
        "poster": "https://image.tmdb.org/t/p/w500/ob1NaOSYDC4iBaFkTgIUecaMFGT.jpg",
        "id": 1045,
        "runtime": "109 min"
    },
    {
        "title": "Double Indemnity",
        "year": 1944,
        "rating": 8.083,
        "genre": "Crime",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "An insurance representative is seduced by a dissatisfied housewife into a scheme of insurance fraud and murder that arouses the suspicion of his colleague, a claims investigator.",
        "poster": "https://image.tmdb.org/t/p/w500/rVNYZZgfhwqVMMWlBmxOfWqnwCj.jpg",
        "id": 1046,
        "runtime": "107 min"
    },
    {
        "title": "Blade Runner",
        "year": 1982,
        "rating": 7.936,
        "genre": "Sci-Fi",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "thoughtful"
        ],
        "description": "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
        "poster": "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
        "id": 1047,
        "runtime": "118 min"
    },
    {
        "title": "The Sixth Sense",
        "year": 1999,
        "rating": 7.954,
        "genre": "Mystery",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "Following an unexpected tragedy, child psychologist Malcolm Crowe meets a nine year old boy named Cole Sear, who is hiding a dark secret.",
        "poster": "https://image.tmdb.org/t/p/w500/vOyfUXNFSnaTk7Vk5AjpsKTUWsu.jpg",
        "id": 1048,
        "runtime": "107 min"
    },
    {
        "title": "Aladdin",
        "year": 1992,
        "rating": 7.656,
        "genre": "Animation",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "In the boorish city of Agrabah, kind-hearted street urchin Aladdin and Princess Jasmine fall in love, although she can only marry a prince. He and power-hungry Grand Vizier Jafar vie for a magic lamp that can fulfill their wishes.",
        "poster": "https://image.tmdb.org/t/p/w500/eLFfl7vS8dkeG1hKp5mwbm37V83.jpg",
        "id": 1049,
        "runtime": "91 min"
    },
    {
        "title": "Groundhog Day",
        "year": 1993,
        "rating": 7.634,
        "genre": "Romance",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "A cynical TV weatherman, along with his idealistic producer and his sardonic cameraman, is sent to report on Groundhog Day in the small town of Punxsutawney, where he finds himself repeating the same day over and over.",
        "poster": "https://image.tmdb.org/t/p/w500/gCgt1WARPZaXnq523ySQEUKinCs.jpg",
        "id": 1050,
        "runtime": "101 min"
    },
    {
        "title": "Gimme Shelter",
        "year": 1970,
        "rating": 7.332,
        "genre": "Documentary",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "wonder"
        ],
        "description": "A detailed chronicle of the famous 1969 tour of the United States by the British rock band The Rolling Stones, which culminated with the disastrous and tragic concert held on December 6 at the Altamont Speedway Free Festival, an event of hi",
        "poster": "https://image.tmdb.org/t/p/w500/6Cem6KcIClKit3KhKYou4aXFxob.jpg",
        "id": 1051,
        "runtime": "92 min"
    },
    {
        "title": "GoodFellas",
        "year": 1990,
        "rating": 8.452,
        "genre": "Drama",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
        "poster": "https://image.tmdb.org/t/p/w500/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg",
        "id": 1052,
        "runtime": "145 min"
    },
    {
        "title": "Gladiator",
        "year": 2000,
        "rating": 8.229,
        "genre": "Action",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "After the death of Emperor Marcus Aurelius, his devious son takes power and demotes Maximus, one of Rome's most capable generals who Marcus preferred. Eventually, Maximus is forced to become a gladiator and battle to the death against other",
        "poster": "https://image.tmdb.org/t/p/w500/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg",
        "id": 1053,
        "runtime": "155 min"
    },
    {
        "title": "Who Framed Roger Rabbit",
        "year": 1988,
        "rating": 7.539,
        "genre": "Fantasy",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Toon star Roger is worried that his wife Jessica is playing pattycake with someone else, so the studio hires detective Eddie Valiant to snoop on her. But the stakes are quickly raised when Marvin Acme is found dead and Roger is the prime su",
        "poster": "https://image.tmdb.org/t/p/w500/lYfRc57Kx9VgLZ48iulu0HKnM15.jpg",
        "id": 1054,
        "runtime": "104 min"
    },
    {
        "title": "Star Wars",
        "year": 1977,
        "rating": 8.206,
        "genre": "Adventure",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to re",
        "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "id": 1055,
        "runtime": "121 min"
    },
    {
        "title": "Rope",
        "year": 1948,
        "rating": 7.931,
        "genre": "Thriller",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Two young men attempt to prove they committed the perfect murder by hosting a dinner party for the family of a classmate they just strangled to death.",
        "poster": "https://image.tmdb.org/t/p/w500/9ar6rxLDB8kagAnXZKn6h9smscr.jpg",
        "id": 1056,
        "runtime": "81 min"
    },
    {
        "title": "Singin' in the Rain",
        "year": 1952,
        "rating": 8.132,
        "genre": "Comedy",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "In 1927 Hollywood, a silent film star falls for a chorus girl just as he and his paranoid screen partner struggle to make the difficult transition to talking pictures.",
        "poster": "https://image.tmdb.org/t/p/w500/w03EiJVHP8Un77boQeE7hg9DVdU.jpg",
        "id": 1057,
        "runtime": "103 min"
    },
    {
        "title": "Jaws",
        "year": 1975,
        "rating": 7.683,
        "genre": "Horror",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled"
        ],
        "description": "When the seaside community of Amity finds itself under attack by a dangerous great white shark, the town's chief of police, a young marine biologist, and a grizzled shark hunter embark on a desperate quest to kill the beast before it strike",
        "poster": "https://image.tmdb.org/t/p/w500/lxM6kqilAdpdhqUl2biYp5frUxE.jpg",
        "id": 1058,
        "runtime": "124 min"
    },
    {
        "title": "Requiem for a Dream",
        "year": 2000,
        "rating": 8,
        "genre": "Crime",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "The drug-induced utopias of four Coney Island residents are shattered when their addictions run deep.",
        "poster": "https://image.tmdb.org/t/p/w500/9BTwsLaMVHOGFlmsSlx5QYCaXb.jpg",
        "id": 1059,
        "runtime": "102 min"
    },
    {
        "title": "Planet of the Apes",
        "year": 1968,
        "rating": 7.656,
        "genre": "Sci-Fi",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "thoughtful"
        ],
        "description": "Astronaut Taylor crash lands on a distant planet ruled by apes who use a primitive race of humans for experimentation and sport. Soon Taylor finds himself among the hunted, his life in the hands of a benevolent chimpanzee scientist.",
        "poster": "https://image.tmdb.org/t/p/w500/2r9iKnlSYEk4daQadsXfcjHfIjQ.jpg",
        "id": 1060,
        "runtime": "112 min"
    },
    {
        "title": "Rebecca",
        "year": 1940,
        "rating": 7.881,
        "genre": "Mystery",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "Story of a young woman who marries a fascinating widower only to find out that she must live in the shadow of his former wife, Rebecca, who died mysteriously several years earlier. The young wife must come to grips with the terrible secret ",
        "poster": "https://image.tmdb.org/t/p/w500/1qz3qUOHnVy7dL7M7G8jSErxE4b.jpg",
        "id": 1061,
        "runtime": "130 min"
    },
    {
        "title": "Toy Story 2",
        "year": 1999,
        "rating": 7.617,
        "genre": "Animation",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Andy heads off to Cowboy Camp, leaving his toys to their own devices. Things shift into high gear when an obsessive toy collector named Al McWhiggen, owner of Al's Toy Barn kidnaps Woody. Andy's toys mount a daring rescue mission, Buzz Ligh",
        "poster": "https://image.tmdb.org/t/p/w500/4rbcp3ng8n1MKHjpeqW0L7Fnpzz.jpg",
        "id": 1062,
        "runtime": "92 min"
    },
    {
        "title": "Cinderella Man",
        "year": 2005,
        "rating": 7.58,
        "genre": "Romance",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "The true story of boxer Jim Braddock who, following his retirement in the 1930s, makes a surprise comeback in order to lift his family out of poverty.",
        "poster": "https://image.tmdb.org/t/p/w500/wkeOjIcpuqLMW4GnVowlM9VI0JE.jpg",
        "id": 1063,
        "runtime": "144 min"
    },
    {
        "title": "A Brief History of Time",
        "year": 1991,
        "rating": 7.234,
        "genre": "Documentary",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "wonder"
        ],
        "description": "This shows physicist Stephen Hawking's life as he deals with the ALS that renders him immobile and unable to speak without the use of a computer. Hawking's friends, family, classmates, and peers are interviewed not only about his theories b",
        "poster": "https://image.tmdb.org/t/p/w500/A3sVrDThz8Xthfq2EglWoypKEfU.jpg",
        "id": 1064,
        "runtime": "80 min"
    },
    {
        "title": "Fight Club",
        "year": 1999,
        "rating": 8.438,
        "genre": "Drama",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the wa",
        "poster": "https://image.tmdb.org/t/p/w500/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
        "id": 1065,
        "runtime": "139 min"
    },
    {
        "title": "Scarface",
        "year": 1983,
        "rating": 8.155,
        "genre": "Action",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in",
        "poster": "https://image.tmdb.org/t/p/w500/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
        "id": 1066,
        "runtime": "170 min"
    },
    {
        "title": "Willy Wonka & the Chocolate Factory",
        "year": 1971,
        "rating": 7.5,
        "genre": "Fantasy",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "When eccentric candy man Willy Wonka promises a lifetime supply of sweets and a tour of his chocolate factory to five lucky kids, penniless Charlie Bucket seeks the golden ticket that will make him a winner.",
        "poster": "https://image.tmdb.org/t/p/w500/vmpsZkrs4Uvkp9r1atL8B3frA63.jpg",
        "id": 1067,
        "runtime": "100 min"
    },
    {
        "title": "Jurassic Park",
        "year": 1993,
        "rating": 7.975,
        "genre": "Adventure",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious invest",
        "poster": "https://image.tmdb.org/t/p/w500/b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg",
        "id": 1068,
        "runtime": "127 min"
    },
    {
        "title": "Fail Safe",
        "year": 1964,
        "rating": 7.833,
        "genre": "Thriller",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Because of a technical defect an American bomber team mistakenly orders the destruction of Moscow. The President of the United States has but little time to prevent an atomic catastrophe from occurring.",
        "poster": "https://image.tmdb.org/t/p/w500/qrsj5hort5xkLOKw9NyraGMnlVP.jpg",
        "id": 1069,
        "runtime": "112 min"
    },
    {
        "title": "Some Like It Hot",
        "year": 1959,
        "rating": 8.1,
        "genre": "Comedy",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "In Prohibition-era Chicago, musicians Joe and Jerry witness a mob hit, and flee the state in an all-female band disguised as Josephine and Daphne, but further complications set in.",
        "poster": "https://image.tmdb.org/t/p/w500/hVIKyTK13AvOGv7ICmJjK44DTzp.jpg",
        "id": 1070,
        "runtime": "123 min"
    },
    {
        "title": "Halloween",
        "year": 1978,
        "rating": 7.561,
        "genre": "Horror",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled"
        ],
        "description": "Fifteen years after murdering his sister on Halloween Night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.",
        "poster": "https://image.tmdb.org/t/p/w500/wijlZ3HaYMvlDTPqJoTCWKFkCPU.jpg",
        "id": 1071,
        "runtime": "91 min"
    },
    {
        "title": "Casino",
        "year": 1995,
        "rating": 7.997,
        "genre": "Crime",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "In Las Vegas, two best friends--a casino executive and a Mafia enforcer--compete for a gambling empire and a fast-living, fast-loving socialite.",
        "poster": "https://image.tmdb.org/t/p/w500/gziIkUSnYuj9ChCi8qOu2ZunpSC.jpg",
        "id": 1072,
        "runtime": "179 min"
    },
    {
        "title": "Twelve Monkeys",
        "year": 1995,
        "rating": 7.611,
        "genre": "Sci-Fi",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "thoughtful"
        ],
        "description": "In the year 2035, convict James Cole reluctantly volunteers to be sent back in time to discover the origin of a deadly virus that wiped out nearly all of the earth's population and forced the survivors into underground communities. But when",
        "poster": "https://image.tmdb.org/t/p/w500/gt3iyguaCIw8DpQZI1LIN5TohM2.jpg",
        "id": 1073,
        "runtime": "129 min"
    },
    {
        "title": "The Maltese Falcon",
        "year": 1941,
        "rating": 7.698,
        "genre": "Mystery",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "A private detective takes on a case that involves him with three eccentric criminals, a beautiful liar, and their quest for a priceless statuette.",
        "poster": "https://image.tmdb.org/t/p/w500/bf4o6Uzw5wqLjdKwRuiDrN1xyvl.jpg",
        "id": 1074,
        "runtime": "100 min"
    },
    {
        "title": "Ice Age",
        "year": 2002,
        "rating": 7.38,
        "genre": "Animation",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Manny the mammoth, Sid the loquacious sloth, and Diego the sabre-toothed tiger go on a comical quest to return a human baby back to his father, across a world on the brink of an ice age.",
        "poster": "https://image.tmdb.org/t/p/w500/gLhHHZUzeseRXShoDyC4VqLgsNv.jpg",
        "id": 1075,
        "runtime": "81 min"
    },
    {
        "title": "Pretty Woman",
        "year": 1990,
        "rating": 7.446,
        "genre": "Romance",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "Vivian is a carefree, streetwise diamond in the rough when she meets sophisticated billionaire Edward in a chance encounter that turns into a week-long business arrangement. But Vivian's energetic spirit challenges Edward's no-nonsense appr",
        "poster": "https://image.tmdb.org/t/p/w500/hVHUfT801LQATGd26VPzhorIYza.jpg",
        "id": 1076,
        "runtime": "120 min"
    },
    {
        "title": "Daybreak Express",
        "year": 1957,
        "rating": 7.198,
        "genre": "Documentary",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "wonder"
        ],
        "description": "Set to a classic Duke Ellington recording \"Daybreak Express\", this is a five-minute short of the soon-to-be-demolished Third Avenue elevated subway station in New York City.",
        "poster": "https://image.tmdb.org/t/p/w500/1rmVFYVga9bAgDc13sLPIbdA4Kp.jpg",
        "id": 1077,
        "runtime": "5 min"
    },
    {
        "title": "One Flew Over the Cuckoo's Nest",
        "year": 1975,
        "rating": 8.409,
        "genre": "Drama",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "A petty criminal fakes insanity to serve his sentence in a mental ward rather than prison. He soon finds himself as a leader to the other patients—and an enemy to the cruel, domineering nurse who runs the ward.",
        "poster": "https://image.tmdb.org/t/p/w500/kjWsMh72V6d8KRLV4EOoSJLT1H7.jpg",
        "id": 1078,
        "runtime": "135 min"
    },
    {
        "title": "Sherlock Jr.",
        "year": 1924,
        "rating": 8.042,
        "genre": "Action",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "A film projectionist longs to be a detective, and puts his meager skills to work when he is framed by a rival for stealing his girlfriend's father's pocketwatch.",
        "poster": "https://image.tmdb.org/t/p/w500/1G9r3rqtbFAQuyWKOZm4Y5J5s7Q.jpg",
        "id": 1079,
        "runtime": "45 min"
    },
    {
        "title": "The Illusionist",
        "year": 2006,
        "rating": 7.3,
        "genre": "Fantasy",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "With his eye on a lovely aristocrat, a gifted illusionist named Eisenheim uses his powers to win her away from her betrothed, a crown prince. But Eisenheim's scheme creates tumult within the monarchy and ignites the suspicion of a dogged in",
        "poster": "https://image.tmdb.org/t/p/w500/1O9jUvqkHaGBMVRyOJz1AlkmALW.jpg",
        "id": 1080,
        "runtime": "110 min"
    },
    {
        "title": "The Gold Rush",
        "year": 1925,
        "rating": 7.968,
        "genre": "Adventure",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "A gold prospector in Alaska struggles to survive the elements and win the heart of a dance hall girl.",
        "poster": "https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg",
        "id": 1081,
        "runtime": "95 min"
    },
    {
        "title": "Mulholland Drive",
        "year": 2001,
        "rating": 7.8,
        "genre": "Thriller",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Blonde Betty Elms has only just arrived in Hollywood to become a movie star when she meets an enigmatic brunette with amnesia. Meanwhile, as the two set off to solve the second woman's identity, filmmaker Adam Kesher runs into ominous troub",
        "poster": "https://image.tmdb.org/t/p/w500/x7A59t6ySylr1L7aubOQEA480vM.jpg",
        "id": 1082,
        "runtime": "147 min"
    },
    {
        "title": "The General",
        "year": 1926,
        "rating": 7.9,
        "genre": "Comedy",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "During America’s Civil War, Union spies steal engineer Johnny Gray's beloved locomotive, 'The General'—with Johnnie's lady love aboard an attached boxcar—and he single-handedly must do all in his power to both get The General back and to re",
        "poster": "https://image.tmdb.org/t/p/w500/nIp4gIXogCjfB1QABNsWwa9gSca.jpg",
        "id": 1083,
        "runtime": "79 min"
    },
    {
        "title": "Evil Dead II",
        "year": 1987,
        "rating": 7.541,
        "genre": "Horror",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled"
        ],
        "description": "Ash Williams and his girlfriend Linda find a log cabin in the woods with a voice recording from an archeologist who had recorded himself reciting ancient chants from \"The Book of the Dead.\" As they play the recording an evil power is unleas",
        "poster": "https://image.tmdb.org/t/p/w500/4zqCKJVHUolGs6C5AZwAZqLWixW.jpg",
        "id": 1084,
        "runtime": "84 min"
    },
    {
        "title": "Heat",
        "year": 1995,
        "rating": 7.941,
        "genre": "Crime",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Obsessive master thief Neil McCauley leads a top-notch crew on various daring heists throughout Los Angeles while determined detective Vincent Hanna pursues him without rest. Each man recognizes and respects the ability and the dedication o",
        "poster": "https://image.tmdb.org/t/p/w500/umSVjVdbVwtx5ryCA2QXL44Durm.jpg",
        "id": 1085,
        "runtime": "170 min"
    },
    {
        "title": "Predator",
        "year": 1987,
        "rating": 7.573,
        "genre": "Sci-Fi",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "thoughtful"
        ],
        "description": "A team of elite commandos on a secret mission in a Central American jungle come to find themselves hunted by an extraterrestrial warrior.",
        "poster": "https://image.tmdb.org/t/p/w500/aN3cdjIK70KGmD84et8MMblU87Q.jpg",
        "id": 1086,
        "runtime": "107 min"
    },
    {
        "title": "Blue Velvet",
        "year": 1986,
        "rating": 7.606,
        "genre": "Mystery",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "The discovery of a severed human ear found in a field leads a young man on an investigation related to a beautiful, mysterious nightclub singer and a group of psychopathic criminals who have kidnapped her child.",
        "poster": "https://image.tmdb.org/t/p/w500/6v1zYh2FKOYVddY5pCQhd4PO9uX.jpg",
        "id": 1087,
        "runtime": "120 min"
    },
    {
        "title": "Fantasia",
        "year": 1940,
        "rating": 7.348,
        "genre": "Animation",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Walt Disney's timeless masterpiece is an extravaganza of sight and sound! See the music come to life, hear the pictures burst into song and experience the excitement that is Fantasia over and over again.",
        "poster": "https://image.tmdb.org/t/p/w500/5m9njnidjR0syG2gpVPVgcEMB2X.jpg",
        "id": 1088,
        "runtime": "124 min"
    },
    {
        "title": "Grease",
        "year": 1978,
        "rating": 7.367,
        "genre": "Romance",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "Australian good girl Sandy and greaser Danny fell in love over the summer. But when they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance despite their eccentric friends?",
        "poster": "https://image.tmdb.org/t/p/w500/2rM7fQKpb7cs1Iq7IBqub9LFDzJ.jpg",
        "id": 1089,
        "runtime": "110 min"
    },
    {
        "title": "The Endless Summer",
        "year": 1966,
        "rating": 7.163,
        "genre": "Documentary",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "wonder"
        ],
        "description": "Bruce Brown's The Endless Summer is one of the first and most influential surf movies of all time. The film documents American surfers Mike Hynson and Robert August as they travel the world during California’s winter (which, back in 1965 wa",
        "poster": "https://image.tmdb.org/t/p/w500/jDdntrv2j64KB0Zpr63cko4Mebt.jpg",
        "id": 1090,
        "runtime": "91 min"
    },
    {
        "title": "American History X",
        "year": 1998,
        "rating": 8.327,
        "genre": "Drama",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "Derek Vineyard is paroled after serving 3 years in prison for killing two African-American men. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white su",
        "poster": "https://image.tmdb.org/t/p/w500/x2drgoXYZ8484lqyDj7L1CEVR4T.jpg",
        "id": 1091,
        "runtime": "119 min"
    },
    {
        "title": "Kill Bill: Vol. 1",
        "year": 2003,
        "rating": 7.972,
        "genre": "Action",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.",
        "poster": "https://image.tmdb.org/t/p/w500/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
        "id": 1092,
        "runtime": "111 min"
    },
    {
        "title": "Army of Darkness",
        "year": 1992,
        "rating": 7.258,
        "genre": "Fantasy",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Ash, a handsome, shotgun-toting, chainsaw-armed department store clerk, is time warped backwards into England's Dark Ages, where he romances a beauty and faces legions of the undead.",
        "poster": "https://image.tmdb.org/t/p/w500/xsgTuAtR2zSH8Umg3jWZcZjlDpe.jpg",
        "id": 1093,
        "runtime": "81 min"
    },
    {
        "title": "Raiders of the Lost Ark",
        "year": 1981,
        "rating": 7.926,
        "genre": "Adventure",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.",
        "poster": "https://image.tmdb.org/t/p/w500/ceG9VzoRAVGwivFU403Wc3AHRys.jpg",
        "id": 1094,
        "runtime": "115 min"
    },
    {
        "title": "Mystic River",
        "year": 2003,
        "rating": 7.746,
        "genre": "Thriller",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "The lives of three men who were childhood friends are shattered when one of them suffers a family tragedy.",
        "poster": "https://image.tmdb.org/t/p/w500/hCHVDbo6XJGj3r2i4hVjKhE0GKF.jpg",
        "id": 1095,
        "runtime": "138 min"
    },
    {
        "title": "The Big Lebowski",
        "year": 1998,
        "rating": 7.835,
        "genre": "Comedy",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "Jeffrey 'The Dude' Lebowski, a Los Angeles slacker who only wants to bowl and drink White Russians, is mistaken for another Jeffrey Lebowski, a wheelchair-bound millionaire, and finds himself dragged into a strange series of events involvin",
        "poster": "https://image.tmdb.org/t/p/w500/3bv6WAp6BSxxYvB5ozKFUYuRA8C.jpg",
        "id": 1096,
        "runtime": "117 min"
    },
    {
        "title": "The Birds",
        "year": 1963,
        "rating": 7.513,
        "genre": "Horror",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled"
        ],
        "description": "Thousands of birds flock into a seaside town and terrorize the residents in a series of deadly attacks.",
        "poster": "https://image.tmdb.org/t/p/w500/eClg8QPg8mwB6INIC4pyR5pAbDr.jpg",
        "id": 1097,
        "runtime": "119 min"
    },
    {
        "title": "Freedom Writers",
        "year": 2007,
        "rating": 7.929,
        "genre": "Crime",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A young teacher inspires her class of at-risk students to learn tolerance, apply themselves, and pursue education beyond high school.",
        "poster": "https://image.tmdb.org/t/p/w500/81AdeUQT99N0xPg3j6RVh0YGOTk.jpg",
        "id": 1098,
        "runtime": "123 min"
    },
    {
        "title": "Gattaca",
        "year": 1997,
        "rating": 7.568,
        "genre": "Sci-Fi",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "thoughtful"
        ],
        "description": "Vincent is an all-too-human man who dares to defy a system obsessed with genetic perfection. He is an \"In-Valid\" who assumes the identity of a member of the genetic elite to pursue his goal of traveling into space with the Gattaca Aerospace",
        "poster": "https://image.tmdb.org/t/p/w500/eSKr5Fl1MEC7zpAXaLWBWSBjgJq.jpg",
        "id": 1099,
        "runtime": "107 min"
    },
    {
        "title": "The Big Sleep",
        "year": 1946,
        "rating": 7.593,
        "genre": "Mystery",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "Private Investigator Philip Marlowe is hired by wealthy General Sternwood regarding a matter involving his youngest daughter Carmen. Before the complex case is over, Marlowe sees murder, blackmail, deception, and what might be love.",
        "poster": "https://image.tmdb.org/t/p/w500/lraHo9D8c0YWfxsKqT5P5sVqMKN.jpg",
        "id": 1100,
        "runtime": "114 min"
    },
    {
        "title": "Shrek 2",
        "year": 2004,
        "rating": 7.326,
        "genre": "Animation",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Happily ever after never seemed so far far away when a trip to meet the in-laws turns into a hilariously twisted adventure for Shrek and Fiona. With the help of ever-faithful Donkey, Shrek takes on the potion-brewing Fairy Godmother, pompou",
        "poster": "https://image.tmdb.org/t/p/w500/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg",
        "id": 1101,
        "runtime": "92 min"
    },
    {
        "title": "The African Queen",
        "year": 1952,
        "rating": 7.342,
        "genre": "Romance",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "At the start of the First World War, in the middle of Africa’s nowhere, a gin soaked riverboat captain is persuaded by a strong-willed missionary to go down river and face-off a German warship.",
        "poster": "https://image.tmdb.org/t/p/w500/2Ypg0KhQfFYWILelvHGtSHHR0dk.jpg",
        "id": 1102,
        "runtime": "105 min"
    },
    {
        "title": "Nanook of the North",
        "year": 1922,
        "rating": 7.085,
        "genre": "Documentary",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "wonder"
        ],
        "description": "This pioneering documentary film depicts the lives of the indigenous Inuit people of Canada's northern Quebec region. Although the production contains some fictional elements, it vividly shows how its resourceful subjects survive in such a ",
        "poster": "https://image.tmdb.org/t/p/w500/9WAboi1QbKu41WkyGxQVNpXwwxx.jpg",
        "id": 1103,
        "runtime": "79 min"
    },
    {
        "title": "Dead Poets Society",
        "year": 1989,
        "rating": 8.299,
        "genre": "Drama",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "At an elite, old-fashioned boarding school in New England, a passionate English teacher inspires his students to rebel against convention and seize the potential of every day, courting the disdain of the stern headmaster.",
        "poster": "https://image.tmdb.org/t/p/w500/tNvKkSnnn4Z6RCBThyK1gfCSSvv.jpg",
        "id": 1104,
        "runtime": "129 min"
    },
    {
        "title": "Aliens",
        "year": 1986,
        "rating": 7.965,
        "genre": "Action",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "Ripley, the sole survivor of the Nostromo's deadly encounter with the monstrous Alien, returns to Earth after drifting through space in hypersleep for 57 years. Although her story is initially met with skepticism, she agrees to accompany a ",
        "poster": "https://image.tmdb.org/t/p/w500/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg",
        "id": 1105,
        "runtime": "137 min"
    },
    {
        "title": "Ghost",
        "year": 1990,
        "rating": 7.239,
        "genre": "Fantasy",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "After a young man is murdered, his spirit stays behind to warn his lover of impending danger, with the help of a reluctant psychic.",
        "poster": "https://image.tmdb.org/t/p/w500/w9RaPHov8oM5cnzeE27isnFMsvS.jpg",
        "id": 1106,
        "runtime": "127 min"
    },
    {
        "title": "Unforgiven",
        "year": 1992,
        "rating": 7.914,
        "genre": "Adventure",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "William Munny is a retired, once-ruthless killer turned gentle widower and hog farmer. To help support his two motherless children, he accepts one last bounty-hunter mission to find the men who brutalized a prostitute. Joined by his former ",
        "poster": "https://image.tmdb.org/t/p/w500/54roTwbX9fltg85zjsmrooXAs12.jpg",
        "id": 1107,
        "runtime": "130 min"
    },
    {
        "title": "Sleuth",
        "year": 1972,
        "rating": 7.696,
        "genre": "Thriller",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A man who loves games and theatre invites his wife's lover to meet, setting up a battle of wits with potentially deadly results.",
        "poster": "https://image.tmdb.org/t/p/w500/jAREYLUnYGwPjbQr0vs1s38QLkH.jpg",
        "id": 1108,
        "runtime": "138 min"
    },
    {
        "title": "To Be or Not to Be",
        "year": 1942,
        "rating": 7.81,
        "genre": "Comedy",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "During the Nazi occupation of Poland, an acting troupe becomes embroiled in a Polish soldier's efforts to track down a German spy.",
        "poster": "https://image.tmdb.org/t/p/w500/dDQRpEoyjHT4fzw9cNklIvZuXYg.jpg",
        "id": 1109,
        "runtime": "99 min"
    },
    {
        "title": "Bride of Frankenstein",
        "year": 1935,
        "rating": 7.508,
        "genre": "Horror",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled"
        ],
        "description": "Dr. Frankenstein and his monster both turn out to be alive after being attacked by an angry mob. The now-chastened scientist attempts to escape his past, but a former mentor forces him to assist with the creation of a new creature.",
        "poster": "https://image.tmdb.org/t/p/w500/5241zUwe7rC17MNc2QpCBKKdp1N.jpg",
        "id": 1110,
        "runtime": "75 min"
    },
    {
        "title": "Chinatown",
        "year": 1974,
        "rating": 7.906,
        "genre": "Crime",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Private eye Jake Gittes lives off of the murky moral climate of sunbaked, pre-World War II Southern California. Hired by a beautiful socialite to investigate her husband's extra-marital affair, Gittes is swept into a maelstrom of double dea",
        "poster": "https://image.tmdb.org/t/p/w500/kZRSP3FmOcq0xnBulqpUQngJUXY.jpg",
        "id": 1111,
        "runtime": "130 min"
    },
    {
        "title": "The Day the Earth Stood Still",
        "year": 1951,
        "rating": 7.447,
        "genre": "Sci-Fi",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "thoughtful"
        ],
        "description": "An alien and a robot land on Earth after World War II and tell mankind to be peaceful or face destruction.",
        "poster": "https://image.tmdb.org/t/p/w500/eslDNzf0LF1m9GsgUXlmyfTcC6Y.jpg",
        "id": 1112,
        "runtime": "92 min"
    },
    {
        "title": "To Catch a Thief",
        "year": 1955,
        "rating": 7.267,
        "genre": "Mystery",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "When a string of jewel robberies hits the French Riviera, suspicion falls on retired thief John “The Cat” Robie. To clear his name, he sets out to trap the copycat himself—entangling a wealthy widow and her beguiling daughter in a seductive",
        "poster": "https://image.tmdb.org/t/p/w500/cbMRkBGBgo3aLJK2M4MyicvkPLQ.jpg",
        "id": 1113,
        "runtime": "106 min"
    },
    {
        "title": "Cars",
        "year": 2006,
        "rating": 7.04,
        "genre": "Animation",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the ",
        "poster": "https://image.tmdb.org/t/p/w500/2Touk3m5gzsqr1VsvxypdyHY5ci.jpg",
        "id": 1114,
        "runtime": "117 min"
    },
    {
        "title": "Snow Cake",
        "year": 2006,
        "rating": 7.119,
        "genre": "Romance",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "A drama focused on the friendship between a high-functioning autistic woman and a man who is traumatized after a fatal car accident.",
        "poster": "https://image.tmdb.org/t/p/w500/dzKNKUqaDu9JCUmjhuoDd8KQBBs.jpg",
        "id": 1115,
        "runtime": "112 min"
    },
    {
        "title": "Dogtown and Z-Boys",
        "year": 2002,
        "rating": 7.027,
        "genre": "Documentary",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "wonder"
        ],
        "description": "This award-winning, thrilling story is about a group of discarded kids who revolutionized skateboarding and shaped the attitude and culture of modern day extreme sports. Featuring old skool skating footage, exclusive interviews and a bliste",
        "poster": "https://image.tmdb.org/t/p/w500/eb02dpopuAhuThf7nXAAwKtAF88.jpg",
        "id": 1116,
        "runtime": "90 min"
    },
    {
        "title": "It's a Wonderful Life",
        "year": 1946,
        "rating": 8.278,
        "genre": "Drama",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "George Bailey has spent his entire life giving to the people of Bedford Falls.  All that prevents rich skinflint Mr. Potter from taking over the entire town is George's modest building and loan company.  But on Christmas Eve the business's ",
        "poster": "https://image.tmdb.org/t/p/w500/bSqt9rhDZx1Q7UZ86dBPKdNomp2.jpg",
        "id": 1117,
        "runtime": "131 min"
    },
    {
        "title": "Braveheart",
        "year": 1995,
        "rating": 7.945,
        "genre": "Action",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "Enraged at the slaughter of Murron, his new bride and childhood love, Scottish warrior William Wallace slays a platoon of the local English lord's soldiers. This leads the village to revolt and, eventually, the entire country to rise up aga",
        "poster": "https://image.tmdb.org/t/p/w500/or1gBugydmjToAEq7OZY0owwFk.jpg",
        "id": 1118,
        "runtime": "178 min"
    },
    {
        "title": "Constantine",
        "year": 2005,
        "rating": 7.187,
        "genre": "Fantasy",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "John Constantine has literally been to Hell and back. When he teams up with a policewoman to solve the mysterious suicide of her twin sister, their investigation takes them through the world of demons and angels that exists beneath the land",
        "poster": "https://image.tmdb.org/t/p/w500/vPYgvd2MwHlxTamAOjwVQp4qs1W.jpg",
        "id": 1119,
        "runtime": "121 min"
    },
    {
        "title": "Indiana Jones and the Last Crusade",
        "year": 1989,
        "rating": 7.9,
        "genre": "Adventure",
        "language": "English",
        "region": "United States",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "In 1938, an art collector appeals to eminent archaeologist Dr. Indiana Jones to embark on a search for the Holy Grail. Indy learns that a medieval historian has vanished while searching for it, and the missing man is his own father, Dr. Hen",
        "poster": "https://image.tmdb.org/t/p/w500/sizg1AU8f8JDZX4QIgE4pjUMBvx.jpg",
        "id": 1120,
        "runtime": "127 min"
    },
    {
        "title": "The Manchurian Candidate",
        "year": 1962,
        "rating": 7.509,
        "genre": "Thriller",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Near the end of the Korean War, a platoon of U.S. soldiers is captured by communists and brainwashed. Following the war, the platoon is returned home, and Sergeant Raymond Shaw is lauded as a hero by the rest of his platoon. However, the pl",
        "poster": "https://image.tmdb.org/t/p/w500/2xQ856kd9hw6bB3OnusGyTvvkwB.jpg",
        "id": 1121,
        "runtime": "126 min"
    },
    {
        "title": "Annie Hall",
        "year": 1977,
        "rating": 7.724,
        "genre": "Comedy",
        "language": "English",
        "region": "United States",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "New York comedian Alvy Singer falls in love with the ditsy Annie Hall.",
        "poster": "https://image.tmdb.org/t/p/w500/dEtjPywhDbAXYjoFfhBC4U9unU7.jpg",
        "id": 1122,
        "runtime": "93 min"
    },
    {
        "title": "Dawn of the Dead",
        "year": 1978,
        "rating": 7.489,
        "genre": "Horror",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled"
        ],
        "description": "During an ever-growing epidemic of zombies that have risen from the dead, two Philadelphia SWAT team members, a traffic reporter, and his television-executive girlfriend seek refuge in a secluded shopping mall.",
        "poster": "https://image.tmdb.org/t/p/w500/70MY8H0bLMvXf8ED2SgVMPhDVVM.jpg",
        "id": 1123,
        "runtime": "127 min"
    },
    {
        "title": "On the Waterfront",
        "year": 1954,
        "rating": 7.854,
        "genre": "Crime",
        "language": "English",
        "region": "United States",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A prizefighter-turned-longshoreman with a conscience goes up against labor leaders to expose corruption, extortion, and murder among the union ranks.",
        "poster": "https://image.tmdb.org/t/p/w500/v1RtJ1qR4v9nrnfoBVBl6hjTW9.jpg",
        "id": 1124,
        "runtime": "108 min"
    },
    {
        "title": "Family of Thakurganj",
        "year": 2019,
        "rating": 9.4,
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "The film is based on small town of North India. Film's story is about confrontation of love and thoughts. Along with entertainment.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/9/99/Family_of_Thakurganj.jpg",
        "runtime": "127 min",
        "id": 1125
    },
    {
        "title": "Saand Ki Aankh",
        "year": 2019,
        "rating": 8.9,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "Both over the age of 60  Chandro Tomar and Prakashi Tomar inspire other women in India when they demonstrate their expert sharpshooting skills.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Saand_Ki_Aankh_poster.jpg/250px-Saand_Ki_Aankh_poster.jpg",
        "runtime": "146 min",
        "id": 1126
    },
    {
        "title": "Ghost (2019 film)",
        "year": 2019,
        "rating": 8.7,
        "genre": "Horror",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled"
        ],
        "description": "The story of the film follows Karan Khanna  a politician of Indian origin in the United Kingdom  who is accused of killing his wife. He tells his lawyer that a spirit committed the murder and should be tried.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Ghost_Film_Poster.jpg/250px-Ghost_Film_Poster.jpg",
        "runtime": "130 min",
        "id": 1127
    },
    {
        "title": "Pushpaka Vimana (1987 film)",
        "year": 1987,
        "rating": 8.6,
        "genre": "Comedy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "A silent movie about an unemployed young man.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Pushpaka_Vimana_1987_Film_Poster.jpg/250px-Pushpaka_Vimana_1987_Film_Poster.jpg",
        "runtime": "125 min",
        "id": 1128
    },
    {
        "title": "Sachin: A Billion Dreams",
        "year": 2017,
        "rating": 8.6,
        "genre": "Documentary",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "wonder"
        ],
        "description": "A tale of a small boy with dreams and his journey to becoming the God of Cricket and the most celebrated sportsperson in his country.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Sachin_A_Billion_Dreams_Poster.jpg/250px-Sachin_A_Billion_Dreams_Poster.jpg",
        "runtime": "138 min",
        "id": 1129
    },
    {
        "title": "Andhadhun",
        "year": 2018,
        "rating": 8.4,
        "genre": "Crime",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A series of mysterious events changes the life of a blind pianist  who must now report a crime that he should technically know nothing of.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Andhadhun_poster.jpg/250px-Andhadhun_poster.jpg",
        "runtime": "139 min",
        "id": 1130
    },
    {
        "title": "Kahaani",
        "year": 2012,
        "rating": 8.1,
        "genre": "Mystery",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "A pregnant woman's search for her missing husband takes her from London to Kolkata  but everyone she questions denies having ever met him.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/KahaaniPoster.jpg/250px-KahaaniPoster.jpg",
        "runtime": "122 min",
        "id": 1131
    },
    {
        "title": "Lagaan",
        "year": 2001,
        "rating": 8.1,
        "genre": "Adventure",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Lagaan.jpg/250px-Lagaan.jpg",
        "runtime": "224 min",
        "id": 1132
    },
    {
        "title": "Madhumati",
        "year": 1958,
        "rating": 8.1,
        "genre": "Fantasy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "While driving his car on a rainy night  Anand's car breaks down  and he goes to seek shelter in a nearby house. He is let into the house by the servant  and he is permitted to stay until ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Madhumati.jpg/250px-Madhumati.jpg",
        "runtime": "110 min",
        "id": 1133
    },
    {
        "title": "Mausam (1975 film)",
        "year": 1975,
        "rating": 8.1,
        "genre": "Romance",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "A medical student  Amarnath meets and falls in love with the daughter of a herbal medicine healer  Chanda while preparing for his exams in Darjeeling. He returns to Calcutta to sit his ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Mausam1975.jpg/250px-Mausam1975.jpg",
        "runtime": "156 min",
        "id": 1134
    },
    {
        "title": "Marmayogi",
        "year": 1951,
        "rating": 7.4,
        "genre": "Thriller",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Urvasi (Anjali Devi)  is the young mistress of a king (Serukalathur Sama). With the help of her own lover (S. A. Natarajan)  she pushes the king off a boat and usurps his powers. Urvasi ...",
        "poster": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Marmayogi1951.jpg/250px-Marmayogi1951.jpg",
        "runtime": "175 min",
        "id": 1135
    },
    {
        "title": "Hanuman (2005 film)",
        "year": 2005,
        "rating": 7.3,
        "genre": "Animation",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "When Hanuman was born to Anjani a female Apsara and Kesari  by the blessings of Vayu-Dev  the Wind God. Hanuman  who is the 11th rudra avatar of supreme being GOD Shiva himself. He was ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Hanumanfilm.jpg/250px-Hanumanfilm.jpg",
        "runtime": "89 min",
        "id": 1136
    },
    {
        "title": "Aalaap (film)",
        "year": 2012,
        "rating": 5.8,
        "genre": "Sci-Fi",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "thoughtful"
        ],
        "description": "Artdirector Md asdulla khan",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/AALAAP.jpg/250px-AALAAP.jpg",
        "runtime": "116 min",
        "id": 1137
    },
    {
        "title": "Ramayana: The Legend of Prince Rama",
        "year": 1992,
        "rating": 8.7,
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "An anime adaptation of the Hindu myth the Ramayana  where the avatar Sri Ram combats the wicked king Ravana.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Ramayana%2C_The_Legend_of_Prince_Rama.jpg/250px-Ramayana%2C_The_Legend_of_Prince_Rama.jpg",
        "runtime": "170 min",
        "id": 1138
    },
    {
        "title": "Anand (1971 film)",
        "year": 1971,
        "rating": 8.8,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "The story of a terminally ill man who wishes to live life to the full before the inevitable occurs  as told by his best friend.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Anand_film.jpg/250px-Anand_film.jpg",
        "runtime": "122 min",
        "id": 1139
    },
    {
        "title": "Raat (film)",
        "year": 1992,
        "rating": 7.1,
        "genre": "Horror",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled"
        ],
        "description": "Mini shifts to her new house along with her parents Mr and Mrs Shrma and nephew Bunty.Bunty finds a cat in the backyard of the house and gets attracted to it but the cat soon dies when it ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/0/03/Raat.jpg",
        "runtime": "127 min",
        "id": 1140
    },
    {
        "title": "3 Idiots",
        "year": 2009,
        "rating": 8.4,
        "genre": "Comedy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently  even as the rest of the world called them \"idiots\".",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/3_idiots_poster.jpg/250px-3_idiots_poster.jpg",
        "runtime": "170 min",
        "id": 1141
    },
    {
        "title": "Gulabi Gang (film)",
        "year": 2012,
        "rating": 7.5,
        "genre": "Documentary",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "wonder"
        ],
        "description": "In Bundelkhand  India  a revolution is in the making among the poorest of the poor  as the fiery women of the Gulabi Gang empower themselves and take up the fight against gender violence  caste oppression and widespread corruption.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Gulabi_Gang_Documentary_Film_Poster.jpg/250px-Gulabi_Gang_Documentary_Film_Poster.jpg",
        "runtime": "96 min",
        "id": 1142
    },
    {
        "title": "Section 375",
        "year": 2019,
        "rating": 8.4,
        "genre": "Crime",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A celebrated Bollywood director Rohan Khurana stands accused by a female member of his crew  Anjali Dangle of having raped her at his residence.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Section_375_poster.jpg/250px-Section_375_poster.jpg",
        "runtime": "124 min",
        "id": 1143
    },
    {
        "title": "Kaun?",
        "year": 1999,
        "rating": 7.8,
        "genre": "Mystery",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "While alone in the house  a woman hears news of serial killer on the loose. And then a stranger rings the doorbell...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/d/d9/Kaun_poster.jpg",
        "runtime": "90 min",
        "id": 1144
    },
    {
        "title": "Manjhi – The Mountain Man",
        "year": 2015,
        "rating": 8,
        "genre": "Adventure",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "Using only a hammer and a chisel  a man spends twenty-two years carving a road through a treacherous mountain.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Manjhi_The_Mountain_Man_-_Poster.jpg/250px-Manjhi_The_Mountain_Man_-_Poster.jpg",
        "runtime": "120 min",
        "id": 1145
    },
    {
        "title": "Khamoshi (1970 film)",
        "year": 1970,
        "rating": 7.8,
        "genre": "Fantasy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "khamoshi is an intriguing tale of a female nurse trying to maintain a balance between her professional life and her emotions who falls victim to the natural feeling of love and compassion when a person takes care of another person.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Khamoshi%2C_1969_film.jpg/250px-Khamoshi%2C_1969_film.jpg",
        "runtime": "127 min",
        "id": 1146
    },
    {
        "title": "Kaagaz Ke Phool",
        "year": 1959,
        "rating": 8,
        "genre": "Romance",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "Suresh Sinha  a famous director  discovers star potential in Shanti  a woman he stumbled into one rainy evening  and casts her as the lead in a film. In a twist of fate  Shanti becomes a superstar and Suresh faces a decline in his career.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Kaagaz_Ke_Phool59.jpg/250px-Kaagaz_Ke_Phool59.jpg",
        "runtime": "148 min",
        "id": 1147
    },
    {
        "title": "Ranchi Diaries",
        "year": 2017,
        "rating": 7.4,
        "genre": "Thriller",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "An aspiring model  her friends and her godfather try to make it big in the small town of Ranchi.",
        "poster": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ranchi_Diaries_Poster.jpg/250px-Ranchi_Diaries_Poster.jpg",
        "runtime": "93 min",
        "id": 1148
    },
    {
        "title": "Sons of Ram",
        "year": 2012,
        "rating": 6.5,
        "genre": "Animation",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Surayavanshi Ram of Ayodhya  the greatest warrior king that ever lived  was forced to send his beloved wife Sita into exile  thus leading him and his kingdom to despair and towards an empty...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/5/56/Sons_of_Ram.jpg",
        "runtime": "85 min",
        "id": 1149
    },
    {
        "title": "Black Friday (2007 film)",
        "year": 2004,
        "rating": 8.5,
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "Black Friday is a film about the investigations following the 1993 serial Bombay bomb blasts  told through the different stories of the people involved --police  conspirators  victims  middlemen.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/5/58/Black_Friday_%282007%29.jpg",
        "runtime": "143 min",
        "id": 1150
    },
    {
        "title": "Koshish",
        "year": 1972,
        "rating": 8.6,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "Romantic drama spaning nearly 20 years involving a deaf-mute couple  Haricharian and Aarti. Deaf and dumb bicycle messenger Haricharian meets equally deaf Aarti  and persuades her to go to ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/KoshishFilmPoster.jpg/250px-KoshishFilmPoster.jpg",
        "runtime": "125 min",
        "id": 1151
    },
    {
        "title": "Aval (2017 film)",
        "year": 2017,
        "rating": 6.8,
        "genre": "Horror",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled"
        ],
        "description": "A young married couple begin to encounter several paranormal attacks  when a family moves into a neighbouring house  that is being haunted by a vengeful spirit  which leads them to perform an exorcism in order to help save the neighbours.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/The_House_Next_Door_-_Poster.jpg/250px-The_House_Next_Door_-_Poster.jpg",
        "runtime": "137 min",
        "id": 1152
    },
    {
        "title": "Angoor (1982 film)",
        "year": 1982,
        "rating": 8.4,
        "genre": "Comedy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "Based on Shakespeare's 'A Comedy of Errors'  this is a story of identical twins (2 pairs) and mistaken identities.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Angoor_1982_poster.jpg/250px-Angoor_1982_poster.jpg",
        "runtime": "131 min",
        "id": 1153
    },
    {
        "title": "Article 15 (film)",
        "year": 2019,
        "rating": 8.3,
        "genre": "Crime",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "In the rural heartlands of India  an upright police officer sets out on a crusade against violent caste-based crimes and discrimination.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Article_15_Poster.jpg/250px-Article_15_Poster.jpg",
        "runtime": "130 min",
        "id": 1154
    },
    {
        "title": "Raat Aur Din",
        "year": 1967,
        "rating": 7.6,
        "genre": "Mystery",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "Pratap  while stranded during a stormy night  meets with Varuna  and is instantly attracted to her. He proposes marriage through his family  and soon both get married. He soon notices that ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Raataurdin.jpg/250px-Raataurdin.jpg",
        "runtime": "135 min",
        "id": 1155
    },
    {
        "title": "Madaari",
        "year": 2016,
        "rating": 7.5,
        "genre": "Adventure",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "When Nirmal loses his family in a disaster caused by government corruption  he embarks on a journey seeking accountability and revenge.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Madaari_-_2016_Movie_Poster.jpg/250px-Madaari_-_2016_Movie_Poster.jpg",
        "runtime": "133 min",
        "id": 1156
    },
    {
        "title": "Bajrangbali (film)",
        "year": 1976,
        "rating": 7.7,
        "genre": "Fantasy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Bhagwan Shri Bajrangbali was born in a Vanar family based in Kishigandha. His father was Pawan (God of Wind)  and his mother Anjani. He had two brothers  Sugreev and Vali (aka Bali)  and a ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Bajrangbali_%28film%29.jpg/250px-Bajrangbali_%28film%29.jpg",
        "runtime": "176 min",
        "id": 1157
    },
    {
        "title": "Chori Chori",
        "year": 1956,
        "rating": 7.9,
        "genre": "Romance",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "A spoiled rich girl on the run travels with a reporter looking for a news scoop.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Chori_Chori_1956_film_poster.jpg/250px-Chori_Chori_1956_film_poster.jpg",
        "runtime": "158 min",
        "id": 1158
    },
    {
        "title": "Is Raat Ki Subah Nahin",
        "year": 1996,
        "rating": 7.1,
        "genre": "Thriller",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Ramanbhai is the criminal don of Bombay  and most criminal activities are linked indirectly to him. He has a rival in Vilas Pandey  who is furious with Ramanbhai  and wants to get a larger ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Is_Raat_Ki_Subah_Nahin.jpg/250px-Is_Raat_Ki_Subah_Nahin.jpg",
        "runtime": "131 min",
        "id": 1159
    },
    {
        "title": "Delhi Safari",
        "year": 2012,
        "rating": 5.7,
        "genre": "Animation",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "A group of animals plan a trip to Delhi in order to ask the parliament why the forest they live in is on the verge of destruction.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Delhi_Safari_Poster.jpg/250px-Delhi_Safari_Poster.jpg",
        "runtime": "96 min",
        "id": 1160
    },
    {
        "title": "Dangal (film)",
        "year": 2016,
        "rating": 8.4,
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Dangal_Poster.jpg/250px-Dangal_Poster.jpg",
        "runtime": "161 min",
        "id": 1161
    },
    {
        "title": "Guide (film)",
        "year": 1965,
        "rating": 8.5,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "When mistaken to be a sage by some villagers  an ex-tour guide reflects on his past and lost love to search for spiritual wisdom to guide the villagers.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Guide_1965_film_poster.jpg/250px-Guide_1965_film_poster.jpg",
        "runtime": "183 min",
        "id": 1162
    },
    {
        "title": "100 Days (1991 film)",
        "year": 1991,
        "rating": 6.6,
        "genre": "Horror",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled"
        ],
        "description": "A young  clairvoyant woman has a vision of a murder and sets out to uncover the truth before the killer finds her.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/100_Days_Hindi_poster.jpg/250px-100_Days_Hindi_poster.jpg",
        "runtime": "161 min",
        "id": 1163
    },
    {
        "title": "Chupke Chupke",
        "year": 1975,
        "rating": 8.4,
        "genre": "Comedy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "A newly wedded husband plays a practical joke on his wife's family with full support from his wife and friends.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Chupke_Chupke_1975.jpg/250px-Chupke_Chupke_1975.jpg",
        "runtime": "146 min",
        "id": 1164
    },
    {
        "title": "Ardh Satya",
        "year": 1983,
        "rating": 8.2,
        "genre": "Crime",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A newly appointed police rookie deals with corruption  romance  and brutality.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Ardh_Satya%2C_1982_fim.jpg/250px-Ardh_Satya%2C_1982_fim.jpg",
        "runtime": "130 min",
        "id": 1165
    },
    {
        "title": "Rahasya",
        "year": 2015,
        "rating": 7.6,
        "genre": "Mystery",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "A Doctor stands accused of killing his own eighteen-year old daughter. While this aggrieved father protests his innocence  all evidence points towards him irrefutably. While his own wife ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Rahasya_poster.jpg/250px-Rahasya_poster.jpg",
        "runtime": "123 min",
        "id": 1166
    },
    {
        "title": "Motu Patlu: King of Kings",
        "year": 2016,
        "rating": 7.5,
        "genre": "Adventure",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "Motu and Patlu are best friends. When trouble engulfs the village  they team up to save the day.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Motu_Patlu_-_King_Of_Kings.jpeg/250px-Motu_Patlu_-_King_Of_Kings.jpeg",
        "runtime": "110 min",
        "id": 1167
    },
    {
        "title": "Pyaasa Sawan",
        "year": 1981,
        "rating": 7.5,
        "genre": "Fantasy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "While looking for employment  Chandrakant is mistaken for the son of a wealthy landlord by Prabhudas  who wants him to marry his only daughter  Shanti. By the time they find out the truth  ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Pyaasa_Sawan.jpg/250px-Pyaasa_Sawan.jpg",
        "runtime": "161 min",
        "id": 1168
    },
    {
        "title": "Parda Hai Parda (film)",
        "year": 1992,
        "rating": 7.9,
        "genre": "Romance",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "Four friends try to woo a girl next door.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/5/59/Parda_Hai_Parda_poster.jpg",
        "runtime": "128 min",
        "id": 1169
    },
    {
        "title": "Saboot",
        "year": 1980,
        "rating": 6.9,
        "genre": "Thriller",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Dharamdas is killed by Dhanraj and his man later one by one Dharamdas killers are killed but it puts question to everyone as whose behind all this killings?",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Sabootfilm80.jpg/250px-Sabootfilm80.jpg",
        "runtime": "132 min",
        "id": 1170
    },
    {
        "title": "Main Krishna Hoon",
        "year": 2013,
        "rating": 5.5,
        "genre": "Animation",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "An abandoned baby boy is rescued from floodwaters by Kantaben and Nattubhai  the kindly proprietors of a small orphanage. They name the baby Krishna  because the way he was found parallels ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Main_krishna_hoon.jpg/250px-Main_krishna_hoon.jpg",
        "runtime": "134 min",
        "id": 1171
    },
    {
        "title": "Uri: The Surgical Strike",
        "year": 2019,
        "rating": 8.4,
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "Indian army special forces execute a covert operation  avenging the killing of fellow army men at their base by a terrorist group.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/URI_-_New_poster.jpg/250px-URI_-_New_poster.jpg",
        "runtime": "138 min",
        "id": 1172
    },
    {
        "title": "Masoom (1983 film)",
        "year": 1983,
        "rating": 8.5,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "A happy family goes through turbulent times because of a big mistake by one of the family members.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Masoom_1983.jpg/250px-Masoom_1983.jpg",
        "runtime": "165 min",
        "id": 1173
    },
    {
        "title": "Bhoot (film)",
        "year": 2003,
        "rating": 6.5,
        "genre": "Horror",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled"
        ],
        "description": "When a married couple moves into a flat that is haunted by a spirit  a series of inexplicable experiences drive the wife to near madness. Now  the husband must protect his wife to save their marriage.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Bhoot_Poster.jpg/250px-Bhoot_Poster.jpg",
        "runtime": "113 min",
        "id": 1174
    },
    {
        "title": "Do Aankhen Barah Haath",
        "year": 1957,
        "rating": 8.4,
        "genre": "Comedy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "Progressive  reform-minded young warden gets permission to take six surly murderers from prison to dilapidated country farm  to rehabilitate it and themselves through hard work and kindly guidance.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Do_Aankhen_Barah_Haath_%281957%29.jpg/250px-Do_Aankhen_Barah_Haath_%281957%29.jpg",
        "runtime": "143 min",
        "id": 1175
    },
    {
        "title": "Drishyam (2015 film)",
        "year": 2015,
        "rating": 8.2,
        "genre": "Crime",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Desperate measures are taken by a man who tries to save his family from the dark side of the law  after they commit an unexpected crime.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Drishyam_2015_film.jpg/250px-Drishyam_2015_film.jpg",
        "runtime": "163 min",
        "id": 1176
    },
    {
        "title": "Baharon Ki Manzil (1968 film)",
        "year": 1968,
        "rating": 7.4,
        "genre": "Mystery",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "Meena Kumari wakes up thinking she is Radha. Everyone around her  Subodh Rai  daughter Nalini  friends  and society believe she is Nanda. 16 years before  the date of the film  SS Fort ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Baharon_Ki_Manzil.jpg/250px-Baharon_Ki_Manzil.jpg",
        "runtime": "160 min",
        "id": 1177
    },
    {
        "title": "Dil Hai Ke Manta Nahin",
        "year": 1991,
        "rating": 7.4,
        "genre": "Adventure",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "Runaway heiress in search of her beloved falls in love with another man on the way.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/DilHaiKeMantaNahin.jpg/250px-DilHaiKeMantaNahin.jpg",
        "runtime": "154 min",
        "id": 1178
    },
    {
        "title": "Vandana (film)",
        "year": 1975,
        "rating": 7.5,
        "genre": "Fantasy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Add a Plot »",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Vandana_%281975_film%29.jpg/250px-Vandana_%281975_film%29.jpg",
        "runtime": "",
        "id": 1179
    },
    {
        "title": "Sant Gyaneshwar",
        "year": 1964,
        "rating": 7.8,
        "genre": "Romance",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "Add a Plot »",
        "poster": "https://upload.wikimedia.org/wikipedia/en/9/9d/Santgyaneswar.jpg",
        "runtime": "",
        "id": 1180
    },
    {
        "title": "Maazii",
        "year": 2013,
        "rating": 6.7,
        "genre": "Thriller",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Tarun and his wife Shrishti are living a happy life with there daughter . One day to save the Honor of a woman Tarun accidentally kills two gangsters. After this his black past unfolds and ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Maazii_%28movie_poster%29.jpg/250px-Maazii_%28movie_poster%29.jpg",
        "runtime": "123 min",
        "id": 1181
    },
    {
        "title": "Raag Desh (film)",
        "year": 2017,
        "rating": 8.3,
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "A period film based on the historic 1945 Indian National Army Red Fort Trials.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Raag_Desh_-_Poster.jpg/250px-Raag_Desh_-_Poster.jpg",
        "runtime": "135 min",
        "id": 1182
    },
    {
        "title": "Pyaasa",
        "year": 1957,
        "rating": 8.5,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "A talented but indigent poet Vijay struggles for love and recognition in this selfish world.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Pyaasa_1957_film_poster.jpg/250px-Pyaasa_1957_film_poster.jpg",
        "runtime": "146 min",
        "id": 1183
    },
    {
        "title": "Woh Phir Aayegi",
        "year": 1988,
        "rating": 6.5,
        "genre": "Horror",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled"
        ],
        "description": "Aarti is possessed by the evil spirit of Asha who wants revenge on her killers. Aarti's husband tries everything possible to free her from the evil spirit.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Woh_Phir_Aayegi.jpg/250px-Woh_Phir_Aayegi.jpg",
        "runtime": "",
        "id": 1184
    },
    {
        "title": "Jaane Bhi Do Yaaro",
        "year": 1983,
        "rating": 8.4,
        "genre": "Comedy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "Two friends  attempting to start-up their own photo studio  come across shady dealings  corruption and murder  and must fight to bring the guilty to light.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Jaane_Bhi_Do_Yaaro_1983_film_poster.jpg/250px-Jaane_Bhi_Do_Yaaro_1983_film_poster.jpg",
        "runtime": "132 min",
        "id": 1185
    },
    {
        "title": "Maqbool",
        "year": 2003,
        "rating": 8.2,
        "genre": "Crime",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "The intrigue of the Shakespearean tragedy 'Macbeth' is transposed to the Mumbai underworld.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Maqbool_poster.jpg/250px-Maqbool_poster.jpg",
        "runtime": "132 min",
        "id": 1186
    },
    {
        "title": "Inkaar (1977 film)",
        "year": 1977,
        "rating": 7,
        "genre": "Mystery",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "A police detective helps a wealthy shoe company owner search for the young son of the owner's chaufeur whom was kidnapped by a disgruntled ex-employee and his gang for a large ransom.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Inkaar_%281977%29.jpg/250px-Inkaar_%281977%29.jpg",
        "runtime": "135 min",
        "id": 1187
    },
    {
        "title": "Ek Chalis Ki Last Local",
        "year": 2007,
        "rating": 7.3,
        "genre": "Adventure",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "A comic thriller about two people who miss the last local train at 1:40 am and how missing of their train changes their course of life forever.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Ek_chalis_ki_last_local_poster.jpg/250px-Ek_chalis_ki_last_local_poster.jpg",
        "runtime": "143 min",
        "id": 1188
    },
    {
        "title": "Makdee",
        "year": 2002,
        "rating": 7.4,
        "genre": "Fantasy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "In a small North Indian village  Legend has it that a 100 years-old witch lives in an abandoned mansion on the village outskirts  and any person who goes inside is turned into an animal. In...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Makdee_poster.jpg/250px-Makdee_poster.jpg",
        "runtime": "90 min",
        "id": 1189
    },
    {
        "title": "Deedar (1951 film)",
        "year": 1951,
        "rating": 7.7,
        "genre": "Romance",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "A traumatized and blind young man makes a living singing  and searching for his childhood sweetheart.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Deedar_poster.jpg/250px-Deedar_poster.jpg",
        "runtime": "130 min",
        "id": 1190
    },
    {
        "title": "Aar Ya Paar",
        "year": 1997,
        "rating": 6.1,
        "genre": "Thriller",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "Shekhar is an opportunist. He marries Veena  a multi-millionaire  while continuing his affair with her secretary  Anu. When Veena gets to know  she threatens him with dire consequences. ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Aar_Ya_Paar.jpg/250px-Aar_Ya_Paar.jpg",
        "runtime": "180 min",
        "id": 1191
    },
    {
        "title": "Gangs of Wasseypur",
        "year": 2012,
        "rating": 8.2,
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur  and ignites a deadly blood feud spanning three generations.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Gangs_of_wasseypur.jpg/250px-Gangs_of_wasseypur.jpg",
        "runtime": "321 min",
        "id": 1192
    },
    {
        "title": "Do Bigha Zamin",
        "year": 1953,
        "rating": 8.4,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "In the hope of earning enough money to pay off his debts and save his land  a poor farmer becomes a rickshaw puller in the Calcutta and faces many difficulties.",
        "poster": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Do_Bigha_Zamin.jpg/250px-Do_Bigha_Zamin.jpg",
        "runtime": "131 min",
        "id": 1193
    },
    {
        "title": "1920 (film)",
        "year": 2008,
        "rating": 6.4,
        "genre": "Horror",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled"
        ],
        "description": "After forsaking his family and religion  a husband finds his wife is demoniacally possessed.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/1920_Poster.JPG/250px-1920_Poster.JPG",
        "runtime": "138 min",
        "id": 1194
    },
    {
        "title": "Jagte Raho",
        "year": 1956,
        "rating": 8.4,
        "genre": "Comedy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "An innocent guy who has arrived from a village to Kolkata gets himself involved into trouble in search of water after he gets thirsty in the middle of the night.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/2/28/Jagte_Raho_1956_film_poster.jpg",
        "runtime": "153 min",
        "id": 1195
    },
    {
        "title": "Talvar (film)",
        "year": 2015,
        "rating": 8.2,
        "genre": "Crime",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "An experienced investigator confronts several conflicting theories about the perpetrators of a violent double homicide.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/TalvarFilmPoster.jpg/250px-TalvarFilmPoster.jpg",
        "runtime": "132 min",
        "id": 1196
    },
    {
        "title": "Shikar (1968 film)",
        "year": 1968,
        "rating": 7,
        "genre": "Mystery",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "Manager Ajay Singh find out that a man by the name of Naresh is murdered and inform police inspector Rai  but all evidences are tampered with at the crime scene and as a result the murderer...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/b/b2/Shikar1968.jpg",
        "runtime": "139 min",
        "id": 1197
    },
    {
        "title": "Safed Haathi",
        "year": 1977,
        "rating": 7.3,
        "genre": "Adventure",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "Unsuccessful film-maker (Vijay Arora) chronicles the story of two orphaned children  Shibu (Ashwani)  and his elder sister  Rani (Gayetri Sharma)  who live with their abusive maternal uncle...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Safed_Haathi.jpg/250px-Safed_Haathi.jpg",
        "runtime": "",
        "id": 1198
    },
    {
        "title": "Uran Khatola (film)",
        "year": 1955,
        "rating": 7.3,
        "genre": "Fantasy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Kashi travels by an ill-fated plane  which crashes on the outskirts of an isolated city that is ruled by women  who worship Sanga  their God. Kashi is rescued by pretty Soni and taken to ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Uran_Khatola_poster.jpg/250px-Uran_Khatola_poster.jpg",
        "runtime": "151 min",
        "id": 1199
    },
    {
        "title": "Mere Sanam",
        "year": 1965,
        "rating": 7.7,
        "genre": "Romance",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "Neena  in the company of her mom  and several female friends  travels to a remote holiday spot  and stay overnight at a lodge. A young man named Kumar also attends at this lodge  claiming ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/MereSanam.jpg/250px-MereSanam.jpg",
        "runtime": "167 min",
        "id": 1200
    },
    {
        "title": "Dehraadun Diary",
        "year": 2013,
        "rating": 5.9,
        "genre": "Thriller",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "The story revolves around the daughter of a politician who is in love with the son of a retired IAS officer but her lover is killed by her brother due to their status difference. The ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Dehraadun_Diary_poster.jpg/250px-Dehraadun_Diary_poster.jpg",
        "runtime": "",
        "id": 1201
    },
    {
        "title": "Gangs of Wasseypur – Part 2",
        "year": 2012,
        "rating": 8.2,
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur  and ignites a deadly blood feud spanning three generations.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Gangs_of_wasseypur_II.jpg/250px-Gangs_of_wasseypur_II.jpg",
        "runtime": "321 min",
        "id": 1202
    },
    {
        "title": "Dosti",
        "year": 1964,
        "rating": 8.4,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "Friendship of a lonesome studious blind boy with a crippled street singer.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Dosti_film_poster.jpg/250px-Dosti_film_poster.jpg",
        "runtime": "163 min",
        "id": 1203
    },
    {
        "title": "Bhayaanak",
        "year": 1979,
        "rating": 6.4,
        "genre": "Horror",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled"
        ],
        "description": "People of Mangalpur die in a bizarre pattern. Inspector Vijay is appointed to reveal the truth behind the mystery.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/b/be/Bhayaanakmithun.jpg",
        "runtime": "",
        "id": 1204
    },
    {
        "title": "Chhoti Si Baat",
        "year": 1976,
        "rating": 8.3,
        "genre": "Comedy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "A shy Arun works as an accountant.On daily basis he travels by a bus to office where he sees Prabha who works in the same premises.Arun starts to like Prabha and follows her frequently but ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Chhoti_Si_Baat.jpg/250px-Chhoti_Si_Baat.jpg",
        "runtime": "123 min",
        "id": 1205
    },
    {
        "title": "Gulaal (film)",
        "year": 2009,
        "rating": 8.1,
        "genre": "Crime",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A law student witnesses deception  homicide  and crime after being elected as General Secretary of his college.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Gulaal.jpg/250px-Gulaal.jpg",
        "runtime": "140 min",
        "id": 1206
    },
    {
        "title": "Baat Ek Raat Ki",
        "year": 1962,
        "rating": 6.9,
        "genre": "Mystery",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "Neela is in police custody for committing a murder. Believing that she did it  she confesses. When renowned lawyer  Rajeshwar decides to represent her  he accepts her guilt  but as he goes ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Baat_Ek_Raat_Ki.jpg/250px-Baat_Ek_Raat_Ki.jpg",
        "runtime": "145 min",
        "id": 1207
    },
    {
        "title": "Hulchul (1971 film)",
        "year": 1971,
        "rating": 7.2,
        "genre": "Adventure",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "A man overhears a murder plot and telephones three different women  all who share the potential victim's name.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Hulchul.jpg/250px-Hulchul.jpg",
        "runtime": "149 min",
        "id": 1208
    },
    {
        "title": "Do Badan",
        "year": 1966,
        "rating": 7.2,
        "genre": "Fantasy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Vikas comes from a poor family  and is attending college so that he can complete his studies  get a job  and financially look after himself and his dad. He meets with wealthy Asha at this ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Dobadan3.jpg/250px-Dobadan3.jpg",
        "runtime": "",
        "id": 1209
    },
    {
        "title": "Chhalia",
        "year": 1960,
        "rating": 7.6,
        "genre": "Romance",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "The tragic-comic story of Chhalia  a naive  simple-minded young man who comes to the city and witnesses the harsh side of life; and falls in love with a young woman named Shanti  only to ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Chhalia_1960.jpg/250px-Chhalia_1960.jpg",
        "runtime": "112 min",
        "id": 1210
    },
    {
        "title": "Memsaab (film)",
        "year": 1971,
        "rating": 5.9,
        "genre": "Thriller",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A man suspected of murder must track the real killer down.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Memsaab.jpg/250px-Memsaab.jpg",
        "runtime": "138 min",
        "id": 1211
    },
    {
        "title": "Hera Pheri (2000 film)",
        "year": 2000,
        "rating": 8.2,
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "Three unemployed men find the answer to all their money problems when they receive a call from a kidnapper. However  things do not go as planned.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Hera_Pheri_2000_poster.jpg/250px-Hera_Pheri_2000_poster.jpg",
        "runtime": "156 min",
        "id": 1212
    },
    {
        "title": "Ek Doctor Ki Maut",
        "year": 1990,
        "rating": 8.4,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "After years of painstaking research at the cost of his domestic pleasure  Dr. Dipankar Roy discovers a vaccine for leprosy. The news is flashed over television and overnight  an ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Ek_Doctor_Ki_Maut%2C_1990_film.jpg/250px-Ek_Doctor_Ki_Maut%2C_1990_film.jpg",
        "runtime": "122 min",
        "id": 1213
    },
    {
        "title": "Haunted – 3D",
        "year": 2011,
        "rating": 6.2,
        "genre": "Horror",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled"
        ],
        "description": "A Realtor encounters two ghostly entities while attempting to sell a mansion.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/4/4a/Haunted3D-filmposter.jpg",
        "runtime": "143 min",
        "id": 1214
    },
    {
        "title": "Khosla Ka Ghosla",
        "year": 2006,
        "rating": 8.3,
        "genre": "Comedy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "A Delhi based retired middle class man tries half-heartedly to get his land back from a swindling property dealer with the help of his sons and their friends.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Khosla_Ka_Ghosla.jpg/250px-Khosla_Ka_Ghosla.jpg",
        "runtime": "135 min",
        "id": 1215
    },
    {
        "title": "Ugly (film)",
        "year": 2013,
        "rating": 8.1,
        "genre": "Crime",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "The case of a missing girl takes us through a journey of human greed and brushes upon the egos and repressed emotions of the characters.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Movie_Poster_Ugly.jpg/250px-Movie_Poster_Ugly.jpg",
        "runtime": "128 min",
        "id": 1216
    },
    {
        "title": "Poonam Ki Raat",
        "year": 1965,
        "rating": 6.9,
        "genre": "Mystery",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "Prakash and Chandan are enjoying their college trip with with their friends when Sumer Singh arrives with the news that Chandan's father is unwell and his mother has asked him to rush ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Poonam_Ki_Raat.jpg/250px-Poonam_Ki_Raat.jpg",
        "runtime": "136 min",
        "id": 1217
    },
    {
        "title": "Dharm Aur Qanoon",
        "year": 1984,
        "rating": 7.1,
        "genre": "Adventure",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "Justice Diwan lives in a palatial house with his wife  Sharda  and a son named Rajan. Diwan and Rajan do not get along and as a result  Rajan moves out and goes to live in a nearby slum ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Dharm_Aur_Qanoon.jpg/250px-Dharm_Aur_Qanoon.jpg",
        "runtime": "",
        "id": 1218
    },
    {
        "title": "Hanuman Vijay",
        "year": 1974,
        "rating": 7.2,
        "genre": "Fantasy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Ahiravan was a powerful sorcerer who had mastered the dark arts  and ruled the netherworld (Patal) with his brother Mahiravan. He was a great devotee of Goddess Kamaksha from whom he had ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/8/85/Hanuman_Vijay.jpg",
        "runtime": "120 min",
        "id": 1219
    },
    {
        "title": "Love Marriage (1959 film)",
        "year": 1959,
        "rating": 7.6,
        "genre": "Romance",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "Sunil Kumar rents a room in the city where he is to play cricket for the home team. He meets with the landlord's daughter  who instantly dislikes him. But after watching him play cricket  ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Love_Marriage_%281959%29.jpg/250px-Love_Marriage_%281959%29.jpg",
        "runtime": "157 min",
        "id": 1220
    },
    {
        "title": "Apradhi Kaun? (1982 film)",
        "year": 1982,
        "rating": 5.7,
        "genre": "Thriller",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "This is a suspense movie. The character played by Arpana Choudhary is a poor girl who gets run over by an old rich widower played by Madan Puri. feeling sympathy and then love for the poor ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Film_Poster.png/250px-Film_Poster.png",
        "runtime": "",
        "id": 1221
    },
    {
        "title": "Paan Singh Tomar (film)",
        "year": 2012,
        "rating": 8.2,
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "The story of Paan Singh Tomar  an Indian athlete and seven-time national steeplechase champion who becomes one of the most feared dacoits in Chambal Valley after his retirement.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Paan_Singh_Tomar_Poster.jpg/250px-Paan_Singh_Tomar_Poster.jpg",
        "runtime": "135 min",
        "id": 1222
    },
    {
        "title": "Nil Battey Sannata",
        "year": 2015,
        "rating": 8.4,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "A story about a single women (a Mom) and dreams on her Daughter.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Nil_Battey_Sannata_%28Poster%29.jpg/250px-Nil_Battey_Sannata_%28Poster%29.jpg",
        "runtime": "100 min",
        "id": 1223
    },
    {
        "title": "Mercury (film)",
        "year": 2018,
        "rating": 6.2,
        "genre": "Horror",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled"
        ],
        "description": "Five friends maimed from mercury poisoning try to cover up for an accident that left a man dead.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Mercury_film.jpg/250px-Mercury_film.jpg",
        "runtime": "106 min",
        "id": 1224
    },
    {
        "title": "Andaz Apna Apna",
        "year": 1994,
        "rating": 8.2,
        "genre": "Comedy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "Two slackers competing for the affections of an heiress  inadvertently become her protectors from an evil criminal.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Andaz_Apna_Apna.jpg/250px-Andaz_Apna_Apna.jpg",
        "runtime": "160 min",
        "id": 1225
    },
    {
        "title": "Jewel Thief",
        "year": 1967,
        "rating": 8,
        "genre": "Crime",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A Police Commissioner's son comes under suspicion for being a jewel thief.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Jewel_Thief_poster.jpg/250px-Jewel_Thief_poster.jpg",
        "runtime": "186 min",
        "id": 1226
    },
    {
        "title": "Uljhan",
        "year": 1975,
        "rating": 6.8,
        "genre": "Mystery",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "After a long murder investigation  a police investigator finds the killer closer to home than he imagined.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Uljhan_poster.jpg/250px-Uljhan_poster.jpg",
        "runtime": "137 min",
        "id": 1227
    },
    {
        "title": "Table No. 21",
        "year": 2013,
        "rating": 7.1,
        "genre": "Adventure",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "A couple is drawn into a game show with a whooping winning prize. However the game turns into more than a survival for them with no escape.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Table_No_21_official_poster.jpg/250px-Table_No_21_official_poster.jpg",
        "runtime": "108 min",
        "id": 1228
    },
    {
        "title": "Maryada (1971 film)",
        "year": 1971,
        "rating": 7.2,
        "genre": "Fantasy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Lalita lives with her widowed mother in a small village in India. One day while traveling by road  she is stranded  and a young man named Raja Babu comes to her assistance. Both fall in ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/d/dc/Maryada_%281971%29.jpg",
        "runtime": "154 min",
        "id": 1229
    },
    {
        "title": "Kuchh Bheege Alfaaz",
        "year": 2018,
        "rating": 7.5,
        "genre": "Romance",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "In a world of pings  likes  tweets  shares and comments  2 strangers connect over a mis-dial and WhatsApp their way into each others' hearts  safely hidden behind digital screens. But will the emojis translate to emotions when they reveal t",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Kuchh_Bheege_Alfaaz.jpg/250px-Kuchh_Bheege_Alfaaz.jpg",
        "runtime": "116 min",
        "id": 1230
    },
    {
        "title": "Kaashi in Search of Ganga",
        "year": 2018,
        "rating": 5.6,
        "genre": "Thriller",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "The movie is about two siblings  Kashi (Sharman Joshi) and his sister Ganga. The film is set in the Indian city of Benaras  also known as Kashi.[9] Kashi is a man who belongs to a community who are involved in performing cremation rituals.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Kaashi_in_Search_of_Ganga.jpg/250px-Kaashi_in_Search_of_Ganga.jpg",
        "runtime": "125 min",
        "id": 1231
    },
    {
        "title": "Satya (1998 film)",
        "year": 1998,
        "rating": 8.2,
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "An innocent man is embroiled in underworld after being falsely charged and sets out to punish the perpetrators who subjected his life to misery.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Satya_%281998%29.jpg/250px-Satya_%281998%29.jpg",
        "runtime": "170 min",
        "id": 1232
    },
    {
        "title": "Taare Zameen Par",
        "year": 2007,
        "rating": 8.4,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "An eight-year-old boy is thought to be a lazy trouble-maker  until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Taare_Zameen_Par_Like_Stars_on_Earth_poster.png/250px-Taare_Zameen_Par_Like_Stars_on_Earth_poster.png",
        "runtime": "165 min",
        "id": 1233
    },
    {
        "title": "Pizza (2014 film)",
        "year": 2014,
        "rating": 6.2,
        "genre": "Horror",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled"
        ],
        "description": "A Pizza delivery boy's mundane life takes a horrifying turn when he is sent to make a delivery to the home of a family who have a dark secret. Will he be able to overcome the evil that lurks in the shadows and live to tell his tale?",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Pizza_%282014_film%29_first_look_poster.png/250px-Pizza_%282014_film%29_first_look_poster.png",
        "runtime": "107 min",
        "id": 1234
    },
    {
        "title": "Bala (2019 film)",
        "year": 2019,
        "rating": 8.2,
        "genre": "Comedy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "It tells the story of a man who is balding prematurely and how he copes up with the situation.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Bala_Film_Poster.jpg/250px-Bala_Film_Poster.jpg",
        "runtime": "133 min",
        "id": 1235
    },
    {
        "title": "Salaam Bombay!",
        "year": 1988,
        "rating": 8,
        "genre": "Crime",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "The boy Krishna is abandoned by his mother at the Apollo Circus and she tells him that he can only return home when he can afford 500 rupees to pay for the bicycle of his brother that he ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Salaam_Bombay%21_poster.jpg/250px-Salaam_Bombay%21_poster.jpg",
        "runtime": "113 min",
        "id": 1236
    },
    {
        "title": "Ghungroo Ki Awaaz",
        "year": 1981,
        "rating": 6.6,
        "genre": "Mystery",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "Thakur Ranjit Singh buys Kajal's freedom from a panderer and installs her in his house with the status of a daughter-in-law - much to the disgust of his uncle  Jasbir. When the sleazy ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/3/3a/Ghungroo_Ki_Awaaz.jpg",
        "runtime": "138 min",
        "id": 1237
    },
    {
        "title": "Himalay Ki God Mein",
        "year": 1965,
        "rating": 7,
        "genre": "Adventure",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "Sunil  son of D.I.G. Shyamlal Mehra  is back in India after successful completion of his medical studies. He gets an offer to work with his fiancée Dr. Neeta Verma  in a private hospital ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Himalaya_Ki_God_Mein_Hindi_film_poster.JPG/250px-Himalaya_Ki_God_Mein_Hindi_film_poster.JPG",
        "runtime": "120 min",
        "id": 1238
    },
    {
        "title": "Uphaar",
        "year": 1971,
        "rating": 7.2,
        "genre": "Fantasy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Anoop studies law in Calcutta  while his widowed mom in a small town in West Bengal. He has a sister  Sudha  who is married to Anil and lives in Calcutta. Since Anoop is of marriageable age...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Uphaar_%281971%29.jpg/250px-Uphaar_%281971%29.jpg",
        "runtime": "122 min",
        "id": 1239
    },
    {
        "title": "Rehnaa Hai Terre Dil Mein",
        "year": 2001,
        "rating": 7.5,
        "genre": "Romance",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "weepy"
        ],
        "description": "A young girl is torn between an obsessive lover and a mild-mannered suitor.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/RHTDM.jpg/250px-RHTDM.jpg",
        "runtime": "160 min",
        "id": 1240
    },
    {
        "title": "Road (film)",
        "year": 2002,
        "rating": 5.6,
        "genre": "Thriller",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A couple decide to pick up a hitchhiker  but he ends up being a psychotic stalker who puts in them in danger.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Road_poster.jpg/250px-Road_poster.jpg",
        "runtime": "134 min",
        "id": 1241
    },
    {
        "title": "Sholay",
        "year": 1975,
        "rating": 8.2,
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "wonder"
        ],
        "description": "After his family is murdered by a notorious and ruthless bandit  a former police officer enlists the services of two outlaws to capture the bandit.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Sholay-poster.jpg/250px-Sholay-poster.jpg",
        "runtime": "198 min",
        "id": 1242
    },
    {
        "title": "Children of Heaven",
        "year": 1997,
        "rating": 8.3,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "After a boy loses his sister's pair of shoes  he goes on a series of adventures in order to find them. When he can't  he tries a new way to \"win\" a new pair.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Children_of_heaven.jpg/250px-Children_of_heaven.jpg",
        "runtime": "89 min",
        "id": 1243
    },
    {
        "title": "The Final Exit",
        "year": 2017,
        "rating": 6.2,
        "genre": "Horror",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled"
        ],
        "description": "Caught in a surreal maze  a man tries to decode the mysterious hallucinations he's experiencing.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/The_Final_Exit_-_Poster.jpg/250px-The_Final_Exit_-_Poster.jpg",
        "runtime": "119 min",
        "id": 1244
    },
    {
        "title": "Boot Polish (film)",
        "year": 1954,
        "rating": 8.2,
        "genre": "Comedy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "uplifted"
        ],
        "description": "Preteen brother and sister  abandoned by their father to care of an abusive prostitute aunt  survive life in an Indian squatters' camp  aided by a friendly cripple  by learning to shine shoes instead of begging.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Boot_Polish_1954_film_poster.jpg/250px-Boot_Polish_1954_film_poster.jpg",
        "runtime": "149 min",
        "id": 1245
    },
    {
        "title": "Special 26",
        "year": 2013,
        "rating": 8,
        "genre": "Crime",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thrilled",
            "thoughtful"
        ],
        "description": "A gang of con-men rob prominent rich businessmen and politicians by posing as C.B.I and income tax officers.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Special_26_poster.jpg/250px-Special_26_poster.jpg",
        "runtime": "144 min",
        "id": 1246
    },
    {
        "title": "Raaz (1967 film)",
        "year": 1967,
        "rating": 6.6,
        "genre": "Mystery",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "cozy",
            "thrilled"
        ],
        "description": "Kumar  though of Indian origin  lives in Africa. He has recurring dreams of a Railway Station in India called \"Viran Nagar\". He decides to find for himself and travels to India along with ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Raaz_1967_poster.jpg/250px-Raaz_1967_poster.jpg",
        "runtime": "139 min",
        "id": 1247
    },
    {
        "title": "Journey Beyond Three Seas",
        "year": 1957,
        "rating": 7,
        "genre": "Adventure",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "uplifted"
        ],
        "description": "The film is based on travelogues of XV century Russian traveler Afanasy Nikitin called \"A journey beyond the three seas\"",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Journey_Beyond_Three_Seas_foreign_poster.jpg/250px-Journey_Beyond_Three_Seas_foreign_poster.jpg",
        "runtime": "152 min",
        "id": 1248
    },
    {
        "title": "Aarti (film)",
        "year": 1962,
        "rating": 7.1,
        "genre": "Fantasy",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "wonder",
            "cozy"
        ],
        "description": "Aarti (Meena Kumari) is a dedicated and hard-working doctor  who believes that her skills should be used for the welfare of patients only. In contrast her fiance  Dr. Prakash (Ashok Kumar) ...",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Aarti62.jpg/250px-Aarti62.jpg",
        "runtime": "156 min",
        "id": 1249
    },
    {
        "title": "Baahubali: The Beginning", "year": 2015, "rating": 8.1, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Baahubali_The_Beginning_poster.jpg?width=500", "runtime": "159 min", "id": 1300
    },
    {
        "title": "Baahubali 2: The Conclusion", "year": 2017, "rating": 8.2, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "When Shiva, the son of Baahubali, learns about his heritage, he seeks answers about the events that unfolded in the Mahishmati Kingdom.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Baahubali_2_The_Conclusion_poster.jpg?width=500", "runtime": "167 min", "id": 1301
    },
    {
        "title": "Bharat Ane Nenu", "year": 2018, "rating": 7.7, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "After his father's death, a young graduate unexpectedly becomes chief minister and takes on the challenge of reforming society.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Bharat_Ane_Nenu_poster.jpg?width=500", "runtime": "173 min", "id": 1302
    },
    {
        "title": "Dookudu", "year": 2011, "rating": 7.4, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "An undercover police officer pursues a dangerous crime boss with whom he has a personal score to settle.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Dookudu_poster.jpg?width=500", "runtime": "170 min", "id": 1303
    },
    {
        "title": "Eega", "year": 2012, "rating": 7.7, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "A murdered man is reborn as a housefly and sets out to avenge his death.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Eega_poster.jpg?width=500", "runtime": "145 min", "id": 1304
    },
    {
        "title": "Magadheera", "year": 2009, "rating": 7.6, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "A stunt rider recalls a past life as a warrior and pursues the reincarnation of the woman he loved.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Magadheera_Poster.jpg?width=500", "runtime": "166 min", "id": 1305
    },
    {
        "title": "Saaho", "year": 2019, "rating": 5.2, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "An undercover officer is drawn into a battle between rival criminals chasing a mysterious black box.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Saaho_poster.jpg?width=500", "runtime": "170 min", "id": 1306
    },
    {
        "title": "Athadu", "year": 2005, "rating": 8.2, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "A hired gun is framed for murder and takes on the identity of a man who died in the same incident.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Athadu_Poster.jpg?width=500", "runtime": "172 min", "id": 1307
    },
    {
        "title": "Bommarillu", "year": 2006, "rating": 8.2, "genre": "Comedy", "language": "Telugu", "region": "India",
        "description": "A young man pushes back against his overbearing father as he tries to shape a life and relationship of his own.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Bommarillu_poster.jpg?width=500", "runtime": "170 min", "id": 1308
    },
    {
        "title": "Khaleja", "year": 2010, "rating": 7.5, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "When a mysterious illness strikes a remote village, its people look to a reluctant taxi driver for help.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Mahesh_khaleja_poster.jpg?width=500", "runtime": "170 min", "id": 1309
    },
    {
        "title": "Mahanati", "year": 2018, "rating": 8.5, "genre": "Drama", "language": "Telugu", "region": "India",
        "description": "A biographical drama about the life and career of celebrated South Indian actor Savitri.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Mahanati_poster.jpg?width=500", "runtime": "177 min", "id": 1310
    },
    {
        "title": "Okkadu", "year": 2003, "rating": 8.0, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "A kabaddi player helps a young woman escape an unwanted marriage and hides her from the powerful man pursuing her.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Okkadu_poster.jpg?width=500", "runtime": "170 min", "id": 1311
    },
    {
        "title": "Pokiri", "year": 2006, "rating": 7.9, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "A ruthless local gangster draws the anger of his girlfriend, a corrupt police officer, and a powerful crime boss.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Pokiri_movie_poster.jpg?width=500", "runtime": "164 min", "id": 1312
    },
    {
        "title": "Evaru", "year": 2019, "rating": 8.2, "genre": "Crime", "language": "Telugu", "region": "India",
        "description": "A sub-inspector investigates the killing of a senior officer and uncovers unexpected facts about the case.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Evaru_Poster.jpg?width=500", "runtime": "118 min", "id": 1313
    },
    {
        "title": "Fidaa", "year": 2017, "rating": 7.5, "genre": "Drama", "language": "Telugu", "region": "India",
        "description": "Two people from different worlds navigate family expectations and the challenges of their relationship.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Fidaa_poster.jpg?width=500", "runtime": "144 min", "id": 1314
    },
    {
        "title": "Kshanam", "year": 2016, "rating": 8.3, "genre": "Thriller", "language": "Telugu", "region": "India",
        "description": "An NRI returns to India to help an ex-girlfriend find her missing daughter, only to find the clues do not add up.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Kshanam_poster.jpg?width=500", "runtime": "110 min", "id": 1315
    },
    {
        "title": "Nannaku Prematho", "year": 2016, "rating": 7.6, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "An intelligent son sets out to take revenge on the powerful businessman who ruined his father's life.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Nannaku_Prematho_poster.jpg?width=500", "runtime": "168 min", "id": 1316
    },
    {
        "title": "Pelli Choopulu", "year": 2016, "rating": 8.2, "genre": "Comedy", "language": "Telugu", "region": "India",
        "description": "A carefree young man and an ambitious woman meet through an arranged-match setup and team up to pursue a food-truck business.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Pelli_Choopulu_poster.jpg?width=500", "runtime": "125 min", "id": 1317
    },
    {
        "title": "Race Gurram", "year": 2014, "rating": 7.2, "genre": "Action", "language": "Telugu", "region": "India",
        "description": "Two brothers with opposite approaches to life find themselves on different sides of a fight against a criminal politician.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Race_Gurram_%28film%29_poster.jpg?width=500", "runtime": "163 min", "id": 1318
    },
    {
        "title": "Agent Sai Srinivasa Athreya", "year": 2019, "rating": 8.5, "genre": "Crime", "language": "Telugu", "region": "India",
        "description": "A small-town detective from Nellore investigates a case that leads him into a much larger mystery.",
        "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Agent_Sai_Srinivasa_Athreya_poster.jpg?width=500", "runtime": "148 min", "id": 1319
    }
];

const tvShows = [
    {
        id: 101,
        title: "Stranger Things",
        year: 2016,
        rating: 8.7,
        genre: "Sci-Fi",
        description: "Friends in a small town uncover a mystery from another world.",
        poster: ""
    },
    {
        id: 102,
        title: "The Last of Us",
        year: 2023,
        rating: 8.7,
        genre: "Drama",
        description: "Two survivors travel across a changed America and form an unlikely bond.",
        poster: ""
    },
    {
        id: 103,
        title: "The Bear",
        year: 2022,
        rating: 8.5,
        genre: "Comedy",
        description: "A talented chef returns home to help run his family's sandwich shop.",
        poster: ""
    },
    {
        id: 104,
        title: "Wednesday",
        year: 2022,
        rating: 8.0,
        genre: "Mystery",
        description: "Wednesday Addams investigates strange events at her new school.",
        poster: ""
    },
    {
        id: 105,
        title: "Our Planet",
        year: 2019,
        rating: 9.3,
        genre: "Documentary",
        language: "English",
        region: "International",
        description: "A journey through the beauty and fragility of the natural world.",
        poster: ""
    },
    { id: 106, title: "Sacred Games", year: 2018, rating: 8.5, genre: "Thriller", language: "Hindi", region: "India", description: "A Mumbai police officer races to uncover a criminal's warning about the city.", poster: "" },
    { id: 107, title: "Kingdom", year: 2019, rating: 8.3, genre: "Horror", language: "Korean", region: "South Korea", description: "A crown prince investigates a mysterious plague threatening his kingdom.", poster: "" }
];

const runtimes = {
    0: "169 min",
    1: "166 min",
    2: "176 min",
    3: "139 min",
    4: "180 min",
    5: "140 min",
    6: "116 min",
    7: "99 min",
    8: "106 min",
    9: "120 min",
    10: "130 min",
    11: "90 min",
    12: "128 min",
    13: "130 min",
    14: "170 min", 15: "164 min", 16: "132 min", 17: "125 min",
    18: "118 min", 19: "122 min", 20: "130 min", 21: "120 min",
    101: "Approx. 50 min per episode",
    102: "Approx. 50 min per episode",
    103: "Approx. 30 min per episode",
    104: "Approx. 45 min per episode",
    105: "Approx. 50 min per episode",
    106: "Approx. 50 min per episode", 107: "Approx. 50 min per episode"
};

const featuredTitle = {
    id: 0,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
    description: "A team of explorers travels beyond our galaxy in search of a future for humanity.",
    poster: ""
};

const allTitles = [featuredTitle, ...movies, ...tvShows];
allTitles.forEach(item => {
    if (!item.language) item.language = "English";
    if (!item.region) item.region = "United States";
    if (!item.mood) item.mood = ["cozy", "uplifted", "thrilled", "thoughtful", "wonder", "weepy"];
});

const WATCHLIST_KEY = "cineVerseWatchlist";
const FAVORITES_KEY = "cineVerseFavorites";
const THEME_KEY = "cineVerseTheme";

function loadSavedIds(storageKey) {
    try {
        const savedIds = JSON.parse(localStorage.getItem(storageKey) || "[]");
        return Array.isArray(savedIds) ? savedIds.map(Number).filter(Number.isFinite) : [];
    } catch (error) {
        return [];
    }
}

let watchlistIds = loadSavedIds(WATCHLIST_KEY);
let favoriteIds = loadSavedIds(FAVORITES_KEY);
const moodDefaults = {
    Action: ["thrilled", "wonder"], Adventure: ["wonder", "uplifted"], Animation: ["wonder", "cozy"],
    Comedy: ["cozy", "uplifted"], Crime: ["thrilled", "thoughtful"], Documentary: ["thoughtful", "wonder"],
    Drama: ["thoughtful", "weepy"], Fantasy: ["wonder", "cozy"], Horror: ["thrilled"],
    Mystery: ["cozy", "thrilled"], Romance: ["cozy", "weepy"], "Sci-Fi": ["wonder", "thoughtful"],
    Thriller: ["thrilled", "thoughtful"]
};
movies.forEach(item => {
    if (!item.mood) item.mood = moodDefaults[item.genre] || ["thoughtful"];
});
tvShows.forEach(item => {
    if (!item.mood) item.mood = moodDefaults[item.genre] || ["thoughtful"];
});

const textOf = item => `${item.title} ${item.description}`.toLowerCase();
const extraMoodRules = {
    adventurous: item => ["Action", "Adventure", "Animation"].includes(item.genre) || (item.genre === "Fantasy" && /quest|journey|adventure|expedition|explore|travel/.test(textOf(item))),
    romantic: item => item.genre === "Romance" || /romance|love|lovers|relationship|wedding|couple|fall for/.test(textOf(item)),
    spooky: item => item.genre === "Horror" || /ghost|haunt|haunted|demon|nightmare|supernatural|monster|vampire|witch|curse/.test(textOf(item)),
    mindbending: item => ["Sci-Fi", "Mystery"].includes(item.genre) || /time loop|time travel|dream|reality|parallel|memory|identity|simulation|consciousness|twist/.test(textOf(item)),
    nostalgic: item => Number(item.year) <= 1990
};
[...movies, ...tvShows].forEach(item => {
    Object.entries(extraMoodRules).forEach(([mood, matches]) => {
        if (matches(item) && !item.mood.includes(mood)) item.mood.push(mood);
    });
});

function createMovieCard(item, showMoodReason = true) {
    const isFavorite = favoriteIds.includes(item.id);
    const isInWatchlist = watchlistIds.includes(item.id);
    const moodReason = getMoodReason(item, selectedMood);

    return `
        <article class="movie-card">
            <button class="movie-open" type="button" data-item-id="${item.id}" aria-label="View details for ${item.title}">
            ${item.poster ? `<img class="movie-poster" src="${item.poster}" alt="Movie poster for ${item.title}" data-title="${item.title}" loading="lazy">` : `<span class="movie-poster poster-unavailable" role="img" aria-label="Movie poster unavailable for ${item.title}"><span>Poster unavailable</span><small>${item.title}</small></span>`}
            </button>
            <div class="movie-card-content">
                <div class="movie-card-topline">
                    <span class="movie-genre">${item.genre}</span>
                    <span class="card-rating" aria-label="Rating ${item.rating} out of 10">&#9733; ${item.rating}</span>
                </div>
                <h3><button class="movie-title-open" type="button" data-item-id="${item.id}">${item.title}</button></h3>
                <span class="movie-language">${item.language} <span aria-hidden="true">&#183;</span> ${item.region}</span>
                <p class="movie-card-description">${item.description}</p>
                ${showMoodReason ? `<p class="mood-match-reason">${moodReason}</p>` : ""}
                <span class="movie-year">${item.year}</span>
            </div>
            <button class="favorite-button ${isFavorite ? "is-favorite" : ""}" type="button" data-item-id="${item.id}" aria-pressed="${isFavorite}" aria-label="${isFavorite ? "Remove" : "Add"} ${item.title} ${isFavorite ? "from" : "to"} favorites">&#9829;</button>
            <button class="watchlist-button" type="button" data-item-id="${item.id}" aria-pressed="${isInWatchlist}">${isInWatchlist ? "Remove from Watchlist" : "+ Add to Watchlist"}</button>
        </article>
    `;
}

const CATALOG_PAGE_SIZE = 24;
let visibleMovieCount = CATALOG_PAGE_SIZE;

document.addEventListener("error", event => {
    const image = event.target;
    if (!image.matches || !image.matches(".movie-poster, .modal-poster")) return;

    const fallback = document.createElement("span");
    fallback.className = `${image.className} poster-unavailable`;
    fallback.setAttribute("role", "img");
    fallback.setAttribute("aria-label", `Movie poster unavailable for ${image.dataset.title || "this title"}`);
    fallback.textContent = "Poster unavailable";
    image.replaceWith(fallback);
}, true);

function renderMovies(items, containerId) {
    const container = document.getElementById(containerId);
    if (items.length === 0) {
        container.innerHTML = '<p class="no-results">No movies found. Try another title or genre.</p>';
        return;
    }

    const visibleItems = items.slice(0, visibleMovieCount);
    container.innerHTML = visibleItems.map(createMovieCard).join("");
    if (items.length > visibleItems.length) {
        container.insertAdjacentHTML("beforeend", `<button class="load-more-button" type="button" data-load-more>Load ${Math.min(CATALOG_PAGE_SIZE, items.length - visibleItems.length)} more (${visibleItems.length} of ${items.length})</button>`);
    }
}

function getMoodReason(item, mood) {
    const moodName = mood.replace(/\b\w/g, letter => letter.toUpperCase());
    if (mood === "nostalgic" && Number(item.year) <= 1990) {
        return `A classic from ${item.year}, selected for a nostalgic movie night.`;
    }
    if (mood === "adventurous" && ["Action", "Adventure", "Animation"].includes(item.genre)) {
        return `Its ${item.genre.toLowerCase()} genre brings the sense of adventure you picked.`;
    }
    if (mood === "adventurous" && item.genre === "Fantasy") {
        return "Its story cues point to a journey, exploration, or quest.";
    }
    if (mood === "romantic" && (item.genre === "Romance" || /romance|love|lovers|relationship|wedding|couple|fall for/.test(textOf(item)))) {
        return item.genre === "Romance" ? "A romance pick for a night centered on matters of the heart." : "Its story details point to love or a relationship.";
    }
    if (mood === "spooky" && (item.genre === "Horror" || /ghost|haunt|haunted|demon|nightmare|supernatural|monster|vampire|witch|curse/.test(textOf(item)))) {
        return item.genre === "Horror" ? "Its horror genre fits the eerie mood you picked." : "Its story includes an eerie or supernatural cue.";
    }
    if (mood === "mindbending" && (["Sci-Fi", "Mystery"].includes(item.genre) || /time loop|time travel|dream|reality|parallel|memory|identity|simulation|consciousness|twist/.test(textOf(item)))) {
        return ["Sci-Fi", "Mystery"].includes(item.genre) ? `Its ${item.genre} genre is a natural fit for a mind-bending pick.` : "Its story includes a puzzle, twist, or reality-bending cue.";
    }
    if (mood === "uplifted" && ["Comedy", "Animation", "Adventure"].includes(item.genre)) {
        return `Its ${item.genre.toLowerCase()} genre suits a brighter, more uplifting night.`;
    }
    if (mood === "thoughtful" && ["Drama", "Documentary", "Mystery"].includes(item.genre)) {
        return `Its ${item.genre.toLowerCase()} genre leaves room for reflection.`;
    }
    return `Tagged for ${moodName} in the CineVerse mood guide.`;
}

const searchInput = document.getElementById("movie-search");
const genreButtons = document.querySelectorAll(".genre-button");
const languageSelect = document.getElementById("language-select");
[...new Set(allTitles.map(item => item.language))].sort().forEach(language => {
    const option = document.createElement("option");
    option.value = language;
    option.textContent = language;
    languageSelect.append(option);
});
let selectedGenre = "All";
let selectedLanguage = "All";
let selectedMood = "cozy";

function filterTitles(items) {
    const searchText = searchInput.value.trim().toLowerCase();

    return items.filter(item => {
        const matchesTitle = `${item.title} ${item.language} ${item.region}`.toLowerCase().includes(searchText);
        const matchesGenre = selectedGenre === "All" || item.genre === selectedGenre;
        const matchesLanguage = selectedLanguage === "All" || item.language === selectedLanguage;
        return matchesTitle && matchesGenre && matchesLanguage;
    });
}

function updateCatalogs(resetVisibleCount = false) {
    if (resetVisibleCount) visibleMovieCount = CATALOG_PAGE_SIZE;
    const filteredMovies = filterTitles(movies).filter(item => item.mood.includes(selectedMood));
    renderMovies(filteredMovies, "trending-movies");
    renderWatchlist();
    document.getElementById("catalog-count").textContent = `${filteredMovies.length} curated suggestions match this mood and your filters.`;
    document.getElementById("mood-results-caption").textContent = `${filteredMovies.length} films selected for your ${selectedMood} mood`;
}

function renderWatchlist() {
    const watchlistGrid = document.getElementById("watchlist-grid");
    const savedTitles = watchlistIds
        .map(id => allTitles.find(title => title.id === id))
        .filter(Boolean)
        .filter(item => {
            const searchText = searchInput.value.trim().toLowerCase();
            const matchesSearch = `${item.title} ${item.language} ${item.region}`.toLowerCase().includes(searchText);
            const matchesGenre = selectedGenre === "All" || item.genre === selectedGenre;
            const matchesLanguage = selectedLanguage === "All" || item.language === selectedLanguage;
            return matchesSearch && matchesGenre && matchesLanguage;
        });

    if (savedTitles.length === 0) {
        watchlistGrid.innerHTML = '<p class="empty-watchlist">Your watchlist is empty. Add a movie or show to save it here.</p>';
        return;
    }

    watchlistGrid.innerHTML = savedTitles.map(item => createMovieCard(item, false)).join("");
}

function saveIds(storageKey, ids) {
    try {
        localStorage.setItem(storageKey, JSON.stringify(ids));
        return true;
    } catch (error) {
        showToast("Could not save to browser storage.");
        return false;
    }
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = setTimeout(() => toast.classList.remove("show"), 2400);
}

function toggleWatchlist(itemId) {
    const id = Number(itemId);
    const wasSaved = watchlistIds.includes(id);
    const previousIds = [...watchlistIds];
    watchlistIds = wasSaved
        ? watchlistIds.filter(savedId => savedId !== id)
        : [...watchlistIds, id];

    if (!saveIds(WATCHLIST_KEY, watchlistIds)) {
        watchlistIds = previousIds;
        return;
    }

    updateCatalogs();
    const title = allTitles.find(item => item.id === id);
    showToast(wasSaved ? `Removed ${title.title} from your watchlist.` : `Added ${title.title} to your watchlist.`);
}

function toggleFavorite(itemId) {
    const id = Number(itemId);
    const wasFavorite = favoriteIds.includes(id);
    const previousIds = [...favoriteIds];
    favoriteIds = wasFavorite
        ? favoriteIds.filter(savedId => savedId !== id)
        : [...favoriteIds, id];

    if (!saveIds(FAVORITES_KEY, favoriteIds)) {
        favoriteIds = previousIds;
        return;
    }

    updateCatalogs();
    const title = allTitles.find(item => item.id === id);
    showToast(wasFavorite ? `Removed ${title.title} from favorites.` : `Added ${title.title} to favorites.`);
}

searchInput.addEventListener("input", () => updateCatalogs(true));
document.getElementById("trending-movies").addEventListener("click", event => {
    if (event.target.closest("[data-load-more]")) {
        visibleMovieCount += CATALOG_PAGE_SIZE;
        updateCatalogs();
    }
});

genreButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedGenre = button.dataset.genre;

        genreButtons.forEach(genreButton => {
            const isSelected = genreButton === button;
            genreButton.classList.toggle("active", isSelected);
            genreButton.setAttribute("aria-pressed", isSelected);
        });

        updateCatalogs(true);
    });
});

languageSelect.addEventListener("change", () => {
    selectedLanguage = languageSelect.value;
    updateCatalogs(true);
});

const moodNotes = {
    cozy: "Gentle, warm stories for a softer evening.",
    uplifted: "Bright-hearted films to send you back lighter.",
    thrilled: "Tension, momentum, and stories that keep you leaning in.",
    thoughtful: "Films that leave a little room to think afterward.",
    wonder: "Worlds and ideas that make the familiar feel new.",
    weepy: "Tender, moving stories for letting the feelings out.",
    adventurous: "Big journeys, daring choices, and worlds to explore.",
    romantic: "Love stories, tender chemistry, and matters of the heart.",
    spooky: "Ghosts, monsters, and eerie nights for a little shiver.",
    mindbending: "Puzzles and strange ideas that keep your mind spinning.",
    nostalgic: "Older favorites and timeless stories to revisit."
};

document.querySelectorAll(".mood-button").forEach(button => {
    button.addEventListener("click", () => {
        selectedMood = button.dataset.mood;
        visibleMovieCount = CATALOG_PAGE_SIZE;
        document.querySelectorAll(".mood-button").forEach(moodButton => {
            const selected = moodButton === button;
            moodButton.classList.toggle("active", selected);
            moodButton.setAttribute("aria-pressed", String(selected));
        });
        document.getElementById("mood-note").textContent = moodNotes[selectedMood];
        updateCatalogs();
        document.getElementById("movies").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

updateCatalogs();

const movieModal = document.getElementById("movie-modal");
const modalContent = document.getElementById("modal-content");
const closeModalButton = movieModal.querySelector(".modal-close");

function openMovieModal(itemId) {
    const item = allTitles.find(title => title.id === Number(itemId));

    if (!item) return;

    modalContent.innerHTML = `
        ${item.poster ? `<img class="modal-poster" src="${item.poster}" alt="Movie poster for ${item.title}" data-title="${item.title}">` : `<div class="modal-poster poster-unavailable" role="img" aria-label="Official poster not added for ${item.title}"><span>Poster not added yet</span><small>${item.title}</small></div>`}
        <div class="modal-details">
            <span class="section-kicker">${tvShows.includes(item) ? "TV show details" : "Movie details"}</span>
            <h2 id="modal-title">${item.title}</h2>
            <div class="modal-meta">
                <span class="card-rating">&#9733; ${item.rating}</span>
                <span>${item.year}</span>
                <span>${item.genre}</span>
                <span>${item.language}</span>
                <span>${item.region}</span>
                <span>${item.runtime || runtimes[item.id] || "Runtime not listed"}</span>
            </div>
            <p>${item.description}</p>
        </div>
    `;

    document.body.classList.add("modal-open");
    movieModal.showModal();
}

document.querySelectorAll(".movie-grid").forEach(grid => {
    grid.addEventListener("click", event => {
        const favoriteButton = event.target.closest(".favorite-button");
        const watchlistButton = event.target.closest(".watchlist-button");
        const openButton = event.target.closest(".movie-open, .movie-title-open");

        if (favoriteButton) {
            toggleFavorite(favoriteButton.dataset.itemId);
        } else if (watchlistButton) {
            toggleWatchlist(watchlistButton.dataset.itemId);
        } else if (openButton) {
            openMovieModal(openButton.dataset.itemId);
        }
    });
});

closeModalButton.addEventListener("click", () => movieModal.close());
movieModal.addEventListener("close", () => document.body.classList.remove("modal-open"));

movieModal.addEventListener("click", event => {
    if (event.target === movieModal) movieModal.close();
});

const themeToggle = document.getElementById("theme-toggle");
const backToTopButton = document.getElementById("back-to-top");
const readingProgressFill = document.getElementById("reading-progress-fill");
const quoteElement = document.getElementById("movie-quote");
const quoteButton = document.getElementById("next-quote");
const originalMovieQuotes = [
    "A story can turn a quiet room into a thousand places.",
    "The screen goes dark; the feeling stays lit.",
    "Somewhere, someone made a film for the exact mood you couldn't name.",
    "A subtitle is a small bridge between two enormous worlds.",
    "Cinema lets strangers borrow each other's memories.",
    "One evening, one film, a different version of you.",
    "The best journeys sometimes need no luggage.",
    "A close-up can say what a lifetime could not.",
    "Every language has its own rhythm for wonder.",
    "A good ending knows when to leave the door open.",
    "The world is wider than any one shelf of stories.",
    "A film is a feeling with a beginning and an end.",
    "Some stories arrive like rain after a long summer.",
    "A stranger's story can feel strangely like home.",
    "The right film finds you at the right volume.",
    "A frame is a window that learned to dream.",
    "There are many ways to be brave; cinema keeps count.",
    "Tonight's plan: follow a story somewhere unexpected.",
    "The quietest scene can make the loudest echo.",
    "A small screen can hold a very large sky.",
    "Stories cross borders more easily than maps do.",
    "Some films leave a chair pulled out in your mind.",
    "Wonder often begins with: what if?",
    "A comedy can be a lantern on a difficult day.",
    "A mystery gives curiosity somewhere to walk.",
    "The camera notices what hurry walks past.",
    "A film can lend you courage for two hours.",
    "Every culture keeps a different kind of magic on film.",
    "Let the story choose the pace of the evening.",
    "A good movie night has room for surprise.",
    "Sometimes a new favorite arrives speaking another language.",
    "The credits roll; the conversation begins.",
    "A story doesn't need your passport to move you.",
    "Some moments are too big for ordinary daylight.",
    "Cinema is a map drawn with faces and music.",
    "Let curiosity pick tonight's destination.",
    "A quiet film can make the whole world pause.",
    "Every ending leaves a little weather behind.",
    "Choose a mood. Meet a world.",
    "A story can make distance feel like an invitation.",
    "The best plot twist is finding a perspective you needed.",
    "A film can make time feel hand-made.",
    "No two people leave the same screening carrying the same thing.",
    "Somewhere between silence and music, a film speaks.",
    "The world gets larger when we listen to more stories.",
    "Let tonight be guided by feeling, not habit.",
    "A favorite film is a place you can revisit without moving.",
    "Every frame is a choice about what matters.",
    "Stories help us practice seeing each other.",
    "A beautiful scene can outlast a busy week.",
    "Take the road marked 'I haven't seen that before.'",
    "Some films make a new language feel familiar.",
    "The heart has its own genre filter.",
    "Let a different country set the scene tonight.",
    "A movie can hold a question without rushing an answer.",
    "A shared laugh can travel across any subtitle.",
    "There is a whole world in the films we haven't met yet.",
    "A story is a door that opens inward and outward.",
    "A little suspense makes the sofa feel like an expedition.",
    "A tender scene can be a kind of shelter.",
    "The next story might change the shape of your evening.",
    "Sometimes wonder wears ordinary clothes.",
    "A film gives imagination somewhere to land.",
    "Let the credits be the start of your next thought.",
    "A scene remembered is a scene still happening.",
    "Good stories make room for complicated feelings.",
    "A film can introduce you to a place through its people.",
    "Tonight, follow the feeling that has no name yet.",
    "A quiet room and a brave story are enough.",
    "Every camera has a point of view; every viewer adds another.",
    "A little wonder is a perfectly good evening plan.",
    "Some stories make the unfamiliar feel close.",
    "The right movie can make a long day loosen its grip.",
    "Let the next frame surprise you.",
    "A film doesn't end when the screen does.",
    "There are more ways to tell a story than stars in the sky.",
    "A new perspective is a souvenir that fits in your pocket.",
    "Sometimes the best recommendation is a feeling.",
    "The world speaks in many genres.",
    "A story can make stillness feel like movement.",
    "One honest performance can rearrange a room.",
    "The pause after a film is part of the film.",
    "Somewhere between laugh and tear is a whole kind of truth.",
    "A film can be both an escape and a return.",
    "Each culture dreams in its own colors.",
    "The smaller the detail, the bigger the world it can reveal.",
    "Let tonight's movie be a gentle change of scenery.",
    "Curiosity is the best seat in the house.",
    "A good story remembers that people are never just one thing.",
    "Every language has a way to say 'stay a little longer.'",
    "A film can make an ordinary street feel mythic.",
    "A story shared is a distance shortened.",
    "Let the mood lead; let the movie surprise.",
    "The screen is a meeting place for people who may never meet.",
    "A film can leave you with better questions.",
    "Some stories feel like finding a light on in a faraway house.",
    "There is no wrong mood for a story to meet.",
    "The right scene can give silence a soundtrack.",
    "Tonight's destination is one click and one feeling away.",
    "A movie is a tiny universe with a door for you.",
    "Stories are how places introduce themselves.",
    "A small act of kindness can anchor an entire film.",
    "The best scenes don't ask to be hurried.",
    "Every viewer brings a different sky to the cinema.",
    "A film can hold joy and ache in the same frame.",
    "Somewhere beyond familiar favorites, a story is waiting.",
    "The world is full of stories wearing different subtitles.",
    "A new favorite begins as a stranger.",
    "A film can make the distant feel touchable.",
    "Let the evening unfold one scene at a time.",
    "An unexpected story is a good reason to stay in.",
    "The camera follows; the heart decides where to go.",
    "A quiet story can travel a very long way.",
    "Every ending is an invitation to notice what remains.",
    "Cinema is a little time borrowed from somewhere else.",
    "The best discovery is the one you didn't search for.",
    "A story can be a mirror, a window, or a way through.",
    "Follow the feeling; find the film.",
    "A movie night can begin with one small question: how do I feel?",
    "The world keeps telling stories; we keep finding ourselves in them.",
    "A faraway story can sit right beside you.",
    "Every new voice makes the chorus of cinema richer.",
    "The most memorable journey might last 110 minutes.",
    "Let a film borrow your attention and return a new idea.",
    "A story can soften a hard day without pretending it wasn't hard.",
    "The best scene may be the one you carry home.",
    "Some films make the room feel warmer without changing the thermostat.",
    "A different language can reveal a familiar feeling.",
    "A little tension makes the lights feel cinematic.",
    "A story is a heartbeat arranged into scenes.",
    "The next film doesn't have to be like the last one.",
    "Let wonder take the remote for a while.",
    "A true laugh can make strangers feel like a team.",
    "A thoughtful film leaves space for your own ending.",
    "Every culture brings its own light to the screen.",
    "Some stories don't explain; they accompany.",
    "Find the film that fits the weather inside you.",
    "A frame can carry more than its borders suggest.",
    "The quiet after a great film is a kind of applause.",
    "A story can travel without losing its accent.",
    "Tonight, let the familiar world wait outside the frame.",
    "A new perspective is always worth the subtitles.",
    "The right film can make staying in feel like going far.",
    "A great scene is a memory still being made.",
    "Some stories shine brightest when shared.",
    "A film can ask you to feel before you understand.",
    "Choose a feeling; discover a place.",
    "Every screen is a small invitation to pay attention.",
    "The best stories know that people are bigger than labels.",
    "An evening can change direction at the opening shot.",
    "The world's cinema is too wide for one algorithm to define.",
    "A movie can turn 'somewhere else' into 'I remember.'",
    "A story can be a soft landing or a thrilling launch.",
    "Stay for the feeling after the final image.",
    "The next great story might arrive from a country you can't point to on a map.",
    "A film is a conversation across time, place, and mood.",
    "Let tonight's story be a little outside your usual orbit.",
    "A screen can make room for more than one truth.",
    "The best recommendations know how you're feeling, not just what you watched.",
    "Cinema turns looking into seeing."
];
const movieQuotes = [...originalMovieQuotes];
let currentQuote = 0;
let lastQuote = -1;
quoteElement.textContent = movieQuotes[currentQuote];

quoteButton.addEventListener("click", () => {
    let nextQuote = currentQuote;
    while (movieQuotes.length > 1 && nextQuote === lastQuote) {
        nextQuote = Math.floor(Math.random() * movieQuotes.length);
    }
    lastQuote = currentQuote;
    currentQuote = nextQuote;
    quoteElement.textContent = movieQuotes[currentQuote];
});

function setTheme(theme) {
    const isLight = theme === "light";
    document.body.classList.toggle("light-theme", isLight);
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.textContent = isLight ? "Dark theme" : "Light theme";
}

try {
    setTheme(localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark");
} catch (error) {
    setTheme("dark");
}

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
    setTheme(nextTheme);
    try {
        localStorage.setItem(THEME_KEY, nextTheme);
    } catch (error) {
        showToast("Theme will reset when you close this page.");
    }
});

function updateBackToTopVisibility() {
    backToTopButton.hidden = window.scrollY < 480;
}

let progressUpdateQueued = false;
function updateScrollProgress() {
    if (progressUpdateQueued) return;
    progressUpdateQueued = true;
    window.requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        readingProgressFill.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
        progressUpdateQueued = false;
    });
}

window.addEventListener("scroll", () => {
    updateBackToTopVisibility();
    updateScrollProgress();
}, { passive: true });
window.addEventListener("resize", updateScrollProgress, { passive: true });
updateBackToTopVisibility();
updateScrollProgress();

backToTopButton.addEventListener("click", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});









