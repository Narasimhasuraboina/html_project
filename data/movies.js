// Canonical movie data used by the CineVerse application.
const baseMovies = [
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
            "thoughtful",
            "weepy"
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
            "mindbending",
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
            "romantic"
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
            "thoughtful",
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
            "mindbending",
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
            "romantic",
            "thrilled",
            "thoughtful"
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
            "mindbending",
            "spooky"
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
            "thoughtful",
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
        "genre": "Drama",
        "language": "English",
        "region": "United States",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "Gilbert Grape supports his family while caring for his brother Arnie. When Becky arrives in town, he begins to imagine a life beyond his responsibilities.",
        "poster": "https://image.tmdb.org/t/p/w500/8FxWgsfDNosewo7H65oE4QkOb7g.jpg",
        "id": 1037,
        "runtime": "117 min"
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
            "spooky",
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
        "whyWatch": "Watch a new bride try to make a life in a house still ruled by her husband's first wife. Rebecca's lingering presence turns an intimate marriage story into a quietly unsettling mystery.",
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
        "genre": "Drama",
        "language": "English",
        "region": "United States",
        "mood": [
            "uplifted",
            "thoughtful",
            "weepy"
        ],
        "description": "The true story of boxer Jim Braddock who, following his retirement in the 1930s, makes a surprise comeback in order to lift his family out of poverty.",
        "poster": "https://image.tmdb.org/t/p/w500/wkeOjIcpuqLMW4GnVowlM9VI0JE.jpg",
        "id": 1063,
        "runtime": "145 min"
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
        "year": 1951,
        "rating": 7.342,
        "genre": "Adventure",
        "language": "English",
        "region": "United States / United Kingdom",
        "mood": [
            "adventurous",
            "romantic",
            "thrilled"
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
        "genre": "Drama",
        "language": "English",
        "region": "Canada / United Kingdom",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "After a fatal road accident, Alex visits the victim's mother, Linda, and finds himself drawn into her life. Their growing bond forces him to confront the past and consider how to move forward.",
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
        "rating": 5.3,
        "ratingSource": "IMDb",
        "genre": "Action",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "thrilled"
        ],
        "description": "In a small North Indian town, two brothers choose very different paths. As power, politics, and violence close in, their conflict tests whether they can stand together for justice.",
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
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "uplifted",
            "thoughtful",
            "adventurous"
        ],
        "description": "A rock band of four college students reaches a village controlled by Maoists. Rather than answer violence with violence, they try to use music to change minds and bring people together.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/AALAAP.jpg/250px-AALAAP.jpg",
        "runtime": "118 min",
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
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "thrilled"
        ],
        "description": "Four friends befriend a new girl in their neighborhood after her brother is murdered over a bag. They investigate the bag together and uncover the mystery behind his death.",
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
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "weepy"
        ],
        "description": "After prison leaves Rekha separated from her family, she hides her release when her husband's financial crisis leads him toward another marriage. She sacrifices her own chance at happiness to protect her children and husband.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Vandana_%281975_film%29.jpg/250px-Vandana_%281975_film%29.jpg",
        "runtime": "",
        "id": 1179
    },
    {
        "title": "Sant Gyaneshwar",
        "year": 1964,
        "rating": 7.8,
        "genre": "Drama",
        "language": "Hindi",
        "region": "India",
        "mood": [
            "thoughtful",
            "wonder"
        ],
        "description": "A young Dnyaneshwar faces religious persecution after his family is ostracized, then preaches equality and earns recognition through acts described as miracles. The devotional biography follows his spiritual mission and short life.",
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

const additionalTeluguMovies = [
    {
        "title": "Banda Ramudu",
        "year": 1959,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A thief saves a beautiful princess from the clutches of an evil minister who has his eyes on her. After he saves her, they both fall in love but face many obstacles on their way.",
        "poster": "https://image.tmdb.org/t/p/w500/5tWF61wLyB72bYfIp0l4XB5svo4.jpg",
        "runtime": "126 min",
        "rating": null,
        "tmdbId": 302134,
        "id": 1320
    },
    {
        "title": "Mangalya Balam",
        "year": 1959,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "1959 Indian film starring Akkineni Nageshwara Rao, Savitri and S.V. Ranga Rao",
        "poster": "https://image.tmdb.org/t/p/w500/pzR48qGbFixU57LNqQKjpGNhXhE.jpg",
        "runtime": "177 min",
        "rating": null,
        "tmdbId": 302202,
        "id": 1321
    },
    {
        "title": "Appu Chesi Pappu Koodu",
        "year": 1959,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Ramadasu, a perpetual debtor, wants his son Raghu to marry Manjari in order to acquire Mukunda Rao's assets. But Raghu is already married to Leela and Manjari loves Raja, Leela's brother. Raja and his friend Bhaja Govindam hatch a plan to teach everyone a lesson.",
        "poster": "https://image.tmdb.org/t/p/w500/5v3VAglFXQZJG6Jla60o8QzhjIJ.jpg",
        "runtime": "158 min",
        "rating": null,
        "tmdbId": 307129,
        "id": 1322
    },
    {
        "title": "Illarikam",
        "year": 1959,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Venu, a poor man, falls in love and marries Radha, a zamindar's daughter. When Venu moves into the zamindar's house,there are multiple problems Venu has to battle.",
        "poster": "https://image.tmdb.org/t/p/w500/morYKByOQWpv534YYRD7Vw0j8ju.jpg",
        "runtime": "160 min",
        "rating": null,
        "tmdbId": 307334,
        "id": 1323
    },
    {
        "title": "Bangaru Panjaram",
        "year": 1969,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Venu Gopal is an engineer who travels to various places as part of his projects. In his travel he meets a girl Neela. They both fall in love, and get married. But Venu's uncle wants him to marry his daughter. So he makes various plans and creates mis-understanding between Venu and Neela.",
        "poster": "https://image.tmdb.org/t/p/w500/jCI1JTj8IAzfyHB97tFZO8e79Zh.jpg",
        "runtime": "155 min",
        "rating": null,
        "tmdbId": 301075,
        "id": 1324
    },
    {
        "title": "Varakatnam",
        "year": 1969,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Devasimha and Sujatha's wedding is cancelled due to his father demanding a hefty dowry. As a result, Devasimha decides to marry her in secret and make his father realise his mistake.",
        "poster": "https://image.tmdb.org/t/p/w500/8WjZsQAasDfeYxiY8iRiuP6lrTn.jpg",
        "runtime": "176 min",
        "rating": null,
        "tmdbId": 307489,
        "id": 1325
    },
    {
        "title": "Nindu Hrudayalu",
        "year": 1969,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "When Gopi (NTR) was a child, he witnesses his father's murder by Veeraraju. He grows up with a vengeance to take revenge on him. However because of some circumstances, he has to protect Veeraraju family who has a son and a daughter. He also falls in love with Veeraraju's daughter.",
        "poster": "https://image.tmdb.org/t/p/w500/zNaFrXp0o8LQCxXkZLKsP9y01Mt.jpg",
        "runtime": "175 min",
        "rating": null,
        "tmdbId": 420502,
        "id": 1326
    },
    {
        "title": "Adrushtavanthulu",
        "year": 1969,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Raghu (Akkineni Nageswara Rao) a notorious criminal released from jail after completing his imprisonment as a changed person and challenges the Inspector Murthy (Gummadi) that he is going to live as an honest person and prove himself in the society. So he turns as a truck driver for survival with the help of his friend Jakie (Padmanabham). While delivering goods via his truck, Raghu and Jackie help out a young man, who turns out to be a woman in disguise named Jaya (Jayalalitha).",
        "poster": "https://image.tmdb.org/t/p/w500/hhWu5hqSZkxLyt6KB0vtKyqGV1h.jpg",
        "runtime": "152 min",
        "rating": null,
        "tmdbId": 500608,
        "id": 1327
    },
    {
        "title": "Our Land",
        "year": 1979,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Set between 1945 and 1951 in the pre-Independence state of Hyderabad, the film tells the story of a young peasant, Ramiah, who rebels against the corrupt rule of the Nizam. Baring witness to the oppression and hardship faced daily by those around him, Ramiah leaves his village. However, after befriending a Marxist activist and participating in the Independence struggle, he eventually returns to wage guerilla warfare against the landlord class.",
        "poster": "https://image.tmdb.org/t/p/w500/8spSB6PfJQx5QIYLYnkwnk84tu.jpg",
        "runtime": "152 min",
        "rating": null,
        "tmdbId": 260782,
        "id": 1328
    },
    {
        "title": "Vetagadu",
        "year": 1979,
        "genre": "Mystery",
        "language": "Telugu",
        "region": "India",
        "description": "A greedy accountant murders a wealthy man's wife and deceitfully manages to take over his property. However, fate has other plans in store for him.",
        "poster": "https://image.tmdb.org/t/p/w500/pgP1yYRo5Jj7W1cK3YUZ27aF7gz.jpg",
        "runtime": "152 min",
        "rating": null,
        "tmdbId": 304374,
        "id": 1329
    },
    {
        "title": "Tiger",
        "year": 1979,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Legends of Indian cinema, NTR and Rajinikanth, unite on screen as \"Raja\" and \"Rashid,\" two men with a shared past and a common enemy.",
        "poster": "https://image.tmdb.org/t/p/w500/4lZbGkVItWCsIHqlMgJaX7qmzWr.jpg",
        "runtime": "149 min",
        "rating": null,
        "tmdbId": 331537,
        "id": 1330
    },
    {
        "title": "Idi Katha Kaadu",
        "year": 1979,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "The heroine separates from her husband and lives as a single working mother. Enter into the life of the heroine two men who want to marry her.",
        "poster": "https://image.tmdb.org/t/p/w500/qH2BKjzBZfQkLAKozmFs6DRfbUw.jpg",
        "runtime": "157 min",
        "rating": null,
        "tmdbId": 429534,
        "id": 1331
    },
    {
        "title": "Indrudu Chandrudu",
        "year": 1989,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "A corrupt assistant of an equally corrupt mayor murders his boss and hides the body in a freezer. He finds a look-alike and forces him to pretend to be the mayor. The young man has a different agenda.",
        "poster": "https://image.tmdb.org/t/p/w500/tFybwDhEKSn0yCQ0IJLV1m1yiIU.jpg",
        "runtime": "158 min",
        "rating": null,
        "tmdbId": 66364,
        "id": 1332
    },
    {
        "title": "Sutradhaarulu",
        "year": 1989,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "This film is based on a story against violence shown in a rural background. This message is shown in a short graphic format as an introduction to the film.",
        "poster": "https://image.tmdb.org/t/p/w500/G2HYqlEV8EVOBhsIlDFQZmT0E2.jpg",
        "runtime": "155 min",
        "rating": null,
        "tmdbId": 105356,
        "id": 1333
    },
    {
        "title": "Geethanjali",
        "year": 1989,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Prakash, who is diagnosed with terminal cancer, and Geethanjali, an equally ill patient, fall in love with each other. However, when she learns about his illness, she decides to move out of his life.",
        "poster": "https://image.tmdb.org/t/p/w500/qZVWloCwvgP5JtaqBWoFY6YspzT.jpg",
        "runtime": "137 min",
        "rating": null,
        "tmdbId": 148808,
        "id": 1334
    },
    {
        "title": "Attaku Yamudu Ammayiki Mogudu",
        "year": 1989,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "When young Rekha falls in love with unemployed Kalyan, her high-hat mother, Chamundeshwari, disapproves of the match and devises numerous schemes to drive the lovebirds apart. But Kalyan proves a tougher adversary than Chamundeshwari expects, and soon an intense battle of wills ensues.",
        "poster": "https://image.tmdb.org/t/p/w500/h4dMPtrYPgRFaeAtiWIlUOAw5CL.jpg",
        "runtime": "140 min",
        "rating": null,
        "tmdbId": 279124,
        "id": 1335
    },
    {
        "title": "Rudranetra",
        "year": 1989,
        "genre": "Thriller",
        "language": "Telugu",
        "region": "India",
        "description": "Netra works for a detective agency and is assigned a mission to track down the underworld activities of an influential personality. The situation changes when he gets killed during his mission.",
        "poster": "https://image.tmdb.org/t/p/w500/9om7P8GK9UGkFMjqG9HiG5XJqzS.jpg",
        "runtime": "126 min",
        "rating": null,
        "tmdbId": 279126,
        "id": 1336
    },
    {
        "title": "State Rowdy",
        "year": 1989,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "An aspiring police officer changes the course of his life when he is unable to achieve his dream due to dirty politics. Then, he turns into an outlaw and decides to eliminate crime on his own.",
        "poster": "https://image.tmdb.org/t/p/w500/AwlOFa2CPWnumr9zcLbaUQfZBJy.jpg",
        "runtime": "151 min",
        "rating": null,
        "tmdbId": 279127,
        "id": 1337
    },
    {
        "title": "Lankeshwarudu",
        "year": 1989,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Shankar decides to leave behind his life as a gangster and lead a normal life. However, when his brother-in-law's life is at stake, he decides to rethink his decision.",
        "poster": "https://image.tmdb.org/t/p/w500/fOt2Ckvc3Hf9rMtbRXkkpIgrq76.jpg",
        "runtime": "140 min",
        "rating": null,
        "tmdbId": 279128,
        "id": 1338
    },
    {
        "title": "Ontari Poratam",
        "year": 1989,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Priyanka, a rich heiress, cheats a poor uneducated Raja, which leads to an unfortunate death. As a result, Raja decides to teach Priyanka a lesson in humility & challanges her that he will earn double the money what she has, with a condition that if she looses the bet, then she should marry him.",
        "poster": "https://image.tmdb.org/t/p/w500/xc3uN3cYnUQJtJWvFKm9Av26a44.jpg",
        "runtime": "133 min",
        "rating": null,
        "tmdbId": 279499,
        "id": 1339
    },
    {
        "title": "Samarasimha Reddy",
        "year": 1999,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "A man claims to be the long-lost brother of three sisters, returning to help improve their lives. His true identity, and the intention behind his scheme, is revealed in a Rayalaseema-set flashback.",
        "poster": "https://image.tmdb.org/t/p/w500/yDDu07KAOaKKud0GaRQpZoIT5T4.jpg",
        "runtime": "148 min",
        "rating": null,
        "tmdbId": 80827,
        "id": 1340
    },
    {
        "title": "Swayamvaram",
        "year": 1999,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Though Venu and Anu hate each other initially, they eventually fall in love when they keep meeting each other due to a common friend, Bose, who incidentally is also in love with Anu.",
        "poster": "https://image.tmdb.org/t/p/w500/6NCF4MgJhYEfPK6elBDQgBJkshH.jpg",
        "runtime": "150 min",
        "rating": null,
        "tmdbId": 82728,
        "id": 1341
    },
    {
        "title": "Nee Kosam",
        "year": 1999,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Sasirekha (Maheswari) is the daughter of a rich father (Jayaprakash Reddy), who is a strict disciplinarian and hates any kind of love affair. Ravi (Ravi Teja), an orphan, falls in love with Sasi and she also slowly develops feelings for Ravi. One day Ravi meets Sasi's father in the outskirts of the city and tells him all about his love. However, he is accidentally killed by Ravi in a scuffle. Sasi soon finds out that the real culprit is Ravi. Infuriated, she breaks up with him. Ravi, unable to bear the rejection, jumps from a hill. He escapes death, only to be told by the doctors that he is disabled and might be cured in the future if someone took care of him. In the climax, Sasi decides to stay with Ravi, who is nothing but a vegetable now, stating that what ever he did was just because of his love for her and she still is in love with him.  (Wikipedia -  Creative Commons Attribution-ShareAlike License)",
        "poster": "https://image.tmdb.org/t/p/w500/tUJmFiX5w8hOWYcX8mlCneR72v3.jpg",
        "runtime": "145 min",
        "rating": null,
        "tmdbId": 137451,
        "id": 1342
    },
    {
        "title": "Iddaru Mitrulu",
        "year": 1999,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Vijay (Chiranjeevi) and Sakshi Sivanand are best friends. They share their thoughts, happiness and pain with each other. One day she finds love in a photographer (Suresh) and marries him, while Vijay plays a lover boy and marries Ramya Krishna. However, Sakshi's happiness ends when she finds out that her husband is two-timing her. Vijay consoles her but his wife is unhappy that he spends so much time with her and gives him an ultimatum. He chooses his friend and takes care of her and her unborn child and later reunites her with her husband.",
        "poster": "https://image.tmdb.org/t/p/w500/lMQ3psGEXNBgGEgFe9iPAqqB14q.jpg",
        "runtime": "142 min",
        "rating": null,
        "tmdbId": 210055,
        "id": 1343
    },
    {
        "title": "Ravoyi Chandamama",
        "year": 1999,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Raavoyi Chandamama is a 1999 Telugu romance film produced by C. Ashwini Dutt under the Vyjayanthi Movies banner and directed by Jayanth C. Paranjee. It stars Nagarjuna Akkineni, Anjala Zhaveri, Keerthi Reddy and Jagapati Babu in the lead roles, with music composed by Mani Sharma.",
        "poster": "https://image.tmdb.org/t/p/w500/vZmAozIlJRQzlxLwPJdhP47p6Et.jpg",
        "runtime": "156 min",
        "rating": null,
        "tmdbId": 214022,
        "id": 1344
    },
    {
        "title": "Raja",
        "year": 1999,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A story about a petty thief Raja, and how his life changes when he meets Anjali in a robbery gone wrong.",
        "poster": "https://image.tmdb.org/t/p/w500/inPdpCbRKruQQ8AC1i9QpN0C2zi.jpg",
        "runtime": "166 min",
        "rating": null,
        "tmdbId": 267779,
        "id": 1345
    },
    {
        "title": "Premaku Velayera",
        "year": 1999,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "A young man plans to climb the ladder of success by trying to woo his rich uncle's daughter.",
        "poster": "https://image.tmdb.org/t/p/w500/1QjiiSgTaxZgJHkH0KkXh39xfP.jpg",
        "runtime": "140 min",
        "rating": null,
        "tmdbId": 274569,
        "id": 1346
    },
    {
        "title": "Seenu",
        "year": 1999,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Shwetha falls in love with Seenu, whom she supposes to be speech-impaired. Seenu feels guilty and asks a doctor to cut off his tongue to win her love.",
        "poster": "https://image.tmdb.org/t/p/w500/tpSCGyb22erfEI5ByHEbbqNCvqQ.jpg",
        "runtime": "153 min",
        "rating": null,
        "tmdbId": 279471,
        "id": 1347
    },
    {
        "title": "Sultan",
        "year": 1999,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Sultan is a action oreinted movie in which, Balakrishna played dual roles in this movie (Sultan and Prutivi) where as Krishna played a role CBCID officer.story of the movie is about Sultan who is currently wanted person in police list because of his crimes done to the society and Sekhar (Krishna) is given the task of nabbing Sultan. Rest of the movie about how sultan escapes from CBI officers.",
        "poster": "https://image.tmdb.org/t/p/w500/o9V9CJxW1yHlmpm05HZHMWeWkXh.jpg",
        "runtime": "143 min",
        "rating": null,
        "tmdbId": 280342,
        "id": 1348
    },
    {
        "title": "Rajakumarudu",
        "year": 1999,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "While on a holiday, Raja meets and falls in love with Rani but breaks off the relationship due to family compulsions. Later, when he has all but given up hope of seeing her again, he gets a surprise.",
        "poster": "https://image.tmdb.org/t/p/w500/bRAolwN5E008wk4zmsmjIgEv6iL.jpg",
        "runtime": "157 min",
        "rating": null,
        "tmdbId": 281423,
        "id": 1349
    },
    {
        "title": "Prema Katha",
        "year": 1999,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "A love story set in a rural backdrop between a poor village boy, Suri, and a rich upper class girl, Divya, much to the opposition of the latter's violent brother who will go to any length to end it",
        "poster": "https://image.tmdb.org/t/p/w500/iF4WvZAncpSFNEeKHGyqdTNguEZ.jpg",
        "runtime": "155 min",
        "rating": null,
        "tmdbId": 281963,
        "id": 1350
    },
    {
        "title": "Samudram",
        "year": 1999,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "A.K. Sagar lives a middle-classed lifestyle near Versova, Mumbai, along with his widowed mother, and sister, Chandi. He gets in the bad books of Adi Koli, the brother of to-be M.L.A. Baba Koli, who lives with his mentally impaired sister, Kanak Mahalaxmi, when he interferes with their Hafta collections. Adi then attempts to sexually molest Chandi, and Sagar hunts him down and beats him up. Then Sagar's life changes when he meets with a wealthy young woman and both fall in love with each other. He and his mother seek out a suitable bachelor for Chandi to get married to. Sagar and his girlfriend part ways temporarily as she has to go abroad. A few weeks when she returns - nothing is the same anymore.",
        "poster": "https://image.tmdb.org/t/p/w500/sGFaEz8rXLPQ0YAN0hlrXHE0c7e.jpg",
        "runtime": "167 min",
        "rating": null,
        "tmdbId": 303307,
        "id": 1351
    },
    {
        "title": "Seetharama Raju",
        "year": 1999,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "This is a story of two brothers who love each other a lot. The rivalry between the families of Sitaiah and Basava Raju leads to the death of Sitaiah and Ramaraju taking his revenge",
        "poster": "https://image.tmdb.org/t/p/w500/npWPpLZcPrhRljjukUJAZZuSx4G.jpg",
        "runtime": "166 min",
        "rating": null,
        "tmdbId": 303318,
        "id": 1352
    },
    {
        "title": "Devi",
        "year": 1999,
        "genre": "Fantasy",
        "language": "Telugu",
        "region": "India",
        "description": "Devi, a snake goddess, stays on earth to protect the girl whose father saved her life from greedy relatives and from the snake demon, Dantra.",
        "poster": "https://image.tmdb.org/t/p/w500/j8fytkjNFmBz9Ip1fb8XvbaLlBD.jpg",
        "runtime": "138 min",
        "rating": null,
        "tmdbId": 417291,
        "id": 1353
    },
    {
        "title": "English Pellam East Godavari Mogudu",
        "year": 1999,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "The movie is about a lady Sireesha (played by Ramya Krishna) who wants to experiment the concept of dating in a culture conscious country like India.",
        "poster": "https://image.tmdb.org/t/p/w500/zNmqNFTee9JPlO6ESjq7HNuJO7c.jpg",
        "runtime": "127 min",
        "rating": null,
        "tmdbId": 485788,
        "id": 1354
    },
    {
        "title": "Sneham Kosam",
        "year": 1999,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Prabhavati lives a wealthy lifestyle in India with her dad, mom, and elder sister, Rani. Rani is of marriageable age and her marriage is arranged with her mom's half-brother, but just after the marriage one of their servants, Sheroo, a close friend of her dad's, kills her mother, is arrested by the Police, tried in Court, and sentenced to 15 years in jail. Since that day relations have been strained between her dad, Rani, and her husband. She re-locates to U.S.A. to study, and when she returns she finds that Sheroo's has been replaced by his son, Veeru, and runs their household, while there has been no improvement in the relationship between her dad and Rani and her family, which also includes, Veena, Rani's daughter. Prabhavati attempts to bridge the misunderstandings between her dad and sister, but to no avail, and when she proposes to get married to Rani's nephew, Ranjeet, her father opposes this tooth and nail. Then Sheroo is discharged from prison and returns home to find that ...",
        "poster": "https://image.tmdb.org/t/p/w500/8CJ1YQ7772C0GObelY5pYAp8MCy.jpg",
        "runtime": "169 min",
        "rating": null,
        "tmdbId": 500189,
        "id": 1355
    },
    {
        "title": "Postman",
        "year": 1999,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Vishnu, a postman in Hyderabad, is adored by all and Sirisha develops feelings for him. But it turns out that he loves Archana, who is imprisoned in connection with a bomb explosion case.",
        "poster": "https://image.tmdb.org/t/p/w500/eBsz3PdZ1HtWV1On2bTk7j2tYLW.jpg",
        "runtime": "145 min",
        "rating": null,
        "tmdbId": 521438,
        "id": 1356
    },
    {
        "title": "Alludugaaru Vachcharu",
        "year": 1999,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Murali helps his childhood friend Mahalakshmi and pretends to be her husband so that she can avoid an arranged marriage. However, destiny has other plans and the two slowly start falling in love.",
        "poster": "https://image.tmdb.org/t/p/w500/5AmT5fq9d9dlsnNzuONNXQMpWNs.jpg",
        "runtime": "152 min",
        "rating": null,
        "tmdbId": 528904,
        "id": 1357
    },
    {
        "title": "Preyasi Raave",
        "year": 1999,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Vamsi gives his everything to win the love of Mahalakshmi. However, when Mahalakshmi is married to someone else by deception, he has to make a final sacrifice for her happiness.",
        "poster": "https://image.tmdb.org/t/p/w500/vayTqS7I1ghadOGWS8Ji9B9F4E4.jpg",
        "runtime": "153 min",
        "rating": null,
        "tmdbId": 992813,
        "id": 1358
    },
    {
        "title": "Preminchedi Endukamma",
        "year": 1999,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Sunil is a carefree college student. Swapna is his classmate. Sunil loves Swapna and vice versa. Jagan is the father and the only parent of Swapna, who is obsessed with the well-being of his beloved daughter. Sunil and Jagan have a few showdowns. Jagan do not like the attitude of Sunil. When Swapna confides Jagan that she is in love, he is visibly delighted. His excitement becomes a short-lived one as he realizes later that his daughter's choice is none but the cockish Sunil.",
        "poster": "https://image.tmdb.org/t/p/w500/5i2D9fFXvy3gzrh2XMZ2KdnpuY3.jpg",
        "runtime": "138 min",
        "rating": null,
        "tmdbId": 1022110,
        "id": 1359
    },
    {
        "title": "Billa",
        "year": 2009,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "A police inspector sends a gangster-lookalike to uncover the gang's secrets.",
        "poster": "https://image.tmdb.org/t/p/w500/dJlJskiQFVDcWdb2f9FGl23x84m.jpg",
        "runtime": "149 min",
        "rating": null,
        "tmdbId": 23766,
        "id": 1360
    },
    {
        "title": "Rechipo",
        "year": 2009,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Siva (Nitin) is a thief. He robs the Peter to pay Paul on the lines of Robin hood. He always robs the black money from rich persons and spends it for the education of orphans and for a good cause. Siva robs Rs 500 crores from the Home Minister's house. While escaping under disguise he meets Krishnaveni (Ileana) and both fall in love. The rest of the story takes twists and turns where Krishnaveni is kidnapped by the mafia later to be saved by Siva.",
        "poster": "https://image.tmdb.org/t/p/w500/mUEwlb3u4GnWXmoTsk9FIBFlQDu.jpg",
        "runtime": "152 min",
        "rating": null,
        "tmdbId": 23773,
        "id": 1361
    },
    {
        "title": "Baanam",
        "year": 2009,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "The story is set in the town of Ranasthali, in year 1989. Bhagat Panigrahi (Nara Rohit) is preparing to become a police officer. His father Chandrasekhar Panigrahi (Sayaji Shinde), a former Naxalite returns after 20 years before giving up his fight for the society for the reasons only known to him. He comes back home and questions his son's ambition of becoming a Police Officer. Meanwhile a local don, Shakti Patnaik (Randhir Gatla) is slowly building his empire, terrorizing police and anyone who opposes him. One day, Bhagat meets Subbalaxmi (Vedhicka) at the railway station and rescues her from the tragedy of her life. When her ex-husband involves Shakti's gang to abduct her, it triggers a series of consequences between Bhagat and Shakti. The rest is about how Bhagat never gives anything for his ambition, which inspires others to stand up for the fight against the tyranny of Shakti.",
        "poster": "https://image.tmdb.org/t/p/w500/dVYB4C28zdULXZBGG5Z20f547pS.jpg",
        "runtime": "115 min",
        "rating": null,
        "tmdbId": 23783,
        "id": 1362
    },
    {
        "title": "Shankam",
        "year": 2009,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "When his girlfriend is forced to return to India, a happy-go-lucky man follows her and upon asking for their marriage is tasked with picking up a violent but timid relative while making sure the rival villagers don't get a chance to attack him.",
        "poster": "https://image.tmdb.org/t/p/w500/skjFB8VEHZAVfG4Hp3lgIZSJAZd.jpg",
        "runtime": "155 min",
        "rating": null,
        "tmdbId": 23784,
        "id": 1363
    },
    {
        "title": "Anjaneyulu",
        "year": 2009,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Employed with HMTV, Pavan/Abhimanyu lives in Hyderabad and is in constant touch with his retired father, Krishnamurthy, and mother. His boss, Sudarshan Babu, hires a Creative Consultant, Surya/Prabhakar Garu, their TV channel undergoes a number of changes, and he gets to interview various people. He meets with Anjali, an employee with Airtel, and both dramatically fall in love. While investigating corrupt politicians, he comes across evidence and decides to join the gang of a gangster named Bada. Still involved in gathering evidence, his world will come crashing around him when he will be told that his parents and many others have been killed after their bus was torched by hooligans. He sets out to also trace who was responsible behind their killing - not knowing that his life is also in danger.",
        "poster": "https://image.tmdb.org/t/p/w500/ves5gDgzAFXOqSSWKCyuom3f7l3.jpg",
        "runtime": "155 min",
        "rating": null,
        "tmdbId": 23788,
        "id": 1364
    },
    {
        "title": "A Aa E Ee",
        "year": 2009,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Chandram (Srikanth) is a cab driver and a honest man. His wife is Kalyani (Meera Jasmine). They are a childless couple. When Kalyani gets tested positive for pregnancy, the doc tells him that she needs to be operated to avoid complications. The operation would cost around 8 lacs. Being a middle class man, Chandram doesn't have that much money. That is when he comes across an accident on railway track where the body of an unidentified woman is found. He also finds a bag with lots of money beside the corpse. his friend advise him to tell the cops that the dead woman is his wife. He gets the postmortem done and manages the cops and doctor. He finds out that the dead girl is Ramya (Sada). Parents of Ramya come to know about it and ask chandram to do the final rites as they thought that he is her husband (she elopes from house with her boyfriend). The story takes turn when Ramya returns at the time of last rites.",
        "poster": "https://image.tmdb.org/t/p/w500/rejeSiKlLJrgiIX9mu7SEdxsvgr.jpg",
        "runtime": "155 min",
        "rating": null,
        "tmdbId": 23969,
        "id": 1365
    },
    {
        "title": "Arundhati",
        "year": 2009,
        "genre": "Horror",
        "language": "Telugu",
        "region": "India",
        "description": "During a visit to her hometown, Arundhati learns that she looks like her great-grandmother, Jejamma. Soon, Jejamma's battles become her own as she fights a black magician who wants to kill her.",
        "poster": "https://image.tmdb.org/t/p/w500/xQ0mGlnlAt6wLWZc3rm6LGFPzwl.jpg",
        "runtime": "132 min",
        "rating": null,
        "tmdbId": 31629,
        "id": 1366
    },
    {
        "title": "Aarya 2",
        "year": 2009,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Two young boys staying together at an orphanage become friends. One of them is adopted by a wealthy family and grows up to become the owner of a software company. He provides employment for his friend, but when they both fall in love with the same young woman, conflict emerges.",
        "poster": "https://image.tmdb.org/t/p/w500/kjbbx8kV6pNhNXX9aRsVDwyEJbm.jpg",
        "runtime": "155 min",
        "rating": null,
        "tmdbId": 34763,
        "id": 1367
    },
    {
        "title": "Sasirekha Parinayam",
        "year": 2009,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Spirited Sasirekha is ordered by her father to get married to an NRI groom. When the groom’s father demands dowry on the wedding day, she runs away from her marriage.  Soon after, she meets Anand who helps her deal with various difficult situations.",
        "poster": "https://image.tmdb.org/t/p/w500/jr5nb7LUnHxu79IKDw42QMM7ToT.jpg",
        "runtime": "162 min",
        "rating": null,
        "tmdbId": 37815,
        "id": 1368
    },
    {
        "title": "Ek Niranjan",
        "year": 2009,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "A bounty hunter searches for the family he was separated from as a child, and falls in love with the sister of a gang member.",
        "poster": "https://image.tmdb.org/t/p/w500/tT0ElSp7p8d8Wsgv6Z1xFmLL8lY.jpg",
        "runtime": "150 min",
        "rating": null,
        "tmdbId": 38220,
        "id": 1369
    },
    {
        "title": "Kick",
        "year": 2009,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Kalyan is a kind of guy who prefers a life full of thrills than leading a regular life style. He seeks kick in whatever he does. He finds liking in Naina. They separate due to differences. Krishna is a young cop who is in lookout for a big ticket thief who happens to be Kalyan. Meanwhile, Naina agrees for an engagement with Krishna. The rest of the story is all about how Kalyan wins back his lady love and the real intent behind the robberies of Kalyan.",
        "poster": "https://image.tmdb.org/t/p/w500/lei28oUtPXyzGjkf6YKaIlAscAV.jpg",
        "runtime": "155 min",
        "rating": null,
        "tmdbId": 60807,
        "id": 1370
    },
    {
        "title": "Ganesh",
        "year": 2009,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "In order to help a friend, Ganesh pretends to love a girl. She hates him when she finds out the truth. Eventually, he truly falls in love with her and must convince her of his true feelings.",
        "poster": "https://image.tmdb.org/t/p/w500/j1YEtnuQ6yaZZdDMN6Jd1gzrtEg.jpg",
        "runtime": "150 min",
        "rating": null,
        "tmdbId": 81050,
        "id": 1371
    },
    {
        "title": "Maska",
        "year": 2009,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Krish is a happy-go-lucky guy who lives with his brother and sister-in-law. He woos a girl named Manju. Manju happens to be the daughter of a Mla Simhachalam. Krish's only intention is to become rich by marrying her and doesn't have any feelings whatsoever toward her. He also meets a girl called Meenakshi, aka Meenu ; he starts to like her for real and falls in love with her. Meanwhile, Simhachalam and Shinde run against each other in a presidential election in Delhi. Shinde is a man of misdeeds. Shinde tries to find faults in Simhachalam's personal life so that he can expose him in front of the high command of the party, so that his route will be clear to get the party ticket. Shinde comes to learn that Simhachalam has another wife (Sita) and a daughter who live in Hyderabad. He sends his men to find them. .",
        "poster": "https://image.tmdb.org/t/p/w500/9xDHJwQSYLIe7fsa8m23Nd4Tvx2.jpg",
        "runtime": "150 min",
        "rating": null,
        "tmdbId": 81087,
        "id": 1372
    },
    {
        "title": "Prayanam",
        "year": 2009,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "This is a story of a boy and girl who meet for the first time in an airport and fall in love before they board their respective flights. Dhruv is the boy and Harika is the girl. Both of them are two distinctive individuals. Dhruv is a kind of boy who loves to take chances in life. Harika is the one who likes to make right choices in life, She is doing Masters in Lifestyles Design Academy in Malaysia. Right now she is on her way to INDIA to meet a prospective groom whom her parents have chosen for her. Dhruv falls in love at first sight with Harika when he sees her in airport. But he has only two hours to make her fall in love with him. The rest of the story is all about how he succeeds in it.",
        "poster": "https://image.tmdb.org/t/p/w500/iIYZn1knh5WXd2fEgGGenFclpBW.jpg",
        "runtime": "150 min",
        "rating": null,
        "tmdbId": 81898,
        "id": 1373
    },
    {
        "title": "Konchem Ishtam Konchem Kashtam",
        "year": 2009,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Geeta's father disapproves of her relationship with Siddhu as he isn't too pleased with the fact that the latter's parents are divorced. Determined to marry Geeta, Siddhu promises to reunite his parents.",
        "poster": "https://image.tmdb.org/t/p/w500/dT3MwBS3X0FJx22GngeMom8mKI4.jpg",
        "runtime": "165 min",
        "rating": null,
        "tmdbId": 85810,
        "id": 1374
    },
    {
        "title": "Oy!",
        "year": 2009,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Uday, a rich businessman, falls in love with a simple girl named Sandhya. He gets to know that Sandhya is terminally ill but still pursues her and teaches her to seize every moment of her short life.",
        "poster": "https://image.tmdb.org/t/p/w500/rtbyMYxBv5hV0lJQHbbqI4l0Z8J.jpg",
        "runtime": "160 min",
        "rating": null,
        "tmdbId": 86607,
        "id": 1375
    },
    {
        "title": "Pravarakyudu",
        "year": 2009,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Sasi and Sailaja are good friends during their post-graduation time. Sailaja loves him, but Sasi’s ideology about love irritates Sailaja and both of them separate their ways. Sasi settles as a professor in Harvard University. He comes to Hyderabad to look out for a suitable girl. He then realizes that Sailaja works as a principal in a women’s college and she is unmarried too. The rest of the story is all about how Sasi makes Sailaja fall in love with him again.",
        "poster": "https://image.tmdb.org/t/p/w500/r4uq2ORghpvVQ8TnWMugDsiIdPu.jpg",
        "runtime": "158 min",
        "rating": null,
        "tmdbId": 94978,
        "id": 1376
    },
    {
        "title": "Bendu Apparao R.M.P",
        "year": 2009,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Dr Bendu Apparao uses any means possible to swindle money from his unsuspecting patients. A dying man leaves him with a huge amount to return to his family, but Bendu Apparao ends up using it for other means.",
        "poster": "https://image.tmdb.org/t/p/w500/yTFIIb18ZigVCf7SmI0ouEosfbN.jpg",
        "runtime": "145 min",
        "rating": null,
        "tmdbId": 117008,
        "id": 1377
    },
    {
        "title": "Jayeebhava",
        "year": 2009,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Returning from abroad, a man and his girlfriend must unite their fathers who belong to two warring groups.",
        "poster": "https://image.tmdb.org/t/p/w500/2O9jjFiBaPYtX0ARyFo0vad7Byo.jpg",
        "runtime": "145 min",
        "rating": null,
        "tmdbId": 117420,
        "id": 1378
    },
    {
        "title": "Mahatma",
        "year": 2009,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "An uninhibited goon decides to become a member of the Indian Legislative Assembly.",
        "poster": "https://image.tmdb.org/t/p/w500/iSOuXs1l6ImvsRTQoFiNxkv9oI4.jpg",
        "runtime": "145 min",
        "rating": null,
        "tmdbId": 137273,
        "id": 1379
    },
    {
        "title": "Mitrudu",
        "year": 2009,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Aditya (Nandamuri Balakrishna) is a loner who is depressed and he stays in Malaysia. Indu (Priyamani) is the daughter of a billionaire businessman and she studies in Malaysia. Her astrologer back home tells her the attributes of her ideal choice and those attributes meet that of Aditya’s. After a few failed attempts, Aditya accepts the proposal of Indu and gets married to her. The rest of the story is all about why Aditya is depressed and is about the real reason behind Indu chasing Aditya and marrying him",
        "poster": "https://image.tmdb.org/t/p/w500/g2arTu9wVCKqzisPsg1or5L69JV.jpg",
        "runtime": "145 min",
        "rating": null,
        "tmdbId": 137353,
        "id": 1380
    },
    {
        "title": "Drona",
        "year": 2009,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Drona (Nitin) is the only son of Mukhesh Rushi and Sita. Drona’s father Mukesh Rushi is an honest and dedicated Police officer. Drona likes his mother Meenakshi (Sita) so much and love her as his own life. When he was a child Drona steals his father’s revolver to scare his friends. On knowing this his father scolds him, consequently Drona leaves his home and gets lost. After 10 years, he comes back to his parents with the name Chandu. A Neighboring girl Indu (Priyamani) likes Drona/Chandu a lot. On a fateful day, she finds out that Chandu is none other than the long lost boy, Drona",
        "poster": "https://image.tmdb.org/t/p/w500/gLb0QcZMO0orvvGxcFUOrwFOn6O.jpg",
        "runtime": "148 min",
        "rating": null,
        "tmdbId": 226846,
        "id": 1381
    },
    {
        "title": "Saleem",
        "year": 2009,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Satyavati (Ileana) is the daughter of a rich and idealistic landlord/factionist in Rayalaseema. She is brought up in Europe for the past 15 years. She visits her home town after a long gap and she is attacked by the rival factionist. Munna (Vishnu Manchu) comes from nowhere and rescues her. Then he settles in her house as a worker and earns the love and trust of all Satyavati’s family members. He loves Satyavati. But Satyavati’s father wants to marry off to another guy. Just about when the marriage is going to happen, it is revealed that Satyavati has a lover (Venkat) from Europe and she uses Munna to help her escape to Europe. Just when Satyavati goes to Europe, it is revealed that Munna is none but a mafia kingpin from Bangkok called Saleem and Satyavati lover’s brother is none but a dreaded European don called OJo a.k.a. Ogiraja Jogayya (Mohan Babu). The rest of the story is all about how Saleem wins Satyavati over with his one-side love and his encounters with OJo.",
        "poster": "https://image.tmdb.org/t/p/w500/9z8fcf8vtta3BMiYmcCY1psm4Ky.jpg",
        "runtime": "164 min",
        "rating": null,
        "tmdbId": 260013,
        "id": 1382
    },
    {
        "title": "Gopi Gopika Godavari",
        "year": 2009,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Gopi and Gopika fall in love through phone conversations before meeting. After Gopi is injured on his way to see her, Gopika treats him without realizing he is the man she has come to love.",
        "poster": "https://image.tmdb.org/t/p/w500/uR3ZYkmcyKJZn3uJqTOB0qU4x2L.jpg",
        "runtime": "150 min",
        "rating": null,
        "tmdbId": 281403,
        "id": 1383
    },
    {
        "title": "Villagelo Vinayakudu",
        "year": 2009,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Villagelo Vinayakudu (English: Vinayakudu (Ganesh) in the Village) is a 2009 Telugu comedy film produced by Mahi, written, and directed by Sai Kiran Adivi. The film is a sequel to the 2008 hit, Vinayakudu. Krishnudu reprises his role as Karthik in this film, whilst Saranya Mohan plays the female lead, and Rao Ramesh plays the role of her father. Telugu novel writer Yandamuri Veerendranath makes his acting debut in a small but vital role. The film was released on 5 November 2009 and received positive reviews.[citation needed] It faired well at the box office and ran for 75 days.",
        "poster": "https://image.tmdb.org/t/p/w500/nw69vMrGUsrLPF7EcSOfImMAUYR.jpg",
        "runtime": "155 min",
        "rating": null,
        "tmdbId": 281936,
        "id": 1384
    },
    {
        "title": "Ride",
        "year": 2009,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Arjun, a motorcycle enthusiast, couldn't afford to buy his own bike. Meanwhile, Mahesh needed a motorcycle to secure a job he was applying for. His mother helped him by selling her silver jewelry. However, Mahesh's bike was soon stolen, and despite his frantic search and the police's involvement, he had little success in recovering it. By chance, Mahesh spotted his stolen bike in Arjun's possession. Arjun claimed to have purchased the bike from a stranger with his own money...",
        "poster": "https://image.tmdb.org/t/p/w500/dPRnwkMVaKXFTe4fpa5lUNzHkY6.jpg",
        "runtime": "149 min",
        "rating": null,
        "tmdbId": 322286,
        "id": 1385
    },
    {
        "title": "Boni",
        "year": 2009,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "DD and Chinna are are brought up in an orphanage. They are very fond of Saraswatamma who took care of them. Saraswatamma is very good at preparing tamarind rice (pulihora). DD wants to start a pulihora center on the memory of Saraswatamma when he grows up. He needs 7 lacs for that. In order to earn the money, he joins a mafia gang. Pragati is the daughter of a billionaire politician. She is kind hearted and runs a charity organization. She comes to know that a landlord in a village has bought most of the lands forcibly from the village men. Court asks the farmers to pay 4 crores together to regain their lands. When Pragati realized that her father has gone against her wish of helping those farmers, her friend sketches a self-kidnap plan to demand 4 crores as ransom. And things go wrong when DD and Chinna kidnap her at the same time when she is supposed to be self-kidnapped. The rest of the story is all about how DD and Pragati realize their missions together.  - Written by Jeevi",
        "poster": "https://image.tmdb.org/t/p/w500/iXkWthfaVPjp0gScgx8nKePhlmt.jpg",
        "runtime": "148 min",
        "rating": null,
        "tmdbId": 367559,
        "id": 1386
    },
    {
        "title": "Bangaru Babu",
        "year": 2009,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Ravindra, the chairman of a college management board, wants to reform Hari, a short-tempered student who is addicted to drugs. But his insistence on changing Hari begins affecting his personal life.",
        "poster": "https://image.tmdb.org/t/p/w500/ssuhT6VDhYM2dUtO2CK54AbioeB.jpg",
        "runtime": "154 min",
        "rating": null,
        "tmdbId": 531013,
        "id": 1387
    },
    {
        "title": "Posani Gentleman",
        "year": 2009,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "A 2009 Indian Telugu comedy film starring Posani Krishna Murali and Aarthi Agarwal.",
        "poster": "https://image.tmdb.org/t/p/w500/8XHojm6fL8fXThPExrneabewfEM.jpg",
        "runtime": "120 min",
        "rating": null,
        "tmdbId": 950654,
        "id": 1388
    },
    {
        "title": "Eenadu",
        "year": 2009,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "The police commissioner of Hyderabad confronts an anonymous caller who has planted bombs in the city and will let them explode if four  terrorists are not freed from the police custody.",
        "poster": "https://image.tmdb.org/t/p/w500/lNIz02aOQKj4i4nXcXIeqJlSBbQ.jpg",
        "runtime": "102 min",
        "rating": null,
        "tmdbId": 977408,
        "id": 1389
    },
    {
        "title": "Katha",
        "year": 2009,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "After her family gets murdered, Chitra, a lonely girl, spends a year in an asylum. She is petrified when she witnesses another murder and refuses to believe that it is her hallucination.",
        "poster": "https://image.tmdb.org/t/p/w500/aI1UbBFvYSoclZZG65BK3h8hgm4.jpg",
        "runtime": "150 min",
        "rating": null,
        "tmdbId": 1062946,
        "id": 1390
    },
    {
        "title": "Sontha ooru",
        "year": 2009,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Sontha Ooru is a film about rural life and how the innocent villagers are continuously exploited by the development plans of the government. The film portrays the Special economic zone victims and its impact on normal life.",
        "poster": "https://image.tmdb.org/t/p/w500/wBipmnY8TgeLR9HeUAcpBPGNY8q.jpg",
        "runtime": "120 min",
        "rating": null,
        "tmdbId": 1189228,
        "id": 1391
    },
    {
        "title": "Chintakayala Ravi",
        "year": 2008,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "The film revolves around Chintakayala Ravi, a waiter in a New York bar, who has lied to his mother that he is a software engineer. When his mother arranges for a match for him in her village, the girl's friend Sunitha finds out the truth and informs everyone. Ravi is humiliated by the entire village after coming back.",
        "poster": "https://image.tmdb.org/t/p/w500/pP2EtisSIo4mvYoISwGIK4jpJ8Y.jpg",
        "runtime": "150 min",
        "rating": null,
        "tmdbId": 22052,
        "id": 1392
    },
    {
        "title": "Parugu",
        "year": 2008,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "A group of friends are forcibly transported to a village and kept imprisoned, as the village head, who believes that they have helped in his daughter's elopement with her lover.",
        "poster": "https://image.tmdb.org/t/p/w500/3RYvVIZyNfYI6DRdljL42hA8zMr.jpg",
        "runtime": "173 min",
        "rating": null,
        "tmdbId": 23776,
        "id": 1393
    },
    {
        "title": "Pazhani",
        "year": 2008,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Pazhani is a Tamil action movie with Bharath in lead role. It is directed by Perarasu and produced by director Shakthi Chidambaram under the banner Cinema paradise. Srikanth Deva scores music. Bharath plays the role of a car driver. Kajal Agarwal is the heroine and Kushboo plays Bharath's sister.",
        "poster": "https://image.tmdb.org/t/p/w500/fcgXU5mDUbEuODcQ0Fxg1og2wX0.jpg",
        "runtime": "154 min",
        "rating": null,
        "tmdbId": 66230,
        "id": 1394
    },
    {
        "title": "Guna 369",
        "year": 2019,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Guna is a happy-go-lucky guy who believes the solution to solving issues is not through violence but through compromise.When he is framed for a crime he didn't commit by someone close to him, Guna is left with no choice and forced to the extremes to prove his innocence.",
        "poster": "https://image.tmdb.org/t/p/w500/1LuEpIbLDbKOJT1CpfhhXTnIK8T.jpg",
        "runtime": "146 min",
        "rating": null,
        "tmdbId": 319832,
        "id": 1395
    },
    {
        "title": "Sye Raa Narasimha Reddy",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Gwalior Fort, during the Indian Rebellion of 1857. In a moment of despair, Lakshmibai, Rani of Jhansi, encourages her men by telling them the heroic story of Uyyalawada Narasimha Reddy, a brave Telugu chieftain who took up arms in 1846 to protest against the numerous arbitrariness and crimes perpetrated by the leaders and military forces of the East India Company.",
        "poster": "https://image.tmdb.org/t/p/w500/uEheujJysophwGaqHWPu1UCPthl.jpg",
        "runtime": "169 min",
        "rating": null,
        "tmdbId": 496495,
        "id": 1396
    },
    {
        "title": "Dhrushti",
        "year": 2019,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "A photographer's life, who is  temporarily wheelchair driven, goes into deep trouble, once he  witnesses a murder through his camera.",
        "poster": "https://image.tmdb.org/t/p/w500/wWzopWD7wK33UnvSaekQgUdbZhe.jpg",
        "runtime": "116 min",
        "rating": null,
        "tmdbId": 502883,
        "id": 1397
    },
    {
        "title": "Yatra",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "The film focus especially on the period from 1999-2004 when YSR undertook his famous Padayatra which ultimately proved instrumental in catapulting him to a comprehensive victory in the 2004 polls.",
        "poster": "https://image.tmdb.org/t/p/w500/glQx23PN3btfziiIMb7AT4B9uE0.jpg",
        "runtime": "126 min",
        "rating": null,
        "tmdbId": 521714,
        "id": 1398
    },
    {
        "title": "Dear Comrade",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A hot-blooded student union leader falls for a state-level cricketer but his anger management issues and violent streak threatens to derail their love story .",
        "poster": "https://image.tmdb.org/t/p/w500/wEDh02aLl2fkCXi25V4MOOuEuWF.jpg",
        "runtime": "122 min",
        "rating": null,
        "tmdbId": 563604,
        "id": 1399
    },
    {
        "title": "Mr. Majnu",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A playboy finds himself in a spot of bother when he falls in love with the right girl.",
        "poster": "https://image.tmdb.org/t/p/w500/prVXdBD6nusMf504BIerIZoZT7l.jpg",
        "runtime": "145 min",
        "rating": null,
        "tmdbId": 566143,
        "id": 1400
    },
    {
        "title": "Arjun Suravaram",
        "year": 2019,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "An investigative journalist is arrested for cheating banks with fake certificates. He discovers a crime syndicate behind the scam and decides to investigate it himself.",
        "poster": "https://image.tmdb.org/t/p/w500/xUVU65JkqKZDoLqJoZIgb5KOGjI.jpg",
        "runtime": "150 min",
        "rating": null,
        "tmdbId": 566487,
        "id": 1401
    },
    {
        "title": "F2: Fun and Frustration",
        "year": 2019,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "After Venky, Varun also gets married thinking he can keep the wife in control but both of them gets frustrated with the marital life which generates fun.",
        "poster": "https://image.tmdb.org/t/p/w500/cuIiSZSPr7ioJJM5N0WZqSYLnJF.jpg",
        "runtime": "148 min",
        "rating": null,
        "tmdbId": 566914,
        "id": 1402
    },
    {
        "title": "N.T.R: Kathanayakudu",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Based on the journey of the legendary Telugu actor, filmmaker and ex-Chief Minister Late Taraka Rama Rao Nandamuri.",
        "poster": "https://image.tmdb.org/t/p/w500/7v5XNFBt7fKNFNfs5vB300wBVu6.jpg",
        "runtime": "170 min",
        "rating": null,
        "tmdbId": 568522,
        "id": 1403
    },
    {
        "title": "Majili",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Poorna fails to appreciate the blessings in his life due to his unfulfilled dream of a cricket career and a failed romance that changes him.",
        "poster": "https://image.tmdb.org/t/p/w500/zR8ib7DFEten3AdbGDCqDxCI4Cx.jpg",
        "runtime": "154 min",
        "rating": null,
        "tmdbId": 571610,
        "id": 1404
    },
    {
        "title": "Seven",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A police officer is bewildered by conflicting statements about Karthik's identity. Several young women seem to share a mysterious connection with him. An old man claims to know Karthik as Krishnamurthy, who died thirty years ago.",
        "poster": "https://image.tmdb.org/t/p/w500/u7h6pCsc9soDIzQtp69wD9YWkVM.jpg",
        "runtime": "117 min",
        "rating": null,
        "tmdbId": 578207,
        "id": 1405
    },
    {
        "title": "Rahasyam",
        "year": 2019,
        "genre": "Horror",
        "language": "Telugu",
        "region": "India",
        "description": "Aspiring director Ravi researches spirits for his first horror film, but an evil spirit named Divya begins pursuing him and insists that he cast her as the heroine.",
        "poster": "https://image.tmdb.org/t/p/w500/pSJfR83ZlukHVwS3CZ95ME4HrP0.jpg",
        "runtime": "102 min",
        "rating": null,
        "tmdbId": 579431,
        "id": 1406
    },
    {
        "title": "118",
        "year": 2019,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "While staying in a resort, an investigative journalist has a dream where he sees a woman being beaten to death. When he has the same dream once again in the same room of the resort, he begins to believe there might be some truth to it. He starts investigating and eventually faces physical challenges from someone who doesn't want him to uncover the truth.",
        "poster": "https://image.tmdb.org/t/p/w500/wApFb1fYbh9t1Q9kxZIV4asnB8m.jpg",
        "runtime": "120 min",
        "rating": null,
        "tmdbId": 585564,
        "id": 1407
    },
    {
        "title": "Suryakantham",
        "year": 2019,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Abhi is all set to be engaged to Pooja, a girl he’s slowly falling for. But in walks into his life his ex-girlfriend Suryakantham like the hurricane that she is. Stuck between both, Abhi struggles to find some way to resolve the situation peacefully.",
        "poster": "https://image.tmdb.org/t/p/w500/ow4hJwOAkugbXlBzom1gJET79QG.jpg",
        "runtime": "122 min",
        "rating": null,
        "tmdbId": 586753,
        "id": 1408
    },
    {
        "title": "Magnet",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A drama about young people making misguided choices and trying to find a better direction in life. The film stars Sakshi Chowdary and Posani Krishna Murali.",
        "poster": "https://image.tmdb.org/t/p/w500/valzwMYDy1Vd9wnx3Qoq0dTkezk.jpg",
        "runtime": "152 min",
        "rating": null,
        "tmdbId": 588675,
        "id": 1409
    },
    {
        "title": "Jessie",
        "year": 2019,
        "genre": "Horror",
        "language": "Telugu",
        "region": "India",
        "description": "Set in an abandoned house, the film follows a team of professional ghost hunters trying to conduct a paranormal investigation to unveil the mystery of two sisters, Jessie and Amy, where Amy shows unusual mental and physical behaviour.",
        "poster": "https://image.tmdb.org/t/p/w500/6KTlPb2UM6JQfinRU4nT93VVXdK.jpg",
        "runtime": "106 min",
        "rating": null,
        "tmdbId": 588708,
        "id": 1410
    },
    {
        "title": "Chikati Gadilo Chithakotudu",
        "year": 2019,
        "genre": "Horror",
        "language": "Telugu",
        "region": "India",
        "description": "Two young couples become trapped in a haunted house with a ghost that has its own unsettling intentions, in an adult comedy-horror that mixes scares with bawdy humor.",
        "poster": "https://image.tmdb.org/t/p/w500/qY5TCJmPgUYNloFvWqcVZrmJFzz.jpg",
        "runtime": "152 min",
        "rating": null,
        "tmdbId": 589200,
        "id": 1411
    },
    {
        "title": "Falaknuma Das",
        "year": 2019,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "A group of youngsters headed by Das attempt to monopolise the meat business in Falaknuma. However, they encounter some unexpected problems, which lead them to the path of crime.",
        "poster": "https://image.tmdb.org/t/p/w500/bVsguOjjGdmjqgjZizqSVhSYG67.jpg",
        "runtime": "150 min",
        "rating": null,
        "tmdbId": 590162,
        "id": 1412
    },
    {
        "title": "Lakshmi's NTR",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "The life of iconic politician Nandamuri Taraka Ramarao (NTR) after meeting Lakshmi Parvathi, his second wife.",
        "poster": "https://image.tmdb.org/t/p/w500/ak47YcGv5fBy1Q01dgNBW77eV3x.jpg",
        "runtime": "151 min",
        "rating": null,
        "tmdbId": 590753,
        "id": 1413
    },
    {
        "title": "Vinara Sodara Veera Kumara",
        "year": 2019,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Ramana falls in love with Sulochana but their relationship fails to materialize due to which he decides to end his life. He then meets a soul that communicates with him to make him realize the importance of life over love.",
        "poster": "https://image.tmdb.org/t/p/w500/pnDYLlUVaJIIAwclqPDUoBiYILt.jpg",
        "runtime": "145 min",
        "rating": null,
        "tmdbId": 592746,
        "id": 1414
    },
    {
        "title": "Jersey",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "After his career fails to take off, a gifted cricketer in his mid-thirties decides that he’s not ready to give up quite yet.",
        "poster": "https://image.tmdb.org/t/p/w500/bU9q9yVtxeBiC0Do27CekHXNE6D.jpg",
        "runtime": "160 min",
        "rating": null,
        "tmdbId": 592898,
        "id": 1415
    },
    {
        "title": "Prema Katha Chitram 2",
        "year": 2019,
        "genre": "Thriller",
        "language": "Telugu",
        "region": "India",
        "description": "Her unrequited love for a college mate leads a young woman to take her own life. Things take a dark turn when her spirit returns to haunt those who had caused her heartbreak.",
        "poster": "https://image.tmdb.org/t/p/w500/vfu7ITIKE6usdiq2b7gCjKXEg1r.jpg",
        "runtime": "134 min",
        "rating": null,
        "tmdbId": 593018,
        "id": 1416
    },
    {
        "title": "Where Is The Venkatalakshmi",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Chantigadu and Pandugadu are two good-for-nothing moral-less individuals who love to make life a living hell for everyone in their village, especially the women. But their life changes once Venkatalakshmi  comes to their village.",
        "poster": "https://image.tmdb.org/t/p/w500/3QfmXVddfD3JN0CK0jEvqxaLfy0.jpg",
        "runtime": "139 min",
        "rating": null,
        "tmdbId": 600650,
        "id": 1417
    },
    {
        "title": "Sita",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Sita is a materialistic woman who only cares about materialistic gains and nothing else. MLA Basava Raju lusts for her and wants her to give him what she promised him for helping her. The villain of their tale is Ram, a man who’s way too innocent for his own good. How does Ram help Sita out of the fix she’s in forms the crux of the story.",
        "poster": "https://image.tmdb.org/t/p/w500/9s629MKjTxzCotDaFNy3qOTj0BM.jpg",
        "runtime": "161 min",
        "rating": null,
        "tmdbId": 604434,
        "id": 1418
    },
    {
        "title": "Kousalya Krishnamurthy",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A teenage girl from a remote village in Andhra Pradesh makes her way to the Indian cricket team, but her path is not devoid of obstacles.",
        "poster": "https://image.tmdb.org/t/p/w500/wXX8gu7R4CsQaIlhrqXePeR9FBJ.jpg",
        "runtime": "149 min",
        "rating": null,
        "tmdbId": 605245,
        "id": 1419
    },
    {
        "title": "Rakshasudu",
        "year": 2019,
        "genre": "Crime",
        "language": "Telugu",
        "region": "India",
        "description": "Arun, a newly recruited sub-inspector, sets out in pursuit of a mysterious serial killer who targets young girls and murders them. After a series of murders, Arun confirms that it's being done by a psychopath with an anti-social disorder. The killer continues his spree, but Arun is no mood to stop his pursuit.",
        "poster": "https://image.tmdb.org/t/p/w500/qk9mmDiprsKB2t5d3RjGgoDINEW.jpg",
        "runtime": "149 min",
        "rating": null,
        "tmdbId": 606224,
        "id": 1420
    },
    {
        "title": "Manmadhudu 2",
        "year": 2019,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Under pressure to marry, a perennial bachelor hires a much younger woman to act as his fiancée, but her bond with his family throws his plan for a loop.",
        "poster": "https://image.tmdb.org/t/p/w500/fI2EKb6jnU8Knf19AocBMFfsSbB.jpg",
        "runtime": "152 min",
        "rating": null,
        "tmdbId": 606714,
        "id": 1421
    },
    {
        "title": "Oh! Baby",
        "year": 2019,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "A 70-year-old woman transforms into her 24-year-old self after she's photographed at a studio, changing her life and those of the people around her forever.",
        "poster": "https://image.tmdb.org/t/p/w500/3dXjxNtK3c5xFXJnTe8cnOBLqqp.jpg",
        "runtime": "157 min",
        "rating": null,
        "tmdbId": 607091,
        "id": 1422
    },
    {
        "title": "iSmart Shankar",
        "year": 2019,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "A contract killer goes on the run after eliminating a target and eventually finds himself linked to a slain cop whose memory is transferred to his brain.",
        "poster": "https://image.tmdb.org/t/p/w500/9jZjnhm1SpceX4KKLOR2S8YMHCQ.jpg",
        "runtime": "141 min",
        "rating": null,
        "tmdbId": 609108,
        "id": 1423
    },
    {
        "title": "Ninu Veedani Needanu Nene",
        "year": 2019,
        "genre": "Horror",
        "language": "Telugu",
        "region": "India",
        "description": "A young couple gets involved in an accident in the middle of nowhere. When they go out looking for help, they stumble across an old cemetery. They somehow reach home and things seem normal, except when they look into the mirror, they see someone else.",
        "poster": "https://image.tmdb.org/t/p/w500/iDnwiRf3tzHwxqazyfSkV50DPXz.jpg",
        "runtime": "135 min",
        "rating": null,
        "tmdbId": 609118,
        "id": 1424
    },
    {
        "title": "Voter",
        "year": 2019,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Gautam is an NRI who returns to India to cast his vote. When challenged by the woman he loves, Bhavana, to make a politician fulfil his campaign promises if he wants to win her over, Gautam sets off on a path to change the system.",
        "poster": "https://image.tmdb.org/t/p/w500/s7P5Pakp4A0A1oL4GR2kStPdzFx.jpg",
        "runtime": "117 min",
        "rating": null,
        "tmdbId": 610023,
        "id": 1425
    },
    {
        "title": "Kalki",
        "year": 2019,
        "genre": "Thriller",
        "language": "Telugu",
        "region": "India",
        "description": "A police officer gets assigned to investigate a crime scene in a town and finds out about a chain of crimes surrounding it. He begins digging deeper and finds out there’s more to it than what’s on surface.",
        "poster": "https://image.tmdb.org/t/p/w500/jsinmhbkmRLhu2d6IDkkVuv8RGC.jpg",
        "runtime": "142 min",
        "rating": null,
        "tmdbId": 610096,
        "id": 1426
    },
    {
        "title": "1st Rank Raju",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Raju, an engineering student is obsessed with academics until he is thrown into the real world where he stumbles and tries to learn some very important life lessons.",
        "poster": "https://image.tmdb.org/t/p/w500/d7FPyJ4o2cp4VHulHux7ZB67DZy.jpg",
        "runtime": "128 min",
        "rating": null,
        "tmdbId": 610266,
        "id": 1427
    },
    {
        "title": "Mallesham",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A sixth-standard school drop-out faces many ups and downs in life when he decides to design a weaving machine to ease the plight of his mother and many like her in his village, who take up Asu work.",
        "poster": "https://image.tmdb.org/t/p/w500/baD2hCtJ1NWrit8u2jOvg8uMKVr.jpg",
        "runtime": "132 min",
        "rating": null,
        "tmdbId": 610505,
        "id": 1428
    },
    {
        "title": "Gaddalakonda Ganesh",
        "year": 2019,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Abhi wants to make a feature film with an antagonist as his lead and finds the perfect muse in the ruthless Gaddalakonda Ganesh. How he finally manages to make his debut forms the crux of the tale.",
        "poster": "https://image.tmdb.org/t/p/w500/6ZwBVIwRi0vAaBGeG31UIkx4ygQ.jpg",
        "runtime": "173 min",
        "rating": null,
        "tmdbId": 611054,
        "id": 1429
    },
    {
        "title": "Burra Katha",
        "year": 2019,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Abhiram  is a man born with two brains – splitting into the massy Abhi and classy Ram whenever triggered by loud noises. How he copes with it forms the crux of the story.",
        "poster": "https://image.tmdb.org/t/p/w500/53IXCKvCjyjND9QbxS0qrbxKsxp.jpg",
        "runtime": "150 min",
        "rating": null,
        "tmdbId": 611403,
        "id": 1430
    },
    {
        "title": "Brochevarevarura",
        "year": 2019,
        "genre": "Thriller",
        "language": "Telugu",
        "region": "India",
        "description": "Three underachieving students befriend Mitra from another class. They devise a plan to help her but it leads to various problems.",
        "poster": "https://image.tmdb.org/t/p/w500/3DecGcOCBoFQ8dPyGbYOPoS4I4r.jpg",
        "runtime": "122 min",
        "rating": null,
        "tmdbId": 611754,
        "id": 1431
    },
    {
        "title": "Nani's Gang Leader",
        "year": 2019,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "A crime novelist is approached by a group of bereaved women to help them plot revenge against those responsible for the loss of their loved ones.",
        "poster": "https://image.tmdb.org/t/p/w500/ejXpzRk1jyZenFhYANehhk4vGcD.jpg",
        "runtime": "155 min",
        "rating": null,
        "tmdbId": 612402,
        "id": 1432
    },
    {
        "title": "Venky Mama",
        "year": 2019,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "When his sister and her husband die in a car accident, a rice-mill owner decides to raise his nephew as his own child. They become inseparable over the course of time, but there are evil forces at work that are trying to separate them.",
        "poster": "https://image.tmdb.org/t/p/w500/jVDv4VWaKdfXiI89fMnNtZI2r3x.jpg",
        "runtime": "149 min",
        "rating": null,
        "tmdbId": 613853,
        "id": 1433
    },
    {
        "title": "Mis(s) Match",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Maha Laxmi is an aspiring wrestler who falls in love with a techie named Siddharth. Siddarth wants to get married with the consent of both the families. But a brawl between the families turns out to be a hurdle for their marriage.",
        "poster": "https://image.tmdb.org/t/p/w500/9LZygsbexylMn21TYHigCzKhdHn.jpg",
        "runtime": "132 min",
        "rating": null,
        "tmdbId": 614363,
        "id": 1434
    },
    {
        "title": "Rajdooth",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Sanjay sets out on a mission to find the vintage bike Rajdooth as asked by his future father-in-law in order to marry the love-of-his-life Priya.",
        "poster": "https://image.tmdb.org/t/p/w500/a8cQCNtSHijichjzVthHhwnsPFi.jpg",
        "runtime": "130 min",
        "rating": null,
        "tmdbId": 614844,
        "id": 1435
    },
    {
        "title": "Evadu Thakkuva Kaadu",
        "year": 2019,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "It follows the story of four friends who face the wrath of a powerful man after their actions inadvertently result in a loss of face for him. They must now fight back against him for survival.",
        "poster": "https://image.tmdb.org/t/p/w500/vgnpeUzDh86eeL3hrtJDcrKo6sX.jpg",
        "runtime": "125 min",
        "rating": null,
        "tmdbId": 615749,
        "id": 1436
    },
    {
        "title": "Special",
        "year": 2019,
        "genre": "Thriller",
        "language": "Telugu",
        "region": "India",
        "description": "Ranga is a mind reader who tells what is in the minds of the people by just touching them. Over the years, because of certain people, he becomes a psycho and his only motto is to kill the people who made him like this. Seeing this crazy situation, the police department appoints a special officer. Rest of the story is as to this special officer nabs Ranga and puts him behind the bars.",
        "poster": "https://image.tmdb.org/t/p/w500/c1DW6SFpXQr8oasvcbAOS0Ex1d4.jpg",
        "runtime": "122 min",
        "rating": null,
        "tmdbId": 616211,
        "id": 1437
    },
    {
        "title": "Raja Vaaru Rani Gaaru",
        "year": 2019,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Raja, a young man, falls in love with Rani but is unable to express his feelings to her for fear of getting rejected. However, his friends decide to step in and help him woo her.",
        "poster": "https://image.tmdb.org/t/p/w500/lhcvj9enPz2MoVAFVZGgBYdWobY.jpg",
        "runtime": "133 min",
        "rating": null,
        "tmdbId": 617690,
        "id": 1438
    },
    {
        "title": "Tenali Ramakrishna BA.BL",
        "year": 2019,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Tenali Ramakrishna is a small-time lawyer who makes his living via compromises between warring parties. He is looking for a big case that could turn his life.",
        "poster": "https://image.tmdb.org/t/p/w500/jaVmC7Hb0cv8sNNTb8hKfbQ0JsV.jpg",
        "runtime": "128 min",
        "rating": null,
        "tmdbId": 622478,
        "id": 1439
    },
    {
        "title": "28 Degree Celsius",
        "year": 2025,
        "genre": "Thriller",
        "language": "Telugu",
        "region": "India",
        "description": "28 degrees celsius is a romantic suspense thriller centred around Anjali, who suffers from a brain injury that makes her vulnerable to extreme temperatures and she must remain at a constant 28C to survive. As Karthik fights to protect her, unexpected twists unfold, blending love and suspense in a gripping narrative that keeps audiences on the edge.",
        "poster": "https://image.tmdb.org/t/p/w500/9uh1vtpaSAc8geSdnJ8SciiH0LS.jpg",
        "runtime": "106 min",
        "rating": null,
        "tmdbId": 586369,
        "id": 1440
    },
    {
        "title": "Hari Hara Veera Mallu: Part 1 – Sword vs Spirit",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Set in the 1650s Mughal Era, Veera Mallu, a Robin Hood-like outlaw with secret motives is hired to steal the Koh-i-Noor from Aurangzeb’s palace. He is joined by a crew of misfits, each talented in their own way, to complete the mission.",
        "poster": "https://image.tmdb.org/t/p/w500/mKM3yC7kepjfs8A723dqd9hOky8.jpg",
        "runtime": "161 min",
        "rating": null,
        "tmdbId": 727121,
        "id": 1441
    },
    {
        "title": "Game Changer",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Ram, a newly appointed district collector, takes charge in a city in Andhra Pradesh and immediately confronts the deeply entrenched corruption and inefficiency plaguing the government. Determined to bring reforms, he initiates sweeping changes, sparking a fierce conflict with a powerful state Minister.",
        "poster": "https://image.tmdb.org/t/p/w500/qtOGsZoLW7QceqKmsOy5nSM6Aik.jpg",
        "runtime": "164 min",
        "rating": null,
        "tmdbId": 811944,
        "id": 1442
    },
    {
        "title": "Police Vari Heccharika",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Amid a wave of killings, officer Kanchana uncovers activist Satyamurthy's dark truth-he exploits orphans for power and kills Bose to stay hidden. Kanchana exposes him, ending with a haunting reflection on betrayal and lost innocence.",
        "poster": "https://image.tmdb.org/t/p/w500/nTkxGlYE1g65nw9xpoHeZqsGiDX.jpg",
        "runtime": "140 min",
        "rating": null,
        "tmdbId": 884003,
        "id": 1443
    },
    {
        "title": "Daksha: The Deadly Conspiracy",
        "year": 2025,
        "genre": "Crime",
        "language": "Telugu",
        "region": "India",
        "description": "A determined woman uncovers a deadly conspiracy while investigating corruption at the highest levels. As supernatural forces emerge and time runs out, her quest for justice becomes a dangerous game of survival.",
        "poster": "https://image.tmdb.org/t/p/w500/z3hsuvJJdokjTlm28wcELuFDjdC.jpg",
        "runtime": "102 min",
        "rating": null,
        "tmdbId": 1006780,
        "id": 1444
    },
    {
        "title": "HIT: The Third Case",
        "year": 2025,
        "genre": "Crime",
        "language": "Telugu",
        "region": "India",
        "description": "The Homicide Intervention Team (HIT) sends ruthless police officer Arjun Sarkaar to find a group of killers and stop their grisly murder spree.",
        "poster": "https://image.tmdb.org/t/p/w500/wT9tGyFol4RBwkjESXUWeBdnLJn.jpg",
        "runtime": "157 min",
        "rating": null,
        "tmdbId": 1060046,
        "id": 1445
    },
    {
        "title": "Janata Bar",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Mothers, children, sisters, and ordinary revolutionaries frequently make huge personal sacrifices in the fight for the right to live equally under the law. 'Janata Bar' is the story of one such woman who fought for justice.",
        "poster": "https://image.tmdb.org/t/p/w500/2Zpk5lM4hR6KferfpQ0iqZcTM3o.jpg",
        "runtime": "122 min",
        "rating": null,
        "tmdbId": 1085752,
        "id": 1446
    },
    {
        "title": "Dilruba",
        "year": 2025,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Siddhu,scarred by a tragic past, reluctantly accepts the love proposal of Anjali, only to face breakup again. Adding to the chaos, His ex Maggie returnsto make amends for her mistakes, while a ruthless goon sets his sights on Siddhu.",
        "poster": "https://image.tmdb.org/t/p/w500/m5bgpi7ANcmvlJCKMLRvhDhuAvY.jpg",
        "runtime": "149 min",
        "rating": null,
        "tmdbId": 1099485,
        "id": 1447
    },
    {
        "title": "Robinhood",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Ram, a modern-day Robin Hood, is a master thief who unexpectedly finds himself switching sides. When fate forces him to become the personal security officer for Neera, a rollercoaster ride of action, comedy, and unexpected twists follows.",
        "poster": "https://image.tmdb.org/t/p/w500/zeH5oAM1A3zgXbvQ3L9GiDs3ldQ.jpg",
        "runtime": "150 min",
        "rating": null,
        "tmdbId": 1120762,
        "id": 1448
    },
    {
        "title": "Kingdom",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Soori, a modest police constable, is unintentionally dragged into a dangerous undercover spy operation in Sri Lanka for the Indian government. His journey is intimately linked to his estranged brother Siva, and the risks involved on their reunion.",
        "poster": "https://image.tmdb.org/t/p/w500/6x0wmp2LlLqhEbd8XKjJpTHdHsT.jpg",
        "runtime": "160 min",
        "rating": null,
        "tmdbId": 1124838,
        "id": 1449
    },
    {
        "title": "Kuberaa",
        "year": 2025,
        "genre": "Crime",
        "language": "Telugu",
        "region": "India",
        "description": "A ruthless billionaire, Neeraj, uses beggars as benamis to launder money, with the help of a disgraced civil submit servant, Deepak. One of the beggars, Deva, escapes with ₹10,000 crores and becomes the target of a deadly manhunt. He meets Sameera, who joins him in his mission to use the money to uplift society's poor. With Deepak's help, Deva fights back.",
        "poster": "https://image.tmdb.org/t/p/w500/xjLC5DeA4FQTBv4xe8r3wYqh8lu.jpg",
        "runtime": "185 min",
        "rating": null,
        "tmdbId": 1171101,
        "id": 1450
    },
    {
        "title": "The Girlfriend",
        "year": 2025,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "A college literature student falls for a charming man with a domineering streak, forcing her to confront the toxic truth of his desire.",
        "poster": "https://image.tmdb.org/t/p/w500/8cYve5muYPeWKvSEfFdkmWDyyDa.jpg",
        "runtime": "138 min",
        "rating": null,
        "tmdbId": 1196348,
        "id": 1451
    },
    {
        "title": "Daaku Maharaaj",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "A violent outlaw takes a job as a personal driver in order to protect the life of a little girl.",
        "poster": "https://image.tmdb.org/t/p/w500/u5skP8XShAgNTckeEqjhgSULnM8.jpg",
        "runtime": "147 min",
        "rating": null,
        "tmdbId": 1202235,
        "id": 1452
    },
    {
        "title": "Thandel",
        "year": 2025,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Fisherman Raju is deeply in love with Satya. However, at one point, she urges him to stop going to the sea and look for other jobs. Ignoring her plea, Raju ventures out and accidentally drifts into Pakistani waters, where he is arrested.",
        "poster": "https://image.tmdb.org/t/p/w500/uaMcu3I9l3qyYovya7dwUcdU6ve.jpg",
        "runtime": "152 min",
        "rating": null,
        "tmdbId": 1208735,
        "id": 1453
    },
    {
        "title": "Mirai",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Following the historic Kalinga battle, where King Ashoka of the Maurya dynasty emerged as the winner, he chose to walk the path of peace instead of continuing warfare. Yet, the kingdom appointed nine warriors to protect some ancient scriptures rumored to have the ability to make someone divine or godlike.",
        "poster": "https://image.tmdb.org/t/p/w500/dDgpfg5DMIYcUKtTFtSHty8CWkr.jpg",
        "runtime": "166 min",
        "rating": null,
        "tmdbId": 1222479,
        "id": 1454
    },
    {
        "title": "Gopi Galla Goa Trip",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Two boys from rural Telangana travel to Goa to get some ‘girlfriend experience’.",
        "poster": "https://image.tmdb.org/t/p/w500/AdvKLoKc4YLJdUTsaJrxyUFXrBZ.jpg",
        "runtime": "105 min",
        "rating": null,
        "tmdbId": 1228561,
        "id": 1455
    },
    {
        "title": "Telusu Kada",
        "year": 2025,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "A couple's struggle with infertility takes a complicated turn when an ex-partner offers to be their surrogate.",
        "poster": "https://image.tmdb.org/t/p/w500/up78q9ZcU4UK45rZ6VxAFvoqPWr.jpg",
        "runtime": "132 min",
        "rating": null,
        "tmdbId": 1229947,
        "id": 1456
    },
    {
        "title": "Kannappa",
        "year": 2025,
        "genre": "Fantasy",
        "language": "Telugu",
        "region": "India",
        "description": "After witnessing the cruel sacrifice of his childhood friend, an atheist warrior rejects religion until love forces him to find his own faith.",
        "poster": "https://image.tmdb.org/t/p/w500/6LhE7IwhXgaNi33l0ltYahIB91i.jpg",
        "runtime": "182 min",
        "rating": null,
        "tmdbId": 1232232,
        "id": 1457
    },
    {
        "title": "Jack",
        "year": 2025,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Jack, an aspiring but overeager intelligence agent, goes against protocol and the real spies, to foil a potential attack on home turf.",
        "poster": "https://image.tmdb.org/t/p/w500/xkat9sykUnlwoeRW59X5mdVKfAi.jpg",
        "runtime": "136 min",
        "rating": null,
        "tmdbId": 1241725,
        "id": 1458
    },
    {
        "title": "Ghaati",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Follows the story of an empowered woman who gets entangled with weed trade due to circumstances.",
        "poster": "https://image.tmdb.org/t/p/w500/d0thFjveYHvUjvnAhY5fjmnp5fM.jpg",
        "runtime": "155 min",
        "rating": null,
        "tmdbId": 1249926,
        "id": 1459
    },
    {
        "title": "Uppu Kappurambu",
        "year": 2025,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "A fictional village faces an extraordinary crisis as the cemetery runs out of space. Uproarious chaos ensues as the community rallies together, finding inventive solutions to overcome this unusual predicament.",
        "poster": "https://image.tmdb.org/t/p/w500/xzduT5nNgmjvfD9pJom265S9te3.jpg",
        "runtime": "136 min",
        "rating": null,
        "tmdbId": 1262548,
        "id": 1460
    },
    {
        "title": "Thammudu",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "A troubled man reunites with his sister to protect her and a group of villagers from the brutal plans of a violent criminal businessman.",
        "poster": "https://image.tmdb.org/t/p/w500/5rhjx4KLaLrZNxzsBY8j8U6Pntu.jpg",
        "runtime": "151 min",
        "rating": null,
        "tmdbId": 1263029,
        "id": 1461
    },
    {
        "title": "Sundarakanda",
        "year": 2025,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "A man born under the Mula Nakshatra faces misfortune and failed relationships, exploring his journey to win over his ideal match.",
        "poster": "https://image.tmdb.org/t/p/w500/40dBLbqZunJXjEkXVqIvw8OoYDM.jpg",
        "runtime": "138 min",
        "rating": null,
        "tmdbId": 1277726,
        "id": 1462
    },
    {
        "title": "Paradha",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A veiled village woman's life changes when city visitors challenge her traditions. As she questions customs and investigates a curse, rumors of Sati emerge, leading her to confront societal norms.",
        "poster": "https://image.tmdb.org/t/p/w500/wOOxDIhZCUmWkEPxBajQwmKVm8l.jpg",
        "runtime": "142 min",
        "rating": null,
        "tmdbId": 1280611,
        "id": 1463
    },
    {
        "title": "Sarangapani Jathakam",
        "year": 2025,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Sarangapani, a man who finds comfort in the guidance of horoscopes, sets off on a turbulent journey that forces him to confront some hard truths about himself and his life.",
        "poster": "https://image.tmdb.org/t/p/w500/h7q2oskyTlhJPOVuvdk1GL2HNNZ.jpg",
        "runtime": "133 min",
        "rating": null,
        "tmdbId": 1354069,
        "id": 1464
    },
    {
        "title": "(MAD)²",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "After his wedding turns into a disaster, Laddu and his pals — Manoj, Ashok and Damodar — find themselves traveling to Goa for another wild adventure.",
        "poster": "https://image.tmdb.org/t/p/w500/cYGNd3oMRYsvM9gW4i0bzAclOUb.jpg",
        "runtime": "127 min",
        "rating": null,
        "tmdbId": 1359490,
        "id": 1465
    },
    {
        "title": "8 Vasantalu",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A talented karate student embarks on a journey of self-discovery where she experiences both love and loss.",
        "poster": "https://image.tmdb.org/t/p/w500/z6mVibOXbNw9grRX689MfrbIQsl.jpg",
        "runtime": "138 min",
        "rating": null,
        "tmdbId": 1370032,
        "id": 1466
    },
    {
        "title": "Akhanda 2: Thaandavam",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "When all hope died, Akhanda arrived. He saved his family, protected his people, killed the wrongdoers, and retreated into isolation. But years later, new threats emerge putting the world in danger. And as the world burns, Akhanda returns.",
        "poster": "https://image.tmdb.org/t/p/w500/jo9efbQSGDZNQ6xMocyD1prFjdF.jpg",
        "runtime": "164 min",
        "rating": null,
        "tmdbId": 1372588,
        "id": 1467
    },
    {
        "title": "Ghatikachalam",
        "year": 2025,
        "genre": "Horror",
        "language": "Telugu",
        "region": "India",
        "description": "Kaushik, a timid medical student, finds himself battling not only his inner demons but also a sinister entity named Ghatikachalam that whispers through shadows and feeds on his fears. As his nights turn sleepless and his grip on reality begins to shatter, his family resorts to ancient spiritual rites to save him from a force far beyond their understanding.",
        "poster": "https://image.tmdb.org/t/p/w500/rjxyLloFbnjCHPm3XHBs6SZx3SA.jpg",
        "runtime": "118 min",
        "rating": null,
        "tmdbId": 1376820,
        "id": 1468
    },
    {
        "title": "Sankranthiki Vasthunam",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "When a renowned tech entrepreneur is kidnapped upon returning to India, a police officer recruits her ex-boyfriend, a former cop now living a quiet family life, to assist in the rescue mission.",
        "poster": "https://image.tmdb.org/t/p/w500/gFa07KuR3tWFI6YFTeGz930zeMo.jpg",
        "runtime": "144 min",
        "rating": null,
        "tmdbId": 1380920,
        "id": 1469
    },
    {
        "title": "Bhairavam",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "The relationship between three childhood friends begins to crumble as their loyalty is tested.",
        "poster": "https://image.tmdb.org/t/p/w500/dT4zhRKIgRLcoSOWbxsA6vMWLxx.jpg",
        "runtime": "155 min",
        "rating": null,
        "tmdbId": 1388451,
        "id": 1470
    },
    {
        "title": "Laila",
        "year": 2025,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Sonu Model, a renowned beautician from the old city, is forced to disguise himself as Laila, leading to a series of comedic, romantic, and action-packed events. Chaos ensues in this hilarious laugh riot",
        "poster": "https://image.tmdb.org/t/p/w500/aFogllaRGlAhk1nqvVGFpZpl4qU.jpg",
        "runtime": "134 min",
        "rating": null,
        "tmdbId": 1403735,
        "id": 1471
    },
    {
        "title": "Andhra King Taluka",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "A heartfelt tribute to fan culture, the story follows Sagar, an ardent fan whose life, relationships, and identity revolve around his admiration for his cinematic idol, 'Andhra King' Surya Kumar.",
        "poster": "https://image.tmdb.org/t/p/w500/e1lNI9dZKar0JN9iNuDeUhCZcwL.jpg",
        "runtime": "166 min",
        "rating": null,
        "tmdbId": 1407437,
        "id": 1472
    },
    {
        "title": "Sasivadane",
        "year": 2025,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Against the beautiful backdrop of Konaseema, India, Sasi and Raghava fall in love. Their romantic journey is a timeless tale of innocence, love and pain.",
        "poster": "https://image.tmdb.org/t/p/w500/9UrbV459h44CC7RAXC7L6dh4IwW.jpg",
        "runtime": "132 min",
        "rating": null,
        "tmdbId": 1413637,
        "id": 1473
    },
    {
        "title": "Neeli Megha Shyama",
        "year": 2025,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "Shyam, seeking escape from a clash with his father, embarks on a treacherous trek in the Himalayas. Megha is a seasoned guide who accompanies him. A snowstorm traps them in a remote homestay in the middle of their journey. Shyam falls for Megha's strength, but Megha doesn't respond",
        "poster": "https://image.tmdb.org/t/p/w500/rbZNB3d7srZQIK9WRJf1cwVpeGg.jpg",
        "runtime": "114 min",
        "rating": null,
        "tmdbId": 1414404,
        "id": 1474
    },
    {
        "title": "Gandhi Tatha Chettu",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A young girl's non-violent campaign to protect her grandfather's beloved tree from demolition, is inspired by Gandhi's philosophy of peaceful resistance.",
        "poster": "https://image.tmdb.org/t/p/w500/wMpvUhkzodjLwvZJmqs9N0QLb0c.jpg",
        "runtime": "114 min",
        "rating": null,
        "tmdbId": 1417308,
        "id": 1475
    },
    {
        "title": "Mowgli",
        "year": 2025,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "In the battle between love and lust, a tribal man fights to save his deaf and mute girlfriend from a ruthless forest officer, unravelling cat and mouse drama within the heart of the forest.",
        "poster": "https://image.tmdb.org/t/p/w500/zWUvV7hEHUrIm5GyoIVWAukzKDX.jpg",
        "runtime": "157 min",
        "rating": null,
        "tmdbId": 1417743,
        "id": 1476
    },
    {
        "title": "Mazaka",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "The path to true love does not run smoothly when a father and son seek marriage at the same time.",
        "poster": "https://image.tmdb.org/t/p/w500/9IhyDGQAyP1hE9FMMBFNb8RhXBF.jpg",
        "runtime": "128 min",
        "rating": null,
        "tmdbId": 1418436,
        "id": 1477
    },
    {
        "title": "Brahma Anandam",
        "year": 2025,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Brahma Anandam is a Telugu romantic comedy entertainer movie directed by RVS Nikhil. The movie casts Raja Goutham, Priya Vadlamani, and Aishwarya Holakkal in the main lead roles along with Brahmanandam, Vennela Kishore, and many others..",
        "poster": "https://image.tmdb.org/t/p/w500/86E3yG6NStNJuN29KM2gRyyAAQA.jpg",
        "runtime": "148 min",
        "rating": null,
        "tmdbId": 1418578,
        "id": 1478
    },
    {
        "title": "Wife Off",
        "year": 2025,
        "genre": "Thriller",
        "language": "Telugu",
        "region": "India",
        "description": "Avani marries her childhood love but soon faces unexpected trauma. What follows is a tale of vengeance with twists and turns at every corner.",
        "poster": "https://image.tmdb.org/t/p/w500/97qsW2wdIfeslTQn4n0JaZTbusC.jpg",
        "runtime": "80 min",
        "rating": null,
        "tmdbId": 1422292,
        "id": 1479
    },
    {
        "title": "Court: State vs. A Nobody",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A determined lawyer takes on a high-stakes case to defend a 19-year-old boy, challenging a system that has already branded him guilty.",
        "poster": "https://image.tmdb.org/t/p/w500/4pEX67LJd7ZIqYWtksBtOgQEGcQ.jpg",
        "runtime": "149 min",
        "rating": null,
        "tmdbId": 1424217,
        "id": 1480
    },
    {
        "title": "Premante",
        "year": 2025,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "A new bride's happiness is put to the test when she notices her husband's suspicious behaviour.",
        "poster": "https://image.tmdb.org/t/p/w500/qjEGEjsbj7Y5xyge5YA1YW0ZPfk.jpg",
        "runtime": "136 min",
        "rating": null,
        "tmdbId": 1425233,
        "id": 1481
    },
    {
        "title": "K-Ramp",
        "year": 2025,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Kumar, a spoiled rich kid who lives life by his own rules, falls in love with Mercy, a beautiful girl with a big secret, while attending university in Kerala.",
        "poster": "https://image.tmdb.org/t/p/w500/36QgJqloM5Ee8VGx0SDiyQR2Pie.jpg",
        "runtime": "140 min",
        "rating": null,
        "tmdbId": 1428278,
        "id": 1482
    },
    {
        "title": "#Single",
        "year": 2025,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Vijay, a bank employee, falls in love with Purva at first sight and attempts to get closer to her in hopes of winning her affection. Meanwhile, Harini who secretly harbours feelings for Vijay, begins to follow him—turning his love life into a comedic triangle.",
        "poster": "https://image.tmdb.org/t/p/w500/3cX5JISvLrOrwfb0gCOV7Mz7if0.jpg",
        "runtime": "127 min",
        "rating": null,
        "tmdbId": 1428301,
        "id": 1483
    },
    {
        "title": "Mithra Mandali",
        "year": 2025,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "The lives of a group of misfit friends become chaotic after one of them falls for a politician's daughter.",
        "poster": "https://image.tmdb.org/t/p/w500/A1nFTGWgoP1FAiDsE0NJXTVjORk.jpg",
        "runtime": "136 min",
        "rating": null,
        "tmdbId": 1428816,
        "id": 1484
    },
    {
        "title": "Vaibhavam",
        "year": 2025,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Vaibhav, a righteous young man with entrepreneurial dreams, finds himself entwined in a profound mosaic of love, family, and friendships.",
        "poster": "https://image.tmdb.org/t/p/w500/a6t7bvKvxu8ceXygVWyvyVhVIVD.jpg",
        "runtime": "134 min",
        "rating": null,
        "tmdbId": 1432240,
        "id": 1485
    },
    {
        "title": "Racharikam",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "Racharikam is a political action thriller set in the crime-infested Rachakonda. The film delves into intense village politics and societal struggles. The movie directed by Suresh Lankalapalli, and features Vijay Shankar, Apsara Rani, and Varun Sandesh in their pivotal roles.",
        "poster": "https://image.tmdb.org/t/p/w500/3mGo4QTUZLITICL9vgk0km0Vdfq.jpg",
        "runtime": "135 min",
        "rating": null,
        "tmdbId": 1435395,
        "id": 1486
    },
    {
        "title": "Ramam Raghavam",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "In a tale of deceit and redemption, a son's greed leads him to betray his honest father, a government official in India, but as he plots his downfall, unexpected revelations force him to confront his own conscience.",
        "poster": "https://image.tmdb.org/t/p/w500/tmlHe006pSdY7IZukT9hVLA3h9U.jpg",
        "runtime": "118 min",
        "rating": null,
        "tmdbId": 1436660,
        "id": 1487
    },
    {
        "title": "Oh Bhama Ayyo Rama",
        "year": 2025,
        "genre": "Romance",
        "language": "Telugu",
        "region": "India",
        "description": "A man pursuing life abroad meets a chaotic, free-spirited woman who pulls him back into filmmaking-a passion he abandoned after trauma. Through their love story, he confronts his past wounds and rediscovers his creative soul.",
        "poster": "https://image.tmdb.org/t/p/w500/urynq4O0nXJPAeLyaKsVLFvGnPS.jpg",
        "runtime": "153 min",
        "rating": null,
        "tmdbId": 1439068,
        "id": 1488
    },
    {
        "title": "Kishkindhapuri",
        "year": 2025,
        "genre": "Horror",
        "language": "Telugu",
        "region": "India",
        "description": "A ghost walking tour group visits an abandoned radio station, inadvertently awakening a vengeful spirit.",
        "poster": "https://image.tmdb.org/t/p/w500/uRQ31dXsGHbiubJdObhGVzDiH3n.jpg",
        "runtime": "125 min",
        "rating": null,
        "tmdbId": 1439747,
        "id": 1489
    },
    {
        "title": "Little Hearts",
        "year": 2025,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Akhil, when failed in EAMCET exam, is forced into long-term coaching after heartbreak teaches him the difference between true and shallow love. At the center, he meets Katyayani and falls for her, only to be rejected for a strange reason. Determined not to lose her, his humorous and transformative journey to win her heart becomes the soul of the story.",
        "poster": "https://image.tmdb.org/t/p/w500/8QcQ0DP76YpY4VS8bsB53H8Fpwj.jpg",
        "runtime": "128 min",
        "rating": null,
        "tmdbId": 1440700,
        "id": 1490
    },
    {
        "title": "Shivangi",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A fearless software engineer fights workplace harassment, societal blame, and a murder accusation--only to uncover a dark conspiracy behind her husband's tragic accident.",
        "poster": "https://image.tmdb.org/t/p/w500/hLBNrwJXzHMM530UhljYFLIa6Ek.jpg",
        "runtime": "122 min",
        "rating": null,
        "tmdbId": 1443590,
        "id": 1491
    },
    {
        "title": "14 Days (Girlfriend Intlo)",
        "year": 2025,
        "genre": "Comedy",
        "language": "Telugu",
        "region": "India",
        "description": "Harsha gets trapped in his girlfriend Ahana's house with no way of escaping without being seen by her parents.",
        "poster": "https://image.tmdb.org/t/p/w500/mnpAFHfTEwurjZUEhV3cJVNENYy.jpg",
        "runtime": "95 min",
        "rating": null,
        "tmdbId": 1444255,
        "id": 1492
    },
    {
        "title": "Jatadhara",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Shiva, a rational ghost hunter, man of science and reason—is drawn back to the mystery of a powerful guardian spirit named Dhanapisachi, pulled into a world where his beliefs are tested.",
        "poster": "https://image.tmdb.org/t/p/w500/91aJa79gHiTUWh86XFRMaD2MGjj.jpg",
        "runtime": "135 min",
        "rating": null,
        "tmdbId": 1444973,
        "id": 1493
    },
    {
        "title": "Legally Veer",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A gripping murder case in Hata City tests the limits of justice. Veer, an aspiring lawyer, takes on a high-stakes defense against a criminal charge, battling through courtroom revelations and twists.",
        "poster": "https://image.tmdb.org/t/p/w500/8WKeDF6A3s6DGOs8iocVe3BBZxM.jpg",
        "runtime": "142 min",
        "rating": null,
        "tmdbId": 1445070,
        "id": 1494
    },
    {
        "title": "Junior",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "A free-spirited young man suffocated by his father’s obsessive love escapes to the city in search of freedom, but his carefree attitude soon puts him at odds with his emotionally distant corporate boss. He embarks on a heartwarming journey of redemption and connection discovering the true depth of sacrifice love and the fleeting nature of time.",
        "poster": "https://image.tmdb.org/t/p/w500/AuJT7uChHqkMmGwbgIK3KZXepUj.jpg",
        "runtime": "151 min",
        "rating": null,
        "tmdbId": 1446056,
        "id": 1495
    },
    {
        "title": "Thala",
        "year": 2025,
        "genre": "Mystery",
        "language": "Telugu",
        "region": "India",
        "description": "A young man determined to reunite his estranged parents, embarking on an emotional journey to mend his family. The film delves into themes of love, sacrifice, and the strength of familial bonds.",
        "poster": "https://image.tmdb.org/t/p/w500/uRkLwPVxXise7kKfuIeTvLFNZBq.jpg",
        "runtime": "122 min",
        "rating": null,
        "tmdbId": 1446069,
        "id": 1496
    },
    {
        "title": "Arjun S/O Vyjayanthi",
        "year": 2025,
        "genre": "Action",
        "language": "Telugu",
        "region": "India",
        "description": "Arjun, an IPS aspirant turned kind-hearted gangster, learns that Pathaan, a notorious terrorist, wants to exact revenge on his principled mother Vyjayanthi, an honest IPS officer, and sets out to protect Vyjayanthi and their bond is put to the test.",
        "poster": "https://image.tmdb.org/t/p/w500/3AvCdsmYx6gZ83Bitd9n9ejDLyO.jpg",
        "runtime": "142 min",
        "rating": null,
        "tmdbId": 1447219,
        "id": 1497
    },
    {
        "title": "Champion",
        "year": 2025,
        "genre": "Drama",
        "language": "Telugu",
        "region": "India",
        "description": "An aspiring football star desperately seeks a way to travel to England to play for a famous team, but his journey leads him to a village waging a bloody conflict.",
        "poster": "https://image.tmdb.org/t/p/w500/mC8s4ZUt1bTAL3OAlZGSSEs3Ieo.jpg",
        "runtime": "167 min",
        "rating": null,
        "tmdbId": 1448170,
        "id": 1498
    },
    {
        "title": "Subham",
        "year": 2025,
        "genre": "Horror",
        "language": "Telugu",
        "region": "India",
        "description": "Set in the early 2000s, in the pre-internet days of coastal Bheemili, A group of married men band together to find solutions, after their wives get possessed while watching a cable TV soap opera serial.",
        "poster": "https://image.tmdb.org/t/p/w500/hl3jiH0YjLRUZXWY2xqHNNTi1Eg.jpg",
        "runtime": "123 min",
        "rating": null,
        "tmdbId": 1449364,
        "id": 1499
    }
];

export const movies = [...baseMovies, ...additionalTeluguMovies];

export const tvShows = [
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

export const runtimes = {
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

export const featuredTitle = {
    id: 0,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
    description: "A team of explorers travels beyond our galaxy in search of a future for humanity.",
    poster: ""
};
