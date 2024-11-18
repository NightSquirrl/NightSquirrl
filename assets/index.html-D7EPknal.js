import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,a as t}from"./app-2808bd6S.js";const i={};function l(p,n){return a(),e("div",null,n[0]||(n[0]=[t(`<figure><img src="https://www.nginx.com/wp-content/uploads/2021/08/NGINX-Part-of-F5-horiz-black-type-1.svg" alt="NGINX" tabindex="0" loading="lazy"><figcaption>NGINX</figcaption></figure><h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>NGINX</span></a></h1><h2 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装"><span>下载安装</span></a></h2><p>移centos 为例</p><ol><li>更新系统软件包列表：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>安装NGINX软件包：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>启动NGINX服务：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl start nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>配置NGINX服务开机自启动：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>验证NGINX服务是否启动成功：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl status nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>配置防火墙，允许HTTP和HTTPS流量：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--permanent</span> --add-service<span class="token operator">=</span>http
firewall-cmd <span class="token parameter variable">--permanent</span> --add-service<span class="token operator">=</span>https
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>配置SELinux，允许NGINX服务网络连接：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>setsebool <span class="token parameter variable">-P</span> httpd_can_network_connect <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常见配置用例" tabindex="-1"><a class="header-anchor" href="#常见配置用例"><span>常见配置用例</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># React app configuration</span>
server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name example.com<span class="token punctuation">;</span>  <span class="token comment"># 设置为您的域名或服务器IP</span>

    <span class="token comment"># 配置静态资源请求</span>
    location / <span class="token punctuation">{</span>
        root /var/www/html<span class="token punctuation">;</span>  <span class="token comment"># 指向React应用的目录</span>
        try_files <span class="token variable">$uri</span> /index.html<span class="token punctuation">;</span> <span class="token comment"># 重点 适用于单页面应用,简单的意思是找到对应的返回值之后,不再继续往下找,直接返回</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 配置后端API请求</span>
    location /api/ <span class="token punctuation">{</span>
        proxy_pass http://localhost:8000<span class="token punctuation">;</span>  <span class="token comment"># 后端API的地址和端口</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>

        <span class="token comment"># 可选配置，用于处理WebSocket连接</span>
        proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
        proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>
        proxy_set_header Connection <span class="token string">&quot;Upgrade&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个配置将监听80端口，并配置了两个 <code>location</code> 块：</p><ul><li>第一个 <code>location /</code> 块用于处理React应用的静态资源请求。如果NGINX找不到对应的文件，则返回主页 <code>index.html</code>，以保证单页面应用的正常工作。</li><li>第二个 <code>location /api/</code> 块用于向后端API发送请求，反向代理到本地的 <code>http://localhost:8000</code>。通过这个配置，可以将React前端与后端API整合在一起。</li></ul><h2 id="nginx-配置文件实例" tabindex="-1"><a class="header-anchor" href="#nginx-配置文件实例"><span>NGINX 配置文件实例</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#定义 nginx 运行的用户和用户组</span>
user www www<span class="token punctuation">;</span>

<span class="token comment">#nginx 进程数，建议设置为等于 CPU 总核心数。</span>
worker_processes <span class="token number">8</span><span class="token punctuation">;</span>

<span class="token comment">#nginx 默认没有开启利用多核 CPU, 通过增加 worker_cpu_affinity 配置参数来充分利用多核 CPU 以下是 8 核的配置参数</span>
worker_cpu_affinity 00000001 00000010 00000100 00001000 00010000 00100000 01000000 <span class="token number">10000000</span><span class="token punctuation">;</span>

<span class="token comment">#全局错误日志定义类型，[ debug | info | notice | warn | error | crit ]</span>
error_log /var/log/nginx/error.log info<span class="token punctuation">;</span>

<span class="token comment">#进程文件</span>
pid /var/run/nginx.pid<span class="token punctuation">;</span>

<span class="token comment">#一个 nginx 进程打开的最多文件描述符数目，理论值应该是最多打开文件数（系统的值 ulimit -n）与 nginx 进程数相除，但是 nginx 分配请求并不均匀，所以建议与 ulimit -n 的值保持一致。</span>
worker_rlimit_nofile <span class="token number">65535</span><span class="token punctuation">;</span>

<span class="token comment">#工作模式与连接数上限</span>
events
<span class="token punctuation">{</span>
    <span class="token comment">#参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll 模型是 Linux 2.6 以上版本内核中的高性能网络 I/O 模型，如果跑在 FreeBSD 上面，就用 kqueue 模型。</span>
    <span class="token comment">#epoll 是多路复用 IO(I/O Multiplexing) 中的一种方式，但是仅用于 linux2.6 以上内核，可以大大提高 nginx 的性能</span>
    use epoll<span class="token punctuation">;</span>

    <span class="token comment">############################################################################</span>
    <span class="token comment">#单个后台 worker process 进程的最大并发链接数</span>
    <span class="token comment">#事件模块指令，定义 nginx 每个进程最大连接数，默认 1024。最大客户连接数由 worker_processes 和 worker_connections 决定</span>
    <span class="token comment">#即 max_client=worker_processes*worker_connections, 在作为反向代理时：max_client=worker_processes*worker_connections / 4</span>
    worker_connections <span class="token number">65535</span><span class="token punctuation">;</span>
    <span class="token comment">############################################################################</span>
<span class="token punctuation">}</span>

<span class="token comment">#设定 http 服务器</span>
http <span class="token punctuation">{</span>
    include mime.types<span class="token punctuation">;</span> <span class="token comment">#文件扩展名与文件类型映射表</span>
    default_type application/octet-stream<span class="token punctuation">;</span> <span class="token comment">#默认文件类型</span>
    <span class="token comment">#charset utf-8; #默认编码</span>

    server_names_hash_bucket_size <span class="token number">128</span><span class="token punctuation">;</span> <span class="token comment">#服务器名字的 hash 表大小</span>
    client_header_buffer_size 32k<span class="token punctuation">;</span> <span class="token comment">#上传文件大小限制</span>
    large_client_header_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span> <span class="token comment">#设定请求缓</span>
    client_max_body_size 8m<span class="token punctuation">;</span> <span class="token comment">#设定请求缓</span>
    sendfile on<span class="token punctuation">;</span> <span class="token comment">#开启高效文件传输模式，sendfile 指令指定 nginx 是否调用 sendfile 函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘 IO 重负载应用，可设置为 off，以平衡磁盘与网络 I/O 处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成 off。</span>
    autoindex on<span class="token punctuation">;</span> <span class="token comment">#开启目录列表访问，合适下载服务器，默认关闭。</span>
    tcp_nopush on<span class="token punctuation">;</span> <span class="token comment">#防止网络阻塞</span>
    tcp_nodelay on<span class="token punctuation">;</span> <span class="token comment">#防止网络阻塞</span>

    <span class="token comment">##连接客户端超时时间各种参数设置##</span>
    keepalive_timeout  <span class="token number">120</span><span class="token punctuation">;</span>          <span class="token comment">#单位是秒，客户端连接时时间，超时之后服务器端自动关闭该连接 如果 nginx 守护进程在这个等待的时间里，一直没有收到浏览发过来 http 请求，则关闭这个 http 连接</span>
    client_header_timeout <span class="token number">10</span><span class="token punctuation">;</span>        <span class="token comment">#客户端请求头的超时时间</span>
    client_body_timeout <span class="token number">10</span><span class="token punctuation">;</span>          <span class="token comment">#客户端请求主体超时时间</span>
    reset_timedout_connection on<span class="token punctuation">;</span>    <span class="token comment">#告诉 nginx 关闭不响应的客户端连接。这将会释放那个客户端所占有的内存空间</span>
    send_timeout <span class="token number">10</span><span class="token punctuation">;</span>                 <span class="token comment">#客户端响应超时时间，在两次客户端读取操作之间。如果在这段时间内，客户端没有读取任何数据，nginx 就会关闭连接</span>
    <span class="token comment">################################</span>

    <span class="token comment">#FastCGI 相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能理解。</span>
    fastcgi_connect_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_send_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_read_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_buffer_size 64k<span class="token punctuation">;</span>
    fastcgi_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>
    fastcgi_busy_buffers_size 128k<span class="token punctuation">;</span>
    fastcgi_temp_file_write_size 128k<span class="token punctuation">;</span>

    <span class="token comment">###作为代理缓存服务器设置#######</span>
    <span class="token comment">###先写到 temp 再移动到 cache</span>
    <span class="token comment">#proxy_cache_path /var/tmp/nginx/proxy_cache levels=1:2 keys_zone=cache_one:512m inactive=10m max_size=64m;</span>
    <span class="token comment">###以上 proxy_temp 和 proxy_cache 需要在同一个分区中</span>
    <span class="token comment">###levels=1:2 表示缓存级别，表示缓存目录的第一级目录是 1 个字符，第二级目录是 2 个字符 keys_zone=cache_one:128m 缓存空间起名为 cache_one 大小为 512m</span>
    <span class="token comment">###max_size=64m 表示单个文件超过 128m 就不缓存了  inactive=10m 表示缓存的数据，10 分钟内没有被访问过就删除</span>
    <span class="token comment">#########end####################</span>

    <span class="token comment">#####对传输文件压缩###########</span>
    <span class="token comment">#gzip 模块设置</span>
    <span class="token function">gzip</span> on<span class="token punctuation">;</span> <span class="token comment">#开启 gzip 压缩输出</span>
    gzip_min_length 1k<span class="token punctuation">;</span> <span class="token comment">#最小压缩文件大小</span>
    gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span> <span class="token comment">#压缩缓冲区</span>
    gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span> <span class="token comment">#压缩版本（默认 1.1，前端如果是 squid2.5 请使用 1.0）</span>
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">#压缩等级，gzip 压缩比，1 为最小，处理最快；9 为压缩比最大，处理最慢，传输速度最快，也最消耗 CPU；</span>
    gzip_types text/plain application/x-javascript text/css application/xml<span class="token punctuation">;</span>
    <span class="token comment">#压缩类型，默认就已经包含 text/html，所以下面就不用再写了，写上去也不会有问题，但是会有一个 warn。</span>
    gzip_vary on<span class="token punctuation">;</span>
    <span class="token comment">##############################</span>

    <span class="token comment">#limit_zone crawler $binary_remote_addr 10m; #开启限制 IP 连接数的时候需要使用</span>

    upstream blog.ha97.com <span class="token punctuation">{</span>
        <span class="token comment">#upstream 的负载均衡，weight 是权重，可以根据机器配置定义权重。weigth 参数表示权值，权值越高被分配到的几率越大。</span>
        server <span class="token number">192.168</span>.80.121:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.80.122:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.80.123:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#虚拟主机的配置</span>
    server <span class="token punctuation">{</span>
        <span class="token comment">#监听端口</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>

        <span class="token comment">#############https##################</span>
        <span class="token comment">#listen 443 ssl;</span>
        <span class="token comment">#ssl_certificate /opt/https/xxxxxx.crt;</span>
        <span class="token comment">#ssl_certificate_key /opt/https/xxxxxx.key;</span>
        <span class="token comment">#ssl_protocols SSLv3 TLSv1;</span>
        <span class="token comment">#ssl_ciphers HIGH:!ADH:!EXPORT57:RC4+RSA:+MEDIUM;</span>
        <span class="token comment">#ssl_prefer_server_ciphers on;</span>
        <span class="token comment">#ssl_session_cache shared:SSL:2m;</span>
        <span class="token comment">#ssl_session_timeout 5m;</span>
        <span class="token comment">####################################end</span>

        <span class="token comment">#域名可以有多个，用空格隔开</span>
        server_name www.ha97.com ha97.com<span class="token punctuation">;</span>
        index index.html index.htm index.php<span class="token punctuation">;</span>
        root /data/www/ha97<span class="token punctuation">;</span>
        location ~ .*.<span class="token punctuation">(</span>php<span class="token operator">|</span>php5<span class="token punctuation">)</span>?$ <span class="token punctuation">{</span>
            fastcgi_pass <span class="token number">127.0</span>.0.1:9000<span class="token punctuation">;</span>
            fastcgi_index index.php<span class="token punctuation">;</span>
            include fastcgi.conf<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#图片缓存时间设置</span>
        location ~ .*.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
            expires 10d<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#JS 和 CSS 缓存时间设置</span>
        location ~ .*.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$ <span class="token punctuation">{</span>
            expires 1h<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#日志格式设定</span>
        log_format access <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span> <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span> <span class="token string">&#39;&quot;$http_user_agent&quot; $http_x_forwarded_for&#39;</span><span class="token punctuation">;</span>

        <span class="token comment">#定义本虚拟主机的访问日志</span>
        access_log /var/log/nginx/ha97access.log access<span class="token punctuation">;</span>

        <span class="token comment">#对 &quot;/&quot; 启用反向代理</span>
        location / <span class="token punctuation">{</span>
            proxy_pass http://127.0.0.1:88<span class="token punctuation">;</span>
            proxy_redirect off<span class="token punctuation">;</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            <span class="token comment">#后端的 Web 服务器可以通过 X-Forwarded-For 获取用户真实 IP</span>
            proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
            <span class="token comment">#以下是一些反向代理的配置，可选。</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
            client_max_body_size 10m<span class="token punctuation">;</span> <span class="token comment">#允许客户端请求的最大单文件字节数</span>
            client_body_buffer_size 128k<span class="token punctuation">;</span> <span class="token comment">#缓冲区代理缓冲用户端请求的最大字节数，</span>

            <span class="token comment">##代理设置 以下设置是 nginx 和后端服务器之间通讯的设置##</span>
            proxy_connect_timeout <span class="token number">90</span><span class="token punctuation">;</span> <span class="token comment">#nginx 跟后端服务器连接超时时间（代理连接超时）</span>
            proxy_send_timeout <span class="token number">90</span><span class="token punctuation">;</span> <span class="token comment">#后端服务器数据回传时间（代理发送超时）</span>
            proxy_read_timeout <span class="token number">90</span><span class="token punctuation">;</span> <span class="token comment">#连接成功后，后端服务器响应时间（代理接收超时）</span>
            proxy_buffering on<span class="token punctuation">;</span>    <span class="token comment">#该指令开启从后端被代理服务器的响应内容缓冲 此参数开启后 proxy_buffers 和 proxy_busy_buffers_size 参数才会起作用</span>
            proxy_buffer_size 4k<span class="token punctuation">;</span>  <span class="token comment">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span>
            proxy_buffers <span class="token number">4</span> 32k<span class="token punctuation">;</span>   <span class="token comment">#proxy_buffers 缓冲区，网页平均在 32k 以下的设置</span>
            proxy_busy_buffers_size 64k<span class="token punctuation">;</span> <span class="token comment">#高负荷下缓冲大小（proxy_buffers*2）</span>
            proxy_max_temp_file_size 2048m<span class="token punctuation">;</span> <span class="token comment">#默认 1024m, 该指令用于设置当网页内容大于 proxy_buffers 时，临时文件大小的最大值。如果文件大于这个值，它将从 upstream 服务器同步地传递请求，而不是缓冲到磁盘</span>
            proxy_temp_file_write_size 512k<span class="token punctuation">;</span> 这是当被代理服务器的响应过大时 nginx 一次性写入临时文件的数据量。
            proxy_temp_path  /var/tmp/nginx/proxy_temp<span class="token punctuation">;</span>    <span class="token comment">##定义缓冲存储目录，之前必须要先手动创建此目录</span>
            proxy_headers_hash_max_size <span class="token number">51200</span><span class="token punctuation">;</span>
            proxy_headers_hash_bucket_size <span class="token number">6400</span><span class="token punctuation">;</span>
            <span class="token comment">#######################################################</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#设定查看 nginx 状态的地址</span>
        location /nginxStatus <span class="token punctuation">{</span>
            stub_status on<span class="token punctuation">;</span>
            access_log on<span class="token punctuation">;</span>
            auth_basic <span class="token string">&quot;nginxStatus&quot;</span><span class="token punctuation">;</span>
            auth_basic_user_file conf/htpasswd<span class="token punctuation">;</span>
            <span class="token comment">#htpasswd 文件的内容可以用 apache 提供的 htpasswd 工具来产生。</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#本地动静分离反向代理配置</span>
        <span class="token comment">#所有 jsp 的页面均交由 tomcat 或 resin 处理</span>
        location ~ .<span class="token punctuation">(</span>jsp<span class="token operator">|</span>jspx<span class="token operator">|</span><span class="token keyword">do</span><span class="token punctuation">)</span>?$ <span class="token punctuation">{</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
            proxy_pass http://127.0.0.1:8080<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#所有静态文件由 nginx 直接读取不经过 tomcat 或 resin</span>
        location ~ .*.<span class="token punctuation">(</span>htm<span class="token operator">|</span>html<span class="token operator">|</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token operator">|</span>ioc<span class="token operator">|</span><span class="token function">rar</span><span class="token operator">|</span><span class="token function">zip</span><span class="token operator">|</span>txt<span class="token operator">|</span>flv<span class="token operator">|</span>mid<span class="token operator">|</span>doc<span class="token operator">|</span>ppt<span class="token operator">|</span>pdf<span class="token operator">|</span>xls<span class="token operator">|</span>mp3<span class="token operator">|</span>wma<span class="token punctuation">)</span>$
        <span class="token punctuation">{</span> expires 15d<span class="token punctuation">;</span> <span class="token punctuation">}</span>

        location ~ .*.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$
        <span class="token punctuation">{</span> expires 1h<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)]))}const r=s(i,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/server/NGINX/","title":"🪤 NGINX 使用教程","lang":"zh-CN","frontmatter":{"title":"🪤 NGINX 使用教程","tag":["NGINX","封装"],"description":"NGINXNGINX NGINX 下载安装 移centos 为例 更新系统软件包列表： 安装NGINX软件包： 启动NGINX服务： 配置NGINX服务开机自启动： 验证NGINX服务是否启动成功： 配置防火墙，允许HTTP和HTTPS流量： 配置SELinux，允许NGINX服务网络连接： 常见配置用例 这个配置将监听80端口，并配置了两个 loca...","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/server/NGINX/"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"🪤 NGINX 使用教程"}],["meta",{"property":"og:description","content":"NGINXNGINX NGINX 下载安装 移centos 为例 更新系统软件包列表： 安装NGINX软件包： 启动NGINX服务： 配置NGINX服务开机自启动： 验证NGINX服务是否启动成功： 配置防火墙，允许HTTP和HTTPS流量： 配置SELinux，允许NGINX服务网络连接： 常见配置用例 这个配置将监听80端口，并配置了两个 loca..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.nginx.com/wp-content/uploads/2021/08/NGINX-Part-of-F5-horiz-black-type-1.svg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T17:55:50.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"NGINX"}],["meta",{"property":"article:tag","content":"封装"}],["meta",{"property":"article:modified_time","content":"2024-02-05T17:55:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🪤 NGINX 使用教程\\",\\"image\\":[\\"https://www.nginx.com/wp-content/uploads/2021/08/NGINX-Part-of-F5-horiz-black-type-1.svg\\"],\\"dateModified\\":\\"2024-02-05T17:55:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"下载安装","slug":"下载安装","link":"#下载安装","children":[]},{"level":2,"title":"常见配置用例","slug":"常见配置用例","link":"#常见配置用例","children":[]},{"level":2,"title":"NGINX 配置文件实例","slug":"nginx-配置文件实例","link":"#nginx-配置文件实例","children":[]}],"git":{"createdTime":1699094106000,"updatedTime":1707155750000,"contributors":[{"name":"zeroeldath","email":"zeroeldath@Mac-Pro.local","commits":1}]},"readingTime":{"minutes":7.46,"words":2239},"filePathRelative":"server/NGINX/index.md","localizedDate":"2023年11月4日","excerpt":"<figure><img src=\\"https://www.nginx.com/wp-content/uploads/2021/08/NGINX-Part-of-F5-horiz-black-type-1.svg\\" alt=\\"NGINX\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>NGINX</figcaption></figure>\\n<h1>NGINX</h1>\\n<h2>下载安装</h2>\\n<p>移centos 为例</p>\\n<ol>\\n<li>更新系统软件包列表：</li>\\n</ol>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>yum update\\n</code></pre></div>","autoDesc":true}');export{r as comp,d as data};
