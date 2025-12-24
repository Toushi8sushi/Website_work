---
layout: page
title: Astrophotography
---

## Astrophotography Articles

Deep-sky imaging, star trails, equipment reviews, and processing workflows.

<div class="articles-list">
  {% assign astro_posts = site.posts | where_exp: "post", "post.tags contains 'astrophotography'" %}

  {% for post in astro_posts %}
    <article class="article-card">
      <h3>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>

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

{% if astro_posts.size == 0 %}
  <p class="text-center">No astrophotography articles yet. Check back soon!</p>
{% endif %}
