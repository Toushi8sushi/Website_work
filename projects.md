---
layout: page
title: Projects
---

<div class="projects-grid">
  {% for project in site.projects %}

  <a class="project-card" href="{{ project.url | relative_url }}">

    <div class="project-card__image">
      <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
    </div>

    <div class="project-card__content">
      <h3>{{ project.title }}</h3>
      <p>{{ project.excerpt }}</p>
      <span class="project-card__cta">View Project →</span>
    </div>

  </a>

  {% endfor %}
</div>