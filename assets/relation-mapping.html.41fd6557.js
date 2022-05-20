import{_ as n,e as s}from"./app.622ab2be.js";var a="/tech-blog/assets/relation_mapping.225c573f.png";const t={},e=s('<h1 id="\u110B\u1167\u11AB\u1100\u116A\u11AB\u1100\u116A\u11AB\u1100\u1168" tabindex="-1"><a class="header-anchor" href="#\u110B\u1167\u11AB\u1100\u116A\u11AB\u1100\u116A\u11AB\u1100\u1168" aria-hidden="true">#</a> \uC5F0\uAD00\uAD00\uACC4</h1><h3 id="\u1110\u1166\u110B\u1175\u1107\u1173\u11AF\u1100\u116A-\u1100\u1162\u11A8\u110E\u1166\u110B\u1166\u1109\u1165\u110B\u1174-\u110B\u1167\u11AB\u1100\u116A\u11AB\u1100\u116A\u11AB\u1100\u1168" tabindex="-1"><a class="header-anchor" href="#\u1110\u1166\u110B\u1175\u1107\u1173\u11AF\u1100\u116A-\u1100\u1162\u11A8\u110E\u1166\u110B\u1166\u1109\u1165\u110B\u1174-\u110B\u1167\u11AB\u1100\u116A\u11AB\u1100\u116A\u11AB\u1100\u1168" aria-hidden="true">#</a> \uD14C\uC774\uBE14\uACFC \uAC1D\uCCB4\uC5D0\uC11C\uC758 \uC5F0\uAD00\uAD00\uACC4</h3><p><img src="'+a+`" alt="relation_mapping"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uAC1C\uBC1C \uC2DC Oracle \uC774\uB098 MySql \uB4F1 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD558\uB2E4\uBCF4\uBA74 \uB2E4\uB978 \uB450 \uD14C\uC774\uBE14\uAC04 \uAD00\uACC4\uB97C \uB9FA\uAE30 \uC704\uD574\uC11C \uB2E4\uB978 \uD14C\uC774\uBE14\uC758
\uC678\uB798\uD0A4\uB97C \uC774\uC6A9\uD574\uC11C \uB450 \uD14C\uC774\uBE14\uC744 \uD568\uAED8 \uC870\uD68C\uD55C\uB2E4. \uADF8\uB7EC\uB098 \uAC1D\uCCB4\uB294 \uB2E4\uB978 \uAC1D\uCCB4\uC640 \uAD00\uACC4\uB97C \uB9FA\uAE30 \uC704\uD574\uC11C \uC678\uB798\uD0A4\uB300\uC2E0 \uAC1D\uCCB4\uB97C \uCC38\uC870\uD558\uC5EC
\uC11C\uB85C \uAD00\uACC4\uB97C \uB9FA\uB294\uB370, JPA \uAC00 \uC81C\uACF5\uD558\uB294 API \uB97C \uC0AC\uC6A9\uD558\uC5EC \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uC640 \uAC1D\uCCB4\uC758 \uC5F0\uAD00\uAD00\uACC4\uB97C \uB9FA\uB294 \uBC29\uC2DD\uC758 \uCC28\uC774\uC810\uC744
\uADF9\uBCF5\uD560 \uC218 \uC788\uB2E4.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="n-1-manytoone" tabindex="-1"><a class="header-anchor" href="#n-1-manytoone" aria-hidden="true">#</a> N : 1 (@ManyToOne)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Entity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span> <span class="token annotation punctuation">@GeneratedValue</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;USER_ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> entityId<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ManyToOne</span>
    <span class="token annotation punctuation">@JoinColumn</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;SKILL_ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Skill</span> skill<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Entity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Skill</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span> <span class="token annotation punctuation">@GeneratedValue</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;SKILL_ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    
    <span class="token comment">// \uC591\uBC29\uD5A5 \uAD00\uACC4 \uB9E4\uD551 \uC2DC</span>
    <span class="token annotation punctuation">@OneToMany</span><span class="token punctuation">(</span>mappedBy <span class="token operator">=</span> <span class="token string">&quot;skill&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>N \uCABD \uD14C\uC774\uBE14\uC5D0\uC11C \uC678\uB798\uD0A4\uB97C \uAD00\uB9AC</li><li>\uAC00\uC7A5 \uD754\uD788 \uC0AC\uC6A9\uD558\uB294 \uC5F0\uAD00\uAD00\uACC4</li></ul><br><h3 id="_1-n-onetomany" tabindex="-1"><a class="header-anchor" href="#_1-n-onetomany" aria-hidden="true">#</a> 1 : N (@OneToMany)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Entity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Skill</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span> <span class="token annotation punctuation">@GeneratedValue</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;SKILL_ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@OneToMany</span>
    <span class="token annotation punctuation">@JoinColumn</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;SKILL_ID&quot;</span><span class="token punctuation">)</span> <span class="token comment">// User Entity \uC5D0 \uC788\uB294 SKILL_ID </span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Entity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span> <span class="token annotation punctuation">@GeneratedValue</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;USER_ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> entityId<span class="token punctuation">;</span>
    
    <span class="token comment">// \uC591\uBC29\uD5A5 \uAD00\uACC4 \uB9E4\uD551 \uC2DC</span>
    <span class="token annotation punctuation">@ManyToOne</span>
    <span class="token annotation punctuation">@JoinColumn</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;SKILL_ID&quot;</span><span class="token punctuation">,</span> insertable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> updatable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Skill</span> skill<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><pre><code>@JoinColumn \uC744 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC73C\uBA74, \uC790\uB3D9\uC73C\uB85C \uAD00\uACC4\uB97C \uB9FA\uAE30\uC704\uD55C \uD14C\uC774\uBE14\uC774 \uC0DD\uC131\uB418\uAE30 \uB54C\uBB38\uC5D0 \uC8FC\uC758\uD544\uC694
</code></pre></div><ul><li>\uC5F0\uAD00\uAD00\uACC4 \uC8FC\uC778\uC740 1 \uC5D0 \uC788\uC9C0\uB9CC, \uC678\uB798\uD0A4\uB294 N \uD14C\uC774\uBE14\uC5D0\uC11C \uAD00\uB9AC</li><li>\uC5F0\uAD00\uAD00\uACC4 \uC8FC\uC778\uC774 \uC544\uB2CC \uCABD\uC5D0 \uC678\uB798\uD0A4\uAC00 \uC874\uC7AC \uD574, \uBCF5\uC7A1\uC131\uC774 \uC99D\uAC00</li><li>Skill \uC744 \uC800\uC7A5\uD558\uBA74, \uC678\uB798\uD0A4 \uB54C\uBB38\uC5D0 User \uC5D0 Update Query \uAC00 \uBC1C\uC0DD\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC131\uB2A5\uC545\uD654</li><li>\uD2B9\uBCC4\uD55C \uACBD\uC6B0\uAC00 \uC544\uB2C8\uB77C\uBA74 N : 1 \uC591\uBC29\uD5A5 \uAD00\uACC4\uB85C \uD574\uACB0\uD558\uB294 \uBC29\uC2DD \uCD94\uCC9C</li></ul><br><h3 id="_1-1-onetoone" tabindex="-1"><a class="header-anchor" href="#_1-1-onetoone" aria-hidden="true">#</a> 1 : 1 (@OneToOne)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Entity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span> <span class="token annotation punctuation">@GeneratedValue</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;USER_ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> entityId<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@OneToOne</span>
    <span class="token annotation punctuation">@JoinColumn</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;SKILL_ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Skill</span> skill<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Entity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Skill</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span> <span class="token annotation punctuation">@GeneratedValue</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;SKILL_ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    
    <span class="token comment">// \uC591\uBC29\uD5A5 \uAD00\uACC4 \uB9E4\uD551 \uC2DC</span>
    <span class="token annotation punctuation">@OneToOne</span><span class="token punctuation">(</span>mappedBy <span class="token operator">=</span> <span class="token string">&quot;skill&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">User</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\uC8FC \uD14C\uC774\uBE14, \uB300\uC0C1 \uD14C\uC774\uBE14 \uC5B4\uB290\uACF3\uC5D0\uC11C\uB3C4 \uC678\uB798\uD0A4\uB97C \uAC00\uC9C0\uACE0 \uC788\uC5B4\uB3C4 \uAC00\uB2A5</li><li>N : 1, 1 : N \uAD00\uACC4\uC640 \uC720\uC0AC</li></ul><br><h3 id="n-m-manytomany" tabindex="-1"><a class="header-anchor" href="#n-m-manytomany" aria-hidden="true">#</a> N : M (@ManyToMany)</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Entity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span> <span class="token annotation punctuation">@GeneratedValue</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;USER_ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> entityId<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ManyToMany</span>
    <span class="token annotation punctuation">@JoinTable</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;USER_SKILL&quot;</span><span class="token punctuation">,</span>
            joinColumns <span class="token operator">=</span> <span class="token annotation punctuation">@JoinColumn</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;USER_ID&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            inverseJoinColumns <span class="token operator">=</span> <span class="token annotation punctuation">@JoinColumn</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;SKILL_ID&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Skill</span><span class="token punctuation">&gt;</span></span> skills <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Entity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Skill</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span> <span class="token annotation punctuation">@GeneratedValue</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;SKILL_ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ManyToMany</span><span class="token punctuation">(</span>mappedBy <span class="token operator">=</span> <span class="token string">&quot;skills&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uAD00\uACC4\uD615 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uB294 \uC815\uADDC\uD654\uB41C \uD14C\uC774\uBE14 2\uAC1C\uB85C \uAD00\uACC4\uB97C \uD45C\uD604\uD560 \uC218 \uC5C6\uB2E4. \uADF8\uB798\uC11C JPA \uC5D0\uC11C N : M \uAD00\uACC4\uB97C \uB9FA\uAC8C
\uB418\uBA74 \uBCC4\uB3C4\uC758 \uAD00\uACC4\uD14C\uC774\uBE14\uC744 \uC0DD\uC131\uD558\uC5EC \uC5F0\uAD00\uAD00\uAC8C\uB97C \uB9FA\uC5B4\uC900\uB2E4.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>JPA Spec \uC0C1 N : M \uC5F0\uAD00\uAD00\uACC4\uB97C \uC9C0\uC6D0\uD558\uC9C0\uB9CC \uC2E4 \uC0AC\uC6A9 \uC9C0\uC591</li><li>\uC758\uB3C4\uCE58 \uC54A\uC740 \uBCF5\uC7A1\uD55C \uC9C8\uC758\uAC00 \uB098\uAC00 \uC131\uB2A5 \uCD5C\uC801\uD654\uAC00 \uC5B4\uB835\uB2E4</li><li>\uC790\uB3D9\uC73C\uB85C \uC0DD\uC131 \uB41C \uAD00\uACC4\uD14C\uC774\uBE14\uC5D0 \uBCC4\uB3C4\uC758 \uCEEC\uB7FC\uC744 \uC9C0\uC815\uD560 \uC218 \uC5C6\uB2E4</li><li>\uD2B9\uBCC4\uD55C \uACBD\uC6B0\uAC00 \uC544\uB2C8\uBA74 N : 1 \uC591\uBC29\uD5A5 \uAD00\uACC4\uB85C \uD574\uACB0\uD558\uB294 \uBC29\uC2DD \uCD94\uCC9C</li></ul><br><h3 id="\u110B\u1167\u11AB\u1100\u116A\u11AB\u1100\u116A\u11AB\u1100\u1168-fetchtype" tabindex="-1"><a class="header-anchor" href="#\u110B\u1167\u11AB\u1100\u116A\u11AB\u1100\u116A\u11AB\u1100\u1168-fetchtype" aria-hidden="true">#</a> \uC5F0\uAD00\uAD00\uACC4 FetchType</h3><table><thead><tr><th>FetchType</th><th></th></tr></thead><tbody><tr><td>EAGER</td><td>\uC989\uC2DC\uB85C\uB529</td></tr><tr><td>LAZY</td><td>\uC9C0\uC5F0\uB85C\uB529</td></tr></tbody></table><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Entity \uAC04 \uC5F0\uAD00\uAD00\uACC4\uB97C \uB9FA\uC744 \uB54C FetchType \uC744 \uC124\uC815\uD560 \uC218 \uC788\uB2E4. Default \uB85C FetchType.EAGER \uB85C \uB418\uC5B4 \uC788\uB294\uB370,
EAGER \uB85C \uC124\uC815\uB418\uC5B4 \uC788\uC73C\uBA74, Entity \uB97C \uC870\uD68C\uD560\uB54C \uC5F0\uAD00\uAD00\uACC4\uAC00 \uB9FA\uC5B4\uC9C4 Entity \uB97C \uAC19\uC774 \uD55C\uBC88\uC758 \uC9C8\uC758\uB85C \uC870\uD68C\uD574\uC628\uB2E4.
\uC5B8\uB73B\uBCF4\uBA74 \uC88B\uC544\uBCF4\uC77C \uC218 \uC788\uC9C0\uB9CC, \uC5F0\uAD00\uAD00\uACC4\uAC00 \uB9CE\uAC70\uB098 \uBCF5\uC7A1\uD560 \uACBD\uC6B0, \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 Entity \uB97C \uC804\uBD80 \uC870\uD68C\uD558\uAE30 \uB54C\uBB38\uC5D0 
\uC131\uB2A5\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD55C\uB2E4. 
LAZY \uC778 \uACBD\uC6B0\uC5D0\uB294, Entity \uB0B4 \uC5F0\uAD00\uB41C \uAC1D\uCCB4\uAC00 \uCC38\uC870\uAC00 \uB420 \uB54C \uC9C8\uC758\uBB38\uC744 \uBCF4\uB0B4\uACE0 \uC870\uD68C\uD574\uC624\uAE30 \uB54C\uBB38\uC5D0, \uAC1D\uCCB4\uB97C \uCC38\uC870\uD558\uC5EC \uC0AC\uC6A9\uD558\uAE30 \uC804\uAE4C\uC9C4
\uBD88\uD544\uC694\uD55C \uC9C8\uC758\uBB38\uC774 \uB098\uAC00\uC9C0 \uC54A\uB294\uB2E4. \uB610, LAZY \uB85C \uC124\uC815\uD55C \uACBD\uC6B0\uC5D0 \uC131\uB2A5\uC744 \uCD5C\uC801\uD654\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC774 \uC874\uC7AC\uD558\uAE30 \uB54C\uBB38\uC5D0, \uBB34\uC870\uAC74 LAZY \uB85C
\uC124\uC815\uD558\uB294\uAC83\uC740 \uCD94\uCC9C\uD55C\uB2E4.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>\uCC38\uACE0. \uC790\uBC14 ORM \uD45C\uC900 JPA \uD504\uB85C\uADF8\uB798\uBC0D</em></p>`,27);function p(o,i){return e}var c=n(t,[["render",p],["__file","relation-mapping.html.vue"]]);export{c as default};