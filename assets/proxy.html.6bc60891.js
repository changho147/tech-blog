import{_ as n,e as s}from"./app.622ab2be.js";var a="/tech-blog/assets/proxy_diagram.1e85ef4d.png",t="/tech-blog/assets/proxy_diagram_2.53243690.png";const p={},e=s('<h1 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h1><h2 id="\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" aria-hidden="true">#</a> \uB2E4\uC774\uC5B4\uADF8\uB7A8</h2><p><img src="'+a+'" alt="proxy"></p><h2 id="\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uC124\uBA85</h2><p>\uD2B9\uC815 \uAC1D\uCCB4\uB97C \uC0AC\uC6A9\uD558\uACE0\uC790 \uD560 \uB54C, \uC9C1\uC811 \uD638\uCD9C\uD558\uC9C0 \uC54A\uACE0 \uD574\uB2F9 \uAC1D\uCCB4\uB97C \uB300\uD589\uD558\uB294 \uC5ED\uD560\uC744 \uD558\uC5EC \uAC1D\uCCB4\uC5D0 \uB300\uD55C \uC811\uADFC\uC744 \uC81C\uC5B4\uD558\uAC70\uB098 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uB294 \uD328\uD134</p><h2 id="proxy-\u1100\u116E\u1112\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#proxy-\u1100\u116E\u1112\u1167\u11AB" aria-hidden="true">#</a> Proxy \uAD6C\uD604</h2><p><img src="'+t+`" alt="proxy"></p><p><em>Diagram \uC911, Subject \uC5D0 \uC18D\uD558\uB294 Printable \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Printable</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Diagram \uC911, RealSubject \uC5D0 \uC18D\uD558\uB294 Printer \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Printer</span> <span class="token keyword">implements</span> <span class="token class-name">Printable</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Diagram \uC911, Proxy \uC5D0 \uC18D\uD558\uB294 PrinterProxy \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PrinterProxy</span> <span class="token keyword">extends</span> <span class="token class-name">Printer</span> <span class="token keyword">implements</span> <span class="token class-name">Printable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Printer</span> printer<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">PrinterProxy</span><span class="token punctuation">(</span><span class="token class-name">Printer</span> printer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>printer <span class="token operator">=</span> printer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;[Start Print] &quot;</span> <span class="token operator">+</span> <span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>printer<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;[End Print] &quot;</span> <span class="token operator">+</span> <span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Printable</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrinterProxy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Printer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Printing...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// [Start Print] 2022-03-15 15:51:13</span>
        <span class="token comment">// Printing...</span>
        <span class="token comment">// [End Print] 2022-03-15 15:51:14</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><div class="custom-container tip"><p class="custom-container-title">\uAD6C\uD604\uBC29\uBC95\uC5D0 \uB530\uB77C \uB2E4\uC591\uD55C Proxy</p><pre><code>\uD2B9\uC815\uAC1D\uCCB4 \uC811\uADFC\uC5D0 \uC81C\uD55C\uC744 \uB450\uAC70\uB098, \uC9C0\uC5F0\uC0DD\uC131, \uB85C\uADF8 \uB4F1
Proxy \uC5D0\uC11C \uC5B4\uB5BB\uAC8C \uAD6C\uD604\uD558\uB0D0\uC5D0 \uB530\uB77C \uB2E4\uC591\uD558\uAC8C \uD65C\uC6A9\uC774 \uAC00\uB2A5\uD558\uB2E4.
</code></pre></div><p><br><br></p><ul><li><p>\uC7A5\uC810</p><ul><li>\uCF54\uB4DC\uB97C \uBCC0\uACBD\uD558\uC9C0 \uC54A\uACE0, \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uB2E4. (SOLID \uC911, OCP)</li><li>\uAD6C\uD604\uBC29\uBC95\uC5D0 \uB530\uB77C \uB2E4\uC591\uD558\uAC8C \uD65C\uC6A9\uC774 \uAC00\uB2A5\uD558\uB2E4.</li></ul></li><li><p>\uB2E8\uC810</p><ul><li>\uD328\uD134\uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC558\uC744\uB54C\uBCF4\uB2E4 \uCF54\uB4DC\uC758 \uBCF5\uC7A1\uB3C4\uAC00 \uC99D\uAC00\uD55C\uB2E4.</li></ul></li></ul>`,19);function c(o,i){return e}var u=n(p,[["render",c],["__file","proxy.html.vue"]]);export{u as default};