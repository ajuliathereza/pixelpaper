// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const wallpaperGrid = document.getElementById('wallpaperGrid');

// Sample wallpaper data - In a real app, this would come from a database
const wallpapers = [
    {
        id: 1,
        title: 'Cyberpunk City',
        image: 'wallpapers/cyberpunk/cyber1.jpg',
        category: 'cyberpunk',
        isPopular: true,
        downloadUrl: 'https://source.unsplash.com/random/1920x1080/?cyberpunk'
    },
    {
        id: 2,
        title: 'Anime Sunset',
        image: '',
        category: 'anime',
        isPopular: true,
        downloadUrl: 'https://source.unsplash.com/random/1920x1080/?anime'
    },
    {
        id: 3,
        title: 'Hacker Terminal',
        image: 'https://source.unsplash.com/random/600x400/?hacker,code',
        category: 'hacker',
        isPopular: false,
        downloadUrl: 'https://source.unsplash.com/random/1920x1080/?hacker,code'
    },
    {
        id: 4,
        title: 'Gaming Setup',
        image: 'https://source.unsplash.com/random/600x400/?gaming',
        category: 'gamer',
        isPopular: true,
        downloadUrl: 'https://source.unsplash.com/random/1920x1080/?gaming'
    },
    {
        id: 5,
        title: 'Neon Lights',
        image: 'https://source.unsplash.com/random/600x400/?neon',
        category: 'cyberpunk',
        isPopular: false,
        downloadUrl: 'https://source.unsplash.com/random/1920x1080/?neon'
    },
    {
        id: 6,
        title: 'Anime Girl',
        image: 'https://source.unsplash.com/random/600x400/?anime,girl',
        category: 'anime',
        isPopular: false,
        downloadUrl: 'https://source.unsplash.com/random/1920x1080/?anime,girl'
    },
    {
        id: 7,
        title: 'Matrix Code',
        image: 'https://source.unsplash.com/random/600x400/?matrix',
        category: 'hacker',
        isPopular: true,
        downloadUrl: 'https://source.unsplash.com/random/1920x1080/?matrix'
    },
    {
        id: 8,
        title: 'Game Controller',
        image: 'https://source.unsplash.com/random/600x400/?game,controller',
        category: 'gamer',
        isPopular: false,
        downloadUrl: 'https://source.unsplash.com/random/1920x1080/?game,controller'
    }
];

// Toggle mobile menu
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    menuToggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
    
    // Adiciona overlay quando o menu está aberto
    if (nav.classList.contains('active')) {
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(overlay);
        
        // Força o reflow
        void overlay.offsetWidth;
        
        // Anima a opacidade
        overlay.style.opacity = '1';
        
        // Fecha o menu ao clicar no overlay
        overlay.addEventListener('click', closeMenu);
    } else {
        closeMenu();
    }
});

// Fecha o menu ao clicar em um link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Função para fechar o menu
function closeMenu() {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggle.textContent = '☰';
    
    // Remove o overlay
    const overlay = document.querySelector('.menu-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}

// Fecha o menu ao rolar a página
window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768 && nav.classList.contains('active')) {
        closeMenu();
    }
});

// Function to create wallpaper card
function createWallpaperCard(wallpaper) {
    const card = document.createElement('div');
    card.className = 'wallpaper-card';
    
    // Add popular badge if applicable
    const popularBadge = wallpaper.isPopular 
        ? '<span class="popular-badge">Popular</span>' 
        : '';
    
    card.innerHTML = `
        ${popularBadge}
        <img src="${wallpaper.image}" alt="${wallpaper.title}" class="wallpaper-img">
        <div class="wallpaper-info">
            <h3 class="wallpaper-title" title="${wallpaper.title}">${wallpaper.title}</h3>
            <a href="${wallpaper.downloadUrl}" class="download-btn" download>Download</a>
        </div>
    `;
    
    return card;
}

// Function to display wallpapers
function displayWallpapers(wallpapersToShow) {
    wallpaperGrid.innerHTML = '';
    
    if (wallpapersToShow.length === 0) {
        wallpaperGrid.innerHTML = '<p class="no-results">Nenhum wallpaper encontrado.</p>';
        return;
    }
    
    wallpapersToShow.forEach(wallpaper => {
        const card = createWallpaperCard(wallpaper);
        wallpaperGrid.appendChild(card);
    });
}

// Initialize the page
function init() {
    // Check if we're on the home page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        // Show all wallpapers on home page
        displayWallpapers(wallpapers);
    } else if (window.location.pathname.includes('popular.html')) {
        // Show only popular wallpapers
        const popularWallpapers = wallpapers.filter(wallpaper => wallpaper.isPopular);
        displayWallpapers(popularWallpapers);
    } else if (window.location.pathname.includes('categories.html')) {
        // Handle category filtering
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        if (category) {
            const filteredWallpapers = wallpapers.filter(wallpaper => 
                wallpaper.category === category
            );
            displayWallpapers(filteredWallpapers);
            
            // Update page title
            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = `Categoria: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
            wallpaperGrid.parentNode.insertBefore(categoryTitle, wallpaperGrid);
        } else {
            // No specific category selected, show all categories
            displayCategories();
        }
    }
}

// Function to display categories
function displayCategories() {
    const categories = [
        { id: 'anime', name: 'Anime', count: wallpapers.filter(w => w.category === 'anime').length },
        { id: 'cyberpunk', name: 'Cyberpunk', count: wallpapers.filter(w => w.category === 'cyberpunk').length },
        { id: 'hacker', name: 'Hacker', count: wallpapers.filter(w => w.category === 'hacker').length },
        { id: 'gamer', name: 'Gamer', count: wallpapers.filter(w => w.category === 'gamer').length }
    ];
    
    const categoriesHTML = categories.map(category => `
        <div class="category-card" style="--accent: ${getCategoryColor(category.id)};">
            <h3>${category.name}</h3>
            <p>${category.count} wallpapers disponíveis</p>
            <a href="categories.html?category=${category.id}" class="category-link"></a>
        </div>
    `).join('');
    
    wallpaperGrid.innerHTML = categoriesHTML;
    
    // Add click event to category cards
    document.querySelectorAll('.category-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            window.location.href = `categories.html?category=${categories[index].id}`;
        });
    });
}

// Helper function to get category color
function getCategoryColor(category) {
    const colors = {
        'anime': '#ff6b6b',
        'cyberpunk': '#6b5b95',
        'hacker': '#88b04b',
        'gamer': '#ff6f61'
    };
    return colors[category] || '#00f0ff';
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Handle download button clicks
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('download-btn')) {
        e.preventDefault();
        const downloadUrl = e.target.getAttribute('href');
        const fileName = downloadUrl.split('/').pop();
        
        // Create a temporary anchor element
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = `pixelpaper-${fileName}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        // Show download feedback
        const originalText = e.target.textContent;
        e.target.textContent = 'Baixando...';
        e.target.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            e.target.textContent = 'Download Concluído!';
            setTimeout(() => {
                e.target.textContent = originalText;
                e.target.style.backgroundColor = '';
            }, 1500);
        }, 1000);
    }
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
