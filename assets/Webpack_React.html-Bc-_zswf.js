import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as r,a as e,b as s,d as a,e as t,r as i}from"./app-2808bd6S.js";const c={},u={href:"https://webpack.docschina.org/concepts/entry-points",target:"_blank",rel:"noopener noreferrer"},d={href:"https://webpack.docschina.org/concepts/output",target:"_blank",rel:"noopener noreferrer"},k={href:"https://webpack.docschina.org/concepts/loaders",target:"_blank",rel:"noopener noreferrer"},v={href:"https://webpack.docschina.org/api/plugins",target:"_blank",rel:"noopener noreferrer"},m={href:"https://webpack.docschina.org/api/plugins",target:"_blank",rel:"noopener noreferrer"},b={href:"https://webpack.docschina.org/loaders/less-loader/",target:"_blank",rel:"noopener noreferrer"};function g(y,n){const p=i("ExternalLinkIcon");return l(),r("div",null,[n[12]||(n[12]=e(`<div align="center"><img width="200px" height="200px" src="https://www.z4a.net/images/2023/09/12/logo.png"><h1><a href="https://github.com/NightSquirrl/manual-react-webpack" target="_blank">🧐 Webpack + React</a></h1><p>代码相关说明</p></div><br><br><h1 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h1><h2 id="一、五大核心概念" tabindex="-1"><a class="header-anchor" href="#一、五大核心概念"><span>一、五大核心概念</span></a></h2><h3 id="_1、entry" tabindex="-1"><a class="header-anchor" href="#_1、entry"><span>1、Entry</span></a></h3><blockquote><p>入口起点，告诉 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。默认值是 ./src/index.js，但也可以通过在 “webpack.config.js” 文件中的 entry 属性来配置，可以指定一个（或多个）不同的入口起点，</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 单文件入口简写</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
 
<span class="token comment">// 单文件入口完整写法</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token comment">// 多文件入口写法</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./src/index_2.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)),s("p",null,[n[1]||(n[1]=a("有关 Entry 更多的信息")),s("a",u,[n[0]||(n[0]=a("参考官网")),t(p)])]),n[13]||(n[13]=e(`<h3 id="_2、output" tabindex="-1"><a class="header-anchor" href="#_2、output"><span>2、Output</span></a></h3><blockquote><p>output 告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件。主要输出文件的默认值是 ./dist/main.js，其他生成文件默认放置在 ./dist 文件夹中。也可通过在 “webpack.config.js” 文件中的 output 属性来配置</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
 
<span class="token comment">// 多入口的配置</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">&#39;./src/app.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&#39;./src/search.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 写入到：./dist/app.js, ./dist/search.js</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> __dirname <span class="token operator">+</span> <span class="token string">&#39;/dist&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),s("p",null,[n[3]||(n[3]=a("有关 Output 更多的信息")),s("a",d,[n[2]||(n[2]=a("参考官网")),t(p)])]),n[14]||(n[14]=e(`<h3 id="_3、loader" tabindex="-1"><a class="header-anchor" href="#_3、loader"><span>3、Loader</span></a></h3><blockquote><p>webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。loader的基本属性就两个:</p></blockquote><ul><li>test：识别出哪些文件会被转换</li><li>use：定义出在进行转换时，应该使用哪个 loader</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 示例</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 最后执行 style-loader</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;style-loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// 其次执行 css-loader</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">//  首先执行 sass-loader</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;sass-loader&#39;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里需要注意的是：module.rules 允许你在 webpack 配置中指定多个 loader。还有 loader 的执行顺序需要注意一下，<span style="color:red;">他是从下到上依次执行的</span>，配置过程中不要写错了。在上面的示例中，从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束。</p>`,5)),s("p",null,[n[5]||(n[5]=a("有关 Loader 更多的信息")),s("a",k,[n[4]||(n[4]=a("参考官网")),t(p)])]),n[15]||(n[15]=e(`<h3 id="_4、plugins" tabindex="-1"><a class="header-anchor" href="#_4、plugins"><span>4、Plugins</span></a></h3><blockquote><p>loader 用于转换某些类型的模块，而plugins（插件）则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。插件的使用需要用 require() 引入，然后通过 new 操作符来创建一个实例 最后添加到 plugins 数组中。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// html的插件</span>
 
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述示例中 html-webpack-plugin 会为应用程序生成一个 HTML 文件，并自动将生成的所有 bundle 注入到此文件中。</p>`,4)),s("p",null,[n[7]||(n[7]=a("有关 Plugins 更多的信息")),s("a",v,[n[6]||(n[6]=a("参考官网")),t(p)])]),n[16]||(n[16]=e(`<h3 id="_5、mode" tabindex="-1"><a class="header-anchor" href="#_5、mode"><span>5、Mode</span></a></h3><blockquote><p>模式，有生产模式（production）和开发模式（development）或 none。设置 mode 参数，可以启用 webpack 内置在相应环境下的优化</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 其默认值为 production</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),s("p",null,[n[9]||(n[9]=a("有关 Mode 更多的信息")),s("a",m,[n[8]||(n[8]=a("参考官网")),t(p)])]),n[17]||(n[17]=e(`<h2 id="安装及简单的配置" tabindex="-1"><a class="header-anchor" href="#安装及简单的配置"><span>安装及简单的配置</span></a></h2><h3 id="_1、安装" tabindex="-1"><a class="header-anchor" href="#_1、安装"><span>1、安装</span></a></h3><p>webpack的安装需要注意的一点就是需要在全局和项目中都同时安装 webpack 和 webpack-cli</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>npm i webpack webpack<span class="token operator">-</span>cli <span class="token operator">-</span>g
npm i webpack webpack<span class="token operator">-</span>cli <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、初始化项目" tabindex="-1"><a class="header-anchor" href="#_2、初始化项目"><span>2、初始化项目</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、编译打包" tabindex="-1"><a class="header-anchor" href="#_3、编译打包"><span>3、编译打包</span></a></h3><p>简单的创建一个项目，然后加入各种类型的文件，应用上面说的五大核心打包一个应用。</p><h4 id="首先加入webpack支持的js和json文件" tabindex="-1"><a class="header-anchor" href="#首先加入webpack支持的js和json文件"><span>首先加入webpack支持的js和json文件</span></a></h4><ul><li>创建了一个webpack文件夹</li><li>在他的基础上初始化了项目：npm init</li><li>创建 src 文件夹，并在他下面创建 入口文件（index.js）和一些模块（module1.js、module2.js、module3.js ......）</li><li>创建 json 文件夹，并在他下面创建 json 文件（index.json）</li><li>创建 index.html 文件，以备之后引入webpack 构建后的文件</li><li>创建 webpack.config.js 文件，用于配置 webpack 的配置。</li></ul><h4 id="其次配置默认支持的js和json文件" tabindex="-1"><a class="header-anchor" href="#其次配置默认支持的js和json文件"><span>其次配置默认支持的js和json文件</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 入口文件配置</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/js/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 出口文件配置</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 模式选择（默认）</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单说一下，上面的配置文件主要做两件事。1、配置了入口文件地址为：&#39;./src/js/index.js&#39; 2、配置了出口文件的导出为：&#39;dist/main.js&#39;</p><p>配置完以后，执行命令：webpack</p><p>这样一来我们就把webpack支持的js和json文件做了一个配置，同时用到了五大核心中的三大核心：entry、output、mode。</p><h4 id="loader-使用案例" tabindex="-1"><a class="header-anchor" href="#loader-使用案例"><span>loader 使用案例</span></a></h4><h5 id="less-loader" tabindex="-1"><a class="header-anchor" href="#less-loader"><span>less-loader</span></a></h5>`,17)),s("p",null,[n[11]||(n[11]=a("首先添加一个 .less 文件 然后在入口文件中引入 配置 loader 可以")),s("a",b,[n[10]||(n[10]=a("参考官网")),t(p)])]),n[18]||(n[18]=e(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>npm install less less<span class="token operator">-</span>loader style<span class="token operator">-</span>loader css<span class="token operator">-</span>loader <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里为什么需要安装&#39;style-loader&#39;和&#39;css-loader&#39;,请看注释</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 构建 less 文件 说明</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token comment">// 匹配 .less 文件</span>
        <span class="token comment">// 注意之前说过的，loader是从下到上的一个执行顺序</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 还有官方的示例 这里是loader 咱们需要改成use</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 创建style标签，并将js中的css代码添加到style标签中</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 将css文件以common.js的方式整合到js文件中</span>
          <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 将less文件解析成css文件</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="ts-loader" tabindex="-1"><a class="header-anchor" href="#ts-loader"><span>ts-loader</span></a></h5><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> ts<span class="token operator">-</span>loader typescript babel<span class="token operator">-</span>loader @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ts想要被 webpack 识别，不仅需要借助ts-loader，还需要借助babel-loader，这里直接看根据官网文档来</p><p>但这里需要注意的是，在构建过程中，如果需要支持IE浏览器，需要额外配置：core-js</p><p>具体配置</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 构建 ts 文件 说明</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 入口文件配置</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/js/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 出口文件配置</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 模式选择（默认）</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// loader的配置</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// less-loader</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 匹配 .less 文件</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// ts-loader</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node-modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// babel配置</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// 加载器</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">// 设置babel</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// 预定义的环境设置</span>
              <span class="token literal-property property">presets</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">[</span>
                  <span class="token comment">// 指定环境的插件</span>
                  <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                  <span class="token comment">// 配置信息</span>
                  <span class="token punctuation">{</span>
                    <span class="token comment">// 要兼容的目标浏览器</span>
                    <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;58&quot;</span><span class="token punctuation">,</span>
                      <span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token comment">// 指定core.js的版本</span>
                    <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                    <span class="token comment">// 使用corejs的方式 “usage” 表示按需加载</span>
                    <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token comment">// 开启babel缓存</span>
              <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&#39;ts-loader&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="图片构建" tabindex="-1"><a class="header-anchor" href="#图片构建"><span>图片构建</span></a></h5><p>在图片的构建中，以前的webpack4需要用到url-loader 和 file-loader，但在webpack5中确不需要了。</p><p>为什么webpack5不用这么配置了呢？这里简单说一下：</p><p>webpack5 新增 资源模块（Asset Modules ）。资源模块(asset module)是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。 在 webpack5 之前，通常用 raw-loader 将文件导入为字符串、用 url-loader 将文件作为 data URI 内联到 bundle 中、用 file-loader 将文件发送到输出目录。但现在新增了资源模块后，资源模块通过添加 4 种新的模块类型，来替换所有这些 loader：</p><ul><li>asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。</li><li>asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。</li><li>asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。</li><li>asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。</li></ul><p>看一下webpack4 和 webpack5 的代码的区别：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// webpack4 的使用</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.png$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ico$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.text$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;raw-loader&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// webpack5 的使用</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.png$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ico$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;asset/inline&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.text$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;asset/source&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接下来看一下plugins" tabindex="-1"><a class="header-anchor" href="#接下来看一下plugins"><span>接下来看一下plugins</span></a></h4><p><strong>1、mini-css-extract-plugin</strong> 插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。</p><p>简单贴一下代码</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 安装</span>
npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev mini<span class="token operator">-</span>css<span class="token operator">-</span>extract<span class="token operator">-</span>plugin
 
<span class="token comment">// 使用</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，插件基于 webpack5 的新特性构建，需要 webpack5 才能正常工作。</p><p><strong>2、html-webpack-plugin</strong> 插件会生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle。</p><p>简单贴一下代码</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 安装</span>
npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev html<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin
 
 
<span class="token comment">// 使用</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index_bundle.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是 如果你有多个 webpack 入口，也会在已生成 HTML 文件中的 script 标签内引入</p><p>如果在 webpack 的输出中有任何 CSS 资源（例如，使用 mini-css-extract-plugin 提取的 CSS），那么这些资源也会在 HTML 文件 head 元素中的 link 标签内引入</p><h4 id="最后来看一下代码规范" tabindex="-1"><a class="header-anchor" href="#最后来看一下代码规范"><span>最后来看一下代码规范</span></a></h4><p>代码规范的工具有很多，但怎么选择是个问题，一般我觉得跟着主流的框架走总不会错，就目前vue3和react17用的都是Eslint，所以咱们就以Eslint为例，简单说一下。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// webpack5 弃用了eslint-loader 支持了eslint-webpack-plugin</span>
yarn add <span class="token operator">-</span><span class="token constant">D</span> eslint<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin

<span class="token comment">// eslint 和 prettier 结合校验</span>
yarn add <span class="token operator">-</span><span class="token constant">D</span> eslint prettier prettier<span class="token operator">-</span>eslint eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>prettier

<span class="token comment">// 一个可扩展的共享配置</span>
yarn add <span class="token operator">-</span><span class="token constant">D</span> eslint<span class="token operator">-</span>config<span class="token operator">-</span>airbnb<span class="token operator">-</span>base

<span class="token comment">// 用于react的eslint规则</span>
yarn add <span class="token operator">-</span><span class="token constant">D</span> eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>react

<span class="token comment">// typescript相关规则 详细说明：https://www.npmjs.com/package/@typescript-eslint/parser</span>
yarn add <span class="token operator">-</span><span class="token constant">D</span> typescript @typescript<span class="token operator">-</span>eslint<span class="token operator">/</span>parser @typescript<span class="token operator">-</span>eslint<span class="token operator">/</span>eslint<span class="token operator">-</span>plugin

<span class="token comment">// 添加一些.eslintrc文件的扩展特性</span>
yarn add <span class="token operator">-</span><span class="token constant">D</span> standard eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>promise eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>node eslint<span class="token operator">-</span>plugin<span class="token operator">-</span><span class="token keyword">import</span> eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>standard eslint<span class="token operator">-</span>config<span class="token operator">-</span>standard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完以后配置如下</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>
<span class="token comment">// 合并规则</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> merge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;webpack-merge&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 错误提示插件</span>
<span class="token keyword">const</span> FriendlyErrorsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;friendly-errors-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// eslint插件</span>
<span class="token keyword">const</span> ESLintPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;eslint-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 导入基础配置</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> baseConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./webpack.config.base&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>baseConfig<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 环境设置：开发环境</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 便于开发调试 这里开启source-map模式</span>
  <span class="token literal-property property">devtool</span><span class="token operator">:</span>  <span class="token string">&#39;source-map&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// webpack-dev-server 的一下配置，webpack-dev-server 会提供一个本地服务(serve)</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// host</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 端口</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8000</span><span class="token punctuation">,</span>
    <span class="token comment">// 热更新</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 启动时打开浏览器</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件配置</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">FriendlyErrorsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">ESLintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">fix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">&quot;/node_modules/&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.eslintrc.js文件 的配置如下</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 增加.eslintrc.js文件</span>
 
 
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// eslint的配置主要走的是：typescript-eslint</span>
  <span class="token comment">// 详细内容请参阅：https://typescript-eslint.io/</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 可共享的配置 是一个npm包，输出的是一个配置对象。</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:react/recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:@typescript-eslint/recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:prettier/recommended&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;plugin:import/typescript&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 指定脚本的运行环境。每种环境都有一组特定的预约义全局变量。</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mocha</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">jest</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">jasmine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 输出的规则</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@typescript-eslint&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 为特定类型的文件（ts、tsx）指定处理器。</span>
  <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.tsx&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;@typescript-eslint/no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 规则集，会覆盖extends中的规则</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 语句强制分号结尾</span>
    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头 （off 不强制要求写 propTypes）</span>
    <span class="token string-property property">&quot;react/boolean-prop-naming&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 一个 defaultProps 必须有对应的 propTypes （）</span>
    <span class="token string-property property">&quot;react/default-props-match-prop-types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 组件必须有 displayName 属性 （off 不强制要求写 displayName）</span>
    <span class="token string-property property">&quot;react/display-name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在自定义组件中使用一些指定的 props （off 没必要限制）</span>
    <span class="token string-property property">&quot;react/forbid-component-props&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用一些指定的 elements （off 没必要限制）</span>
    <span class="token string-property property">&quot;react/forbid-elements&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用一些指定的 propTypes （off 不强制要求写 propTypes）</span>
    <span class="token string-property property">&quot;react/forbid-prop-types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止直接使用别的组建的 propTypes （off 不强制要求写 propTypes）</span>
    <span class="token string-property property">&quot;react/forbid-foreign-prop-types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用数组的 index 作为 key （off 不强制要求 太严格了！）</span>
    <span class="token string-property property">&quot;react/no-array-index-key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// note you must disable the base rule as it can report incorrect errors</span>
    <span class="token string-property property">&quot;no-use-before-define&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@typescript-eslint/no-use-before-define&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;off&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;@typescript-eslint/no-var-requires&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 children 做 props</span>
    <span class="token string-property property">&quot;react/no-children-prop&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 dangerouslySetInnerHTML （off 没必要限制）</span>
    <span class="token string-property property">&quot;react/no-danger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在使用了 dangerouslySetInnerHTML 的组建内添加 children</span>
    <span class="token string-property property">&quot;react/no-danger-with-children&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用已废弃的 api</span>
    <span class="token string-property property">&quot;react/no-deprecated&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在 componentDidMount 里面使用 setState （off 同构应用需要在 didMount 里写 setState）</span>
    <span class="token string-property property">&quot;react/no-did-mount-set-state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在 componentDidUpdate 里面使用 setState</span>
    <span class="token string-property property">&quot;react/no-did-update-set-state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止直接修改 this.state</span>
    <span class="token string-property property">&quot;react/no-direct-mutation-state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 findDOMNode</span>
    <span class="token string-property property">&quot;react/no-find-dom-node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 isMounted</span>
    <span class="token string-property property">&quot;react/no-is-mounted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在一个文件创建两个组件</span>
    <span class="token string-property property">&quot;react/no-multi-comp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在 PureComponent 中使用 shouldComponentUpdate</span>
    <span class="token string-property property">&quot;react/no-redundant-should-component-update&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 ReactDOM.render 的返回值</span>
    <span class="token string-property property">&quot;react/no-render-return-value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 setState</span>
    <span class="token string-property property">&quot;react/no-set-state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止拼写错误</span>
    <span class="token string-property property">&quot;react/no-typos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用字符串 ref</span>
    <span class="token string-property property">&quot;react/no-string-refs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在组件的内部存在未转义的 &gt;, &quot;, &#39; 或 }</span>
    <span class="token string-property property">&quot;react/no-unescaped-entities&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable 禁止出现 HTML 中的属性，如 class</span>
    <span class="token string-property property">&quot;react/no-unknown-property&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止出现未使用的 propTypes</span>
    <span class="token string-property property">&quot;react/no-unused-prop-types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 定义过的 state 必须使用</span>
    <span class="token string-property property">&quot;react/no-unused-state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在 componentWillUpdate 中使用 setState</span>
    <span class="token string-property property">&quot;react/no-will-update-set-state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 必须使用 Class 的形式创建组件</span>
    <span class="token string-property property">&quot;react/prefer-es6-class&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 必须使用 pure function</span>
    <span class="token string-property property">&quot;react/prefer-stateless-function&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 组件必须写 propTypes</span>
    <span class="token string-property property">&quot;react/prop-types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 出现 jsx 的地方必须 import React</span>
    <span class="token string-property property">&quot;react/react-in-jsx-scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 非 required 的 prop 必须有 defaultProps</span>
    <span class="token string-property property">&quot;react/require-default-props&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 组件必须有 shouldComponentUpdate</span>
    <span class="token string-property property">&quot;react/require-optimization&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// render 方法中必须有返回值</span>
    <span class="token string-property property">&quot;react/require-render-return&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable 组件内没有 children 时，必须使用自闭和写法</span>
    <span class="token string-property property">&quot;react/self-closing-comp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable 组件内方法必须按照一定规则排序</span>
    <span class="token string-property property">&quot;react/sort-comp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// propTypes 的熟悉必须按照字母排序</span>
    <span class="token string-property property">&quot;react/sort-prop-types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// HTML 中的自闭和标签禁止有 children</span>
    <span class="token string-property property">&quot;react/void-dom-elements-no-children&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable 布尔值的属性必须显式的写 someprop={true}</span>
    <span class="token string-property property">&quot;react/jsx-boolean-value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable 自闭和标签的反尖括号必须与尖括号的那一行对齐</span>
    <span class="token string-property property">&quot;react/jsx-closing-bracket-location&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">nonEmpty</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selfClosing</span><span class="token operator">:</span> <span class="token string">&quot;line-aligned&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable 结束标签必须与开始标签的那一行对齐</span>
    <span class="token string-property property">&quot;react/jsx-closing-tag-location&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable 大括号内前后禁止有空格</span>
    <span class="token string-property property">&quot;react/jsx-curly-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">when</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">allowMultiline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">spacing</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">objectLiterals</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable props 与 value 之间的等号前后禁止有空格</span>
    <span class="token string-property property">&quot;react/jsx-equals-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 限制文件后缀</span>
    <span class="token string-property property">&quot;react/jsx-filename-extension&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable 第一个 prop 必须得换行</span>
    <span class="token string-property property">&quot;react/jsx-first-prop-new-line&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// handler 的名称必须是 onXXX 或 handleXXX</span>
    <span class="token string-property property">&quot;react/jsx-handler-names&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 数组中的 jsx 必须有 key</span>
    <span class="token string-property property">&quot;react/jsx-key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable 限制每行的 props 数量</span>
    <span class="token string-property property">&quot;react/jsx-max-props-per-line&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// jsx 中禁止使用 bind</span>
    <span class="token string-property property">&quot;react/jsx-no-bind&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在 jsx 中使用像注释的字符串</span>
    <span class="token string-property property">&quot;react/jsx-no-comment-textnodes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止出现重复的 props</span>
    <span class="token string-property property">&quot;react/jsx-no-duplicate-props&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在 jsx 中出现字符串</span>
    <span class="token string-property property">&quot;react/jsx-no-literals&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 target=&quot;_blank&quot;</span>
    <span class="token string-property property">&quot;react/jsx-no-target-blank&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用未定义的 jsx elemet</span>
    <span class="token string-property property">&quot;react/jsx-no-undef&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 pascal 写法的 jsx，比如 &lt;TEST_COMPONENT&gt;</span>
    <span class="token string-property property">&quot;react/jsx-pascal-case&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable props 必须排好序</span>
    <span class="token string-property property">&quot;react/jsx-sort-props&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable jsx 的开始和闭合处禁止有空格</span>
    <span class="token string-property property">&quot;react/jsx-tag-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">closingSlash</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">beforeSelfClosing</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">afterOpening</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// jsx 文件必须 import React</span>
    <span class="token string-property property">&quot;react/jsx-uses-react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 定义了的 jsx element 必须使用</span>
    <span class="token string-property property">&quot;react/jsx-uses-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// @fixable 多行的 jsx 必须有括号包起来</span>
    <span class="token string-property property">&quot;react/jsx-wrap-multilines&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 消除未使用的变量，函数和函数的参数。</span>
    <span class="token string-property property">&quot;no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// jsdoc语法检查</span>
    <span class="token string-property property">&quot;valid-jsdoc&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">requireReturn</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 添加共享设置</span>
  <span class="token literal-property property">settings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">react</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">&quot;detect&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">polyfills</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;fetch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;promises&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;url&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34))])}const x=o(c,[["render",g],["__file","Webpack_React.html.vue"]]),h=JSON.parse('{"path":"/web/webpack/Webpack_React.html","title":"🧐 Webpack + React","lang":"zh-CN","frontmatter":{"title":"🧐 Webpack + React","description":"手动搭建 react 脚手架","tag":["Webpack","前端"],"head":[["meta",{"property":"og:url","content":"https://soft-vault.com/web/webpack/Webpack_React.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"🧐 Webpack + React"}],["meta",{"property":"og:description","content":"手动搭建 react 脚手架"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T17:55:50.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"Webpack"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:modified_time","content":"2024-02-05T17:55:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🧐 Webpack + React\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-05T17:55:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"一、五大核心概念","slug":"一、五大核心概念","link":"#一、五大核心概念","children":[{"level":3,"title":"1、Entry","slug":"_1、entry","link":"#_1、entry","children":[]},{"level":3,"title":"2、Output","slug":"_2、output","link":"#_2、output","children":[]},{"level":3,"title":"3、Loader","slug":"_3、loader","link":"#_3、loader","children":[]},{"level":3,"title":"4、Plugins","slug":"_4、plugins","link":"#_4、plugins","children":[]},{"level":3,"title":"5、Mode","slug":"_5、mode","link":"#_5、mode","children":[]}]},{"level":2,"title":"安装及简单的配置","slug":"安装及简单的配置","link":"#安装及简单的配置","children":[{"level":3,"title":"1、安装","slug":"_1、安装","link":"#_1、安装","children":[]},{"level":3,"title":"2、初始化项目","slug":"_2、初始化项目","link":"#_2、初始化项目","children":[]},{"level":3,"title":"3、编译打包","slug":"_3、编译打包","link":"#_3、编译打包","children":[]}]}],"git":{"createdTime":1699094106000,"updatedTime":1707155750000,"contributors":[{"name":"zeroeldath","email":"zeroeldath@Mac-Pro.local","commits":1}]},"readingTime":{"minutes":13.01,"words":3902},"filePathRelative":"web/webpack/Webpack+React.md","localizedDate":"2023年11月4日","excerpt":"<div align=\\"center\\">\\n    <img width=\\"200px\\" height=\\"200px\\" src=\\"https://www.z4a.net/images/2023/09/12/logo.png\\">\\n    <h1>\\n\\t\\t<a href=\\"https://github.com/NightSquirrl/manual-react-webpack\\" target=\\"_blank\\">🧐 Webpack + React</a>\\n\\t</h1>\\n    <p>代码相关说明</p>\\n</div>\\n<br>\\n<br>\\n<h1>基础配置</h1>\\n<h2>一、五大核心概念</h2>\\n"}');export{x as comp,h as data};
