import{_ as s,e as n}from"./app.622ab2be.js";var a="/tech-blog/assets/strategy_diagram.03a4ff20.png",e="/tech-blog/assets/strategy_diagram_2.69bfcf38.png";const t={},p=n('<h1 id="strategy" tabindex="-1"><a class="header-anchor" href="#strategy" aria-hidden="true">#</a> Strategy</h1><h2 id="\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" aria-hidden="true">#</a> \uB2E4\uC774\uC5B4\uADF8\uB7A8</h2><p><img src="'+a+'" alt="strategy"></p><h2 id="\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uC124\uBA85</h2><p>\uC54C\uACE0\uB9AC\uC998\uC744 \uCEA1\uC290\uD654\uD558\uACE0 \uC0C1\uD669\uC5D0 \uB9DE\uAC8C \uAD50\uCCB4 \uAC00\uB2A5\uD558\uAC8C \uB9CC\uB4DC\uB294 \uD328\uD134</p><h2 id="strategy-\u1100\u116E\u1112\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#strategy-\u1100\u116E\u1112\u1167\u11AB" aria-hidden="true">#</a> Strategy \uAD6C\uD604</h2><p><img src="'+e+`" alt="strategy"></p><p><em>Diagram \uC911, Context \uC5D0 \uC18D\uD558\uB294 CoffeeMachine \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CoffeeMachine</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addEspresso</span><span class="token punctuation">(</span><span class="token class-name">Espresso</span> strategy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        strategy<span class="token punctuation">.</span><span class="token function">addEspresso</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Diagram \uC911, Strategy \uC5D0 \uC18D\uD558\uB294 Espresso \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Espresso</span> <span class="token punctuation">{</span>

    <span class="token keyword">void</span> <span class="token function">addEspresso</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Diagram \uC911, ConcreteStrategy \uC5D0 \uC18D\uD558\uB294 DeepEspressoStrategy, SoftEspressoStrategy \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeepEspressoStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">Espresso</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addEspresso</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Added Deep Espresso.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SoftEspressoStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">Espresso</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addEspresso</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Added Soft Espresso.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CoffeeMachine</span> coffeeMachine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CoffeeMachine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        coffeeMachine<span class="token punctuation">.</span><span class="token function">addEspresso</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DeepEspressoStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Added Deep Espresso.</span>

        coffeeMachine<span class="token punctuation">.</span><span class="token function">addEspresso</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SoftEspressoStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Added Soft Espresso.</span>

        <span class="token comment">// concreteStrategy class \uB97C \uB530\uB85C \uB9CC\uB4E4\uC9C0\uC54A\uACE0, \uC775\uBA85\uC73C\uB85C\uB3C4 \uAC00\uB2A5.</span>
        coffeeMachine<span class="token punctuation">.</span><span class="token function">addEspresso</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Added Espresso.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Added Espresso.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><ul><li><p>\uC7A5\uC810</p><ul><li>\uC0C8\uB85C\uC6B4 strategy \uAC00 \uCD94\uAC00\uB418\uB354\uB77C\uB3C4 \uAE30\uC874 \uCF54\uB4DC\uB294 \uBCC0\uACBD\uB418\uC9C0 \uC54A\uB294\uB2E4.</li><li>\uB7F0\uD0C0\uC784 \uC2DC\uC5D0\uB3C4 strategy \uB97C \uBCC0\uACBD\uD560 \uC218 \uC788\uB2E4.</li></ul></li><li><p>\uB2E8\uC810</p><ul><li>\uBCF5\uC7A1\uB3C4\uAC00 \uC99D\uAC00\uD55C\uB2E4.</li><li>client \uAC00 \uC804\uB7B5\uC744 \uC54C\uACE0 \uC788\uC5B4\uC57C \uD55C\uB2E4.</li></ul></li></ul>`,17);function c(o,i){return p}var u=s(t,[["render",c],["__file","strategy.html.vue"]]);export{u as default};