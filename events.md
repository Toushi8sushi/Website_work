---
layout: page
title: Event Horizon
---

<div class="events-grid">
  {% for event in site.events_2025_2026 %}
  <div class="event-card"
       data-title="{{ event.title }}"
       data-content="{{ event.content | strip_html | escape }}"
       data-youtube="{{ event.youtube }}"
       tabindex="0">
      
    <img src="{{ event.poster | relative_url }}" alt="{{ event.title }} poster"/></img>

    <div class="event-card__content">
  <h3>{{ event.title }}</h3>
    <span class="event-card__date">{{ event.date | date: "%d %b %Y" }}</span>

    <p class="event-card__cta">Click to read more</p>
  </div>

    <div class="event-card__full-content" hidden>
      {{ event.content }}
    </div>
  </div>
  {% endfor %}
</div>

<div class="event-modal" id="eventModal">
  <div class="event-modal__overlay"></div>

  <div class="event-modal__box">
  <div class="event-modal__header">
    <h2 id="modalTitle"></h2>
    <button class="event-modal__close">&times;</button>
  </div>

  <div id="modalContent"></div>

  <a id="modalYoutube" target="_blank" class="event-modal__youtube" rel="noopener">
    <span>Watch on YouTube</span>
    <svg class="event-modal__youtube-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z"/>
    </svg>
  </a>

</div>

</div>

## Past Events
