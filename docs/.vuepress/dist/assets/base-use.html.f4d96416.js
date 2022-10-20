import{_ as n,o as s,c as a,e}from"./app.6ed56610.js";const t={},p=e(`<h4 id="\u6211\u60F3\u521B\u5EFA\u4E2A\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u6211\u60F3\u521B\u5EFA\u4E2A\u9875\u9762" aria-hidden="true">#</a> \u6211\u60F3\u521B\u5EFA\u4E2A\u9875\u9762~</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$page</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Slowlyo<span class="token punctuation">\\</span>SlowAdmin<span class="token punctuation">\\</span>Renderers<span class="token punctuation">\\</span>Page</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token variable">$page</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6211\u60F3\u7ED9\u9875\u9762\u8BBE\u4E2A\u6807\u9898" tabindex="-1"><a class="header-anchor" href="#\u6211\u60F3\u7ED9\u9875\u9762\u8BBE\u4E2A\u6807\u9898" aria-hidden="true">#</a> \u6211\u60F3\u7ED9\u9875\u9762\u8BBE\u4E2A\u6807\u9898~</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// ...</span>
<span class="token variable">$page</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\u6211\u662F\u6807\u9898&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6211\u60F3\u5728\u9875\u9762\u4E0A\u653E\u4E2A\u6309\u94AE" tabindex="-1"><a class="header-anchor" href="#\u6211\u60F3\u5728\u9875\u9762\u4E0A\u653E\u4E2A\u6309\u94AE" aria-hidden="true">#</a> \u6211\u60F3\u5728\u9875\u9762\u4E0A\u653E\u4E2A\u6309\u94AE~</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// ...</span>
<span class="token variable">$page</span><span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span>
    <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Slowlyo<span class="token punctuation">\\</span>SlowAdmin<span class="token punctuation">\\</span>Renderers<span class="token punctuation">\\</span>Button</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\u6211\u662F\u6309\u94AE&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">level</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6309\u94AE\u524D\u9762\u518D\u653E\u4E2A\u8F93\u5165\u6846\u5462" tabindex="-1"><a class="header-anchor" href="#\u6309\u94AE\u524D\u9762\u518D\u653E\u4E2A\u8F93\u5165\u6846\u5462" aria-hidden="true">#</a> \u6309\u94AE\u524D\u9762\u518D\u653E\u4E2A\u8F93\u5165\u6846\u5462?</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// ...</span>
<span class="token variable">$page</span><span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token class-name class-name-fully-qualified static-context">Slowlyo<span class="token punctuation">\\</span>SlowAdmin<span class="token punctuation">\\</span>Renderers<span class="token punctuation">\\</span>Form<span class="token punctuation">\\</span>InputText</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;username&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">label</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token comment">// button</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728\u4F60\u4E86\u89E3\u4E86 <code>amis</code> \u4E4B\u540E, \u4F60\u4F1A\u53D1\u73B0\u539F\u6765\u7528\u540E\u7AEF\u4EE3\u7801\u7EC4\u9875\u9762\u8FD9\u4E48\u7B80\u5355 \u4F60\u53EF\u4EE5\u5728 <code>slow admin</code> \u4E2D\u627E\u5230\u51E0\u4E4E\u6240\u6709\u7684 <code>amis</code> \u7EC4\u4EF6(\u7EC4\u4EF6\u540D\u4E0E\u7C7B\u540D\u4E00\u81F4)</p></blockquote><h4 id="\u5982\u679C\u4F60\u6CA1\u627E\u5230\u4F60\u60F3\u8981\u7684\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u4F60\u6CA1\u627E\u5230\u4F60\u60F3\u8981\u7684\u7EC4\u4EF6" aria-hidden="true">#</a> \u5982\u679C\u4F60\u6CA1\u627E\u5230\u4F60\u60F3\u8981\u7684\u7EC4\u4EF6</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Slowlyo<span class="token punctuation">\\</span>SlowAdmin<span class="token punctuation">\\</span>Renderers<span class="token punctuation">\\</span>Component</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setType</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;page&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\u6211\u662F\u6807\u9898&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6216\u8005</span>
<span class="token function">amis</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;page&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\u6211\u662F\u6807\u9898&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u6548\u4E8E</span>
<span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Slowlyo<span class="token punctuation">\\</span>SlowAdmin<span class="token punctuation">\\</span>Renderers<span class="token punctuation">\\</span>Page</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\u6211\u662F\u6807\u9898&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6216\u8005\u4F60\u53EF\u4EE5\u76F4\u63A5\u5199\u4E2A\u6570\u7EC4</span>
<span class="token comment">// [</span>
<span class="token comment">// 	&#39;type&#39;=&gt;&#39;page&#39;,</span>
<span class="token comment">// 	&#39;title&#39;=&gt;&#39;\u6211\u662F\u6807\u9898&#39;,</span>
<span class="token comment">// 	&#39;body&#39;=&gt;&#39;content&#39;</span>
<span class="token comment">// ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F60\u53EF\u4EE5\u653E\u5FC3\u7684\u5728\u6BCF\u4E00\u4E2A\u7EE7\u627F\u4E86 <code>Slowlyo\\SlowAdmin\\Renderers</code> \u7C7B\u7684\u7EC4\u4EF6\u7C7B\u540E\u9762\u8C03\u7528\u65B9\u6CD5, \u65B9\u6CD5\u540D\u5BF9\u5E94\u4E86 <code>amis</code> \u7EC4\u5EFA\u7684\u5C5E\u6027\u540D, \u53C2\u6570\u5BF9\u5E94\u4E86 <code>amis</code> \u5C5E\u6027\u7684\u503C</p><p>\u5728\u7EC4\u4EF6\u7684\u57FA\u7C7B\u4E2D\u4F7F\u7528\u4E86 <code>__call()</code> \u65B9\u6CD5\u6765\u5B9E\u73B0\u81EA\u52A8\u6DFB\u52A0\u5C5E\u6027 \u5373\u4F7F\u65B9\u6CD5\u4E0D\u5B58\u5728, \u6216\u8005\u8BE5\u7EC4\u4EF6\u6CA1\u6709\u8FD9\u4E2A\u5C5E\u6027, \u4F60\u7684\u4EE3\u7801\u4E5F\u4E0D\u4F1A\u62A5\u9519, \u53EA\u662F\u6548\u679C\u51FA\u4E0D\u6765\u7F62\u4E86 (doge)</p></blockquote>`,12),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","base-use.html.vue"]]);export{d as default};