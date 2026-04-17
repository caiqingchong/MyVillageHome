// 轮播图功能
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slidesContainer = document.querySelector('.carousel-slides');

// 防御性检查
if (!slides.length || !dots.length || !slidesContainer) {
    console.log('轮播图元素未找到，跳过初始化');
} else {
    // 初始化轮播图
    initCarousel();
}

// 初始化轮播图
function initCarousel() {
    showSlide(currentSlideIndex);
    // 自动播放
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// 切换幻灯片
function changeSlide(n) {
    currentSlideIndex += n;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

// 显示指定幻灯片
function showSlide(n) {
    slidesContainer.style.transform = `translateX(-${n * 100}%)`;
    
    // 更新活动状态
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

// 跳转到指定幻灯片
function currentSlide(n) {
    currentSlideIndex = n - 1;
    showSlide(currentSlideIndex);
}

// 触摸滑动支持（移动端）
let touchStartX = 0;
let touchEndX = 0;

slidesContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
}, false);

slidesContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // 向左滑动
            changeSlide(1);
        } else {
            // 向右滑动
            changeSlide(-1);
        }
    }
}

// 键盘导航
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // 这里可以添加实际的提交逻辑
        alert('感谢您的留言！我们会尽快与您联系。');
        contactForm.reset();
    });
}

// 滚动时导航栏效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70; // 减去导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 图片加载完成处理
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            img.addEventListener('error', function() {
                this.classList.add('loaded');
            });
        }
    });
});

