// 检查浏览器是否支持 Service Worker，并添加开发环境判断
if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', async () => {
        try {
            // 注册 Service Worker
            const registration = await navigator.serviceWorker.register('/assets/js/service-worker.js');
            console.log('ServiceWorker 注册成功');
        } catch (err) {
            // 开发环境可能不需要 Service Worker，给出警告
            console.warn('ServiceWorker 注册失败 (开发环境可能不需要)', err);
        }
    });
}

// 主题切换相关常量
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

// 获取主题切换按钮、主题图标和 body 元素
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// 存储主题图标的 SVG 路径，避免重复定义
const THEME_SVG_PATHS = {
    [LIGHT_THEME]: `<path d="M20 13a1 1 0 010 2h-1a1 1 0 110-2h1zm-5.164-5.93a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zm-7.071 0a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM13 4a1 1 0 110 2h-2a1 1 0 110-2h2zm7 11a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM1 13a1 1 0 01-1-1v-2a1 1 0 011-1h1a1 1 0 110 2H1a1 1 0 01-1 1zm20-8a1 1 0 011 1v2a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011-1zM3 6a1 1 0 01-1-1V3a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1 1zm16 14a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM6.464 19.464a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zm11.314-11.314a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414z"></path>`,
    [DARK_THEME]: `<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>`
};

/**
 * 更新主题图标和 body 的 data-theme 属性
 * @param {string} theme - 主题名称，可选值为 'light' 或 'dark'
 */
function updateThemeIcon(theme) {
    // 根据主题设置图标 SVG 内容，若主题不存在则使用黑暗主题图标
    themeIcon.innerHTML = THEME_SVG_PATHS[theme] || THEME_SVG_PATHS[DARK_THEME];
    // 设置 body 的 data-theme 属性
    body.setAttribute('data-theme', theme);
}

/**
 * 切换主题并更新本地存储和主题图标
 */
function toggleTheme() {
    // 切换 body 的 light-theme 类
    const isLight = body.classList.toggle('light-theme');
    // 根据切换结果确定新主题
    const newTheme = isLight ? LIGHT_THEME : DARK_THEME;
    // 将新主题存储到本地存储
    localStorage.setItem('theme', newTheme);
    // 更新主题图标
    updateThemeIcon(newTheme);
}

/**
 * 初始化主题，从本地存储获取主题并更新页面
 */
function initTheme() {
    // 从本地存储获取保存的主题，默认使用黑暗主题
    const savedTheme = localStorage.getItem('theme') || DARK_THEME;
    // 根据保存的主题切换 body 的 light-theme 类
    body.classList.toggle('light-theme', savedTheme === LIGHT_THEME);
    // 更新主题图标
    updateThemeIcon(savedTheme);
}

// 初始化主题
initTheme();

// 为主题切换按钮添加点击事件监听器
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Particles.js 初始化
if (typeof particlesJS !== 'undefined') {
    particlesJS.load('particles', '/particles.json', () => {
        console.log('particles.js 加载完成 - 回调');
    });
}

// Typed.js 初始化
if (typeof Typed !== 'undefined') {
    new Typed('.typing-text', {
        strings: ['John Doe', 'Full Stack Developer', 'UI/UX Designer'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
}

/**
 * 设置平滑滚动功能
 */
function setupSmoothScroll() {
    // 选择所有以 # 开头的链接
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', async (e) => {
            e.preventDefault();
            // 获取目标元素
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                // 平滑滚动到目标元素
                await target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 设置平滑滚动功能
setupSmoothScroll();

/**
 * 设置项目筛选功能
 */
function setupProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        /**
         * 处理筛选按钮点击事件
         * @param {HTMLElement} button - 被点击的筛选按钮
         */
        const handleFilterClick = (button) => {
            // 移除所有筛选按钮的 active 类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 为被点击的按钮添加 active 类
            button.classList.add('active');
            // 获取筛选条件
            const filter = button.dataset.filter;
            // 根据筛选条件显示或隐藏项目卡片
            projectCards.forEach(card => {
                card.style.display = filter === 'all' || card.dataset.category === filter ? 'block' : 'none';
            });
        };

        // 为每个筛选按钮添加点击事件监听器
        filterButtons.forEach(button => {
            button.addEventListener('click', () => handleFilterClick(button));
        });
    }
}

// 设置项目筛选功能
setupProjectFilter();

// 初始化所有元素的过渡效果
window.addEventListener('load', () => {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.style.transition = 'all 0.3s ease';
    });
});

/**
 * 设置移动菜单切换功能
 */
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        // 为移动菜单按钮添加点击事件监听器
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // 为移动菜单中的链接添加点击事件监听器，点击后关闭菜单
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// 设置移动菜单切换功能
setupMobileMenu();

/**
 * 设置移动设备主题切换功能
 */
function setupMobileThemeToggle() {
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    if (mobileThemeToggle && themeToggle) {
        // 为移动设备主题切换按钮添加点击事件监听器，触发桌面主题切换逻辑
        mobileThemeToggle.addEventListener('click', () => {
            themeToggle.click();
        });
    }
}

// 设置移动设备主题切换功能
setupMobileThemeToggle();

// 获取 canvas 元素
const canvas = document.getElementById('canvas');

let scene, camera, renderer, particles, geometry, material;

/**
 * 初始化场景和粒子系统
 */
function initScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // 创建粒子系统
    geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 5000; i++) {
        vertices.push(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    material = new THREE.PointsMaterial({
        size: 0.005,
        color: 0x4f46e5,
        transparent: true,
        opacity: 0.8
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);
}

/**
 * 动画函数，实现粒子系统的旋转动画
 */
function animate() {
    requestAnimationFrame(animate);
    particles.rotation.x += 0.0001;
    particles.rotation.y += 0.0005;
    renderer.render(scene, camera);
}

/**
 * 处理窗口大小变化，更新相机和渲染器的尺寸
 */
function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// 初始化场景并开始动画
initScene();
animate();

// 添加窗口大小变化监听器
window.addEventListener('resize', handleResize);

// 清理函数（这里简单模拟组件卸载时的清理操作）
window.addEventListener('beforeunload', () => {
    window.removeEventListener('resize', handleResize);
    if (scene && particles) {
        scene.remove(particles);
    }
    if (geometry) geometry.dispose();
    if (material) material.dispose();
    if (renderer) renderer.dispose();
});

// 定义表单验证函数
function validateForm() {
    // 获取表单元素
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // 获取错误提示元素
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formMessage = document.getElementById('form-message');

    // 清除之前的错误提示
    nameError.classList.add('hidden');
    emailError.classList.add('hidden');
    messageError.classList.add('hidden');
    formMessage.classList.add('hidden');

    let isValid = true;

    // 验证姓名
    if (nameInput.value.trim() === '') {
        nameError.classList.remove('hidden');
        isValid = false;
    }

    // 验证邮箱
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.classList.remove('hidden');
        isValid = false;
    }

    // 验证消息内容
    if (messageInput.value.trim() === '') {
        messageError.classList.remove('hidden');
        isValid = false;
    }

    if (isValid) {
        // 表单验证通过，可添加提交逻辑
        formMessage.classList.remove('hidden');
        formMessage.classList.add('text-green-500');
        formMessage.textContent = 'Message sent successfully!';
        // 清空表单
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    } else {
        formMessage.classList.remove('hidden');
        formMessage.classList.add('text-red-500');
        formMessage.textContent = 'Please fix the errors in the form.';
    }

    return isValid;
}