---
title: 弹窗操作
---

# 弹窗操作

以下操作在代码生成器生成后默认为页面模式, 可通过配置实现弹窗模式

```php
public function list(): Page
{
    $crud = $this->baseCRUD()
        ->headerToolbar([
            // 第一个参数为 true, 则启用弹窗模式, 第二个参数为弹窗大小: sm, md, lg
            $this->createButton(true, 'lg'),
            // 这里是其他按钮, 批量删除等
            ...$this->baseHeaderToolBar(),
        ])
        ->columns([
            // ...
            // 第一个参数为 true, 则启用弹窗模式, 第二个参数为弹窗大小: sm, md, lg
            $this->rowActions(true, 'lg'),
        ]);

    return $this->baseList($crud);
}
```