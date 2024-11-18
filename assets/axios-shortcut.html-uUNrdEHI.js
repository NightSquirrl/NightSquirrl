import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,a as e}from"./app-2808bd6S.js";const p={};function o(c,n){return a(),t("div",null,n[0]||(n[0]=[e(`<figure><img src="https://www.z4a.net/images/2023/10/07/axios.png" alt="axios.png" tabindex="0" loading="lazy"><figcaption>axios.png</figcaption></figure><h2 id="依赖安装" tabindex="-1"><a class="header-anchor" href="#依赖安装"><span>依赖安装</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>npm install axios
or
yarn add axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装体" tabindex="-1"><a class="header-anchor" href="#封装体"><span>封装体</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> http <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_BASE_URL</span><span class="token punctuation">,</span> <span class="token comment">// 请求的前置地址 基于 vite 的环境变量</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 添加请求拦截器</span>
http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
	<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 在发送请求之前做些什么</span>
		<span class="token keyword">return</span> config
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		toast<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message <span class="token operator">??</span> <span class="token string">&#39;未知请求错误&#39;</span><span class="token punctuation">)</span>
		<span class="token comment">// 对请求错误做些什么</span>
		<span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// 添加响应拦截器</span>
http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
	<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 2xx 范围内的状态码都会触发该函数。</span>
		<span class="token comment">// 对响应数据进行格式化</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> response<span class="token punctuation">.</span>data
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> response
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> status <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token operator">?.</span>status
		<span class="token keyword">let</span> <span class="token punctuation">{</span> msg<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">.</span>response<span class="token operator">?.</span>data <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>msg <span class="token operator">&amp;&amp;</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			msg <span class="token operator">=</span> message
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">switch</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span>
					msg <span class="token operator">=</span> <span class="token string">&#39;参数错误&#39;</span>
					<span class="token keyword">break</span>
				<span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span>
					msg <span class="token operator">=</span> <span class="token string">&#39;服务端错误&#39;</span>
					<span class="token keyword">break</span>
				<span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
					msg <span class="token operator">=</span> <span class="token string">&#39;路由未找到&#39;</span>
					<span class="token keyword">break</span>
				<span class="token keyword">default</span><span class="token operator">:</span>
					msg <span class="token operator">=</span> error<span class="token punctuation">.</span>message <span class="token operator">??</span> <span class="token string">&#39;未知响应错误&#39;</span>
					<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		toast<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
		<span class="token comment">// 超出 2xx 范围的状态码都会触发该函数。</span>
		<span class="token comment">// 对响应错误做点什么</span>
		<span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/http&#39;</span>
<span class="token comment">//发送 get 请求</span>
http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/user&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//发送 post 请求</span>
http<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/api/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//发送 put 请求</span>
http<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;/api/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 发送 put 请求上传文件</span>
<span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span>
http<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;/api/user&#39;</span><span class="token punctuation">,</span> formData<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;multipart/form-data&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 取消请求</span>

<span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">signal</span><span class="token operator">:</span> controller<span class="token punctuation">.</span>signal
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 取消请求</span>
controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他相关的-axios-知识" tabindex="-1"><a class="header-anchor" href="#其他相关的-axios-知识"><span>其他相关的 axios 知识</span></a></h2><h3 id="多请求发送" tabindex="-1"><a class="header-anchor" href="#多请求发送"><span>多请求发送</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345/permissions&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>acct<span class="token punctuation">,</span> perm<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// OR</span>

Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>acct<span class="token punctuation">,</span> perm<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用的请求配置" tabindex="-1"><a class="header-anchor" href="#常用的请求配置"><span>常用的请求配置</span></a></h3><blockquote><p>使用的评率由上往下依次递减</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \`url\` 是用于请求的服务器 URL</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`method\` 是创建请求时使用的方法</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`baseURL\` 将自动加在 \`url\` 前面，除非 \`url\` 是一个绝对 URL。</span>
  <span class="token comment">// 它可以通过设置一个 \`baseURL\` 便于为 axios 实例的方法传递相对 URL</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://some-domain.com/api/&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 自定义请求头</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;X-Requested-With&#39;</span><span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`params\` 是与请求一起发送的 URL 参数</span>
  <span class="token comment">// 必须是一个简单对象或 URLSearchParams 对象</span>
  <span class="token comment">// 等同于 /xxx/xxx?ID=12345</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  

  <span class="token comment">// \`data\` 是作为请求体被发送的数据</span>
  <span class="token comment">// 仅适用 &#39;PUT&#39;, &#39;POST&#39;, &#39;DELETE 和 &#39;PATCH&#39; 请求方法</span>
  <span class="token comment">// 在没有设置 \`transformRequest\` 时，则必须是以下类型之一:</span>
  <span class="token comment">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams</span>
  <span class="token comment">// - 浏览器专属: FormData, File, Blob</span>
  <span class="token comment">// - Node 专属: Stream, Buffer</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// see https://axios-http.com/zh/docs/cancellation</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 
  <span class="token comment">// \`timeout\` 指定请求超时的毫秒数。</span>
  <span class="token comment">// 如果请求时间超过 \`timeout\` 的值，则请求会被中断</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 默认值是 \`0\` (永不超时)</span>

  <span class="token comment">// \`withCredentials\` 表示跨域请求时是否需要使用凭证</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`adapter\` 允许自定义处理请求，这使测试更加容易。</span>
  <span class="token comment">// 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。</span>
  <span class="token function-variable function">adapter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`auth\` HTTP Basic Auth</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;janedoe&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;s00pers3cret&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`responseType\` 表示浏览器将要响应的数据类型</span>
  <span class="token comment">// 选项包括: &#39;arraybuffer&#39;, &#39;document&#39;, &#39;json&#39;, &#39;text&#39;, &#39;stream&#39;</span>
  <span class="token comment">// 浏览器专属：&#39;blob&#39;</span>
  <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`responseEncoding\` 表示用于解码响应的编码 (Node.js 专属)</span>
  <span class="token comment">// 注意：忽略 \`responseType\` 的值为 &#39;stream&#39;，或者是客户端请求</span>
  <span class="token comment">// Note: Ignored for \`responseType\` of &#39;stream&#39; or client-side requests</span>
  <span class="token literal-property property">responseEncoding</span><span class="token operator">:</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`xsrfCookieName\` 是 xsrf token 的值，被用作 cookie 的名称</span>
  <span class="token literal-property property">xsrfCookieName</span><span class="token operator">:</span> <span class="token string">&#39;XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`xsrfHeaderName\` 是带有 xsrf token 值的http 请求头名称</span>
  <span class="token literal-property property">xsrfHeaderName</span><span class="token operator">:</span> <span class="token string">&#39;X-XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`onUploadProgress\` 允许为上传处理进度事件</span>
  <span class="token comment">// 浏览器专属</span>
  <span class="token function-variable function">onUploadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理原生进度事件</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`onDownloadProgress\` 允许为下载处理进度事件</span>
  <span class="token comment">// 浏览器专属</span>
  <span class="token function-variable function">onDownloadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理原生进度事件</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`maxContentLength\` 定义了node.js中允许的HTTP响应内容的最大字节数</span>
  <span class="token literal-property property">maxContentLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>

  <span class="token comment">// \`maxBodyLength\`（仅Node）定义允许的http请求内容的最大字节数</span>
  <span class="token literal-property property">maxBodyLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>

  <span class="token comment">// \`validateStatus\` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。</span>
  <span class="token comment">// 如果 \`validateStatus\` 返回 \`true\` (或者设置为 \`null\` 或 \`undefined\`)，</span>
  <span class="token comment">// 则promise 将会 resolved，否则是 rejected。</span>
  <span class="token function-variable function">validateStatus</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token comment">// 默认值</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`maxRedirects\` 定义了在node.js中要遵循的最大重定向数。</span>
  <span class="token comment">// 如果设置为0，则不会进行重定向</span>
  <span class="token literal-property property">maxRedirects</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`socketPath\` 定义了在node.js中使用的UNIX套接字。</span>
  <span class="token comment">// e.g. &#39;/var/run/docker.sock&#39; 发送请求到 docker 守护进程。</span>
  <span class="token comment">// 只能指定 \`socketPath\` 或 \`proxy\` 。</span>
  <span class="token comment">// 若都指定，这使用 \`socketPath\` 。</span>
  <span class="token literal-property property">socketPath</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`httpAgent\` and \`httpsAgent\` define a custom agent to be used when performing http</span>
  <span class="token comment">// and https requests, respectively, in node.js. This allows options to be added like</span>
  <span class="token comment">// \`keepAlive\` that are not enabled by default.</span>
  <span class="token literal-property property">httpAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">http<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">httpsAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">https<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// \`proxy\` 定义了代理服务器的主机名，端口和协议。</span>
  <span class="token comment">// 您可以使用常规的\`http_proxy\` 和 \`https_proxy\` 环境变量。</span>
  <span class="token comment">// 使用 \`false\` 可以禁用代理功能，同时环境变量也会被忽略。</span>
  <span class="token comment">// \`auth\`表示应使用HTTP Basic auth连接到代理，并且提供凭据。</span>
  <span class="token comment">// 这将设置一个 \`Proxy-Authorization\` 请求头，它会覆盖 \`headers\` 中已存在的自定义 \`Proxy-Authorization\` 请求头。</span>
  <span class="token comment">// 如果代理服务器使用 HTTPS，则必须设置 protocol 为\`https\`</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">&#39;https&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;mikeymike&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;rapunz3l&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>



  <span class="token comment">// \`decompress\` indicates whether or not the response body should be decompressed </span>
  <span class="token comment">// automatically. If set to \`true\` will also remove the &#39;content-encoding&#39; header </span>
  <span class="token comment">// from the responses objects of all decompressed responses</span>
  <span class="token comment">// - Node only (XHR cannot turn off decompression)</span>
  <span class="token literal-property property">decompress</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 默认值</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const r=s(p,[["render",o],["__file","axios-shortcut.html.vue"]]),u=JSON.parse('{"path":"/web/package/axios-shortcut.html","title":"🪤 axios 快捷封装","lang":"zh-CN","frontmatter":{"title":"🪤 axios 快捷封装","tag":["axios","封装"],"description":"axios.pngaxios.png 依赖安装 封装体 使用 其他相关的 axios 知识 多请求发送 常用的请求配置 使用的评率由上往下依次递减","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/web/package/axios-shortcut.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"🪤 axios 快捷封装"}],["meta",{"property":"og:description","content":"axios.pngaxios.png 依赖安装 封装体 使用 其他相关的 axios 知识 多请求发送 常用的请求配置 使用的评率由上往下依次递减"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.z4a.net/images/2023/10/07/axios.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T17:55:50.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"axios"}],["meta",{"property":"article:tag","content":"封装"}],["meta",{"property":"article:modified_time","content":"2024-02-05T17:55:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🪤 axios 快捷封装\\",\\"image\\":[\\"https://www.z4a.net/images/2023/10/07/axios.png\\"],\\"dateModified\\":\\"2024-02-05T17:55:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"依赖安装","slug":"依赖安装","link":"#依赖安装","children":[]},{"level":2,"title":"封装体","slug":"封装体","link":"#封装体","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"其他相关的 axios 知识","slug":"其他相关的-axios-知识","link":"#其他相关的-axios-知识","children":[{"level":3,"title":"多请求发送","slug":"多请求发送","link":"#多请求发送","children":[]},{"level":3,"title":"常用的请求配置","slug":"常用的请求配置","link":"#常用的请求配置","children":[]}]}],"git":{"createdTime":1699094106000,"updatedTime":1707155750000,"contributors":[{"name":"zeroeldath","email":"zeroeldath@Mac-Pro.local","commits":1}]},"readingTime":{"minutes":4.57,"words":1370},"filePathRelative":"web/package/axios-shortcut.md","localizedDate":"2023年11月4日","excerpt":"<figure><img src=\\"https://www.z4a.net/images/2023/10/07/axios.png\\" alt=\\"axios.png\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>axios.png</figcaption></figure>\\n<h2>依赖安装</h2>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code>npm install axios\\nor\\nyarn add axios\\n</code></pre></div>","autoDesc":true}');export{r as comp,u as data};
