# 乡村别墅介绍网站

## 项目说明

这是一个简约风格的乡村别墅介绍网站，包含以下功能：

### 主要功能
- ✅ **轮播图**：展示 4 栋主推别墅，支持自动播放、手动切换、触摸滑动
- ✅ **图片墙**：网格布局展示多栋别墅，响应式设计
- ✅ **文案展示**：每栋别墅配有名称、描述和价格信息
- ✅ **响应式设计**：适配 PC 端和移动端
- ✅ **平滑滚动**：导航栏点击平滑跳转到对应区域
- ✅ **联系表单**：客户留言功能

### 文件结构
```
网页文件/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── main.js        # JavaScript 交互
└── images/            # 图片目录（需自行添加图片）
```

### 使用说明

1. **添加图片**：
   在 `images` 文件夹中添加以下图片：
   - 轮播图：`villa1.jpg`, `villa2.jpg`, `villa3.jpg`, `villa4.jpg` (1000x500px)
   - 首页背景：`hero-bg.jpg` (1920x1080px)
   - 图片墙：`gallery1.jpg` 到 `gallery6.jpg` (建议 600x600px)

2. **预览网站**：
   直接在浏览器中打开 `index.html` 即可预览

3. **自定义内容**：
   - 修改文案：编辑 `index.html` 中的文字内容
   - 调整样式：编辑 `css/style.css`
   - 修改交互：编辑 `js/main.js`

### 技术栈
- HTML5
- CSS3（Flexbox、Grid 布局）
- 原生 JavaScript（ES6+）

### 兼容性
- 现代浏览器（Chrome、Firefox、Safari、Edge）
- 移动端浏览器（iOS Safari、Chrome Mobile）

## 许可证
MIT License
