---
layout: default
title: Home
---

<section class="hero">
  <div class="container">
    <h1>Welcome to TechClub</h1>
    <p class="hero-tagline">Building tomorrow's innovators through hands-on technical projects and collaborative learning</p>
    <div class="hero-actions">
      <a href="{{ '/about' | relative_url }}" class="btn btn-primary">Learn More</a>
      <a href="{{ '/articles' | relative_url }}" class="btn btn-secondary">Read Articles</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>What We Do</h2>
    <div class="features-grid">
      <div class="feature-card">
        <h3>Technical Workshops</h3>
        <p>Regular hands-on sessions covering web development, machine learning, robotics, and more.</p>
      </div>
      <div class="feature-card">
        <h3>Project Collaboration</h3>
        <p>Work on real-world projects with fellow students and build your portfolio.</p>
      </div>
      <div class="feature-card">
        <h3>Community Events</h3>
        <p>Hackathons, tech talks, and networking opportunities with industry professionals.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <h2>Recent Articles</h2>
    <div class="articles-preview">
      {% for post in site.posts limit:3 %}
        <article class="article-card">
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <div class="article-meta">
            <span class="author">{{ post.author }}</span>
            <span class="date">{{ post.date | date: "%B %d, %Y" }}</span>
          </div>
          <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
          <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
        </article>
      {% endfor %}
    </div>
    <div class="text-center">
      <a href="{{ '/articles' | relative_url }}" class="btn btn-primary">View All Articles</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container text-center">
    <h2>Join Us</h2>
    <p>Interested in becoming part of our community? We welcome students from all technical backgrounds.</p>
    <a href="{{ '/contact' | relative_url }}" class="btn btn-primary">Get in Touch</a>
  </div>
</section>
