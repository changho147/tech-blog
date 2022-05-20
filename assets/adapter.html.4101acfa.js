import{_ as n,e as a}from"./app.622ab2be.js";var s="/tech-blog/assets/adapter_diagram.c46848f7.png",e="/tech-blog/assets/adapter_diagram_2.a3c6acdf.png";const p={},t=a('<h1 id="adapter" tabindex="-1"><a class="header-anchor" href="#adapter" aria-hidden="true">#</a> Adapter</h1><h2 id="\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" aria-hidden="true">#</a> \uB2E4\uC774\uC5B4\uADF8\uB7A8</h2><p><img src="'+s+'" alt="Adapter"></p><h2 id="\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uC124\uBA85</h2><p>\uD074\uB798\uC2A4\uC758 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uD558\uACE0\uC790\uD558\uB294 \uB2E4\uB978 \uC778\uD130\uD398\uC774\uC2A4\uB85C \uBCC0\uD658\uD558\uB294 \uD328\uD134</p><h2 id="adapter-\u1100\u116E\u1112\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#adapter-\u1100\u116E\u1112\u1167\u11AB" aria-hidden="true">#</a> Adapter \uAD6C\uD604</h2><p><img src="'+e+`" alt="Adapter"></p><p><em>\uC678\uBD80 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExternalLoader</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">String</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;Loaded %s Item by ExternalLoader.&quot;</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Loader \uC778\uD130\uD398\uC774\uC2A4\uC640 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uD604\uD558\uB294 \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Loader</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">String</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ItemLoader</span> <span class="token keyword">implements</span> <span class="token class-name">Loader</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">String</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;Loaded %s Item by ItemLoader.&quot;</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>service \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoaderService</span> <span class="token punctuation">{</span>
    <span class="token class-name">Loader</span> loader<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">LoaderService</span><span class="token punctuation">(</span><span class="token class-name">Loader</span> loader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>loader <span class="token operator">=</span> loader<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">loadItems</span><span class="token punctuation">(</span><span class="token class-name">String</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>\uC678\uBD80 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC640 \uC0AC\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uB2E4\uB978 \uC778\uD130\uD398\uC774\uC2A4\uB85C \uBC14\uAFD4\uC8FC\uB294 adapter \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoaderAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">Loader</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ExternalLoader</span> loader<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">LoaderAdapter</span><span class="token punctuation">(</span><span class="token class-name">ExternalLoader</span> loader<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>loader <span class="token operator">=</span> loader<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">String</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LoaderService</span> localService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoaderService</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ItemLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> loadedLocalItem <span class="token operator">=</span> localService<span class="token punctuation">.</span><span class="token function">loadItems</span><span class="token punctuation">(</span><span class="token string">&quot;Local&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>loadedLocalItem<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Loaded Local Item by ItemLoader.</span>

        <span class="token class-name">LoaderAdapter</span> loaderAdapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoaderAdapter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ExternalLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">LoaderService</span> externalService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoaderService</span><span class="token punctuation">(</span>loaderAdapter<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> loadedExternalItem <span class="token operator">=</span> externalService<span class="token punctuation">.</span><span class="token function">loadItems</span><span class="token punctuation">(</span><span class="token string">&quot;External&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>loadedExternalItem<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Loaded External Item by ExternalLoader.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><ul><li><p>\uC7A5\uC810</p><ul><li>\uAE30\uC874\uCF54\uB4DC\uB97C \uBCC0\uACBD\uD558\uC9C0 \uC54A\uACE0, \uC778\uD130\uD398\uC774\uC2A4 \uAD6C\uD604\uCCB4\uB97C \uB9CC\uB4E4\uC5B4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.(SOLID \uC6D0\uCE59 \uC911, OCP)</li><li>\uAE30\uC874\uCF54\uB4DC\uAC00 \uD558\uB358 \uC77C\uACFC \uD2B9\uC815 \uC778\uD130\uD398\uC774\uC2A4 \uAD6C\uD604\uCCB4\uB85C \uBCC0\uD658\uD558\uB294 \uC791\uC5C5\uC744 \uAC01\uAE30 \uB2E4\uB978 \uD074\uB798\uC2A4\uB85C \uBD84\uB9AC\uD558\uC5EC \uAD00\uB9AC\uD560 \uC218 \uC788\uB2E4.(SOLID \uC6D0\uCE59 \uC911, SRP)</li></ul></li><li><p>\uB2E8\uC810</p><ul><li>\uC0C8 \uD074\uB798\uC2A4\uAC00 \uC0DD\uACA8 \uBCF5\uC7A1\uB3C4\uAC00 \uC99D\uAC00\uD560 \uC218 \uC788\uB2E4. \uACBD\uC6B0\uC5D0 \uB530\uB77C\uC11C\uB294 \uAE30\uC874 \uCF54\uB4DC\uAC00 \uD574\uB2F9 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uAD6C\uD604\uD558\uB3C4\uB85D \uC218\uC815\uD558\uB294 \uAC83\uC774 \uC88B\uC740 \uC120\uD0DD\uC774 \uB420 \uC218\uB3C4 \uC788\uB2E4.</li></ul></li></ul>`,19);function c(l,o){return t}var u=n(p,[["render",c],["__file","adapter.html.vue"]]);export{u as default};
