import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,a as e}from"./app-2808bd6S.js";const p={};function o(i,n){return a(),t("div",null,n[0]||(n[0]=[e(`<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> init vite <span class="token comment"># 选择 vite 构建 选择 vue javascript</span>

<span class="token function">pnpm</span> i

<span class="token function">pnpm</span> i @vitejs/plugin-vue-jsx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>编辑 vite.config.ts 文件</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> vueJsx <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue-jsx&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vueJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来的语法使用 jsx 的标准语法糖一样,类似于 React</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">,</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span>string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello World JSX </span><span class="token punctuation">{</span>count<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const u=s(p,[["render",o],["__file","4-vue-jsx.html.vue"]]),r=JSON.parse('{"path":"/web/learn-vue/4-vue-jsx.html","title":"4. Vue3 使用 jsx","lang":"zh-CN","frontmatter":{"title":"4. Vue3 使用 jsx","star":true,"description":"创建项目 编辑 vite.config.ts 文件 接下来的语法使用 jsx 的标准语法糖一样,类似于 React 例子","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/web/learn-vue/4-vue-jsx.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"4. Vue3 使用 jsx"}],["meta",{"property":"og:description","content":"创建项目 编辑 vite.config.ts 文件 接下来的语法使用 jsx 的标准语法糖一样,类似于 React 例子"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-10T12:14:59.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:modified_time","content":"2024-06-10T12:14:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4. Vue3 使用 jsx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-10T12:14:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]}],"git":{"createdTime":1708067721000,"updatedTime":1718021699000,"contributors":[{"name":"NightSoul","email":"w1083670160@163.com","commits":1}]},"readingTime":{"minutes":0.34,"words":102},"filePathRelative":"web/learn-vue/4-vue-jsx.md","localizedDate":"2024年2月16日","excerpt":"<h2>创建项目</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">npm</span> init vite <span class=\\"token comment\\"># 选择 vite 构建 选择 vue javascript</span>\\n\\n<span class=\\"token function\\">pnpm</span> i\\n\\n<span class=\\"token function\\">pnpm</span> i @vitejs/plugin-vue-jsx\\n\\n</code></pre></div>","autoDesc":true}');export{u as comp,r as data};