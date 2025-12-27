# Uncle's Basketball Academy Website

A modern, high-performance single-page application for a basketball academy in Luzern, built with React, Tailwind CSS, and advanced animations.

## Features

- **Immersive Hero Section**: Video background, parallax effects, and animated gradients.
- **Dynamic Programs**: 3D flip cards for program details.
- **Interactive Gallery**: Masonry layout with GLightbox and filtering.
- **Stats Counter**: Animated count-up statistics.
- **Testimonials**: Video carousel using Swiper and text reviews.
- **Contact Form**: Glassmorphism design with validation and success states.
- **Animations**: AOS scroll animations, hover effects, particles.

## Customization

### Images & Video
- Replace the video URL in `components/Hero.tsx` with your own hosted MP4 file.
- Update gallery images in `constants.tsx`.
- Update placeholder images (Unsplash) with real academy photos.

### Content
- Edit `constants.tsx` to change text, prices, and stats.
- Colors can be adjusted in `index.html` within the Tailwind config.

## Deployment

### Option 1: Firebase Hosting (Recommended)

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting` (select existing project or create new)
4. Deploy: `firebase deploy`

The included `firebase.json` is configured for SPA routing.

### Option 2: Google App Engine

1. Install Google Cloud SDK.
2. Initialize: `gcloud init`
3. Deploy: `gcloud app deploy`

### Option 3: Static Hosting (Netlify/Vercel)

Simply drag and drop the folder (excluding node_modules if you had them) or connect via Git.

## Performance Tips

- Convert all images to WebP format.
- Ensure the background video is compressed (under 5MB).
- Use lazy loading (already implemented for gallery images).
