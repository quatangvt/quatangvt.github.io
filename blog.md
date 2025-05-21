---
layout: default
title: "Blog"
permalink: /blog/
---

# Blog

<ul>
{% raw %}{% for post in site.posts %}{% endraw %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
  </li>
{% raw %}{% endfor %}{% endraw %}
</ul> 