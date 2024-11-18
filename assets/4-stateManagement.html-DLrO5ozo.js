import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,a as e}from"./app-2808bd6S.js";const p={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[e(`<h2 id="state基本使用方法" tabindex="-1"><a class="header-anchor" href="#state基本使用方法"><span>@State基本使用方法</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> test<span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>

<span class="token comment">// 添加</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>test<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ol><li>普通的对象是可以进行页面的相应的</li><li>嵌套的对象无法进行相应</li><li>数组对象,修改对象的数据无法相应 <ol><li>对应的解决方法 覆盖需要修改的数据 <mark>不推荐</mark></li></ol></li></ol><h2 id="prop-link-的基本使用" tabindex="-1"><a class="header-anchor" href="#prop-link-的基本使用"><span>@Prop @Link 的基本使用</span></a></h2><blockquote><p>@Prop 单向的数据同步</p><p>​ 子组件修改数据,无法进行相应</p><p>​ 支持的数据类型</p><p>​ number string boolean enum</p><p>@Link 双向数据同步</p><p>​ 支持的数据类型</p><p>​ number string boolean enum object class array</p></blockquote><blockquote><p>父组件</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">//@Prop 案例</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct Father <span class="token punctuation">{</span>
	<span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> testState <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  
  
<span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 调用子组件</span>
  <span class="token function">Son</span><span class="token punctuation">(</span><span class="token punctuation">{</span>testState<span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>testState<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 将值传递过去</span>

<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//@Link 案例</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct Father <span class="token punctuation">{</span>
	<span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> testState <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  
  
<span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 调用子组件</span>
  <span class="token function">Son</span><span class="token punctuation">(</span><span class="token punctuation">{</span>testState<span class="token operator">:</span>$testState<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 将引用传递过去</span>

<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>子组件</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">//@Prop</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct Son <span class="token punctuation">{</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Prop</span></span> testState
  
<span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//@Link</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct Son <span class="token punctuation">{</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Link</span></span> testState
  
<span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="observed-objectlink-的基本使用以及方法的传递" tabindex="-1"><a class="header-anchor" href="#observed-objectlink-的基本使用以及方法的传递"><span>@Observed @ObjectLink 的基本使用以及方法的传递</span></a></h2><p>用于涉及嵌套对象和数组元素为对象的场景中的双向数据同步</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">//对象的定义</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Observed</span></span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  son<span class="token operator">:</span>Persion<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>son<span class="token operator">?</span><span class="token operator">:</span>Person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>son <span class="token operator">=</span> son<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>


<span class="token comment">// 父组件</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entry</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct Father <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">State</span></span> p<span class="token operator">:</span>Person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;testson&quot;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  
  <span class="token function">testFuncton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  xxxx
  <span class="token punctuation">}</span>
  
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 设置 testFunction 函数调用的 this 使用时父组件的 this</span>
  	<span class="token function">Son</span><span class="token punctuation">(</span><span class="token punctuation">{</span>p<span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>p<span class="token punctuation">,</span>onTestFunction<span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">testFunction</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 子组件</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
struct Son<span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ObjectLink</span></span> p<span class="token operator">:</span>Person
  <span class="token function-variable function">onTestFunction</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">void</span>
  <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const r=s(p,[["render",o],["__file","4-stateManagement.html.vue"]]),u=JSON.parse('{"path":"/web/harmony/4-stateManagement.html","title":"🦋 4-Stage 状态管理","lang":"zh-CN","frontmatter":{"title":"🦋 4-Stage 状态管理","tag":["harmony"],"star":true,"description":"@State基本使用方法 注意事项 普通的对象是可以进行页面的相应的 嵌套的对象无法进行相应 数组对象,修改对象的数据无法相应 对应的解决方法 覆盖需要修改的数据 不推荐 @Prop @Link 的基本使用 @Prop 单向的数据同步 ​ 子组件修改数据,无法进行相应 ​ 支持的数据类型 ​ number string boolean enum @Li...","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/web/harmony/4-stateManagement.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"🦋 4-Stage 状态管理"}],["meta",{"property":"og:description","content":"@State基本使用方法 注意事项 普通的对象是可以进行页面的相应的 嵌套的对象无法进行相应 数组对象,修改对象的数据无法相应 对应的解决方法 覆盖需要修改的数据 不推荐 @Prop @Link 的基本使用 @Prop 单向的数据同步 ​ 子组件修改数据,无法进行相应 ​ 支持的数据类型 ​ number string boolean enum @Li..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T16:41:41.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"harmony"}],["meta",{"property":"article:modified_time","content":"2024-05-11T16:41:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🦋 4-Stage 状态管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T16:41:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"@State基本使用方法","slug":"state基本使用方法","link":"#state基本使用方法","children":[{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]},{"level":2,"title":"@Prop @Link 的基本使用","slug":"prop-link-的基本使用","link":"#prop-link-的基本使用","children":[]},{"level":2,"title":"@Observed @ObjectLink 的基本使用以及方法的传递","slug":"observed-objectlink-的基本使用以及方法的传递","link":"#observed-objectlink-的基本使用以及方法的传递","children":[]}],"git":{"createdTime":1709454957000,"updatedTime":1715445701000,"contributors":[{"name":"nightsoul","email":"w1083670160@163.com","commits":1}]},"readingTime":{"minutes":1.2,"words":361},"filePathRelative":"web/harmony/4-stateManagement.md","localizedDate":"2024年3月3日","excerpt":"<h2>@State基本使用方法</h2>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token decorator\\"><span class=\\"token at operator\\">@</span><span class=\\"token function\\">State</span></span> test<span class=\\"token operator\\">:</span><span class=\\"token builtin\\">Array</span><span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">string</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">]</span>\\n\\n<span class=\\"token comment\\">// 添加</span>\\n<span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>test<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"xxx\\"</span><span class=\\"token punctuation\\">)</span>\\n</code></pre></div>","autoDesc":true}');export{r as comp,u as data};
