// script.js
document.addEventListener('DOMContentLoaded', () => {

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    mobileNav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        mobileNav.classList.remove('active');
      }
    });
  }

  // Sample books data — expand this array or load from JSON/API in production
  const books = [
    { id: 1, title: "Eleopatra and Her ASP", price: 5500, img: "Books Images/book1.jpeg", category: "Secondary" },
    { id: 2, title: "Claws of The Macra", price: 5000, img: "Books Images/book2.jpeg", category: "Fiction" },
    { id: 3, title: "Dear Olly", price: 5500, img: "Books Images/book3.jpeg", category: "Elementary" },
    { id: 4, title: "A Most Improper Magick", price: 7000, img: "Books Images/book4.jpeg", category: "Fiction" },
    { id: 5, title: "Timmy In Trouble", price: 6000, img: "Books Images/book5.jpeg", category: "Elementary" },
    { id: 6, title: "Mr Gum and The Dancing Bear", price: 7000, img: "Books Images/book6.jpeg", category: "Elementary" },
    { id: 7, title: "Meet The Queen", price: 6500, img: "Books Images/book7.jpeg", category: "Pre-School" },
    { id: 8, title: "Beast Quest", price: 6000, img: "Books Images/book8.jpeg", category: "Fiction" },
    { id: 9, title: "Puppy Party", price: 6000, img: "Books Images/book9.jpeg", category: "Pre-School" },
    { id: 10, title: "Mr Gum and The Powder Crystals", price: 5000, img: "Books Images/book10.jpeg", category: "Elementary" },
    { id: 11, title: "Little Red Riding Wolf", price: 5000, img: "Books Images/book11.jpeg", category: "Pre-School" },
    { id: 12, title: "The Hounds Of Lamonic Bibber", price: 7000, img: "Books Images/book12.jpeg", category: "Fiction" },
    { id: 13, title: "Horrible Histories: The Vicious Vikings", price: 7000, img: "Books Images/book13.jpeg", category: "Non-Fiction" },
    { id: 14, title: "Day Of The Dino-Droids", price: 7500, img: "Books Images/book14.jpeg", category: "Fiction" },
    { id: 15, title: "Ottoline at Sea", price: 6000, img: "Books Images/book16.jpeg", category: "Elementary" },
    { id: 16, title: "The Curse In The Jungle", price: 7500, img: "Books Images/book17.jpeg", category: "Fiction" },
    { id: 17, title: "DinoPants", price: 6000, img: "Books Images/book18.jpeg", category: "Pre-School" },
    { id: 18, title: "Toy Story 4", price: 5500, img: "Books Images/book19.jpeg", category: "Pre-School" },
    { id: 19, title: "Harry Potter", price: 8000, img: "Books Images/book20.jpeg", category: "Fiction" },
    { id: 20, title: "Mr Nobody's Eyes", price: 8000, img: "Books Images/book21.jpeg", category: "Fiction" },
    { id: 21, title: "Magic Animal Friends", price: 7000, img: "Books Images/book22.jpeg", category: "Elementary" },
    { id: 22, title: "The Kalahari Typing School For Men", price: 8000, img: "Books Images/book23.jpeg", category: "Non-Fiction" },
    { id: 23, title: "The Griffin and Oliver Pie", price: 6000, img: "Books Images/book24.jpeg", category: "Elementary" },
    { id: 24, title: "Dirty Bertie", price: 5000, img: "Books Images/book25.jpeg", category: "Elementary" },
    { id: 25, title: "All in The Family", price: 8000, img: "Books Images/book26.jpeg", category: "Non-Fiction" },
    { id: 26, title: "Children Miscellany: Volume One", price: 7000, img: "Books Images/book27.jpeg", category: "Non-Fiction" },
    { id: 27, title: "The Fried Piper Of Hamstring", price: 8500, img: "Books Images/book28.jpeg", category: "Fiction" },
    { id: 28, title: "The Secret Railway", price: 5500, img: "Books Images/book29.jpeg", category: "Elementary" },
    { id: 29, title: "Book Of The Film", price: 6500, img: "Books Images/book30.jpeg", category: "Non-Fiction" },
    { id: 30, title: "Fantastic Mr Fox", price: 8500, img: "Books Images/book31.jpeg", category: "Fiction" },
    { id: 31, title: "Son of Grim", price: 7500, img: "Books Images/book32.jpeg", category: "Fiction" },
    { id: 32, title: "Sporty Powder", price: 7000, img: "Books Images/book33.jpeg", category: "Elementary" },
    { id: 33, title: "Judy Moody: Declears Independence", price: 8500, img: "Books Images/book34.jpeg", category: "Elementary" },
    { id: 34, title: "Mr Majieka and The Lost Spell Book", price: 8000, img: "Books Images/book35.jpeg", category: "Fiction" },
    { id: 35, title: "Coven Roads", price: 6500, img: "Books Images/book36.jpeg", category: "Fiction" },
    { id: 36, title: "Long Trunk: Short Tales", price: 8000, img: "Books Images/book38.jpeg", category: "Elementary" },
    { id: 37, title: "The Worst Witches Strike Again", price: 7000, img: "Books Images/book39.jpeg", category: "Fiction" },
    { id: 38, title: "Magic Puppy", price: 6500, img: "Books Images/book40.jpeg", category: "Pre-School" },
    { id: 39, title: "Princess Poppy", price: 8500, img: "Books Images/book41.jpeg", category: "Pre-School" },
    { id: 40, title: "Children Miscalleny's Vol. 3", price: 6300, img: "Books Images/book42.jpeg", category: "Fiction" },
    { id: 41, title: "Peter Pan in Scarlet", price: 10000, img: "Books Images/book43.jpeg", category: "Secondary" },
    { id: 42, title: "Barmy British Army", price: 8500, img: "Books Images/book44.jpeg", category: "Fiction" },
    { id: 43, title: "Kalahari School of Men", price: 4500, img: "Books Images/book45.jpeg", category: "Elementary" },
    { id: 44, title: "The Fried Piper Of Hamstring", price: 8500, img: "Books Images/book46.jpeg", category: "Fiction" },
    { id: 45, title: "The Secret Railway", price: 5500, img: "Books Images/book47.jpeg", category: "Elementary" },
    { id: 46, title: "The Griffin and Oliver Pie", price: 6000, img: "Books Images/book48.jpeg", category: "Elementary" },
    { id: 47, title: "Terrible TImes", price: 8900, img: "Books Images/book49.jpeg", category: "Pre-School" },
    { id: 48, title: "The Jungle Book", price: 8900, img: "Books Images/book50.jpeg", category: "Fiction" },
    { id: 49, title: "The Desert Challenge", price: 8500, img: "Books Images/book51.jpeg", category: "Pre-School" },
    { id: 50, title: "Boy Racer", price: 7000, img: "Books Images/book52.jpeg", category: "Elementary" },
    { id: 51, title: "Tangshan Tiger", price: 6000, img: "Books Images/book53.jpeg", category: "Elementary" },


    { id: 52, title: "So You Think You Know Harry Potter", price: 7000, img: "Books Images/book54.jpg", category: "Non-Fiction" },
    { id: 53, title: "The Deadly Trap", price: 7000, img: "Books Images/book55.jpg", category: "Fiction" },
    { id: 54, title: "Quick Let's Get Out Of Here", price: 7000, img: "Books Images/book56.jpg", category: "Fiction" },
    { id: 55, title: "My Brother Famous Bottom", price: 6500, img: "Books Images/book57.jpg", category: "Fiction" },
    { id: 56, title: "The Sleep Over Secret", price: 6000, img: "Books Images/book58.jpg", category: "Elementary" },
    { id: 57, title: "Owl In The Office", price: 6000, img: "Books Images/book59.jpg", category: "Fiction" },
    { id: 60, title: "Mr. Nobody's Eyes", price: 6000, img: "Books Images/book62.jpg", category: "Fiction" },
    { id: 61, title: "Oscar's Lonely Christmas", price: 0, img: "Books Images/book63.jpg", category: "Elementary" },
    { id: 62, title: "The Rescue Princesses", price: 6000, img: "Books Images/book64.jpg", category: "Elementary" },
    { id: 63, title: "Horrid Kid and The Sceret Club", price: 0, img: "Books Images/book65.jpg", category: "Elementary" },
    { id: 64, title: "Just Kidding", price: 6000, img: "Books Images/book66.jpg", category: "Fiction" },
    { id: 65, title: "Arcta The Mountain Giant", price: 6000, img: "Books Images/book67.jpg", category: "Fiction" },
    { id: 66, title: "Beast Quest", price: 6000, img: "Books Images/book68.jpg", category: "Fiction" },
    { id: 67, title: "Minecraft", price: 6500, img: "Books Images/book69.jpg", category: "Fiction" },
    { id: 68, title: "Mr Majeika and The School Inspector", price: 0, img: "Books Images/book70.jpg", category: "Elementary" },
    { id: 69, title: "Lady Grace Mystery", price: 7000, img: "Books Images/book71.jpg", category: "Fiction" },
    { id: 70, title: "Nudie Dudie", price: 6500, img: "Books Images/book72.jpg", category: "Fiction" },
    { id: 71, title: "Fairy Charm", price: 6000, img: "Books Images/book73.jpg", category: "Non-Fiction" },
    { id: 72, title: "Burnes in The Bathroom", price: 0, img: "Books Images/book74.jpg", category: "Fiction" },
    { id: 73, title: "Donkey", price: 6000, img: "Books Images/book75.jpg", category: "Fiction" },
    { id: 74, title: "Beast Quest (Tust The Mighty Mammoth)", price: 6000, img: "Books Images/book76.jpg", category: "Fiction" },
    { id: 76, title: "Two of A Kind", price: 6000, img: "Books Images/book78.jpg", category: "Fiction" },
    { id: 77, title: "Undercover Pirate", price: 7000, img: "Books Images/book79.jpg", category: "Fiction" },
    { id: 78, title: "Star Wars", price: 7000, img: "Books Images/book80.jpg", category: "Fiction" },
    { id: 79, title: "Bunnies in the Bathroom", price: 6000, img: "Books Images/book81.jpg", category: "Fiction" },
    { id: 80, title: "Maga Puppy", price: 0, img: "Books Images/book82.jpg", category: "Fiction" },
    { id: 82, title: "Sleep Overs", price: 0, img: "Books Images/book84.jpg", category: "Elementary" },
    { id: 83, title: "GRK", price: 6000, img: "Books Images/book85.jpg", category: "Fiction" },
    { id: 84, title: "The Dinosaur's Packed Lunch", price: 7000, img: "Books Images/book86.jpg", category: "Fiction" },
    { id: 85, title: "DinoBurps", price: 0, img: "Books Images/book87.jpg", category: "Fiction" },
    { id: 86, title: "You're A Disgrace", price: 0, img: "Books Images/book88.jpg", category: "Pre-School" },
    { id: 87, title: "That's So Gross!", price: 0, img: "Books Images/book89.jpg", category: "Elementary" },
    { id: 88, title: "Amazing Fact (Every 9 Year Old)", price: 0, img: "Books Images/book90.jpg", category: "Elementary" },
    { id: 89, title: "That's So Gross! (Creepy Crawler)", price: 0, img: "Books Images/book91.jpg", category: "Fiction" },
    { id: 90, title: "Sylvia Seahouse", price: 0, img: "Books Images/book92.jpg", category: "Fiction" },
    { id: 91, title: "Minions", price: 0, img: "Books Images/book93.jpg", category: "Fiction" },
    { id: 92, title: "Beast Quest Claw", price: 0, img: "Books Images/book94.jpg", category: "Non-Fiction" },
    { id: 93, title: "King Of The Cloud Forest", price: 7000, img: "Books Images/book95.jpg", category: "Non-Fiction" },
    { id: 94, title: "Little Legends", price: 7000, img: "Books Images/book96.jpg", category: "Non-Fiction" },
    { id: 95, title: "Two of A Kind", price: 6000, img: "Books Images/book97.jpg", category: "Fiction" },
    { id: 96, title: "Astrosaurs", price: 7000, img: "Books Images/book98.jpg", category: "Pre-School" },
    { id: 97, title: "Happy Feet", price: 0, img: "Books Images/book99.jpg", category: "Fiction" },
    { id: 98, title: "Kidnap In The Caribbean", price: 7000, img: "Books Images/book100.jpg", category: "Fiction" },
    { id: 99, title: "Horid Henry Little Legends", price: 0, img: "Books Images/book101.jpg", category: "Fiction" },
    { id: 100, title: "Boy Band Blues", price: 0, img: "Books Images/book102.jpg", category: "Elementary" },
    { id: 101, title: "Judy Moody", price: 6000, img: "Books Images/book103.jpg", category: "Fiction" },
    { id: 102, title: "So You Think You Know Harry Potter?", price: 7000, img: "Books Images/book104.jpg", category: "Fiction" },
    { id: 103, title: "Dotty Detective", price: 7000, img: "Books Images/book105.jpg", category: "Elementary" },
    { id: 104, title: "Secret Unicorn", price: 7000, img: "Books Images/book106.jpg", category: "Elementary" },
    { id: 105, title: "Beast Quest (Eros)", price: 0, img: "Books Images/book107.jpg", category: "Elementary" },
    { id: 107, title: "Horrid Henry (Mummy's Curse)", price: 0, img: "Books Images/book109.jpg", category: "Elementary" },
    { id: 108, title: "Beast Quest (Eros)", price: 0, img: "Books Images/book110.jpg", category: "Elementary" },
    { id: 109, title: "Secret Unicorn (Dream Come True)", price: 7000, img: "Books Images/book111.jpg", category: "Fiction" },
    { id: 110, title: "Dotty Detective (", price: 0, img: "Books Images/book112.jpg", category: "Fiction" },
    { id: 114, title: "Awesome Friendly Kid", price: 8000, img: "Books Images/book116.jpg", category: "Non-Fiction" },
    { id: 115, title: "Awesome Friendly Adventure", price: 8000, img: "Books Images/book117.jpg", category: "Non-Fiction" },
    { id: 116, title: "Diary of a Wimpy Kid (Diper Overlode)", price: 0, img: "Books Images/book118.jpg", category: "Elementary" },
    { id: 117, title: "Diary of a Wimpy Kid (No Brainer)", price: 8000, img: "Books Images/book119.jpg", category: "Elementary" },
    { id: 118, title: "King Of The Cloud Forest", price: 7000, img: "Books Images/book120.jpg", category: "Elementary" },
    { id: 119, title: "Diary of a Wimpy Kid (Cabin Fever)", price: 8000, img: "Books Images/book121.jpg", category: "Elementary" },
    { id: 120, title: "Diary of a Wimpy Kid (Rodrick Rules)", price: 8000, img: "Books Images/book122.jpg", category: "Elementary" },
    { id: 121, title: "Diary of a Wimpy Kid (The Meltdown)", price: 8000, img: "Books Images/book123.jpg", category: "Elementary" },
    { id: 122, title: "Diary of a Wimpy Kid (The Long Haul)", price: 8000, img: "Books Images/book124.jpg", category: "Elementary" },
    { id: 123, title: "Diary of a Wimpy Kid (Hard Luck)", price: 8000, img: "Books Images/book125.jpg", category: "Elementary" },
    { id: 124, title: "Diary of a Wimpy Kid (The Ugly Truth)", price: 8000, img: "Books Images/book126.jpg", category: "Elementary" },
    { id: 125, title: "Diary of a Wimpy Kid (Wrecking Ball)", price: 8000, img: "Books Images/book127.jpg", category: "Elementary" },
    { id: 126, title: "Diary of a Wimpy Kid (Big Shot)", price: 8000, img: "Books Images/book128.jpg", category: "Elementary" },
    { id: 127, title: "Diary of a Wimpy Kid (Hot Mess)", price: 8000, img: "Books Images/book129.jpg", category: "Elementary" },
    { id: 128, title: "Diary of a Wimpy Kid (The Deep End)", price: 8000, img: "Books Images/book130.jpg", category: "Elementary" },
    { id: 129, title: "The Haunting Of Luna Moon", price: 0, img: "Books Images/book131.jpg", category: "Elementary" },
    { id: 130, title: "Diary of a Wimpy Kid (The Third Wheel)", price: 8000, img: "Books Images/book132.jpg", category: "Elementary" },
    { id: 131, title: "Diary of a Wimpy Kid (Party Pooper)", price: 8000, img: "Books Images/book133.jpg", category: "Elementary" },
    { id: 132, title: "Dork Diaries (Crush Catastrophe)", price: 9000, img: "Books Images/book134.jpg", category: "Elementary" },
    { id: 133, title: "Dork Diaries (I Love Paris)", price: 9000, img: "Books Images/book135.jpg", category: "Elementary" },
    { id: 134, title: "Dork Diaries (Sister Showdown)", price: 9000, img: "Books Images/book136.jpg", category: "Elementary" },
    { id: 135, title: "Dork Diaries (Dear Dork)", price: 9000, img: "Books Images/book137.jpg", category: "Elementary" },
    { id: 136, title: "Dork Diaries (Party Time)", price: 9000, img: "Books Images/book138.jpg", category: "Elementary" },
    { id: 137, title: "Dork Diaries (Drama Queen)", price: 9000, img: "Books Images/book139.jpg", category: "Elementary" },
    { id: 138, title: "Dork Diaries (Birthday Drama)", price: 9000, img: "Books Images/book140.jpg", category: "Elementary" },
    { id: 139, title: "Dork Diaries (Pop Star)", price: 9000, img: "Books Images/book141.jpg", category: "Elementary" },
    { id: 140, title: "Ville Victorians", price: 0, img: "Books Images/book142.jpg", category: "Elementary" },
    { id: 142, title: "Dork Diaries (Once Upon a Dork)", price: 9000, img: "Books Images/book144.jpg", category: "Elementary" },
    { id: 143, title: "Dork Diaries (How To Dork Your Diary)", price: 9000, img: "Books Images/book145.jpg", category: "Elementary" },
    { id: 144, title: "Dork Diaries (Frenemies Forever)", price: 9000, img: "Books Images/book146.jpg", category: "Elementary" },
    { id: 145, title: "Dork Diaries (Tales From a Not-So-Fabulous Life)", price: 9000, img: "Books Images/book147.jpg", category: "Elementary" },
    { id: 146, title: "Dork Diaries (Puppy Love)", price: 9000, img: "Books Images/book148.jpg", category: "Elementary" },
    { id: 151, title: "Secret Kingdom", price: 0, img: "Books Images/book153.jpg", category: "Elementary" },
    { id: 152, title: "Diary of a Wimpy Kid (Dog Days)", price: 8000, img: "Books Images/book154.jpg", category: "Elementary" },
    { id: 159, title: "Dork Diaries (Tv Star)", price: 9000, img: "Books Images/book161.jpg", category: "Elementary" },
    { id: 161, title: "Dork Diaries (Cruch Catastrophe)", price: 0, img: "Books Images/book163.jpg", category: "Elementary" },
    { id: 166, title: "Dork Diaries (Holiday Heartbreak)", price: 9000, img: "Books Images/book168.jpg", category: "Elementary" },
    { id: 167, title: "Dork Diaries", price: 9000, img: "Books Images/book169.jpg", category: "Elementary" },
    { id: 169, title: "The Puppy Plan", price: 6000, img: "Books Images/book171.jpg", category: "Elementary" },
    { id: 170, title: "The Worst Witch Saves The Day", price: 7500, img: "Books Images/book172.jpg", category: "Fiction" },
    { id: 171, title: "The Worst Witch All At Sea", price: 7500, img: "Books Images/book173.jpg", category: "Fiction" },
    { id: 172, title: "My Babysitter is Robot", price: 0, img: "Books Images/book174.jpg", category: "Fiction" },
    { id: 174, title: "The Robe of Skulls", price: 7000, img: "Books Images/book176.jpg", category: "Fiction" },
    { id: 175, title: "Quidditch Through The Ages", price: 7000, img: "Books Images/book177.jpg", category: "Fiction" },
    { id: 176, title: "Bad Girls", price: 0, img: "Books Images/book178.jpg", category: "Fiction" },
    { id: 177, title: "Deadly Factbook (Fish | Squid | Jelly Fish)", price: 7500, img: "Books Images/book179.jpg", category: "Non-Fiction" },
    { id: 178, title: "Hooey Higgins Goes For Gold", price: 0, img: "Books Images/book180.jpg", category: "Fiction" },
    { id: 179, title: "Rusty", price: 0, img: "Books Images/book181.jpg", category: "Fiction" },
    { id: 180, title: "Horrid Henry (Meet The Queen)", price: 7000, img: "Books Images/book182.jpg", category: "Elementary" },
    { id: 181, title: "Perishing Poles", price: 6500, img: "Books Images/book183.jpg", category: "Fiction" },
    { id: 182, title: "Coolman", price: 6500, img: "Books Images/book184.jpg", category: "Fiction" },
    { id: 183, title: "Raging Rivers", price: 7500, img: "Books Images/book185.jpg", category: "Fiction" },
    { id: 184, title: "Diary of a Wimpy Kid (The Gateway)", price: 0, img: "Books Images/book186.jpg", category: "Elementary" },
    { id: 185, title: "Julius Caesar", price: 8000, img: "Books Images/book187.jpg", category: "Non-Fiction" },
    { id: 186, title: "Astrosaurs (The Robots)", price: 0, img: "Books Images/book188.jpg", category: "Fiction" },
    { id: 187, title: "Stormy Weather", price: 7000, img: "Books Images/book189.jpg", category: "Fiction" },
    { id: 189, title: "What's For Dinner Mr Gum?", price: 7000, img: "Books Images/book191.jpg", category: "Elementary" },
    { id: 190, title: "Gorgeous Georgians)", price: 0, img: "Books Images/book192.jpg", category: "Elementary" },
    { id: 193, title: "You Can't Scare Me", price: 7500, img: "Books Images/book195.jpg", category: "Fiction" },
    { id: 194, title: "Help! There’s a Cockroach in My Underpants", price: 7500, img: "Books Images/book196.jpg", category: "Fiction" },
    { id: 195, title: "Diary of a Wimpy Kid (Hot Mess)", price: 8000, img: "Books Images/book197.jpg", category: "Non-Fiction" },
    { id: 196, title: "The Borrowers", price: 7000, img: "Books Images/book198.jpg", category: "Fiction" },
    { id: 197, title: "Horrible Geography (Monster Lakes)", price: 7500, img: "Books Images/book199.jpg", category: "Elementary" },
    { id: 198, title: "Horrid Henry (Rocks)", price: 0, img: "Books Images/book200.jpg", category: "Fiction" },
    { id: 199, title: "Horrible Geography (Earth-Shattering)", price: 7500, img: "Books Images/book201.jpg", category: "Fiction" },
    { id: 200, title: "Deadly Factbook (Reptiles and Amphibians)", price: 7000, img: "Books Images/book202.jpg", category: "Fiction" },
    { id: 201, title: "Deadly Factbook (Minibeasts: Spiders and Insects)", price: 7000, img: "Books Images/book203.jpg", category: "Fiction" },
    { id: 202, title: "Dead Read Monster (Take Over)", price: 0, img: "Books Images/book204.jpg", category: "Elementary" },
    { id: 203, title: "Camp Rock (The Book of The Film)", price: 0, img: "Books Images/book205.jpg", category: "Non-Fiction" },
    { id: 204, title: "Don't Be Horrid Henry", price: 0, img: "Books Images/book206.jpg", category: "Non-Fiction" },
    { id: 205, title: "Goosebumps (The Haunted Car)", price: 7000, img: "Books Images/book207.jpg", category: "Non-Fiction" },
    { id: 206, title: "Diary of a Wimpy Kid (The Meltdown)", price: 8000, img: "Books Images/book208.jpg", category: "Fiction" },
    { id: 207, title: "Witch Girl", price: 0, img: "Books Images/book209.jpg", category: "Fiction" },
    { id: 208, title: "Diary Of a Roblox Noob Fortnite", price: 6000, img: "Books Images/book210.jpg", category: "Elementary" },
    { id: 209, title: "Flying Fergus", price: 7000, img: "Books Images/book211.jpg", category: "Fiction" },
    { id: 210, title: "Princess Mirror-Belle", price: 7000, img: "Books Images/book212.jpg", category: "Fiction" },
    { id: 211, title: "Miraculos The Junior Novel", price: 0, img: "Books Images/book213.jpg", category: "Elementary" },
    { id: 212, title: "Actually Factually", price: 7000, img: "Books Images/book214.jpg", category: "Elementary" },
    { id: 213, title: "Stink-O-Pedia", price: 7000, img: "Books Images/book215.jpg", category: "Pre-School" },
    { id: 214, title: "Terrifying Tudors", price: 7500, img: "Books Images/book216.jpg", category: "Fiction" },
    { id: 215, title: "Horrible Science (Ugly Bugs)", price: 7000, img: "Books Images/book217.jpg", category: "Non-Fiction" },
    { id: 216, title: "Actually Factually (Mind-Blowing Myths, Muddles and Misconceptions)", price: 7000, img: "Books Images/book218.jpg", category: "Non-Fiction" },
    { id: 217, title: "Diary of A Wimpy Kid (Big Shot)", price: 8000, img: "Books Images/book219.jpg", category: "Non-Fiction" },
    { id: 218, title: "Water Babies", price: 7000, img: "Books Images/book220.jpg", category: "Non-Fiction" },
    { id: 220, title: "Dust In The Storm", price: 0, img: "Books Images/book222.jpg", category: "Fiction" },
    { id: 221, title: "Dirty Bertie Burp!", price: 7000, img: "Books Images/book223.jpg", category: "Elementary" },
    { id: 222, title: "Dirty Bertie Mud!", price: 7000, img: "Books Images/book224.jpg", category: "Fiction" },
    { id: 223, title: "Mr Majeika on the internet!", price: 6500, img: "Books Images/book225.jpg", category: "Elementary" },
    { id: 224, title: "Mr Majeika Vanishes", price: 6500, img: "Books Images/book226.jpg", category: "Elementary" },
    { id: 225, title: "Mr Majeika and the Ghost Train", price: 6500, img: "Books Images/book227.jpg", category: "Fiction" },
    { id: 226, title: "Treasure Island", price: 7000, img: "Books Images/book228.jpg", category: "Fiction" },
    { id: 227, title: "Ailies Apple", price: 0, img: "Books Images/book229.jpg", category: "Fiction" },
    { id: 228, title: "Diary of a Wimpy Kid (Cabin Water)", price: 0, img: "Books Images/book230.jpg", category: "Fiction" },
    { id: 229, title: "Diary of a Wimpy Kid (Party Pooper)", price: 0, img: "Books Images/book231.jpg", category: "Elementary" },
    { id: 230, title: "Famous Five (Five Runaway Together)", price: 8000, img: "Books Images/book232.jpg", category: "Elementary" },
    { id: 231, title: "Famous FIve (Five Get into Trouble)", price: 8000, img: "Books Images/book233.jpg", category: "Fiction" },
    { id: 233, title: "The Famous Five (Five Go Off To Camp)", price: 8000, img: "Books Images/book235.jpg", category: "Fiction" },
    { id: 234, title: "The Famous Five (Five Go Off Camp)", price: 8000, img: "Books Images/book236.jpg", category: "Fiction" },
    { id: 235, title: "The Famous Five (Five Go Adventuring Again)", price: 8000, img: "Books Images/book237.jpg", category: "Fiction" },
    { id: 239, title: "Diary of A Wimpy Kid (The Third Wheel)", price: 8000, img: "Books Images/book241.jpg", category: "Elementary" },
    { id: 241, title: "The Famous Five (Five Fall Into Adventure)", price: 8000, img: "Books Images/book243.jpg", category: "Fiction" },
    

   
    // Add more books here (up to hundreds) – in real project, load from external JSON
  ];

  const ITEMS_PER_PAGE = 15;
  let currentPage = 1;
  let currentSearch = '';
  let currentCategory = 'all';

  const readyBags = [
    {
      id: 'rb1',
      name: 'Early Explorer Pack',
      price: 0,
      img: 'Books Images/book1.jpeg',
      books: [],
      description: "A wonderful collection for preschoolers to start their reading journey."
    },
    {
      id: 'rb2',
      name: 'Elementary Adventure Kit',
      price: 0,
      img: 'Books Images/book2.jpeg',
      books: [],
      description: "Exciting stories for elementary school readers to fuel their imagination."
    },
    {
      id: 'rb3',
      name: 'Fiction Fanatics Bundle',
      price: 0,
      img: 'Books Images/book3.jpeg',
      books: [],
      description: "A bundle of captivating fiction for young and avid readers."
    },
    {
      id: 'rb4',
      name: 'Non-Fiction Discovery Crate',
      price: 0,
      img: 'Books Images/book4.jpeg',
      books: [],
      description: "Explore the world with this collection of informative and engaging non-fiction books."
    },
    {
      id: 'rb5',
      name: 'Secondary School Starter Pack',
      price: 0,
      img: 'Books Images/book5.jpeg',
      books: [],
      description: "A curated selection for secondary school students to enhance their literary skills."
    }
  ];

  // DOM elements
  const container = document.getElementById('books-container');
  const readyBagsContainer = document.getElementById('ready-bags-container');
  const searchInput = document.getElementById('searchInput');
  const categoryLinks = document.getElementById('categoryLinks');
  const mobileCategorySelect = document.getElementById('mobileCategorySelect');
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  const pageNumbersDiv = document.getElementById('pageNumbers');
  const cartSummary = document.getElementById('cart-summary');
  const cartItemsEl = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  const proceedBtn = document.getElementById('proceed-btn');
  const mobileCartToggle = document.getElementById('mobile-cart-toggle');
  const mobileCartCount = document.getElementById('mobile-cart-count');
  const cartSidebar = document.querySelector('.cart-sidebar');
  
  // Mobile banner elements
  const mobileCartBanner = document.getElementById('mobile-cart-banner');
  const mobileTotalVal = document.getElementById('mobile-total-val');
  const mobileCartList = document.getElementById('mobile-cart-list');
  const toggleDetailsBtn = document.getElementById('toggle-details-btn');
  const bannerDetails = document.getElementById('mobile-banner-details');
  const mobileCountText = document.getElementById('mobile-count-text');
  const mobileBannerCheckout = document.getElementById('mobile-banner-checkout');

  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx4s7vvDSk88DAmIVi4zg4tyKkUZg9eZn6w6XpmuR3G35HYubCtqPoG0G4nv7PswVYUgg/exec';

  // Mobile cart toggle logic
  if (mobileCartToggle) {
    mobileCartToggle.addEventListener('click', () => {
      cartSidebar.classList.toggle('active');
    });
  }

  // New modal elements
  const orderModal = document.getElementById('order-modal');
  const modalBody = document.getElementById('modal-body');
  const orderModalCloseBtn = orderModal.querySelector('.modal-close-btn');

  let selectedBooks = JSON.parse(sessionStorage.getItem('selectedBooks')) || [];

  function getBookById(id) {
    return books.find(book => book.id === id);
  }

  function renderReadyBags() {
    if (!readyBagsContainer) return;
    readyBagsContainer.innerHTML = '';
    readyBags.forEach(bag => {
      const isSelected = selectedBooks.some(b => b.id === bag.id);
      const card = document.createElement('div');
      card.className = 'ready-bag-card';
      card.innerHTML = `
        <img src="${bag.img}" alt="${bag.name}" class="ready-bag-img">
        <div class="ready-bag-content">
          <h3 class="ready-bag-title">${bag.name}</h3>
          <p class="ready-bag-description">${bag.description}</p>
          <div class="dropdown">
            <button class="dropdown-toggle">Click to See Books (${bag.books.length} books)</button>
            <ul class="dropdown-menu">
              ${bag.books.length > 0 ? bag.books.map(bookId => `<li>${getBookById(bookId).title}</li>`).join('') : '<li>No books added yet</li>'}
            </ul>
          </div>
          <p class="ready-bag-price">₦${bag.price.toLocaleString()}</p>
          <div class="ready-bag-buttons">
            <button class="select-btn ${isSelected ? 'selected' : 'select'}" data-id="${bag.id}" data-type="bag">
              ${isSelected ? '<i class="fas fa-check"></i> Selected' : '<i class="fas fa-shopping-bag"></i> Add to Cart'}
            </button>
            <button class="customize-btn" data-id="${bag.id}">
              <i class="fas fa-edit"></i> Customize
            </button>
          </div>
        </div>
      `;
      readyBagsContainer.appendChild(card);
    });
  }

  function getFilteredBooks() {
    let filtered = books;

    if (currentSearch.trim()) {
      const term = currentSearch.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(term)
      );
    }

    if (currentCategory !== 'all') {
      filtered = filtered.filter(book => book.category === currentCategory);
    }

    return filtered;
  }

  function renderBooks() {
    const filtered = getFilteredBooks();
    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

    // Prevent invalid page numbers
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageBooks = filtered.slice(start, end);

    container.innerHTML = '';

    pageBooks.forEach(book => {
      const isSelected = selectedBooks.some(b => b.id === book.id);
      const card = document.createElement('div');
      card.className = 'book-card';
      card.innerHTML = `
        <div class="book-index">${book.id}</div>
        <img data-src="${book.img}" alt="${book.title}" class="book-img lazy">
        <div class="book-content">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-price">₦${book.price.toLocaleString()}</p>
          <button class="select-btn ${isSelected ? 'selected' : 'select'}" data-id="${book.id}">
            ${isSelected ? '<i class="fas fa-check"></i> Selected' : '<i class="fas fa-cart-plus"></i> Select Book'}
          </button>
        </div>
      `;
      container.appendChild(card);
    });

    updatePagination(totalPages);
    lazyLoadImages();
  }

  function updatePagination(totalPages) {
    pageNumbersDiv.innerHTML = '';

    prevBtn.disabled = currentPage <= 1;
    nextBtn.disabled = currentPage >= totalPages;

    const range = 2;
    let start = Math.max(1, currentPage - range);
    let end = Math.min(totalPages, currentPage + range);

    // Show first page + ellipsis if needed
    if (start > 2) {
      const first = createPageNumber(1);
      pageNumbersDiv.appendChild(first);

      if (start > 3) {
        pageNumbersDiv.appendChild(createEllipsis());
      }
    }

    // Main page range
    for (let i = start; i <= end; i++) {
      const num = createPageNumber(i);
      if (i === currentPage) num.classList.add('active');
      pageNumbersDiv.appendChild(num);
    }

    // Show last page + ellipsis if needed
    if (end < totalPages - 1) {
      if (end < totalPages - 2) {
        pageNumbersDiv.appendChild(createEllipsis());
      }
      const last = createPageNumber(totalPages);
      pageNumbersDiv.appendChild(last);
    }
  }

  function createPageNumber(page) {
    const span = document.createElement('span');
    span.className = 'page-number';
    span.textContent = page;
    span.addEventListener('click', () => {
      currentPage = page;
      renderBooks();
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return span;
  }

  function createEllipsis() {
    const span = document.createElement('span');
    span.textContent = '...';
    span.style.padding = '0.6rem 0.4rem';
    span.style.color = '#666';
    return span;
  }

  function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('.lazy');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            obs.unobserve(img);
          }
        });
      }, { rootMargin: '200px 0px' });

      lazyImages.forEach(img => observer.observe(img));
    } else {
      // Fallback for older browsers
      lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      });
    }
  }

  function updateCart() {
    sessionStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
    
    const total = selectedBooks.reduce((sum, b) => sum + b.price, 0);
    const formattedTotal = `₦${total.toLocaleString()}`;

    // Update Mobile Banner
    if (selectedBooks.length > 0) {
      mobileCartBanner.classList.remove('hidden');
      mobileTotalVal.textContent = formattedTotal;
      mobileCountText.textContent = `${selectedBooks.length} Book${selectedBooks.length > 1 ? 's' : ''}`;
      mobileCartList.innerHTML = selectedBooks
        .map(b => `<li>${b.title}</li>`)
        .join('');
    } else {
      mobileCartBanner.classList.add('hidden');
      bannerDetails.classList.remove('open');
    }

    if (selectedBooks.length > 0) {
      cartSummary.classList.remove('hidden');
      cartItemsEl.innerHTML = selectedBooks
        .map(b => `<li>${b.title} – ₦${b.price.toLocaleString()}</li>`)
        .join('');
      cartTotalEl.textContent = formattedTotal;
    } else {
      cartSummary.classList.add('hidden');
    }
  }

  // Mobile Banner Toggle Logic
  if (toggleDetailsBtn) {
    toggleDetailsBtn.addEventListener('click', () => {
      bannerDetails.classList.toggle('open');
      const icon = toggleDetailsBtn.querySelector('i');
      icon.classList.toggle('fa-chevron-down');
      icon.classList.toggle('fa-chevron-up');
    });
  }

  if (mobileBannerCheckout) {
    mobileBannerCheckout.addEventListener('click', openOrderModal);
  }

  function openOrderModal() {
    if (selectedBooks.length === 0) {
      alert('No books selected!');
      return;
    }

    const total = selectedBooks.reduce((sum, b) => sum + b.price, 0);
    const bookSummary = selectedBooks.map(b => `${b.title} - ₦${b.price.toLocaleString()}`).join('<br>');

    const formHTML = `
      <div class="modal-form-header">
        <div class="form-icon">📝</div>
        <h2>Complete Your Order</h2>
        <p>Please provide your details to proceed with the order</p>
      </div>

      <form id="order-form" class="professional-form">
        <div class="form-section">
          <h3 class="section-title">📋 Personal Information</h3>

          <div class="form-row">
            <div class="form-group">
              <label for="full-name">
                <i class="fas fa-user"></i> Full Name *
              </label>
              <input type="text" id="full-name" required placeholder="Enter your full name">
              <div class="input-focus-line"></div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="phone">
                <i class="fas fa-phone"></i> Phone Number *
              </label>
              <input type="tel" id="phone" required placeholder="e.g., +234 902 635 9982">
              <div class="input-focus-line"></div>
            </div>

            <div class="form-group">
              <label for="email">
                <i class="fas fa-envelope"></i> Email Address *
              </label>
              <input type="email" id="email" required placeholder="your.email@example.com">
              <div class="input-focus-line"></div>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h3 class="section-title">📍 Delivery Information</h3>

          <div class="form-group">
            <label for="address">
              <i class="fas fa-map-marker-alt"></i> Delivery Address *
            </label>
            <textarea id="address" required rows="3" placeholder="Enter your complete delivery address"></textarea>
            <div class="input-focus-line"></div>
          </div>

          <div class="form-group">
            <label for="delivery-type">
              <i class="fas fa-truck"></i> Delivery Type *
            </label>
            <div class="select-wrapper">
              <select id="delivery-type" required>
                <option value="">Select Delivery Type</option>
                <option value="Pick Up">🏪 Pick Up</option>
                <option value="Door Step Delivery">🚚 Door Step Delivery</option>
              </select>
              <i class="fas fa-chevron-down select-arrow"></i>
            </div>
            <div class="input-focus-line"></div>
          </div>

          <div id="delivery-notice" class="delivery-notice" style="display: none;">
            <div class="notice-box">
              <div class="notice-icon">ℹ️</div>
              <div class="notice-content">
                <strong>Delivery Fee Notice:</strong> Delivery fee is not included in the book prices and will be communicated separately after order review.
              </div>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h3 class="section-title">📚 Order Summary</h3>
          <div class="book-summary-card">
            <div class="book-list">
              ${bookSummary}
            </div>
            <div class="total-section">
              <div class="total-label">Total Amount:</div>
              <div class="total-amount">₦${total.toLocaleString()}</div>
            </div>
          </div>
        </div>

        <div class="form-actions">
          <button type="button" class="btn btn-secondary" onclick="closeOrderModal()">
            <i class="fas fa-arrow-left"></i> Back to Shopping
          </button>
          <button type="submit" class="btn btn-primary">
            <i class="fas fa-paper-plane"></i> Submit Order
          </button>
        </div>
      </form>
    `;

    modalBody.innerHTML = formHTML;
    modalBody.classList.add('order-form');
    orderModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Add delivery type change listener
    const deliveryTypeSelect = document.getElementById('delivery-type');
    const deliveryNotice = document.getElementById('delivery-notice');
    
    deliveryTypeSelect.addEventListener('change', function() {
      if (this.value === 'Door Step Delivery') {
        deliveryNotice.style.display = 'block';
      } else {
        deliveryNotice.style.display = 'none';
      }
    });

    // Add form submit event
    const form = document.getElementById('order-form');
    form.addEventListener('submit', handleFormSubmit);
  }

  function closeOrderModal() {
    orderModal.classList.add('hidden');
    modalBody.classList.remove('order-form');
    document.body.style.overflow = '';
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const fullName = document.getElementById('full-name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();
    const deliveryType = document.getElementById('delivery-type').value;

    if (!fullName || !phone || !address || !email || !deliveryType) {
      alert('Please fill all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Show loading
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';

    const total = selectedBooks.reduce((sum, b) => sum + b.price, 0);
    const orderRef = 'ORDER_' + Date.now();

    const data = {
      fullName,
      phone,
      address,
      email,
      deliveryType,
      books: selectedBooks.map(b => ({ title: b.title, price: b.price })),
      total,
      orderRef,
      timestamp: new Date().toISOString()
    };

    try {
  if (!APPS_SCRIPT_URL) {
    throw new Error('Apps Script web app URL is not configured in books.js');
  }

  const formData = new URLSearchParams();
  formData.append('data', JSON.stringify(data)); // Wrap everything in one key

  const response = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const result = await response.json();

  if (result.success) {
    // Show payment modal directly after order submission
    showPaymentModal(data);
  } else {
    throw new Error(result.message || 'Failed to save order');
  }

} catch (error) {
  console.error('Error saving order:', error);
  alert(error.message || 'Unable to save order right now.');
} finally {
  submitBtn.disabled = false;
  submitBtn.innerHTML = 'Submit Details';
}
}

  function showPaymentModal(data) {
    const paymentHTML = `
      <div class="modal-header">
        <h2>💳 Complete Your Payment</h2>
      </div>
      <div class="modal-body-centered">
        <div class="payment-icon">🏦</div>
        <p class="payment-message">
          Please transfer the exact amount to the account details below:
        </p>
        <div class="bank-details-card">
          <div class="bank-detail-row">
            <span class="detail-label">Account Name:</span>
            <span class="detail-value">TutorMe Nigeria</span>
          </div>
          <div class="bank-detail-row">
            <span class="detail-label">Account Number:</span>
            <span class="detail-value">0122722420</span>
          </div>
          <div class="bank-detail-row">
            <span class="detail-label">Bank Name:</span>
            <span class="detail-value">WEMA</span>
          </div>
          <div class="bank-detail-row total-row">
            <span class="detail-label">Amount:</span>
            <span class="detail-value total-amount">₦${data.total.toLocaleString()}</span>
          </div>
        </div>
        <p class="payment-instruction">
          After making the transfer, click the button below to proceed.
        </p>
        <button id="payment-sent-btn" class="btn btn-primary">
          <i class="fas fa-check"></i> I Have Sent the Money
        </button>
      </div>
    `;

    modalBody.innerHTML = paymentHTML;
    modalBody.classList.add('payment-modal');
    orderModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    document.getElementById('payment-sent-btn').addEventListener('click', () => {
      closeOrderModal();
      // Show review section after payment confirmation
      setTimeout(() => showReviewSection(data), 300);
    });
  }

  function showReviewSection(data) {
    const reviewHTML = `
      <div class="modal-header">
        <h2>⭐ Rate Your Experience</h2>
      </div>
      <div class="modal-body-centered">
        <p class="review-intro">Help us improve! Please rate your ordering experience and leave any comments.</p>
        <form id="review-form">
          <div class="form-group rating-group">
            <label>Rating *</label>
            <div class="star-rating">
              <input type="radio" id="star5" name="rating" value="5" required>
              <label for="star5" title="5 stars">★</label>
              <input type="radio" id="star4" name="rating" value="4">
              <label for="star4" title="4 stars">★</label>
              <input type="radio" id="star3" name="rating" value="3">
              <label for="star3" title="3 stars">★</label>
              <input type="radio" id="star2" name="rating" value="2">
              <label for="star2" title="2 stars">★</label>
              <input type="radio" id="star1" name="rating" value="1">
              <label for="star1" title="1 star">★</label>
            </div>
          </div>
          <div class="form-group">
            <label for="review-comment">Comments / Feedback (Optional)</label>
            <textarea id="review-comment" rows="4" placeholder="Tell us about your experience..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit Review</button>
        </form>
      </div>
    `;

    // Re-open modal with review section
    modalBody.innerHTML = reviewHTML;
    modalBody.classList.remove('payment-modal');
    modalBody.classList.add('review-modal');
    orderModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Add form submit event for review
    const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener('submit', (e) => handleReviewSubmit(e, data));
  }

  async function handleReviewSubmit(e, data) {
    e.preventDefault();

    const rating = document.querySelector('input[name="rating"]:checked');
    const comment = document.getElementById('review-comment').value.trim();

    if (!rating) {
      alert('Please select a rating.');
      return;
    }

    // Show loading
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

    // Add review data to original order data
    const reviewData = {
      ...data,
      rating: parseInt(rating.value),
      comment: comment,
      reviewTimestamp: new Date().toISOString()
    };

    try {
      if (!APPS_SCRIPT_URL) {
        throw new Error('Apps Script web app URL is not configured in books.js');
      }

      const formData = new URLSearchParams();
      formData.append('data', JSON.stringify(reviewData));

      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        // Redirect to WhatsApp with pre-filled message
        redirectToWhatsApp(reviewData);
      } else {
        throw new Error(result.message || 'Failed to save review');
      }

    } catch (error) {
      console.error('Error saving review:', error);
      alert(error.message || 'Unable to save review right now.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Submit Review';
    }
  }

  function redirectToWhatsApp(data) {
    const bookList = data.books.map(b => `• ${b.title} - ₦${b.price.toLocaleString()}`).join('\n');

    const message = `Hello! I have completed my order and made the payment. Here are my details:

📋 ORDER DETAILS:
Order Reference: ${data.orderRef}
Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email}
Delivery: ${data.deliveryType}
Address: ${data.address.replace(/\n/g, ', ')}

📚 BOOKS ORDERED:
${bookList}

💰 PAYMENT DETAILS:
Total Amount: ₦${data.total.toLocaleString()}
Payment Method: Bank Transfer (WEMA Bank - 0122722420)
Payment Status: ✅ Completed

⭐ RATING: ${data.rating}/5 stars
💬 COMMENT: ${data.comment || 'No comments'}

Please confirm receipt of payment and proceed with order processing. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/2349026359982?text=${encodedMessage}`;

    // Clear cart and reset
    selectedBooks = [];
    updateCart();
    renderBooks();
    renderReadyBags();

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
  }

  
  const modal = document.getElementById('customization-modal');
  const modalCloseBtn = modal.querySelector('.modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const currentBagList = document.getElementById('current-bag-list');
  const availableBooksList = document.getElementById('available-books-list');
  const modalSearch = document.getElementById('modal-search');
  const modalTotal = document.getElementById('modal-total');
  const updateBagBtn = document.getElementById('update-bag-btn');

  let currentEditingBag = null;
  let tempBagBooks = [];

  function openCustomizeModal(bagId) {
    currentEditingBag = readyBags.find(b => b.id === bagId);
    if (!currentEditingBag) return;

    tempBagBooks = [...currentEditingBag.books];
    modalTitle.textContent = `Customize ${currentEditingBag.name}`;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    renderModalLists();
  }

  function closeCustomizeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    currentEditingBag = null;
    tempBagBooks = [];
    modalSearch.value = '';
  }

  function renderModalLists(searchTerm = '') {
    // Render current books in bag
    currentBagList.innerHTML = '';
    let currentTotal = 0;
    tempBagBooks.forEach(bookId => {
      const book = getBookById(bookId);
      currentTotal += book.price;
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${book.title}</span>
        <button class="remove-from-bag-btn" data-id="${book.id}">Remove</button>
      `;
      currentBagList.appendChild(li);
    });
    modalTotal.textContent = `₦${currentTotal.toLocaleString()}`;

    // Render available books
    availableBooksList.innerHTML = '';
    const available = books.filter(book => 
      !tempBagBooks.includes(book.id) &&
      (searchTerm === '' || book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    available.forEach(book => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${book.title} (₦${book.price.toLocaleString()})</span>
        <button class="add-to-bag-btn" data-id="${book.id}">Add</button>
      `;
      availableBooksList.appendChild(li);
    });
  }

  function handleUpdateBag() {
    if (!currentEditingBag) return;

    // Update the original readyBag object
    currentEditingBag.books = [...tempBagBooks];
    const newPrice = tempBagBooks.reduce((sum, bookId) => sum + getBookById(bookId).price, 0);
    currentEditingBag.price = newPrice;
    
    // If the bag is already in the cart, update it there too
    const cartIndex = selectedBooks.findIndex(b => b.id === currentEditingBag.id);
    if (cartIndex > -1) {
      selectedBooks[cartIndex] = { ...currentEditingBag, title: currentEditingBag.name };
      updateCart();
    }
    
    // Re-render the ready bags to show changes
    renderReadyBags();
    closeCustomizeModal();
  }
  
  
  // ── Event Listeners ───────────────────────────────────────────────────────
  
  modalCloseBtn.addEventListener('click', closeCustomizeModal);
  updateBagBtn.addEventListener('click', handleUpdateBag);
  modalSearch.addEventListener('input', () => renderModalLists(modalSearch.value));

  modal.addEventListener('click', e => {
    if (e.target.classList.contains('remove-from-bag-btn')) {
      const bookId = parseInt(e.target.dataset.id);
      tempBagBooks = tempBagBooks.filter(id => id !== bookId);
      renderModalLists(modalSearch.value);
    }

    if (e.target.classList.contains('add-to-bag-btn')) {
      const bookId = parseInt(e.target.dataset.id);
      tempBagBooks.push(bookId);
      renderModalLists(modalSearch.value);
    }
  });

  // Close modal if overlay is clicked
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeCustomizeModal();
    }
  });

  // Order modal event listeners
  orderModalCloseBtn.addEventListener('click', closeOrderModal);

  // Close order modal if overlay is clicked
  orderModal.addEventListener('click', e => {
    if (e.target === orderModal) {
      closeOrderModal();
    }
  });



  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    currentPage = 1;
    renderBooks();
  });

  categoryLinks.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains('category-link')) {
      currentCategory = target.dataset.category;
      currentPage = 1;

      // Update active link
      document.querySelector('#categoryLinks .active').classList.remove('active');
      target.classList.add('active');
      
      // Sync mobile select
      if (mobileCategorySelect) {
        mobileCategorySelect.value = currentCategory;
      }

      renderBooks();
    }
  });

  if (mobileCategorySelect) {
    mobileCategorySelect.addEventListener('change', (e) => {
      currentCategory = e.target.value;
      currentPage = 1;

      // Sync desktop links active state
      document.querySelectorAll('.category-link').forEach(link => {
        link.classList.toggle('active', link.dataset.category === currentCategory);
      });

      renderBooks();
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderBooks();
    }
  });

  nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(getFilteredBooks().length / ITEMS_PER_PAGE);
    if (currentPage < totalPages) {
      currentPage++;
      renderBooks();
    }
  });

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.select-btn');
    if (!btn) return;

    const id = parseInt(btn.dataset.id);
    const book = books.find(b => b.id === id);
    if (!book) return;

    if (btn.classList.contains('selected')) {
      // Deselect
      selectedBooks = selectedBooks.filter(b => b.id !== id);
      btn.classList.remove('selected');
      btn.classList.add('select');
      btn.innerHTML = '<i class="fas fa-cart-plus"></i> Select Book';
    } else {
      // Select
      selectedBooks.push(book);
      btn.classList.remove('select');
      btn.classList.add('selected');
      btn.innerHTML = '<i class="fas fa-check"></i> Selected';
    }

    updateCart();
  });

  readyBagsContainer.addEventListener('click', (e) => {
    const dropdownToggle = e.target.closest('.dropdown-toggle');
    if (dropdownToggle) {
      const dropdownMenu = dropdownToggle.nextElementSibling;
      dropdownMenu.classList.toggle('show');
    }

    const btn = e.target.closest('.select-btn');
    if (btn) {
      const id = btn.dataset.id;
      const bag = readyBags.find(b => b.id === id);
      if (!bag) return;

      if (btn.classList.contains('selected')) {
        // Deselect
        selectedBooks = selectedBooks.filter(b => b.id !== id);
        btn.classList.remove('selected');
        btn.classList.add('select');
        btn.innerHTML = '<i class="fas fa-shopping-bag"></i> Add to Cart';
      } else {
        // Select
        selectedBooks.push({ ...bag, title: bag.name });
        btn.classList.remove('select');
        btn.classList.add('selected');
        btn.innerHTML = '<i class="fas fa-check"></i> Selected';
      }
      updateCart();
    }

    const customizeBtn = e.target.closest('.customize-btn');
    if (customizeBtn) {
      const bagId = customizeBtn.dataset.id;
      openCustomizeModal(bagId);
    }
  });

  proceedBtn.addEventListener('click', openOrderModal);

  // Scroll entrance animations
  const animateOnScroll = () => {
    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // initial check

  // First render
  renderBooks();
  renderReadyBags();
});
