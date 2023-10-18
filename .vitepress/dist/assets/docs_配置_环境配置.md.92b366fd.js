import{_ as s,c as e,o as a,Q as n}from"./chunks/framework.940e9916.js";const o="/assets/Clipboard_2023-09-04-16-38-08.bf1790e9.png",t="/assets/Clipboard_2023-09-04-16-41-06.59bbed92.png",l="/assets/Clipboard_2023-09-04-11-14-48.ef8565be.png",f=JSON.parse('{"title":"环境配置","description":"","frontmatter":{},"headers":[],"relativePath":"docs/配置/环境配置.md","filePath":"docs/配置/环境配置.md"}'),p={name:"docs/配置/环境配置.md"},r=n('<h1 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h1><p>全局安装tnpm <a href="https://iwiki.woa.com/pages/viewpage.action?pageId=4007212107" target="_blank" rel="noreferrer">https://iwiki.woa.com/pages/viewpage.action?pageId=4007212107</a></p><h2 id="whistle-配置" tabindex="-1">whistle 配置 <a class="header-anchor" href="#whistle-配置" aria-label="Permalink to &quot;whistle 配置&quot;">​</a></h2><ol><li>安装wshitle <a href="http://wproxy.org/whistle/proxy.html" target="_blank" rel="noreferrer">http://wproxy.org/whistle/proxy.html</a></li><li>switchOmega 谷歌插件下载</li></ol><p>代理到本地 <img src="'+o+'" alt=""> 3. 打开127.0.0.1:8899，新建rules 填写<a href="http://fuli.v.qq.com" target="_blank" rel="noreferrer">http://fuli.v.qq.com</a> 即可访问 <img src="'+t+'" alt=""></p><p>移动端链接whistle</p><ol><li>遇到以下问题 <img src="'+l+`" alt=""> 证书不对，下载新的证书安装即可 解决方法:</li><li></li></ol><p>微信新闻插件rules whsitle配置 tfuli.v.qq.com 127.0.0.1:3000</p><h2 id="vscode-配置" tabindex="-1">vscode 配置 <a class="header-anchor" href="#vscode-配置" aria-label="Permalink to &quot;vscode 配置&quot;">​</a></h2><p>配置自动格式化 配置保存是单引号</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;workbench.colorTheme&quot;: &quot;Default Dark Modern&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;editor.tabSize&quot;: 2,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;editor.formatOnPaste&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;editor.formatOnType&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        // &quot;source.fixAll&quot;: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;rdhelper.cas.status&quot;: &quot;tempclose&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;rdhelper.cas.lastupdatefile&quot;: &quot;Users/liuli/Library/Application Support/Code/User/settings.json&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;editor.formatOnSaveMode&quot;: &quot;modifications&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;[javascript]&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;prettier.semi&quot;: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;prettier.singleQuote&quot;: true</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;workbench.colorTheme&quot;: &quot;Default Dark Modern&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;editor.tabSize&quot;: 2,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;editor.formatOnPaste&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;editor.formatOnType&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // &quot;source.fixAll&quot;: true</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &quot;rdhelper.cas.status&quot;: &quot;tempclose&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;rdhelper.cas.lastupdatefile&quot;: &quot;Users/liuli/Library/Application Support/Code/User/settings.json&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;editor.formatOnSaveMode&quot;: &quot;modifications&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;[javascript]&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &quot;prettier.semi&quot;: false,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;prettier.singleQuote&quot;: true</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,11),i=[r];function c(u,q,d,h,y,m){return a(),e("div",null,i)}const g=s(p,[["render",c]]);export{f as __pageData,g as default};
