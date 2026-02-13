# 图片生成脚本使用说明

## 功能说明
这个脚本会自动生成8张3D效果的概念插图，用于网站展示。

## 生成的图片列表
1. **security_shield.png** - 安全防护概念图
2. **privacy_lock.png** - 隐私保护概念图
3. **knowledge_capture.png** - 知识捕获概念图
4. **smart_summary.png** - 智能总结概念图
5. **structured_export.png** - 结构化导出概念图
6. **local_storage.png** - 本地存储概念图
7. **https_security.png** - HTTPS安全概念图
8. **encryption.png** - 加密存储概念图

## 使用方法

### 1. 安装依赖
```bash
pip install requests
```

### 2. 运行脚本
```bash
python generate_images.py
```

### 3. 查看生成的图片
生成的图片会保存在 `generated_images` 目录中。

## 配置说明

可以在脚本中修改以下参数：

```python
IMAGE_CONFIG = {
    "size": "1024x1024",      # 图片大小
    "guidance": 7.5,            # 引导强度 (1-10)
    "batch": 1,                  # 每次生成的图片数量 (1-4)
    "type": "json"               # 返回格式
}
```

### 图片大小选项
- 256x256
- 512x512
- 768x768
- 1024x1024 (默认)
- 1536x1536

### 引导强度说明
- 值越高：生成的图像越与文本提示严格匹配
- 值越低：生成的图像更有创意和多样性
- 范围：1-10，默认7.5

## 自定义提示词

如果需要生成其他图片，可以在 `PROMPTS` 列表中添加新的提示词：

```python
{
    "name": "your_image_name",
    "prompt": "your 3D isometric illustration prompt here",
    "description": "图片描述"
}
```

## 注意事项
1. 脚本会在每次请求后等待2秒，避免请求过于频繁
2. 生成的图片质量取决于API服务
3. 建议定期检查API服务是否正常工作