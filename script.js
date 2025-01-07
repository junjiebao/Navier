// 产品数据
const products = [
    {
        id: 1,
        name: '豪华游艇',
        image: 'images/products/yacht.jpg',
        description: '高端奢华，极致体验'
    },
    {
        id: 2,
        name: '帆船',
        image: 'images/products/sailboat.jpg',
        description: '经典设计，优雅航行'
    },
    {
        id: 3,
        name: '钓鱼艇',
        image: 'images/products/fishing.jpg',
        description: '专业设计，垂钓首选'
    }
];

// 动态加载产品
function loadProducts() {
    const grid = document.querySelector('.categories-grid');
    grid.innerHTML = products.map(product => `
        <div class="category-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="category-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <a href="products/${product.id}.html" class="btn btn-secondary">查看详情</a>
            </div>
        </div>
    `).join('');
}

// 轮播图功能
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// 表单验证
function validateForm() {
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(e) {
        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector('textarea');
        
        if (!name.value.trim()) {
            alert('请输入您的姓名');
            e.preventDefault();
            return;
        }
        
        if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
            alert('请输入有效的邮箱地址');
            e.preventDefault();
            return;
        }
        
        if (!message.value.trim()) {
            alert('请输入留言内容');
            e.preventDefault();
            return;
        }
    });
}

// 响应式导航菜单
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    initMobileMenu();
    validateForm();
    
    if (slides.length > 1) {
        setInterval(nextSlide, 5000);
    }
});
