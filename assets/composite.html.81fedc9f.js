import{_ as n,e as s}from"./app.622ab2be.js";var a="/tech-blog/assets/composite_diagram.25d01cf9.png",p="/tech-blog/assets/composite_diagram_2.31394a92.png";const t={},e=s('<h1 id="composite" tabindex="-1"><a class="header-anchor" href="#composite" aria-hidden="true">#</a> Composite</h1><h2 id="\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" aria-hidden="true">#</a> \uB2E4\uC774\uC5B4\uADF8\uB7A8</h2><p><img src="'+a+'" alt="composite"></p><h2 id="\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uC124\uBA85</h2><p>\uAC1C\uBCC4\uAC1D\uCCB4\uC640 \uBCF5\uD569\uAC1D\uCCB4\uB97C \uB3D9\uC77C\uD558\uAC8C \uB2E4\uB8F0 \uC218 \uC788\uAC8C \uB9CC\uB4DC\uB294 \uD328\uD134</p><h2 id="composite-\u1100\u116E\u1112\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#composite-\u1100\u116E\u1112\u1167\u11AB" aria-hidden="true">#</a> Composite \uAD6C\uD604</h2><p><img src="'+p+`" alt="composite"></p><p><em>Diagram \uC911, Component \uC5D0 \uC18D\uD558\uB294 Component \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Diagram \uC911, Leaf \uC5D0 \uC18D\uD558\uB294 Item \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Item</span> <span class="token keyword">implements</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> price<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Item</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">int</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Diagram \uC911, Composite \uC5D0 \uC18D\uD558\uB294 Orders \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Orders</span> <span class="token keyword">implements</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span><span class="token punctuation">&gt;</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span><span class="token punctuation">&gt;</span></span> <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> items<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setItems</span><span class="token punctuation">(</span><span class="token class-name">Component</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mapToInt</span><span class="token punctuation">(</span><span class="token class-name">Component</span><span class="token operator">::</span><span class="token function">getPrice</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Component</span> galaxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Item</span><span class="token punctuation">(</span><span class="token string">&quot;Galaxy&quot;</span><span class="token punctuation">,</span> <span class="token number">100_000_0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Component</span> apple <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Item</span><span class="token punctuation">(</span><span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token number">998_000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>galaxy<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1000000</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>apple<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 998000</span>

        <span class="token class-name">Orders</span> orders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Orders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orders<span class="token punctuation">.</span><span class="token function">setItems</span><span class="token punctuation">(</span>galaxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
        orders<span class="token punctuation">.</span><span class="token function">setItems</span><span class="token punctuation">(</span>apple<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>orders<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1998000</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><ul><li><p>\uC7A5\uC810</p><ul><li>\uAC1D\uCCB4\uB4E4\uC744 \uBAA8\uB450 \uAC19\uC740 \uD0C0\uC785\uC73C\uB85C \uCDE8\uAE09\uD558\uAE30 \uB54C\uBB38\uC5D0, \uC0C8\uB85C\uC6B4 \uAC1D\uCCB4 \uCD94\uAC00\uAC00 \uC6A9\uC774\uD558\uB2E4.</li><li>\uB2E4\uD615\uC131\uACFC \uC7AC\uADC0\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uB2E4.</li></ul></li><li><p>\uB2E8\uC810</p><ul><li>\uACF5\uD1B5\uB41C \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC815\uC758\uD574\uC57C \uD558\uAE30 \uB54C\uBB38\uC5D0, \uC9C0\uB098\uCE5C \uC77C\uBC18\uD654\uB97C \uD574\uC57C\uD558\uB294 \uACBD\uC6B0\uAC00 \uC0DD\uAE38 \uC218 \uC788\uB2E4.</li></ul></li></ul>`,17);function c(o,i){return e}var u=n(t,[["render",c],["__file","composite.html.vue"]]);export{u as default};
