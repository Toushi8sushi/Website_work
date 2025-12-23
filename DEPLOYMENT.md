# Deployment Guide for GitHub Pages

This guide walks you through deploying your TechClub website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `techclub-website` or `yourusername.github.io`)
4. Choose "Public" visibility
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

## Step 2: Update Configuration

Before pushing, update `_config.yml`:

```yaml
title: Your Club Name
description: Your club description
baseurl: "/techclub-website"  # Use "" if repository is named username.github.io
url: "https://yourusername.github.io"
```

**Important**:
- If your repository is named `username.github.io`, set `baseurl: ""`
- Otherwise, set `baseurl: "/repository-name"`

## Step 3: Push to GitHub

Open terminal in your project directory and run:

```bash
git init
git add .
git commit -m "Initial commit: TechClub website"
git branch -M main
git remote add origin https://github.com/yourusername/repository-name.git
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click "Save"

## Step 5: Wait for Deployment

GitHub Pages will build your site automatically. This takes 1-3 minutes.

You'll see a notification at the top of the Pages settings with your site URL:
```
Your site is live at https://yourusername.github.io/repository-name/
```

## Step 6: Verify Deployment

1. Visit your site URL
2. Check that all pages load correctly
3. Test navigation between pages
4. Verify article pages work

## Customization After Deployment

### Update Site Content

Edit markdown files and push changes:

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Pages will automatically rebuild your site.

### Add New Articles

1. Create a new file in `articles/_posts/` with format: `YYYY-MM-DD-title.md`
2. Add front matter and content
3. Commit and push

### Change Colors and Styling

Edit `assets/css/_variables.scss` and push changes.

## Using a Custom Domain (Optional)

### Add Custom Domain

1. In GitHub Pages settings, enter your custom domain (e.g., `techclub.com`)
2. Create a `CNAME` file in your repository root:
   ```
   techclub.com
   ```

### Configure DNS

Add these DNS records with your domain provider:

**For apex domain (techclub.com):**
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

**For www subdomain:**
```
CNAME www   yourusername.github.io
```

### Enable HTTPS

In GitHub Pages settings, check "Enforce HTTPS" (available after DNS propagates).

## Troubleshooting

### Site Not Showing Up

- Wait 5-10 minutes for initial deployment
- Check "Actions" tab for build errors
- Verify `baseurl` and `url` in `_config.yml`

### CSS Not Loading

- Ensure `baseurl` in `_config.yml` matches your repository name
- Clear browser cache
- Check browser console for 404 errors

### Articles Not Appearing

- Verify file naming: `YYYY-MM-DD-title.md`
- Check front matter is correct
- Ensure files are in `articles/_posts/` directory
- Date must not be in the future

### Navigation Links Broken

- Check that `baseurl` is correctly set in `_config.yml`
- Verify all internal links use `{{ '/path' | relative_url }}`

## Local Testing

To test locally before pushing:

1. Install Ruby and Bundler
2. Run `bundle install`
3. Run `bundle exec jekyll serve`
4. Visit `http://localhost:4000`

## Continuous Updates

Your workflow after deployment:

1. Edit files locally
2. Test changes (optional: use local Jekyll server)
3. Commit changes: `git commit -am "Description of changes"`
4. Push to GitHub: `git push`
5. Wait 1-2 minutes for automatic rebuild

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)

## Support

For issues specific to this template, check the README.md or open an issue on GitHub.

For GitHub Pages issues, visit [GitHub Support](https://support.github.com/).
