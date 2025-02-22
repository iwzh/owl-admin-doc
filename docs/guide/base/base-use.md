---
title: 组件的使用
---

# 组件的使用

## 创建页面

```php
$page = \Slowlyo\SlowAdmin\Renderers\Page::make();

return $this->response()->success($page);
```

## 给页面设置标题

```php
// ...
$page->title('我是标题');
// ...
```

## 在页面上放个按钮

```php
// ...
$page->body(
    \Slowlyo\SlowAdmin\Renderers\Button::make()->label('我是按钮')->level('primary');
);
// ...
```

## 按钮前面再放个输入框

```php
// ...
$page->body([
	Slowlyo\SlowAdmin\Renderers\Form\InputText::make()->name('username')->label('姓名'),
	// button
]);
```

?> 在你了解了 `amis` 之后, 你会发现原来用后端代码组页面这么简单<br> 你可以在 `slow admin` 中找到几乎所有的 `amis` 组件

## 没找到你想要的组件?

```php
\Slowlyo\SlowAdmin\Renderers\Component::make()->setType('page')->title('我是标题');
// 或者
amis('page')->title('我是标题');

// 等效于
\Slowlyo\SlowAdmin\Renderers\Page::make()->title('我是标题');

// 或者你可以直接写个数组
// [
// 	'type'=>'page',
// 	'title'=>'我是标题',
// 	'body'=>'content'
// ]
```

::: tip
你可以放心的在每一个继承了 `Slowlyo\SlowAdmin\Renderers` 类的组件类后面调用方法, 方法名对应了 `amis` 组建的属性名,
参数对应了 `amis` 属性的值<br><br>
在组件的基类中使用了 `__call()` 方法来实现自动添加属性<br>
即使方法不存在, 或者该组件没有这个属性, 你的代码也不会报错, 只是效果出不来罢了 🤣
:::