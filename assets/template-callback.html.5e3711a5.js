import{_ as n,e as a}from"./app.622ab2be.js";var s="/tech-blog/assets/template_callback_diagram.6877fbc7.png",t="/tech-blog/assets/template_callback_diagram_2.67ca3c64.png";const e={},p=a('<h1 id="template-callback" tabindex="-1"><a class="header-anchor" href="#template-callback" aria-hidden="true">#</a> Template Callback</h1><h2 id="\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u110B\u1175\u110B\u1165\u1100\u1173\u1105\u1162\u11B7" aria-hidden="true">#</a> \uB2E4\uC774\uC5B4\uADF8\uB7A8</h2><p><img src="'+s+'" alt="template-callback"></p><h2 id="\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uC124\uBA85</h2><p>Strategy \uD328\uD134\uACFC Template Method \uD328\uD134\uC774 \uD569\uCCD0\uC9C4 \uD615\uD0DC\uB85C, Template Method \uD328\uD134\uC5D0\uC11C \uC0C1\uC18D\uB300\uC2E0 \uC704\uC784\uC744 \uC0AC\uC6A9\uD558\uB294 \uD328\uD134</p><h2 id="template-callback-\u1100\u116E\u1112\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#template-callback-\u1100\u116E\u1112\u1167\u11AB" aria-hidden="true">#</a> Template Callback \uAD6C\uD604</h2><p><img src="'+t+`" alt="template-callback"></p><p><em>Diagram \uC911, AbstractClass \uC5D0 \uC18D\uD558\uB294 RobotFactory \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RobotFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token class-name">String</span> weapon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">addHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addReg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">executeWeapon</span><span class="token punctuation">(</span>weapon<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addWeapon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">addHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Added Head&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">addBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Added Body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">addReg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Added Reg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Weapon</span> <span class="token function">executeWeapon</span><span class="token punctuation">(</span><span class="token class-name">String</span> weapon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Added &quot;</span> <span class="token operator">+</span> weapon<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Diagram \uC911, Callback \uC5D0 \uC18D\uD558\uB294 Weapon \uD074\uB798\uC2A4</em></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Weapon</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">addWeapon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RobotFactory</span> robotFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RobotFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        robotFactory<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">&quot;Missile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        Added Head</span>
<span class="token comment">//        Added Body</span>
<span class="token comment">//        Added Reg</span>
<span class="token comment">//        Added Missile</span>

        robotFactory<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">&quot;Drill&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        Added Head</span>
<span class="token comment">//        Added Body</span>
<span class="token comment">//        Added Reg</span>
<span class="token comment">//        Added Drill</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><ul><li><p>\uC7A5\uC810</p><ul><li>\uD15C\uD50C\uB9BF\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC911\uBCF5\uCF54\uB4DC\uB97C \uC904\uC77C \uC218 \uC788\uB2E4.</li><li>\uC5B4\uB5A4\uC804\uB7B5\uC744 \uC0AC\uC6A9\uD558\uB294\uC9C0 \uAC10\uCD9C \uC218 \uC788\uB2E4.</li></ul></li><li><p>\uB2E8\uC810</p><ul><li>\uD074\uB798\uC2A4\uAC04\uC758 \uACB0\uD569\uB3C4\uAC00 \uC99D\uAC00\uD55C\uB2E4.</li></ul></li></ul>`,15);function c(o,l){return p}var u=n(e,[["render",c],["__file","template-callback.html.vue"]]);export{u as default};