import{_ as n,e as s}from"./app.622ab2be.js";var a="/tech-blog/assets/observer_diagram.01057bb6.png",e="/tech-blog/assets/observer_diagram_2.839dead0.png";const p={},t=s('<h1 id="observer" tabindex="-1"><a class="header-anchor" href="#observer" aria-hidden="true">#</a> Observer</h1><h2 id="\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" aria-hidden="true">#</a> \uB2E4\uC774\uC5B4\uADF8\uB7A8</h2><p><img src="'+a+'" alt="observer"></p><h2 id="\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uC124\uBA85</h2><p>\uB2E4\uC218\uC758 \uAC1D\uCCB4\uAC00 \uD2B9\uC815\uAC1D\uCCB4 \uBCC0\uD654\uB97C \uAC10\uC9C0\uD558\uACE0 \uC54C\uB9BC\uC744 \uBC1B\uC744 \uC218 \uC788\uB294 \uD328\uD134</p><h2 id="observer-\u1100\u116E\u1112\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#observer-\u1100\u116E\u1112\u1167\u11AB" aria-hidden="true">#</a> Observer \uAD6C\uD604</h2><p><img src="'+e+`" alt="observer"></p><p><em>Diagram \uC911, Observer \uC5D0 \uC18D\uD558\uB294 Observer \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Diagram \uC911, ConcreteObserver \uC5D0 \uC18D\uD558\uB294 User \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Received, [&quot;</span> <span class="token operator">+</span> message <span class="token operator">+</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Diagram \uC911, Subject \uC5D0 \uC18D\uD558\uB294 Notice \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Notice</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Observer</span><span class="token punctuation">&gt;</span></span> subscribers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>observer <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        subscribers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        subscribers<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        subscribers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>observer <span class="token operator">-&gt;</span> observer<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Notice</span> notice <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Notice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Observer</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Observer</span> user2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        notice<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        notice<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        notice<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">&quot;Notice 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        notice<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">&quot;Notice 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        Received, [Notice 1]</span>
<span class="token comment">//        Received, [Notice 1]</span>
<span class="token comment">//        Received, [Notice 2]</span>
<span class="token comment">//        Received, [Notice 2]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><ul><li><p>\uC7A5\uC810</p><ul><li>\uC0C1\uD0DC\uB97C \uBCC0\uACBD\uD558\uB294 \uAC1D\uCCB4, \uBCC0\uACBD\uC744 \uAC10\uC9C0\uD558\uB294 \uAC1D\uCCB4 \uC0AC\uC774\uC758 \uAD00\uACC4\uB97C \uB290\uC2A8\uD558\uAC8C \uC720\uC9C0\uD560 \uC218 \uC788\uB2E4.</li><li>runtime \uC2DC\uC5D0 observer \uB97C \uCD94\uAC00\uD558\uAC70\uB098 \uC0AD\uC81C\uD560 \uC218 \uC788\uB2E4.</li></ul></li><li><p>\uB2E8\uC810</p><ul><li>\uBCF5\uC7A1\uB3C4\uAC00 \uC99D\uAC00\uD55C\uB2E4.</li><li>observer \uB97C \uB4F1\uB85D\uD558\uACE0, \uD574\uC9C0\uB97C \uD558\uC9C0 \uC54A\uB294\uB2E4\uBA74 \uCD94\uD6C4, \uBA54\uBAA8\uB9AC \uB204\uC218\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uB2E4.</li></ul></li></ul>`,17);function c(o,i){return t}var u=n(p,[["render",c],["__file","observer.html.vue"]]);export{u as default};
