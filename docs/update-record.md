# 📌v0.8.5-beta

> 2022年9月19日23:29:43

- 增加: 权限 - 自动生成权限功能
- 增加: 个人设置-更改密码需要输入原密码

<br><br><br>
# 📌v0.7.0-beta

> 2022年9月19日23:29:43

- 增加弹窗操作
- 调整返回列表按钮
- 筛选表单重置按钮调整

<br><br><br>
# 📌v0.6.0-beta

> 2022年9月15日14:55:11

##### 登录增加图形验证码
可在 `config/admin.php` 中开启/关闭 `admin.auth.captcha` (true/false)

<br><br><br>

# 📌v0.5.0-beta

> 2022年9月7日11:43:17

##### 部分组件样式优化

需要更新静态资源, 执行以下命令
```shell
php artisan vendor:publish --provider="Slowlyo\SlowAdmin\SlowAdminServiceProvider" --force
```
<br><br><br>

# 📌v0.4.0-beta

> 2022年9月6日15:05:55

##### 整体UI升级

需要更新静态资源, 执行以下命令
```shell
php artisan vendor:publish --provider="Slowlyo\SlowAdmin\SlowAdminServiceProvider" --force
```
<br><br><br>

# 📌v0.3.0-beta

> 2022年9月3日16:45:59

#### amis 更新至 `2.2.0`

需要更新静态资源, 执行以下命令
```shell
php artisan vendor:publish --provider="Slowlyo\SlowAdmin\SlowAdminServiceProvider" --force
```

#### 增加主题切换功能

可在 `config/admin.php`, 中配置 `layout.theme` 以更改系统主题

<br><br><br>

# 📌v0.2.0-beta

> 2022年9月3日15:38:01

#### 补充部分组件
- GridItem
- Drawer
- Dialog
- Toast
- ToastItem
- TabItem

#### 部分组件方法添加默认值
- required($value = true)
- searchable($value = true)
- removeable($value = true)
- ...