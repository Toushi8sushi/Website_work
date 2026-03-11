---
layout: page
title: Articles
permalink: /articles/
---

<div class="articles-header">
  <p>Explore technical tutorials, hackathon recaps, and community insights.</p>
</div>

<div class="tag-filter-container">
  <button class="tag-pill active" data-tag="all">All</button>
  
  {% assign all_tags = site.posts | map: 'tags' | flatten | uniq | sort %}
  {% for tag in all_tags %}
    <button class="tag-pill" data-tag="{{ tag | downcase }}">{{ tag }}</button>
  {% endfor %}
</div>

<div class="articles-list">
  {% for post in site.posts %}
    <article class="article-card scroll-element" data-tags="{{ post.tags | join: ',' | downcase }}">
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
                <span class="tag-pill-chill">{{ tag }}</span>
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

<script>
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.tag-pill');
  const articles = document.querySelectorAll('.article-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTag = button.getAttribute('data-tag');

      // 1. Toggle Active State on Buttons
      filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tag') === targetTag);
      });

      // 2. Show/Hide Articles
      articles.forEach(article => {
        const articleTags = article.getAttribute('data-tags').split(',');
        
        if (targetTag === 'all' || articleTags.includes(targetTag)) {
          article.style.display = ""; // Returns to default (flex/grid)
          article.style.opacity = "1";
        } else {
          article.style.display = "none"; // Completely hides it
          article.style.opacity = "0";
        }
      });
    });
  });
});
</script>