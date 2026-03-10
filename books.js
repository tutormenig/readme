// script.js
document.addEventListener('DOMContentLoaded', () => {

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
      price: 25000,
      img: 'Books Images/book1.jpeg',
      books: [7, 9, 11, 17, 18],
      description: "A wonderful collection for preschoolers to start their reading journey."
    },
    {
      id: 'rb2',
      name: 'Elementary Adventure Kit',
      price: 30000,
      img: 'Books Images/book2.jpeg',
      books: [3, 5, 6, 15, 21],
      description: "Exciting stories for elementary school readers to fuel their imagination."
    },
    {
      id: 'rb3',
      name: 'Fiction Fanatics Bundle',
      price: 35000,
      img: 'Books Images/book3.jpeg',
      books: [2, 4, 8, 12, 19],
      description: "A bundle of captivating fiction for young and avid readers."
    },
    {
      id: 'rb4',
      name: 'Non-Fiction Discovery Crate',
      price: 28000,
      img: 'Books Images/book4.jpeg',
      books: [13, 22, 25, 26, 29],
      description: "Explore the world with this collection of informative and engaging non-fiction books."
    },
    {
      id: 'rb5',
      name: 'Secondary School Starter Pack',
      price: 20000,
      img: 'Books Images/book5.jpeg',
      books: [1, 41],
      description: "A curated selection for secondary school students to enhance their literary skills."
    }
  ];

  // DOM elements
  const container = document.getElementById('books-container');
  const readyBagsContainer = document.getElementById('ready-bags-container');
  const searchInput = document.getElementById('searchInput');
  const categoryLinks = document.getElementById('categoryLinks');
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  const pageNumbersDiv = document.getElementById('pageNumbers');
  const cartSummary = document.getElementById('cart-summary');
  const cartItemsEl = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  const proceedBtn = document.getElementById('proceed-btn');

  let selectedBooks = [];

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
            <button class="dropdown-toggle">Click to See Books</button>
            <ul class="dropdown-menu">
              ${bag.books.map(bookId => `<li>${getBookById(bookId).title}</li>`).join('')}
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
    if (selectedBooks.length > 0) {
      cartSummary.classList.remove('hidden');
      cartItemsEl.innerHTML = selectedBooks
        .map(b => `<li>${b.title} – ₦${b.price.toLocaleString()}</li>`)
        .join('');
      const total = selectedBooks.reduce((sum, b) => sum + b.price, 0);
      cartTotalEl.textContent = `₦${total.toLocaleString()}`;
    } else {
      cartSummary.classList.add('hidden');
    }
  }

  function generateWhatsAppMessage() {
    if (selectedBooks.length === 0) return;

    let message = "Hello, I would like to purchase the following books:\n\n";
    selectedBooks.forEach(b => {
      message += `• ${b.title} – ₦${b.price.toLocaleString()}\n`;
    });
    const total = selectedBooks.reduce((sum, b) => sum + b.price, 0);
    message += `\nTotal Amount: ₦${total.toLocaleString()}\n\nPlease guide me on payment and delivery options. Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappNumber = "234XXXXXXXXXX"; // ← Replace with real number
    const url = `https.wa.me/${whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank');
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

      renderBooks();
    }
  });

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

  proceedBtn.addEventListener('click', generateWhatsAppMessage);

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





