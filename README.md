# TechClub Website

A minimalist, professional static website for a college technical club built with Jekyll and hosted on GitHub Pages.

## Features

- **Jekyll-powered**: Static site generation with GitHub Pages compatibility
- **Markdown content**: Easy-to-maintain pages and articles
- **Responsive design**: Mobile-first approach with clean, accessible layout
- **Article system**: Built-in blog functionality using Jekyll posts
- **Minimal dependencies**: No external CSS frameworks or build tools
- **Vanilla JavaScript**: Lightweight interactions without frameworks

## Structure

```
├── _config.yml                 # Jekyll configuration
├── index.md                    # Homepage
├── about.md                    # About page
├── team.md                     # Team page
├── events.md                   # Events page
├── articles.md                 # Articles listing page
├── contact.md                  # Contact page
│
├── articles/
│   └── _posts/                 # Blog posts in Markdown
│
├── _layouts/
│   ├── default.html            # Base layout
│   ├── page.html               # Page layout
│   └── post.html               # Article layout
│
├── _includes/
│   ├── header.html             # Site header
│   └── footer.html             # Site footer
│
└── assets/
    ├── css/
    │   ├── main.scss           # Main stylesheet entry
    │   ├── _variables.scss     # Design tokens
    │   ├── _base.scss          # Base styles
    │   ├── _layout.scss        # Layout components
    │   ├── _components.scss    # UI components
    │   └── _pages.scss         # Page-specific styles
    │
    ├── js/
    │   └── main.js             # Minimal JavaScript
    │
    └── images/                 # Image assets
```

## Getting Started

### Prerequisites

- Ruby (2.7 or higher)
- Bundler

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/techclub-website.git
   cd techclub-website
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000`

### Creating Content

#### Adding a New Article

Create a new file in `articles/_posts/` with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Article Title"
author: Your Name
date: 2025-01-10
tags: [tag1, tag2, tag3]
---

Your article content here...
```

#### Adding a New Page

Create a new `.md` file in the root directory:

```markdown
---
layout: page
title: Your Page Title
---

Your page content here...
```

## Customization

### Colors and Styling

Edit `assets/css/_variables.scss` to customize:
- Color scheme
- Typography
- Spacing
- Breakpoints

### Navigation

Update navigation links in `_includes/header.html`

### Site Information

Edit `_config.yml` to update:
- Site title
- Description
- URL
- Other Jekyll settings

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select your main branch
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain

1. Add a `CNAME` file to the root with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## File Organization

- **Markdown files** (`.md`) for content
- **HTML files** (`.html`) for layouts and includes
- **SCSS files** (`.scss`) for styling
- **JavaScript files** (`.js`) for minimal enhancements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this template for your own organization.

## Credits

Built with Jekyll and hosted on GitHub Pages.
