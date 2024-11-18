import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as i,a as o,b as s,e,w as t,d as p,r}from"./app-2808bd6S.js";const u={};function d(k,n){const a=r("RouteLink");return l(),i("div",null,[n[6]||(n[6]=o(`<blockquote><p>网站汇总:</p><p>前端开发官方网站简称 MDN https://developer.mozilla.org/zh-CN/</p></blockquote><h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>Javascript</span></a></h1><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象"><span>对象</span></a></h2><blockquote><p>一切都是对象</p><p>在 javascript 中</p><p>基本的数据类型</p><p><code>const a = 1;const b = &#39;&#39;;const c = null;const d = undefined;const e = true ;const f = Symbol(&#39;foo&#39;);</code></p><p>简单的说:基本数据类型存储在栈内存,栈可以理解为一个就是一个队列一样分隔开</p><figure><img src="https://www.runoob.com/wp-content/uploads/2019/05/3834493100-57c3ff4a5dac7_articlex.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 特殊解释 Symbol 创建的值是唯一的,可以简单的理解为就是一个标志的意思,很少用</span>

<span class="token comment">// Symbol(&#39;foo&#39;) === Symbol(&#39;foo&#39;)  这个值是 false,看上去写的一模一样,但是结果完全不同</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用数据类型</p><p>const a = {} ;const b = [];const c = ()=&gt;{}; function d () {} 都可以</p><p>引用数据类型可以理解为 定义的变量是存储在栈中,值并不是值,存储的而是地址,值存储在堆中,指向在堆中的地址;</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span> <span class="token keyword">const</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// 浅拷贝 赋值的操作只是把 a 的地址给了 b</span>

b<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">// 此时 a.a也是 2 ,因为他们指向的是同一份地址,所以值始终用的都是同一个.</span>

<span class="token comment">// 深拷贝其实就是给一个新的地址,不共用一个地址</span>
<span class="token comment">// 常见的深拷贝</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>a<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 扩展运算符</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">para</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 原理将对象转换为了一个字符串这个时候就已经脱离了堆,在转换为对象会重新创建一个堆来存储</span>

<span class="token comment">// 这两种方案不适用于所有的情形,因为有的时候有的数据结构使用或报错,但是大部分的时候可以使用</span>
<span class="token comment">// 其次使用 lodash</span>

<span class="token comment">// 原生方法 原理使用原型链遍历所有的属性值新建对象赋值 TODO 待补充</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://www.runoob.com/wp-content/uploads/2019/05/3309698956-57c41a89cddc7_articlex.png" alt="图片描述" tabindex="0" loading="lazy"><figcaption>图片描述</figcaption></figure></blockquote><p>// TODO: 对象的原型链</p><h2 id="正则" tabindex="-1"><a class="header-anchor" href="#正则"><span>正则</span></a></h2>`,6)),s("p",null,[e(a,{to:"/web/package/regular-expression.html"},{default:t(()=>n[0]||(n[0]=[p("参考链接")])),_:1})]),n[7]||(n[7]=s("h2",{id:"work",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#work"},[s("span",null,"work")])],-1)),s("p",null,[e(a,{to:"/web/web-learn/web-worker.html"},{default:t(()=>n[1]||(n[1]=[p("参考链接")])),_:1})]),n[8]||(n[8]=o(`<h2 id="前端存储" tabindex="-1"><a class="header-anchor" href="#前端存储"><span>前端存储</span></a></h2><h3 id="indexdb" tabindex="-1"><a class="header-anchor" href="#indexdb"><span>indexDB</span></a></h3><h2 id="缓存机制" tabindex="-1"><a class="header-anchor" href="#缓存机制"><span>缓存机制</span></a></h2><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue"><span>Vue</span></a></h1><blockquote><p>vue2 vue3 在底层的逻辑肯定是有很多的区别,但是在使用上,还是有很多相似的地方,或者说没有区别,在大脑中不要去认为他们区别很大,否则你会觉得很很难搞. 比如:Javascript 与 Java 有区别吗,那肯定是有的完全不同的两个语言,但是又没有区别,因为他们实现一个方法的逻辑打部分相同,只是调用的方法不同罢了.</p></blockquote><h2 id="宏观" tabindex="-1"><a class="header-anchor" href="#宏观"><span>宏观</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// vue2 代码结构</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 局部注册的组件</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 组件状态值</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&#39;less&#39;</span> scoped<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

<span class="token comment">// vue3 代码结构</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token operator">...</span>

<span class="token keyword">const</span> <span class="token operator">...</span>

<span class="token keyword">function</span> <span class="token operator">...</span>

<span class="token comment">// 生命周期</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看出本质上结构差不不大,只是 vue2 的设计决定了他的代码结构只能写成选项式API 类似于对象的配置项 而 vue3 属于组合式 API 不需要去理解什么是组合式 API 选项是 API ,只需要知道 vue3 更加的符合 JS 原生的写法,在代码结构上与 React 相似</p><h2 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3"><span>Vue3</span></a></h2><h3 id="变量的定义" tabindex="-1"><a class="header-anchor" href="#变量的定义"><span>变量的定义</span></a></h3><blockquote><p>变量的定义</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> reactive <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// TODO 区别和传参</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的定义" tabindex="-1"><a class="header-anchor" href="#函数的定义"><span>函数的定义</span></a></h3><blockquote><p>函数的定义 与 一个 JS 文件相同</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">// or</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h3><blockquote><p>生命周期</p><p>注意事项:</p><p>子组件的onMounted执行顺序比父组件要早,但是比父组件的onBeforeMount</p><p>vue3 的生命周期</p><p>在<code>&lt;script setup&gt;&lt;/script&gt;</code>标签内部直接写代码都属于 setup 生命周期 负责数据的初始化,DOM 都还没有挂在,也就是说这个时候是无法获取到 DOM 的,只有在onMounted中才可以获取到 DOM</p></blockquote><figure><img src="https://cn.vuejs.org/assets/lifecycle_zh-CN.W0MNXI0C.png" alt="生命周期" tabindex="0" loading="lazy"><figcaption>生命周期</figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 关于 setup 的说明</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token comment">// 此时这个里面的代码都是属于 setup 生命周期</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token literal-property property">setup</span><span class="token operator">:</span>开始创建组件之前，在beforeCreate和created之前执行。创建的是data和method

<span class="token comment">// 组件挂载到节点上之前执行的函数。</span>
<span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 组件挂载完成后执行的函数。</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 组件更新之前执行的函数</span>
<span class="token function">onBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 组件更新完成之后执行的函数</span>
<span class="token function">onUpdated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 组件卸载之前执行的函数</span>
<span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 组件卸载完成后执行的函数</span>
<span class="token function">onBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 被包含在中的组件，会多出两个生命周期钩子函数。被激活时执行</span>
<span class="token function">onActivated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 比如从 A 组件，切换到 B 组件，A 组件消失时执行 一般用在使用&lt;component&gt;</span>
<span class="token function">onDeactivated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 当捕获一个来自子孙组件的异常时激活钩子函数</span>
<span class="token function">onErrorCaptured</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监听" tabindex="-1"><a class="header-anchor" href="#监听"><span>监听</span></a></h3><h4 id="watch" tabindex="-1"><a class="header-anchor" href="#watch"><span>watch</span></a></h4><blockquote><p>watch 监听</p><p>三个参数</p><ol><li><p>监听的值=&gt;两中写法</p></li><li><p>执行的方法</p></li><li><p>配置项</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token punctuation">{</span> 
    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 对象的深层次监听</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 立即执行,在某一个组件第一次渲染的时候默认不执行,如果为true 将在组件加载出来的时候执行一次</span>
    <span class="token literal-property property">once</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 将监听的函数修改为执行一次就失效</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watch</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span>  <span class="token punctuation">(</span><span class="token parameter">newQuestion<span class="token punctuation">,</span> oldQuestion</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token comment">// newQuestion 最新的数据</span>
<span class="token comment">// oldQuestion 之前的数据</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 注意点 </span>
<span class="token comment">// newQuestion, oldQuestion 的值就是 ref.value</span>
<span class="token comment">// 无法监听对象中的属性值</span>

<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>ref<span class="token punctuation">,</span>  <span class="token punctuation">(</span><span class="token parameter">newQuestion<span class="token punctuation">,</span> oldQuestion</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token comment">// newQuestion 最新的数据</span>
<span class="token comment">// oldQuestion 之前的数据</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 如果写的是 ref 那么newQuestion | oldQuestion 是 ref.value</span>
<span class="token comment">// 如果写的是 ref.value 那么newQuestion | oldQuestion 是 不需要.value 的数据</span>


<span class="token comment">// 监听对象某一个具体的属性值的变化</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>count<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Count is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>


<span class="token comment">// 深层侦听器</span>
<span class="token comment">// 比如如果obj.count依旧是一个对象,那么obj.count中的某一个属性值发生了变化是不会监听到的,之后当整个obj.count = {} 被更改了一个新的对象=&gt;涉及到对象的存储方式</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> obj<span class="token punctuation">.</span>count<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Count is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect"><span>watchEffect</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://jsonplaceholder.typicode.com/todos/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>todoId<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span>
  data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 在函数的结构体中,只要存在相应式的数据,不论哪一个发生了变化都会触发时事件可以理解为是一个自动完成监听的方法 并且会立即执行即为 immediate: true </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="🤯-关于监听的额外知识点-不常用" tabindex="-1"><a class="header-anchor" href="#🤯-关于监听的额外知识点-不常用"><span>🤯 关于监听的额外知识点=&gt; 不常用</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Vue 是数据驱动页面更新的 =&gt; 当数据发生变化的时候会更新 dom</span>
<span class="token comment">// 一个最简单的例子 v-if = &#39;test&#39; 当 test 为 true 的时候,就会将 dom 添加到页面上,添加的逻辑其实是 dom 的添加事件(可以理解为触发的是 js 的 appendChiled()) 如果为 false 其实触发的是 js(dom remove()事件) =&gt; 再加深立即, vue 帮我们简化了一层dom 的操作,vue 会将对应的 v-if转化为刚才提到的事件</span>

<span class="token comment">// 但是dom的更新其实是异步的,理解为在 js 代码执行过程中 vue 层面的数据已经变化了,但是 dom 并不会变化</span>
<span class="token comment">// 官方解释:</span>
<span class="token comment">// 当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。</span>

<span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 等待本次函数对应的 dom 更新完成 才会执行下面的方法</span>

<span class="token comment">// 等待所有的 dom 更新完成触发 =&gt; 对应 watchPostEffect</span>
<span class="token function">watch</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">flush</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 同步监听=&gt;理解为与数据的变化同时与 dom 无关 =&gt; 对应 watchSyncEffect</span>
<span class="token function">watch</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">flush</span><span class="token operator">:</span> <span class="token string">&#39;sync&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性"><span>计算属性</span></a></h3><blockquote><p>computed</p><p>// 一定要有 return 返回值</p><p>如何理解</p><p>在调用的方式上其实与 ref 的变量相同其实要获取到值都需要<code>.value</code></p><p>内部的值发生了变化就会触发更新,但是它是具有缓存机制的,在执行效率上比一个普通的以及 watch 监听函数,效率高很多.</p><p>可以理解为涉及到数据的处理(出数据的处理,不包含其他复杂的逻辑)最好统一使用 coputed 项目的执行效率会提升很多</p></blockquote><h4 id="无参" tabindex="-1"><a class="header-anchor" href="#无参"><span>无参</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> author <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Vue 2 - Advanced Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 3 - Basic Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 4 - The Mystery&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 一个计算属性 ref</span>
<span class="token keyword">const</span> publishedBooksMessage <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> author<span class="token punctuation">.</span>value<span class="token punctuation">.</span>books<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;Yes&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;No&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 在 vue 层面的调用 不需要.value 与 ref 变量相同</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Has published books<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> publishedBooksMessage <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token comment">// 在 script 中的使用</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> publishedBooksMessage<span class="token punctuation">.</span>value
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传参" tabindex="-1"><a class="header-anchor" href="#传参"><span>传参</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> author <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">books</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Vue 2 - Advanced Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 3 - Basic Guide&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Vue 4 - The Mystery&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 一个计算属性 ref</span>
<span class="token keyword">const</span> publishedBooksMessage <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">参数 <span class="token number">1</span></span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>参数 <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> author<span class="token punctuation">.</span>value<span class="token punctuation">.</span>books<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;Yes&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;No&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 在 vue 层面的调用 不需要.value 与 ref 变量相同</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Has published books<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">publishedBooksMessage</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token comment">// 在 script 中的使用</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> publishedBooksMessage<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token string">&#39;sss&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🤯传参" tabindex="-1"><a class="header-anchor" href="#🤯传参"><span>🤯传参</span></a></h3><h4 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>props</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Father.vue</span>
<span class="token operator">&lt;</span>Son<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// Son.vue</span>
<span class="token operator">&lt;</span>Grandson<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token comment">// 子组件获取父组件的数据</span>
 

<span class="token comment">// Grandson.vue</span>
<span class="token comment">// 开始获取 Father 的数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="子组件修改父组件值的方式" tabindex="-1"><a class="header-anchor" href="#子组件修改父组件值的方式"><span>子组件修改父组件值的方式</span></a></h5><blockquote><p>无论祖孙组件的嵌套了多少层,都可以一直传递,但是最好不要超过 3 层,超过 3 层可以选择使用以来注入的方式</p></blockquote><p><code>Son.vue</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>

<span class="token keyword">interface</span> <span class="token class-name">IProps</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

defineProps<span class="token operator">&lt;</span>IProps<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// 只有defineProps&lt;IProps&gt;()的时候 &lt;template&gt; 中可以直接使用 name</span>
<span class="token comment">// 但是在 script 中需要变量来接收</span>
<span class="token comment">// const props = defineProps&lt;IProps&gt;()</span>
<span class="token comment">// props.name =&gt; 这样 JS 或者 TS 才可以获取到值</span>
<span class="token comment">// 需要注意的是不能使用结构赋值,否则失去响应式可以使用 const { name } = toRefs(props) // 此时可以结构赋值</span>


<span class="token comment">// 关于值的修改</span>
父组件 <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 基本数据类型</span>
子组件 是无法修改 传递过来的这个 a 的值 readonly

父组件 <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> or <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 如果父组件生命的数据是数组或者对象是可以修改的,但是不能\`全量替换\`</span>
子组件 a<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// 可以修改  a.push(2) // 可以修改 a[0] 都可以</span>
<span class="token comment">// 但是 a = {}  是不允许的这个属于全量替换 类似于 const a = 1</span>
<span class="token comment">// 我们都知道 const 声明的是常量,是不允许修改的,但是 const a = {a:1} a.a = 2 是可以修改的.但是 a = 22 是不允许的 ,原理类似</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="如果子组件非要修改父组件的数据-那么父组件需要提供修改数据的方法" tabindex="-1"><a class="header-anchor" href="#如果子组件非要修改父组件的数据-那么父组件需要提供修改数据的方法"><span>如果子组件非要修改父组件的数据,那么父组件需要提供修改数据的方法</span></a></h6><p><code>Father.vue</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
   <span class="token comment">// 传递数据以及方法</span>
    <span class="token operator">&lt;</span>Son <span class="token operator">:</span>a<span class="token operator">=</span><span class="token string">&quot;a&quot;</span> @set<span class="token operator">-</span>a<span class="token operator">=</span><span class="token string">&quot;setA&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Son<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">setA</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a<span class="token punctuation">.</span>value <span class="token operator">=</span> value
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Son.vue</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>
<span class="token keyword">interface</span> <span class="token class-name">IEmit</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">&#39;setA&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> emit <span class="token operator">=</span> defineEmits<span class="token operator">&lt;</span>IEmit<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 触发父组件的方法, 第一个参数是方法名,第二个参数是 被触发的方法的参数</span>
<span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;setA&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入"><span>依赖注入</span></a></h4><p>依赖注入,只要他们存在父子嵌套的关系都可以直接的传递和使用</p><p><code>provide()</code> 提供一个值，可以被后代组件注入。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 提供静态值</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/project/&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 提供响应式的值</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>🤯 <code>provide()</code> 必须在组件的 <code>setup()</code> 阶段同步调用。</p></blockquote><p><code>inject()</code> 注入一个由祖先组件或整个应用 (通过 <code>app.provide()</code>) 提供的值。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 注入不含默认值的静态值</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 注入响应式的值</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="router" tabindex="-1"><a class="header-anchor" href="#router"><span>Router</span></a></h2>`,53)),s("p",null,[e(a,{to:"/web/learn-vue/1-vue-router.html"},{default:t(()=>n[2]||(n[2]=[p("参考链接")])),_:1})]),n[9]||(n[9]=s("h2",{id:"vuex-pinia",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuex-pinia"},[s("span",null,"Vuex Pinia")])],-1)),s("p",null,[e(a,{to:"/web/learn-vue/2-vue-vuex-pinia.html"},{default:t(()=>n[3]||(n[3]=[p("参考链接1")])),_:1})]),n[10]||(n[10]=s("h1",{id:"typescript",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#typescript"},[s("span",null,"Typescript")])],-1)),s("p",null,[e(a,{to:"/web/typescript/1-basic-concepts.html"},{default:t(()=>n[4]||(n[4]=[p("参考链接1🔗")])),_:1})]),s("p",null,[e(a,{to:"/web/web-learn/web/typescript/3-advanced-expand.html"},{default:t(()=>n[5]||(n[5]=[p("参考链接2🔗")])),_:1})])])}const b=c(u,[["render",d],["__file","web-learn.html.vue"]]),g=JSON.parse(`{"path":"/web/web-learn/web-learn.html","title":"🤯 前端学习指引","lang":"zh-CN","frontmatter":{"title":"🤯 前端学习指引","sticky":98,"tag":["web","前端"],"recommend":0,"description":"网站汇总: 前端开发官方网站简称 MDN https://developer.mozilla.org/zh-CN/ Javascript 对象 一切都是对象 在 javascript 中 基本的数据类型 const a = 1;const b = '';const c = null;const d = undefined;const e = true ...","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/web/web-learn/web-learn.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"🤯 前端学习指引"}],["meta",{"property":"og:description","content":"网站汇总: 前端开发官方网站简称 MDN https://developer.mozilla.org/zh-CN/ Javascript 对象 一切都是对象 在 javascript 中 基本的数据类型 const a = 1;const b = '';const c = null;const d = undefined;const e = true ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.runoob.com/wp-content/uploads/2019/05/3834493100-57c3ff4a5dac7_articlex.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-11T08:10:15.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"web"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:modified_time","content":"2024-08-11T08:10:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🤯 前端学习指引\\",\\"image\\":[\\"https://www.runoob.com/wp-content/uploads/2019/05/3834493100-57c3ff4a5dac7_articlex.png\\",\\"https://www.runoob.com/wp-content/uploads/2019/05/3309698956-57c41a89cddc7_articlex.png\\",\\"https://cn.vuejs.org/assets/lifecycle_zh-CN.W0MNXI0C.png\\"],\\"dateModified\\":\\"2024-08-11T08:10:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"对象","slug":"对象","link":"#对象","children":[]},{"level":2,"title":"正则","slug":"正则","link":"#正则","children":[]},{"level":2,"title":"work","slug":"work","link":"#work","children":[]},{"level":2,"title":"前端存储","slug":"前端存储","link":"#前端存储","children":[{"level":3,"title":"indexDB","slug":"indexdb","link":"#indexdb","children":[]}]},{"level":2,"title":"缓存机制","slug":"缓存机制","link":"#缓存机制","children":[]},{"level":2,"title":"宏观","slug":"宏观","link":"#宏观","children":[]},{"level":2,"title":"Vue3","slug":"vue3","link":"#vue3","children":[{"level":3,"title":"变量的定义","slug":"变量的定义","link":"#变量的定义","children":[]},{"level":3,"title":"函数的定义","slug":"函数的定义","link":"#函数的定义","children":[]},{"level":3,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]},{"level":3,"title":"监听","slug":"监听","link":"#监听","children":[]},{"level":3,"title":"计算属性","slug":"计算属性","link":"#计算属性","children":[]},{"level":3,"title":"🤯传参","slug":"🤯传参","link":"#🤯传参","children":[]}]},{"level":2,"title":"Router","slug":"router","link":"#router","children":[]},{"level":2,"title":"Vuex Pinia","slug":"vuex-pinia","link":"#vuex-pinia","children":[]}],"git":{"createdTime":1721555210000,"updatedTime":1723363815000,"contributors":[{"name":"NightSoul","email":"w1083670160@163.com","commits":1}]},"readingTime":{"minutes":9.74,"words":2921},"filePathRelative":"web/web-learn/web-learn.md","localizedDate":"2024年7月21日","excerpt":"<blockquote>\\n<p>网站汇总:</p>\\n<p>前端开发官方网站简称 MDN https://developer.mozilla.org/zh-CN/</p>\\n</blockquote>\\n<h1>Javascript</h1>\\n<h2>对象</h2>\\n<blockquote>\\n<p>一切都是对象</p>\\n<p>在 javascript 中</p>\\n<p>基本的数据类型</p>\\n<p><code>const a = 1;const b = '';const c = null;const d = undefined;const e = true ;const f = Symbol('foo');</code></p>\\n<p>简单的说:基本数据类型存储在栈内存,栈可以理解为一个就是一个队列一样分隔开</p>\\n<figure><img src=\\"https://www.runoob.com/wp-content/uploads/2019/05/3834493100-57c3ff4a5dac7_articlex.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 特殊解释 Symbol 创建的值是唯一的,可以简单的理解为就是一个标志的意思,很少用</span>\\n\\n<span class=\\"token comment\\">// Symbol('foo') === Symbol('foo')  这个值是 false,看上去写的一模一样,但是结果完全不同</span>\\n</code></pre></div><p>引用数据类型</p>\\n<p>const a = {} ;const b = [];const c = ()=&gt;{}; function d () {} 都可以</p>\\n<p>引用数据类型可以理解为 定义的变量是存储在栈中,值并不是值,存储的而是地址,值存储在堆中,指向在堆中的地址;</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> a <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">a</span><span class=\\"token operator\\">:</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">const</span> b <span class=\\"token operator\\">=</span> a<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 浅拷贝 赋值的操作只是把 a 的地址给了 b</span>\\n\\nb<span class=\\"token punctuation\\">.</span>a <span class=\\"token operator\\">=</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">;</span>\\n\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\">// 此时 a.a也是 2 ,因为他们指向的是同一份地址,所以值始终用的都是同一个.</span>\\n\\n<span class=\\"token comment\\">// 深拷贝其实就是给一个新的地址,不共用一个地址</span>\\n<span class=\\"token comment\\">// 常见的深拷贝</span>\\n<span class=\\"token keyword\\">const</span> a <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">a</span><span class=\\"token operator\\">:</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> b <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">...</span>a<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 扩展运算符</span>\\n<span class=\\"token keyword\\">const</span> c <span class=\\"token operator\\">=</span> <span class=\\"token constant\\">JSON</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">para</span><span class=\\"token punctuation\\">(</span><span class=\\"token constant\\">JSON</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">stringify</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 原理将对象转换为了一个字符串这个时候就已经脱离了堆,在转换为对象会重新创建一个堆来存储</span>\\n\\n<span class=\\"token comment\\">// 这两种方案不适用于所有的情形,因为有的时候有的数据结构使用或报错,但是大部分的时候可以使用</span>\\n<span class=\\"token comment\\">// 其次使用 lodash</span>\\n\\n<span class=\\"token comment\\">// 原生方法 原理使用原型链遍历所有的属性值新建对象赋值 TODO 待补充</span>\\n</code></pre></div><figure><img src=\\"https://www.runoob.com/wp-content/uploads/2019/05/3309698956-57c41a89cddc7_articlex.png\\" alt=\\"图片描述\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>图片描述</figcaption></figure>\\n</blockquote>","autoDesc":true}`);export{b as comp,g as data};
