/* script.js */
let articles = [
    { 
        title: "The Rise of AI in 2025", 
        content: "Artificial intelligence is transforming every industry with rapid innovation. In healthcare, AI is assisting in diagnostics and personalized treatment. Autonomous vehicles are reshaping transportation. Businesses leverage AI for automation, enhancing productivity and decision-making. However, ethical concerns about privacy and job displacement continue to grow.", 
        img: "https://via.placeholder.com/300" 
    },
    { 
        title: "Top 10 Travel Destinations", 
        content: "From the serene beaches of Bali to the bustling streets of Tokyo, 2025 offers a plethora of travel destinations. Iceland's northern lights, Italy's historic landmarks, and Australia's Great Barrier Reef are just a few must-visit spots. Sustainable tourism is on the rise, encouraging travelers to leave minimal footprints.", 
        img: "https://via.placeholder.com/300" 
    },
    { 
        title: "Secrets to Viral Content", 
        content: "What makes content go viral? It's a mix of relatability, emotional impact, and shareability. Viral content often tells a compelling story, offers valuable information, or evokes strong emotions. Consistency and understanding your audience are key to creating share-worthy content.", 
        img: "https://via.placeholder.com/300" 
    },
    { 
        title: "Healthy Living Tips", 
        content: "Maintaining a healthy lifestyle involves a balanced diet, regular exercise, and mental well-being. Incorporating whole foods, staying hydrated, and getting enough sleep are essential. Mindfulness and stress management play a crucial role in overall health.", 
        img: "https://via.placeholder.com/300" 
    },
    { 
        title: "The Future of Work", 
        content: "The work landscape is evolving with remote work and automation becoming the norm. Flexible working hours and work-life balance are prioritized by employees. Companies are adopting hybrid models to retain talent. Automation is reshaping jobs, emphasizing the need for upskilling.", 
        img: "https://via.placeholder.com/300" 
    },
    { 
        title: "Cryptocurrency Explained", 
        content: "Cryptocurrencies like Bitcoin and Ethereum are revolutionizing finance. Decentralized finance (DeFi) offers transparency and security. However, volatility and regulatory concerns pose challenges. Blockchain technology is also impacting sectors beyond finance.", 
        img: "https://via.placeholder.com/300" 
    }
];

let currentIndex = 0;
const articlesPerPage = 2;

function loadArticles() {
    const container = document.getElementById('article-container');
    let loaded = 0;

    while (loaded < articlesPerPage && currentIndex < articles.length) {
        const article = articles[currentIndex];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="${article.img}" alt="${article.title}"><h3>${article.title}</h3><p>${article.content}</p>`;
        container.appendChild(card);
        currentIndex++;
        loaded++;
    }

    if (currentIndex >= articles.length) {
        document.querySelector('.load-more').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', loadArticles);
