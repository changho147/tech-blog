import{_ as n,e as s}from"./app.622ab2be.js";var a="/tech-blog/assets/builder_diagram.10629baa.png",e="/tech-blog/assets/builder_diagram_2.993ac97e.png";const p={},c=s('<h1 id="builder" tabindex="-1"><a class="header-anchor" href="#builder" aria-hidden="true">#</a> Builder</h1><h2 id="\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" aria-hidden="true">#</a> \uB2E4\uC774\uC5B4\uADF8\uB7A8</h2><p><img src="'+a+'" alt="builder"></p><h2 id="\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uC124\uBA85</h2><p>\uC778\uC2A4\uD134\uC2A4\uB97C \uB9CC\uB4DC\uB294 \uD504\uB85C\uC138\uC2A4\uB97C \uB3C5\uB9BD\uC801\uC73C\uB85C \uBD84\uB9AC\uD558\uB294 \uD328\uD134</p><h2 id="builder-\u1100\u116E\u1112\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#builder-\u1100\u116E\u1112\u1167\u11AB" aria-hidden="true">#</a> Builder \uAD6C\uD604</h2><p><img src="'+e+`" alt="builder"></p><p><em>\uC778\uC2A4\uD134\uC2A4\uB85C \uC0DD\uC131 \uD560 \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bicycle</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> color<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> since<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setColor</span><span class="token punctuation">(</span><span class="token class-name">String</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">getSince</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> since<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSince</span><span class="token punctuation">(</span><span class="token class-name">Long</span> since<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>since <span class="token operator">=</span> since<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Builder \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BicycleBuilder</span> <span class="token punctuation">{</span>

    <span class="token class-name">BicycleBuilder</span> <span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">BicycleBuilder</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">BicycleBuilder</span> <span class="token function">color</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">BicycleBuilder</span> <span class="token function">since</span><span class="token punctuation">(</span><span class="token class-name">Long</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Bicycle</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DefaultBicycleBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">BicycleBuilder</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Bicycle</span> instance<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">BicycleBuilder</span> <span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bicycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">BicycleBuilder</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        instance<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">BicycleBuilder</span> <span class="token function">color</span><span class="token punctuation">(</span><span class="token class-name">String</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        instance<span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">BicycleBuilder</span> <span class="token function">since</span><span class="token punctuation">(</span><span class="token class-name">Long</span> since<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        instance<span class="token punctuation">.</span><span class="token function">setSince</span><span class="token punctuation">(</span>since<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Bicycle</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Director \uD074\uB798\uC2A4</em></p><p>Director \uD074\uB798\uC2A4\uB97C \uC774\uC6A9\uD558\uAC8C \uB418\uBA74, Builder \uD074\uB798\uC2A4\uB97C \uC774\uC6A9\uD558\uC5EC \uC0DD\uC131\uD558\uB294 \uAC1D\uCCB4\uB97C \uD15C\uD50C\uB9BF\uD654 \uD558\uC5EC \uAC1D\uCCB4\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uB2E4</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BicycleDirector</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">BicycleBuilder</span> builder<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">BicycleDirector</span><span class="token punctuation">(</span><span class="token class-name">BicycleBuilder</span> builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>builder <span class="token operator">=</span> builder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Bicycle</span> <span class="token function">createRoadBicycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;Road Bicycle&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string">&quot;Black&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">since</span><span class="token punctuation">(</span><span class="token number">2022L</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Bicycle</span> <span class="token function">createMountainBicycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;MOuntain Bicycle&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string">&quot;White&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">since</span><span class="token punctuation">(</span><span class="token number">2000L</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">*</span> <span class="token class-name">Director</span> \uD074\uB798\uC2A4\uB97C \uC774\uC6A9\uD558\uC5EC \uC0DD\uC131\uD558\uB294 \uBC29\uBC95
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BicycleDirector</span> director <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BicycleDirector</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DefaultBicycleBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Bicycle</span> roadBicycle <span class="token operator">=</span> director<span class="token punctuation">.</span><span class="token function">createRoadBicycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Bicycle</span> mountainBicycle <span class="token operator">=</span> director<span class="token punctuation">.</span><span class="token function">createMountainBicycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">*</span> <span class="token class-name">Builder</span> \uD074\uB798\uC2A4\uB97C \uC9C1\uC811 \uC0AC\uC6A9\uD558\uC5EC \uC0DD\uC131\uD558\uB294 \uBC29\uBC95
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DefaultBicycleBuilder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultBicycleBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Bicycle</span> bicycle <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string">&quot;Bianchi Road&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string">&quot;Black&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>Director \uC774\uB098 Builder \uB97C \uD1B5\uD558\uC5EC \uAC1D\uCCB4\uB97C \uC0DD\uC131.</strong></em></p><p><br><br></p><ul><li><p>\uC7A5\uC810</p><ul><li>\uBCF5\uC791\uD55C \uAC1D\uCCB4\uB97C \uC21C\uCC28\uC801\uC73C\uB85C \uC0DD\uC131</li><li>\uBCF5\uC791\uD55C \uAC1D\uCCB4\uB97C \uC0DD\uC131\uD558\uB294 \uACFC\uC815\uC744 \uCEA1\uC290\uD654</li><li>\uB3D9\uC77C\uD55C \uD504\uB85C\uC138\uC2A4\uB97C \uD1B5\uD574 \uAC01\uAC01 \uB2E4\uB978 \uAC1D\uCCB4\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uB2E4</li><li>\uBD88\uC644\uC804\uD55C \uAC1D\uCCB4\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uBABB\uD558\uB3C4\uB85D \uBC29\uC9C0</li></ul></li><li><p>\uB2E8\uC810</p><ul><li>\uAC1D\uCCB4\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD55C \uAD6C\uC870\uAC00 \uBCF5\uC7A1</li></ul></li></ul>`,19);function t(i,l){return c}var u=n(p,[["render",t],["__file","builder.html.vue"]]);export{u as default};
