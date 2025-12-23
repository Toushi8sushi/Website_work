---
layout: page
title: Articles
---

## All Articles

Browse our collection of technical articles, tutorials, event recaps, and insights from our community members.

<div class="articles-list">
  {% for post in site.posts %}
    <article class="article-card">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <div class="article-meta">
        <span class="author">{{ post.author }}</span>
        <span class="date">{{ post.date | date: "%B %d, %Y" }}</span>
      </div>
      {% if post.tags %}
        <div class="article-tags">
          {% for tag in post.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
      <p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
      <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </article>
  {% endfor %}
</div>

{% if site.posts.size == 0 %}
  <p class="text-center">No articles yet. Check back soon for updates!</p>
{% endif %}
