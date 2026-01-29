---
layout: page
title: Articles
permalink: /articles/
---

<div class="articles-header">
  <h2>Knowledge Hub</h2>
  <p>Explore technical tutorials, hackathon recaps, and community insights.</p>
</div>

<div class="articles-list">
  {% for post in site.posts %}
    <article class="article-card scroll-element">
      <a href="{{ post.url | relative_url }}" class="card-visual">
        {% if post.image %}
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
        {% else %}
          <div class="pattern-bg"></div>
        {% endif %}
      </a>
      <div class="card-body">
        <div class="card-meta">
          {% if post.author %}
            <span class="author">{{ post.author }}</span>
          {% endif %}
          <span class="date">{{ post.date | date: "%b %d, %Y" }}</span>
          <div class="tags-list">
            {% if post.tags.size > 0 %}
              {% for tag in post.tags %}
                <span class="tag-pill">{{ tag }}</span>
              {% endfor %}
            {% endif %}
          </div>
        </div>
        <h3 class="card-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <p class="card-excerpt">
          {{ post.excerpt | strip_html | truncatewords: 20 }}
        </p>
        <a href="{{ post.url | relative_url }}" class="read-link">
          Read Article <span class="arrow">→</span>
        </a>
      </div>
    </article>
  {% endfor %}
</div>

{% if site.posts.size == 0 %}
  <div class="empty-state">
    <p>No articles yet. Check back soon!</p>
  </div>
{% endif %}