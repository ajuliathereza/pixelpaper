// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const wallpaperGrid = document.getElementById('wallpaperGrid');

// Dados dos wallpapers locais
const wallpapers = [
    // Wallpapers de Anime
    {
        id: 1,
        title: 'Anime Wallpaper 1',
        image: 'wallpapers/anime/anime1.jpg',
        category: 'anime',
        isPopular: true,
        downloadUrl: 'wallpapers/anime/anime1.jpg'
    },
    {
        id: 2,
        title: 'Anime Mobile 1',
        image: 'wallpapers/mobile/anime/animemobile1.png',
        category: 'anime',
        isPopular: true,
        downloadUrl: 'wallpapers/mobile/anime/animemobile1.png',
        isMobile: true
    },
    {
        id: 3,
        title: 'Anime Mobile 2',
        image: 'wallpapers/mobile/anime/animemobile2.png',
        category: 'anime',
        isPopular: false,
        downloadUrl: 'wallpapers/mobile/anime/animemobile2.png',
        isMobile: true
    },
    
    // Wallpapers de GameOculto
    {
        id: 4,
        title: 'GameOculto 1',
        image: 'wallpapers/gameoculto/gameoculto1.png',
        category: 'gameoculto',
        isPopular: true,
        downloadUrl: 'wallpapers/gameoculto/gameoculto1.png'
    },
    {
        id: 5,
        title: 'GameOculto 2',
        image: 'wallpapers/gameoculto/gameoculto2.png',
        category: 'gameoculto',
        isPopular: true,
        downloadUrl: 'wallpapers/gameoculto/gameoculto2.png'
    },
    {
        id: 6,
        title: 'GameOculto 3',
        image: 'wallpapers/gameoculto/gameoculto3.png',
        category: 'gameoculto',
        isPopular: false,
        downloadUrl: 'wallpapers/gameoculto/gameoculto3.png'
    },
    {
        id: 7,
        title: 'GameOculto 4',
        image: 'wallpapers/gameoculto/gameoculto4.png',
        category: 'gameoculto',
        isPopular: false,
        downloadUrl: 'wallpapers/gameoculto/gameoculto4.png'
    },
    {
        id: 8,
        title: 'GameOculto 5',
        image: 'wallpapers/gameoculto/gameoculto5.png',
        category: 'gameoculto',
        isPopular: false,
        downloadUrl: 'wallpapers/gameoculto/gameoculto5.png'
    },
    
    // Wallpapers de Cyberpunk
    {
        id: 9,
        title: 'Cyberpunk Mobile',
        image: 'wallpapers/mobile/cyberpunk/cybermobile1.png',
        category: 'cyberpunk',
        isPopular: true,
        downloadUrl: 'wallpapers/mobile/cyberpunk/cybermobile1.png',
        isMobile: true
    },
    
    // Wallpapers de Natureza
    {
        id: 10,
        title: 'Natureza',
        image: 'wallpapers/nature/folhas1.png',
        category: 'nature',
        isPopular: true,
        downloadUrl: 'wallpapers/nature/folhas1.png'
    },
    
    // Wallpapers de Tecnologia
    {
        id: 11,
        title: 'Tecnologia 1',
        image: 'wallpapers/tech/tech1.jpg',
        category: 'tech',
        isPopular: true,
        downloadUrl: 'wallpapers/tech/tech1.jpg'
    },
    {
        id: 12,
        title: 'Tecnologia 2',
        image: 'wallpapers/tech/tech2.jpg',
        category: 'tech',
        isPopular: false,
        downloadUrl: 'wallpapers/tech/tech2.jpg'
    },
    {
        id: 13,
        title: 'Tecnologia 3',
        image: 'wallpapers/tech/tech3.jpg',
        category: 'tech',
        isPopular: true,
        downloadUrl: 'wallpapers/tech/tech3.jpg'
    },
    {
        id: 14,
        title: 'Tecnologia 4',
        image: 'wallpapers/tech/tech4.png',
        category: 'tech',
        isPopular: false,
        downloadUrl: 'wallpapers/tech/tech4.png'
    },
    {
        id: 15,
        title: 'Tecnologia 5',
        image: 'wallpapers/tech/tech5.png',
        category: 'tech',
        isPopular: false,
        downloadUrl: 'wallpapers/tech/tech5.png'
    },
    {
        id: 16,
        title: 'Tecnologia 6',
        image: 'wallpapers/tech/tech6.png',
        category: 'tech',
        isPopular: true,
        downloadUrl: 'wallpapers/tech/tech6.png'
    },
    {
        id: 17,
        title: 'Tecnologia 7',
        image: 'wallpapers/tech/tech7.png',
        category: 'tech',
        isPopular: false,
        downloadUrl: 'wallpapers/tech/tech7.png'
    },
    {
        id: 18,
        title: 'Tecnologia 8',
        image: 'wallpapers/tech/tech8.png',
        category: 'tech',
        isPopular: false,
        downloadUrl: 'wallpapers/tech/tech8.png'
    },
    {
        id: 19,
        title: 'Tecnologia 9',
        image: 'wallpapers/tech/tech9.png',
        category: 'tech',
        isPopular: true,
        downloadUrl: 'wallpapers/tech/tech9.png'
    },
    {
        id: 20,
        title: 'Tecnologia 10',
        image: 'wallpapers/tech/tech10.png',
        category: 'tech',
        isPopular: false,
        downloadUrl: 'wallpapers/tech/tech10.png'
    },
    {
        id: 21,
        title: 'Tecnologia 11',
        image: 'wallpapers/tech/tech11.png',
        category: 'tech',
        isPopular: false,
        downloadUrl: 'wallpapers/tech/tech11.png'
    },
    {
        id: 22,
        title: 'Tecnologia 12',
        image: 'wallpapers/tech/tech12.jpg',
        category: 'tech',
        isPopular: false,
        downloadUrl: 'wallpapers/tech/tech12.jpg'
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

// Inicializa a página
function init() {
    // Verifica se estamos na página inicial
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
        // Mostra apenas wallpapers que não são móveis na página inicial
        const desktopWallpapers = wallpapers.filter(wallpaper => !wallpaper.isMobile);
        displayWallpapers(desktopWallpapers);
    } 
    // Página de wallpapers populares desktop
    else if (window.location.pathname.endsWith('popular.html')) {
        // Mostra apenas wallpapers populares desktop
        const popularWallpapers = wallpapers.filter(wallpaper => 
            wallpaper.isPopular && !wallpaper.isMobile
        );
        displayWallpapers(popularWallpapers);
    } 
    // Página de wallpapers populares mobile
    else if (window.location.pathname.endsWith('mobile-popular.html')) {
        // Mostra apenas wallpapers populares mobile
        const popularWallpapers = wallpapers.filter(wallpaper => 
            wallpaper.isPopular && wallpaper.isMobile
        );
        displayWallpapers(popularWallpapers);
    }
    // Página de categorias desktop
    else if (window.location.pathname.includes('categories.html')) {
        // Filtra por categoria
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        if (category) {
            const filteredWallpapers = wallpapers.filter(wallpaper => 
                wallpaper.category === category && !wallpaper.isMobile
            );
            
            displayWallpapers(filteredWallpapers);
            
            // Atualiza o título da página
            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = `Categoria: ${getCategoryDisplayName(category)}`;
            wallpaperGrid.parentNode.insertBefore(categoryTitle, wallpaperGrid);
        } else {
            // Nenhuma categoria específica selecionada, mostra todas as categorias desktop
            displayCategories();
        }
    }
    // Página de categorias mobile
    else if (window.location.pathname.includes('mobile-categories.html')) {
        // Filtra por categoria
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        if (category) {
            const filteredWallpapers = wallpapers.filter(wallpaper => 
                wallpaper.category === category && wallpaper.isMobile
            );
            
            displayWallpapers(filteredWallpapers);
            
            // Atualiza o título da página
            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = `Categoria: ${getCategoryDisplayName(category)}`;
            wallpaperGrid.parentNode.insertBefore(categoryTitle, wallpaperGrid);
        } else {
            // Nenhuma categoria específica selecionada, mostra todas as categorias mobile
            displayCategories(true);
        }
    }
    // Página de wallpapers mobile
    else if (window.location.pathname.includes('mobile.html')) {
        // Mostra apenas wallpapers móveis
        const mobileWallpapers = wallpapers.filter(wallpaper => wallpaper.isMobile);
        displayWallpapers(mobileWallpapers);
    }
}

// Função auxiliar para obter o nome de exibição de uma categoria
function getCategoryDisplayName(categoryId) {
    const categoryNames = {
        'anime': 'Anime',
        'cyberpunk': 'Cyberpunk',
        'gameoculto': 'GameOculto',
        'tech': 'Tecnologia',
        'nature': 'Natureza',
        'mobile': 'Mobile'
    };
    return categoryNames[categoryId] || categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
}

// Função para exibir as categorias
function displayCategories(isMobile = false) {
    // Obtém todas as categorias únicas dos wallpapers
    const allCategories = [...new Set(wallpapers.map(w => w.category))];
    
    // Cria um array de categorias com contagem de wallpapers
    const categories = allCategories.map(categoryId => {
        const count = wallpapers.filter(w => 
            w.category === categoryId && 
            (isMobile ? w.isMobile : !w.isMobile)
        ).length;
        
        return {
            id: categoryId,
            name: getCategoryDisplayName(categoryId),
            count: count
        };
    }).filter(category => category.count > 0); // Filtra categorias vazias
    
    // Ordena as categorias por nome
    categories.sort((a, b) => a.name.localeCompare(b.name));
    
    // Verifica se há categorias para exibir
    if (categories.length === 0) {
        wallpaperGrid.innerHTML = '<p class="no-results">Nenhuma categoria disponível no momento.</p>';
        return;
    }
    
    // Determina o prefixo da URL com base na página atual
    const isMobilePage = window.location.pathname.includes('mobile-') || 
                        window.location.pathname.includes('mobile.html');
    const prefix = isMobilePage ? 'mobile-' : '';
    
    // Cria o HTML das categorias
    const categoriesHTML = categories.map(category => `
        <div class="category-card" style="--accent: ${getCategoryColor(category.id)};">
            <h3>${category.name}</h3>
            <p>${category.count} wallpaper${category.count !== 1 ? 's' : ''} disponível${category.count !== 1 ? 's' : ''}</p>
            <a href="${prefix}categories.html?category=${category.id}" class="category-link"></a>
        </div>
    `).join('');
    
    wallpaperGrid.innerHTML = categoriesHTML;
    
    // Adiciona evento de clique aos cards de categoria
    document.querySelectorAll('.category-card').forEach((card, index) => {
        card.addEventListener('click', (e) => {
            // Evita navegação se o clique foi em um link dentro do card
            if (e.target.tagName === 'A') return;
            
            const categoryId = categories[index].id;
            const baseUrl = window.location.pathname.includes('mobile.html') ? 'mobile-categories.html' : 'categories.html';
            window.location.href = `${baseUrl}?category=${categoryId}`;
        });
    });
}

// Função auxiliar para obter a cor de uma categoria
function getCategoryColor(category) {
    const colors = {
        'anime': '#ff6b6b',        // Vermelho suave
        'cyberpunk': '#9c27b0',    // Roxo
        'gameoculto': '#673ab7',   // Roxo mais escuro
        'tech': '#2196f3',         // Azul
        'nature': '#4caf50',       // Verde
        'mobile': '#03a9f4',       // Azul claro
        'hacker': '#4caf50',       // Verde (para compatibilidade)
        'gamer': '#ff5722'         // Laranja (para compatibilidade)
    };
    return colors[category] || '#607d8b'; // Azul acinzentado como padrão
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
        
        // Preserva a extensão original do arquivo
        const fileExtension = fileName.split('.').pop();
        a.download = `pixelpaper-${fileName}`.replace(`.${fileExtension}`, '') + `.${fileExtension}`;
        
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
