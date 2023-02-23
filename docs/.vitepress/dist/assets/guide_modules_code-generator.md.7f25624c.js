import{_ as e,o as s,c as a,e as l}from"./app.a2671795.js";const _=JSON.parse('{"title":"代码生成器","description":"","frontmatter":{"title":"代码生成器"},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"生成之后","slug":"生成之后","link":"#生成之后","children":[]}],"relativePath":"guide/modules/code-generator.md","lastUpdated":1676533519000}'),o={name:"guide/modules/code-generator.md"},n=l(`<h1 id="代码生成器" tabindex="-1">代码生成器 <a class="header-anchor" href="#代码生成器" aria-hidden="true">#</a></h1><p>当 <code>config/amdin.php</code> 中的 <code>show_development_tools</code> 设置项为 <code>true</code> 时, 你会在后台菜单中看到它.</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><ol><li>填上你的表名</li><li>填上你的功能名</li><li>勾上你需要的功能或需要生成的文件</li><li>配置你的字段</li><li>点击提交</li></ol><p>如果不出意外, 你应该会看到一个 <code>success</code> 的提示框, 提示内容如下</p><ul><li>model 文件路径</li><li>migration 文件路径</li><li>controller 文件路径</li><li>service 文件路径</li><li>migrate 执行结果</li></ul><h2 id="生成之后" tabindex="-1">生成之后 <a class="header-anchor" href="#生成之后" aria-hidden="true">#</a></h2><p>在 <code>app/Admin/routes.php</code> 中添加你的路由</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 使用 resource , 它包含了基础功能需要的所有路由</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 如:</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">resource</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">App</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Admin</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Controllers</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">HomeController</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,9),t=[n];function p(r,c,i,d,h,D){return s(),a("div",null,t)}const y=e(o,[["render",p]]);export{_ as __pageData,y as default};