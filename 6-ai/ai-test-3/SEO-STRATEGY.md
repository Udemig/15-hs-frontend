# Ice Cream E-Commerce SEO Strategy & Requirements Document

**Project:** Ice Cream Sales E-Commerce SPA (React 19 + Vite 7)
**Date:** 2026-04-05
**Architecture:** Single-Page Application (client-side rendered)

---

## Table of Contents

1. [Keyword Research](#1-keyword-research)
2. [Technical SEO for React SPA](#2-technical-seo-for-react-spa)
3. [On-Page SEO Structure](#3-on-page-seo-structure)
4. [Schema Markup (Structured Data)](#4-schema-markup-structured-data)
5. [Local SEO](#5-local-seo)
6. [Content SEO](#6-content-seo)
7. [E-Commerce Specific SEO](#7-e-commerce-specific-seo)
8. [Page Speed & Core Web Vitals](#8-page-speed--core-web-vitals)
9. [Link Building Opportunities](#9-link-building-opportunities)
10. [Competitive SEO Landscape](#10-competitive-seo-landscape)
11. [Implementation Roadmap](#11-implementation-roadmap)

---

## 1. Keyword Research

### 1.1 Primary Keywords (Head Terms)

| Keyword | Est. Monthly Volume (US) | Intent | Difficulty | Priority |
|---------|--------------------------|--------|------------|----------|
| buy ice cream online | 8,000-12,000 | Transactional | High | Critical |
| order ice cream online | 5,000-8,000 | Transactional | High | Critical |
| ice cream delivery | 15,000-25,000 | Transactional | High | Critical |
| ice cream shop online | 3,000-5,000 | Navigational/Trans. | Medium | High |
| ice cream subscription | 2,000-4,000 | Transactional | Medium | High |
| ice cream gift box | 3,000-6,000 | Transactional | Medium | High |

### 1.2 Secondary Keywords (Category Level)

| Keyword | Est. Monthly Volume (US) | Intent | Target Page Type |
|---------|--------------------------|--------|------------------|
| vegan ice cream online | 2,000-4,000 | Transactional | Category page |
| sugar-free ice cream delivery | 1,500-3,000 | Transactional | Category page |
| lactose-free ice cream buy | 1,000-2,500 | Transactional | Category page |
| organic ice cream online | 1,500-3,000 | Transactional | Category page |
| gluten-free ice cream delivery | 800-1,500 | Transactional | Category page |
| keto ice cream online | 2,000-4,000 | Transactional | Category page |
| dairy-free ice cream delivery | 1,500-2,500 | Transactional | Category page |
| artisan ice cream online | 1,000-2,000 | Transactional | Category page |
| premium ice cream delivery | 800-1,500 | Transactional | Category page |
| bulk ice cream order | 1,500-3,000 | Transactional | Landing page |
| ice cream for events | 800-1,500 | Commercial | Landing page |
| ice cream catering | 2,000-4,000 | Commercial | Landing page |

### 1.3 Long-Tail Keywords (Product & Intent Specific)

**Flavor-Specific:**
| Keyword | Est. Volume | Intent |
|---------|-------------|--------|
| chocolate ice cream delivery near me | 500-1,000 | Transactional |
| vanilla bean ice cream buy online | 300-600 | Transactional |
| strawberry ice cream order online | 300-500 | Transactional |
| salted caramel ice cream delivery | 400-800 | Transactional |
| mint chocolate chip ice cream online | 300-600 | Transactional |
| cookie dough ice cream delivery | 400-700 | Transactional |
| mango sorbet delivery | 200-400 | Transactional |
| pistachio ice cream buy online | 200-500 | Transactional |

**Gifting Keywords:**
| Keyword | Est. Volume | Intent |
|---------|-------------|--------|
| ice cream gift delivery | 2,000-4,000 | Transactional |
| send ice cream as a gift | 1,000-2,000 | Transactional |
| ice cream birthday gift box | 500-1,000 | Transactional |
| ice cream gift set | 1,500-3,000 | Transactional |
| ice cream care package | 400-800 | Transactional |
| corporate ice cream gifts | 300-600 | Commercial |
| ice cream gift baskets | 1,000-2,000 | Transactional |

**Bulk / Event Keywords:**
| Keyword | Est. Volume | Intent |
|---------|-------------|--------|
| bulk ice cream for parties | 500-1,000 | Commercial |
| wholesale ice cream online | 800-1,500 | Transactional |
| ice cream for wedding reception | 300-600 | Commercial |
| office ice cream delivery | 200-400 | Transactional |
| ice cream for corporate events | 300-500 | Commercial |

**Question/Informational Keywords (Blog Targets):**
| Keyword | Est. Volume | Intent |
|---------|-------------|--------|
| how to ship ice cream without melting | 1,000-2,000 | Informational |
| best ice cream flavors | 8,000-15,000 | Informational |
| is ice cream gluten free | 2,000-4,000 | Informational |
| how is ice cream made | 5,000-10,000 | Informational |
| healthiest ice cream brands | 3,000-6,000 | Commercial Inv. |
| best vegan ice cream | 5,000-10,000 | Commercial Inv. |
| ice cream vs gelato difference | 3,000-5,000 | Informational |
| how to store ice cream properly | 1,000-2,000 | Informational |

### 1.4 Seasonal Keyword Modifiers

- **Summer (May-Aug):** "summer ice cream delivery," "ice cream for BBQ," "pool party ice cream"
- **Holidays:** "Christmas ice cream gift," "Valentine's Day ice cream delivery," "Mother's Day ice cream gift box," "Easter ice cream"
- **Year-round:** "birthday ice cream delivery," "celebration ice cream," "thank you ice cream gift"

### 1.5 Search Intent Mapping

```
INFORMATIONAL (Top Funnel) --> Blog posts, guides, how-to articles
  "how is ice cream made"
  "best ice cream flavors ranked"
  "ice cream vs gelato"

COMMERCIAL INVESTIGATION (Mid Funnel) --> Comparison pages, buying guides
  "best ice cream delivery services"
  "healthiest ice cream brands"
  "best vegan ice cream 2026"

TRANSACTIONAL (Bottom Funnel) --> Product pages, category pages
  "buy chocolate ice cream online"
  "order ice cream delivery"
  "ice cream gift box"

NAVIGATIONAL (Brand) --> Homepage, brand pages
  "[Brand Name] ice cream"
  "[Brand Name] order online"
```

---

## 2. Technical SEO for React SPA

### 2.1 CRITICAL: The SPA Rendering Problem

**Current state:** Your app is a client-side rendered (CSR) React SPA. This is the single biggest SEO risk. When Googlebot fetches your pages, it receives an empty `<div id="root"></div>` and must execute JavaScript to see content. While Google can render JS, there are significant problems:

- Googlebot has a **two-wave indexing process** (fetch HTML first, render JS later) causing delays
- Crawl budget is wasted on JS rendering
- Other search engines (Bing, DuckDuckGo) have limited JS rendering capability
- Social media crawlers (Facebook, Twitter/X, LinkedIn) do NOT execute JavaScript at all
- Time-to-index can be days or weeks slower than server-rendered pages

**Recommended solutions (in order of preference):**

#### Option A: Pre-Rendering at Build Time (Recommended for this project)

Install `vite-plugin-prerender` (or `vite-ssg`) to generate static HTML for all routes at build time.

```bash
npm install vite-plugin-prerender --save-dev
```

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { prerender } from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/shop',
        '/shop/chocolate',
        '/shop/vanilla',
        '/shop/vegan',
        '/shop/sugar-free',
        '/about',
        '/contact',
        '/blog',
        '/faq',
        '/delivery-info',
        '/gift-boxes',
        '/bulk-orders',
        // Add all static routes
      ],
    }),
  ],
})
```

**Pros:** No server required, works on any static hosting, fast TTFB
**Cons:** Must rebuild when content changes, does not work for thousands of dynamic product URLs

#### Option B: Server-Side Rendering with Vite SSR

For a more scalable solution (many product pages, frequently changing inventory):

```bash
npm install express
```

Create a server entry point that renders React to HTML on each request. Vite has built-in SSR support. This is more complex but ensures every URL returns full HTML.

#### Option C: Hybrid with a Pre-Rendering Service

Use a service like Prerender.io or Rendertron as middleware that serves cached static HTML to bots while real users get the SPA. This is a pragmatic middle ground.

**Recommendation for this project:** Start with **Option A** (build-time pre-rendering). For an ice cream e-commerce site, you likely have a manageable number of product and category pages (under 500). Pre-rendering covers this well. Migrate to SSR only if you scale to thousands of dynamic pages.

### 2.2 Meta Tag Management

Install `react-helmet-async` for per-page meta tag control:

```bash
npm install react-helmet-async
```

**Setup in main.jsx:**
```jsx
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
```

**Usage in each page component:**
```jsx
import { Helmet } from 'react-helmet-async'

function ProductPage({ product }) {
  return (
    <>
      <Helmet>
        <title>{product.name} - Buy Online | [Brand Name]</title>
        <meta
          name="description"
          content={`Order ${product.name} for delivery. ${product.shortDescription}. Free shipping on orders over $50.`}
        />
        <link rel="canonical" href={`https://www.example.com/shop/${product.slug}`} />
        <meta property="og:title" content={`${product.name} | [Brand Name]`} />
        <meta property="og:description" content={product.shortDescription} />
        <meta property="og:image" content={product.imageUrl} />
        <meta property="og:url" content={`https://www.example.com/shop/${product.slug}`} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Page content */}
    </>
  )
}
```

**IMPORTANT:** `react-helmet-async` only works for users and bots that execute JavaScript. For bots that do not (social crawlers), the pre-rendering from Section 2.1 is what makes these meta tags visible.

### 2.3 Routing

Install React Router for proper URL-based navigation:

```bash
npm install react-router-dom
```

Every page must have its own URL path. Never hide content behind tabs or modals without a corresponding URL. Search engines need one URL per content unit.

### 2.4 Robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

# Block non-content paths
Disallow: /api/
Disallow: /cart
Disallow: /checkout
Disallow: /account
Disallow: /search?*

# Sitemap reference
Sitemap: https://www.example.com/sitemap.xml
```

### 2.5 XML Sitemap

Generate a sitemap at build time. Use a Vite plugin or a custom script:

```bash
npm install vite-plugin-sitemap --save-dev
```

```js
// vite.config.js addition
import sitemap from 'vite-plugin-sitemap'

// Inside plugins array:
sitemap({
  hostname: 'https://www.example.com',
  exclude: ['/cart', '/checkout', '/account'],
  changefreq: {
    '/': 'weekly',
    '/shop/*': 'weekly',
    '/blog/*': 'monthly',
  },
  priority: {
    '/': 1.0,
    '/shop': 0.9,
    '/shop/*': 0.8,
    '/blog/*': 0.6,
  },
})
```

### 2.6 Canonical URLs

Every page must have a self-referencing canonical tag. This prevents duplicate content from:
- URL parameters (`?sort=price`, `?ref=email`)
- Trailing slashes (`/shop/` vs `/shop`)
- Protocol/www variations

Set canonicals via `react-helmet-async` as shown in Section 2.2.

### 2.7 Index.html Baseline SEO

Update `index.html` with essential defaults that exist before JavaScript loads:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>[Brand Name] - Premium Ice Cream Delivery | Order Online</title>
    <meta name="description" content="Order artisan ice cream for delivery. Handcrafted flavors, vegan options, gift boxes, and more. Free shipping on orders over $50." />
    <link rel="canonical" href="https://www.example.com/" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <meta property="og:site_name" content="[Brand Name]" />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#FF6B9D" />
    <script type="module" src="/src/main.jsx"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

---

## 3. On-Page SEO Structure

### 3.1 Recommended URL Structure

```
/                                    Homepage
/shop                                All products (main category)
/shop/chocolate                      Chocolate ice cream category
/shop/vanilla                        Vanilla ice cream category
/shop/fruit                          Fruit flavors category
/shop/vegan                          Vegan ice cream category
/shop/sugar-free                     Sugar-free ice cream category
/shop/lactose-free                   Lactose-free ice cream category
/shop/keto                           Keto-friendly ice cream category
/shop/sorbet                         Sorbet category
/shop/[product-slug]                 Individual product page
/gift-boxes                          Gift box landing page
/gift-boxes/[gift-product-slug]      Individual gift box product
/bulk-orders                         Bulk/wholesale landing page
/subscriptions                       Subscription plans
/blog                                Blog index
/blog/[post-slug]                    Individual blog post
/about                               About us / our story
/delivery-info                       Shipping & delivery information
/faq                                 Frequently asked questions
/contact                             Contact page
/reviews                             Customer reviews page
```

**URL rules:**
- All lowercase
- Hyphens as word separators (never underscores)
- No trailing slashes (pick one convention and redirect the other)
- No file extensions
- Maximum 3 levels deep from root
- Include the primary keyword in the URL slug

### 3.2 Heading Hierarchy (H1-H6)

**Homepage:**
```
H1: "Premium Ice Cream Delivered to Your Door"
  H2: "Shop by Category"
    H3: "Chocolate Collection"
    H3: "Vegan Ice Cream"
    H3: "Gift Boxes"
  H2: "Best Sellers"
  H2: "Why Choose [Brand Name]"
    H3: "Handcrafted Daily"
    H3: "Shipped Frozen, Guaranteed"
    H3: "Dietary Options for Everyone"
  H2: "Customer Reviews"
  H2: "Latest from Our Blog"
```

**Category Page (e.g., /shop/vegan):**
```
H1: "Vegan Ice Cream - Dairy-Free Flavors Delivered"
  H2: "Our Vegan Ice Cream Collection"
  H2: "What Makes Our Vegan Ice Cream Special"
  H2: "Popular Vegan Flavors"
    H3: [Product Name 1]
    H3: [Product Name 2]
  H2: "Vegan Ice Cream FAQ"
    H3: "Is your vegan ice cream soy-free?"
    H3: "What milk alternatives do you use?"
```

**Product Page:**
```
H1: "Belgian Dark Chocolate Ice Cream - Pint"
  H2: "About This Flavor"
  H2: "Ingredients & Nutrition"
  H2: "Shipping & Storage"
  H2: "Customer Reviews"
  H2: "You Might Also Like"
```

**Rules:**
- One H1 per page, always
- H1 includes the primary keyword for that page
- Never skip heading levels (H1 then H3 without H2)
- Headings describe content structure, not visual styling

### 3.3 Image Alt Text Strategy

**Product images:**
```html
<img src="/images/belgian-dark-chocolate-pint.webp"
     alt="Belgian Dark Chocolate Ice Cream - pint container showing rich dark chocolate ice cream"
     width="600" height="600" loading="lazy" />
```

**Category hero images:**
```html
<img src="/images/vegan-collection-hero.webp"
     alt="Vegan ice cream collection featuring coconut, oat, and almond milk flavors"
     width="1200" height="400" loading="eager" />
```

**Rules:**
- Describe what the image shows, naturally including the keyword
- Never start with "Image of" or "Picture of"
- Keep under 125 characters
- Include product name, flavor, and size for product photos
- Decorative images use `alt=""`
- Include `width` and `height` attributes to prevent CLS

### 3.4 Internal Linking Strategy

**Contextual links within content:**
- Every product page links to its parent category
- Every product page links to 3-4 related products ("You Might Also Like")
- Category pages link to subcategories and top products
- Blog posts link to relevant product/category pages (e.g., a post about vegan desserts links to /shop/vegan)
- Blog posts link to other related blog posts within the same topic cluster

**Navigation links:**
- Primary nav: Shop, Gift Boxes, Subscriptions, Bulk Orders, Blog, About
- Footer nav: All categories, FAQs, Delivery Info, Contact, Reviews, Privacy Policy, Terms
- Breadcrumbs on all pages except the homepage (see Section 3.5)

**Link equity distribution targets:**
- Homepage links to all major category pages
- Category pages receive the most internal links (they target the highest-volume keywords)
- Orphan page target: zero pages with fewer than 2 internal links pointing to them

### 3.5 Breadcrumbs

Implement breadcrumb navigation on every page except the homepage.

**Examples:**
```
Home > Shop > Vegan > Coconut Milk Vanilla Bean
Home > Gift Boxes > Birthday Ice Cream Gift Box
Home > Blog > How to Host an Ice Cream Tasting Party
```

Breadcrumbs serve both UX and SEO purposes. They must also be marked up with BreadcrumbList schema (see Section 4).

---

## 4. Schema Markup (Structured Data)

All schema should be implemented as JSON-LD in `<script type="application/json">` tags (injected via `react-helmet-async` or directly in the pre-rendered HTML).

### 4.1 Organization Schema (Site-Wide, in index.html or layout)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Brand Name]",
  "url": "https://www.example.com",
  "logo": "https://www.example.com/images/logo.png",
  "description": "Premium handcrafted ice cream delivered nationwide. Artisan flavors, vegan options, and gift boxes.",
  "sameAs": [
    "https://www.facebook.com/brandname",
    "https://www.instagram.com/brandname",
    "https://twitter.com/brandname",
    "https://www.tiktok.com/@brandname"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "availableLanguage": "English"
  }
}
```

### 4.2 Product Schema (Every Product Page)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Belgian Dark Chocolate Ice Cream - Pint",
  "image": [
    "https://www.example.com/images/belgian-dark-chocolate-1x1.webp",
    "https://www.example.com/images/belgian-dark-chocolate-4x3.webp",
    "https://www.example.com/images/belgian-dark-chocolate-16x9.webp"
  ],
  "description": "Rich, handcrafted dark chocolate ice cream made with 72% Belgian cacao. Creamy, intensely chocolatey, and deeply satisfying.",
  "sku": "CHOC-DARK-BELG-PT",
  "brand": {
    "@type": "Brand",
    "name": "[Brand Name]"
  },
  "category": "Ice Cream > Chocolate",
  "offers": {
    "@type": "Offer",
    "url": "https://www.example.com/shop/belgian-dark-chocolate-pint",
    "priceCurrency": "USD",
    "price": "9.99",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "USD"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "US"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 2,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 3,
          "unitCode": "DAY"
        }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "reviewBody": "The richest chocolate ice cream I have ever tasted. Arrived perfectly frozen."
    }
  ],
  "nutrition": {
    "@type": "NutritionInformation",
    "servingSize": "2/3 cup (100g)",
    "calories": "250 calories",
    "fatContent": "14g",
    "sugarContent": "22g",
    "proteinContent": "4g"
  }
}
```

### 4.3 LocalBusiness Schema (If You Have a Physical Location)

```json
{
  "@context": "https://schema.org",
  "@type": "IceCreamShop",
  "name": "[Brand Name] - [City] Store",
  "image": "https://www.example.com/images/storefront.webp",
  "url": "https://www.example.com/locations/city-name",
  "@id": "https://www.example.com/locations/city-name",
  "telephone": "+1-555-123-4567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78701",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.2672,
    "longitude": -97.7431
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "11:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "22:00"
    }
  ],
  "priceRange": "$$",
  "servesCuisine": "Ice Cream, Frozen Desserts",
  "menu": "https://www.example.com/shop",
  "acceptsReservations": "false",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 30.2672,
      "longitude": -97.7431
    },
    "geoRadius": "30 mi"
  }
}
```

### 4.4 FAQ Schema (FAQ Page and Category Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you ship ice cream without it melting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use insulated packaging with dry ice to keep your ice cream frozen during transit. Our packaging maintains temperatures below -10F for up to 48 hours, ensuring your ice cream arrives in perfect condition."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer vegan ice cream options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer a full range of vegan ice cream made with oat milk, coconut milk, and almond milk bases. Browse our vegan collection at example.com/shop/vegan."
      }
    },
    {
      "@type": "Question",
      "name": "What is your delivery area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We deliver nationwide across the continental United States. Orders are shipped Monday through Wednesday to ensure they do not sit in a warehouse over the weekend. Most orders arrive within 1-3 business days."
      }
    },
    {
      "@type": "Question",
      "name": "How should I store my ice cream after delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Place your ice cream in the freezer immediately upon delivery. For the best texture, store at 0F (-18C). Let it sit at room temperature for 5 minutes before serving for the perfect scoop."
      }
    }
  ]
}
```

### 4.5 BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.example.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Shop",
      "item": "https://www.example.com/shop"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Vegan Ice Cream",
      "item": "https://www.example.com/shop/vegan"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Coconut Milk Vanilla Bean",
      "item": "https://www.example.com/shop/coconut-milk-vanilla-bean"
    }
  ]
}
```

### 4.6 WebSite Schema with SearchAction (Sitelinks Search Box)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "[Brand Name]",
  "url": "https://www.example.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.example.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### 4.7 Schema Implementation Helper

Create a reusable component for injecting schema:

```jsx
// src/components/JsonLd.jsx
import { Helmet } from 'react-helmet-async'

export default function JsonLd({ data }) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  )
}

// Usage:
// <JsonLd data={productSchema} />
```

---

## 5. Local SEO

### 5.1 Google Business Profile Optimization

If you have a physical location or serve a defined delivery area:

**Profile completeness checklist:**
- [ ] Business name matches website exactly
- [ ] Primary category: "Ice Cream Shop" (secondary: "Frozen Dessert Store", "Food Delivery Service")
- [ ] Complete address (or service area if no storefront)
- [ ] Phone number matching website
- [ ] Website URL
- [ ] Business hours (including holiday hours)
- [ ] Business description (750 chars, keyword-rich, not stuffed)
- [ ] At least 20 high-quality photos (storefront, products, behind-the-scenes, team)
- [ ] Menu/products listed with prices
- [ ] Attributes: "Online ordering," "Delivery," "Curbside pickup" if applicable
- [ ] Regular Google Posts (weekly): new flavors, seasonal promotions, events

**Review strategy:**
- Request reviews from customers post-delivery via email
- Respond to every review (positive and negative) within 48 hours
- Target 50+ reviews with 4.5+ average rating within first 6 months

### 5.2 Local Delivery Area Targeting

If you offer same-day or next-day local delivery:

**Create location-based landing pages:**
```
/delivery/austin-tx
/delivery/san-francisco-ca
/delivery/new-york-ny
```

**Each location page should include:**
- H1: "Ice Cream Delivery in [City, State]"
- Delivery zones and timeframes specific to that area
- Local pickup options if available
- Embedded Google Map showing delivery area
- LocalBusiness schema with geo coordinates
- Testimonials from local customers
- Local landmarks or neighborhoods mentioned naturally

**Do not create thin doorway pages.** Each location page must have genuinely unique, useful content. If you cannot write 500+ words of unique content for a location, do not create the page.

### 5.3 NAP Consistency

Name, Address, Phone number must be identical across:
- Website footer
- Google Business Profile
- Yelp
- Apple Maps
- Facebook
- Industry directories (Goldbelly, local food directories)

---

## 6. Content SEO

### 6.1 Pillar Page Strategy

**Pillar Page 1: "The Complete Guide to Ordering Ice Cream Online"**
- URL: `/guide/ordering-ice-cream-online`
- Target: "buy ice cream online," "order ice cream online"
- Word count: 3,000-4,000 words
- Sections: How online ice cream delivery works, how it stays frozen, what to look for, flavor guide, dietary options, gifting guide
- Links to: All category pages, product pages, blog posts in this cluster

**Pillar Page 2: "Vegan Ice Cream: The Ultimate Guide"**
- URL: `/guide/vegan-ice-cream`
- Target: "vegan ice cream," "dairy-free ice cream"
- Word count: 2,500-3,500 words
- Sections: What is vegan ice cream, base types (coconut, oat, almond, cashew), nutrition comparison, how it is made, best flavors
- Links to: /shop/vegan, individual vegan products, related blog posts

**Pillar Page 3: "Ice Cream Gifts: The Complete Gifting Guide"**
- URL: `/guide/ice-cream-gifts`
- Target: "ice cream gift," "ice cream gift box"
- Word count: 2,000-3,000 words
- Sections: Occasions (birthday, holiday, corporate, thank you), packaging options, personalization, shipping considerations
- Links to: /gift-boxes, individual gift products, seasonal blog posts

### 6.2 Topic Clusters

**Cluster 1: "Ice Cream Flavors" (around Pillar 1)**
| Blog Post | Target Keyword | Volume |
|-----------|---------------|--------|
| Top 20 Ice Cream Flavors Ranked | best ice cream flavors | 8,000-15,000 |
| Chocolate Ice Cream: A Flavor Deep Dive | chocolate ice cream | 5,000-8,000 |
| Unique Ice Cream Flavors You Need to Try | unique ice cream flavors | 1,500-3,000 |
| Seasonal Ice Cream Flavors for Every Month | seasonal ice cream | 800-1,500 |
| Ice Cream vs Gelato: What Is the Difference | ice cream vs gelato | 3,000-5,000 |

**Cluster 2: "Dietary Ice Cream" (around Pillar 2)**
| Blog Post | Target Keyword | Volume |
|-----------|---------------|--------|
| Best Vegan Ice Cream Flavors in 2026 | best vegan ice cream | 5,000-10,000 |
| Sugar-Free Ice Cream: Is It Actually Good? | sugar-free ice cream | 3,000-5,000 |
| Keto Ice Cream Guide: Low-Carb Frozen Treats | keto ice cream | 2,000-4,000 |
| Lactose Intolerant? These Ice Creams Are for You | lactose-free ice cream | 1,500-3,000 |
| Is Ice Cream Gluten Free? What You Need to Know | is ice cream gluten free | 2,000-4,000 |

**Cluster 3: "Ice Cream at Home" (lifestyle content)**
| Blog Post | Target Keyword | Volume |
|-----------|---------------|--------|
| How to Host an Ice Cream Tasting Party | ice cream tasting party | 500-1,000 |
| Ice Cream Sundae Bar: The Complete Setup Guide | ice cream sundae bar | 1,500-3,000 |
| Best Ice Cream Toppings: The Definitive List | ice cream toppings | 5,000-10,000 |
| How to Store Ice Cream (Avoid Freezer Burn) | how to store ice cream | 1,000-2,000 |
| Ice Cream Float Recipes for Every Flavor | ice cream float recipes | 1,000-2,000 |

**Cluster 4: "Ice Cream Gifts & Events" (around Pillar 3)**
| Blog Post | Target Keyword | Volume |
|-----------|---------------|--------|
| Best Food Gifts to Send by Mail | food gifts delivery | 3,000-5,000 |
| Ice Cream for Weddings: A Sweet Alternative | ice cream wedding | 1,000-2,000 |
| Corporate Gift Ideas That Stand Out | corporate food gifts | 800-1,500 |
| Birthday Ice Cream Delivery Ideas | birthday ice cream delivery | 500-1,000 |

### 6.3 Content Production Schedule

**Month 1-3 (Foundation):**
- 3 pillar pages
- 6 blog posts (2/month, highest volume keywords first)
- All product page descriptions optimized
- FAQ page built out

**Month 4-6 (Scale):**
- 12 blog posts (4/month)
- Seasonal content for upcoming holidays
- Category page content expansion

**Month 7-12 (Authority):**
- 24 blog posts (4/month)
- Update and expand pillar pages
- Original research content (e.g., "America's Favorite Ice Cream Flavors 2026" survey)
- Video content (production process, flavor reviews)

### 6.4 Content Quality Requirements

Every piece of content must meet these E-E-A-T standards:
- **Experience:** Include first-hand experience (our ice cream makers, our testing process)
- **Expertise:** Cite food science, ingredient sourcing, and production expertise
- **Authoritativeness:** Bylined by a real team member with a bio and credentials
- **Trustworthiness:** Cite sources, include dates, update stale content quarterly

---

## 7. E-Commerce Specific SEO

### 7.1 Product Page Optimization Checklist

For every product page:
- [ ] Unique title tag: "[Product Name] - [Size] | Buy Online | [Brand]" (50-60 chars)
- [ ] Unique meta description with price, key feature, and CTA (150-160 chars)
- [ ] H1: Product name including flavor and size
- [ ] Unique product description: minimum 150 words (do not use manufacturer copy)
- [ ] Ingredients list
- [ ] Nutrition information
- [ ] Allergen information
- [ ] Multiple high-quality product images with descriptive alt text
- [ ] Customer reviews displayed on page
- [ ] Product schema markup (Section 4.2)
- [ ] Breadcrumb navigation and schema
- [ ] "You Might Also Like" section with 4-6 related products
- [ ] Clear price, availability status, and add-to-cart CTA
- [ ] Storage/serving instructions

### 7.2 Category Page Optimization

Category pages are your highest-value SEO assets. They target the most competitive keywords.

**Structure for each category page:**
1. H1 with category keyword ("Vegan Ice Cream - Dairy-Free Flavors Delivered")
2. 150-300 word introductory paragraph (above the product grid)
3. Product grid with images, names, prices, and quick-add buttons
4. Sorting options (price, popularity, rating) -- use JS-based sorting, NOT URL parameters
5. 300-500 word supplementary content below the product grid (category guide, FAQs)
6. FAQ section with FAQ schema targeting PAA questions
7. Internal links to related categories and the parent pillar page

**Critical:** Sorting and filtering should NOT generate new URLs. Use JavaScript state or hash fragments. If you must use URL parameters for filters, add `<meta name="robots" content="noindex, follow">` to filtered views and use canonical tags pointing to the unfiltered category page.

### 7.3 Faceted Navigation SEO

If you implement filters (flavor, dietary, price range, size):

**Rules:**
- Filter combinations that create useful, searchable pages (e.g., "vegan chocolate ice cream") CAN be indexable static category pages if search volume justifies it
- All other filter combinations should be handled client-side without URL changes
- Never allow crawling of multi-faceted filter URLs (e.g., `?flavor=chocolate&diet=vegan&size=pint&sort=price`)
- If filters do generate URLs, implement `rel="canonical"` pointing to the base category

### 7.4 Pagination

If product listings span multiple pages:

**Option A (Preferred for SPA):** Infinite scroll or "Load More" button with all products on one URL. This is the simplest approach and avoids pagination SEO issues entirely.

**Option B:** If using paginated URLs (`/shop?page=2`):
- Use `<link rel="canonical">` pointing to the base URL (Google deprecated rel=next/prev)
- Ensure products on page 2+ are also reachable via category and internal links
- Include a "View All" option for search engines

### 7.5 Out-of-Stock Product Handling

**Temporary out-of-stock (will return):**
- Keep the page live and indexed
- Display "Out of Stock" with an email notification signup
- Update Product schema `availability` to `https://schema.org/OutOfStock`
- Add expected restock date if known

**Permanently discontinued:**
- 301 redirect to the most relevant replacement product or parent category
- Update the sitemap to remove the old URL
- If no replacement exists, keep the page with messaging and suggest alternatives

### 7.6 Product Variant Handling

For products with multiple sizes (pint, quart, half-gallon):

**Option A:** Single URL with size selector (recommended for ice cream). One page ranks for the product name, and the size is selected via JavaScript. Use Product schema with multiple `offers`.

**Option B:** Separate URLs per variant only if each variant targets a different keyword (rarely the case for size variants).

---

## 8. Page Speed & Core Web Vitals

### 8.1 Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| LCP (Largest Contentful Paint) | < 2.5s | Field data (CrUX) |
| INP (Interaction to Next Paint) | < 200ms | Field data (CrUX) |
| CLS (Cumulative Layout Shift) | < 0.1 | Field data (CrUX) |
| TTFB (Time to First Byte) | < 800ms | Lab data |
| Total Page Weight | < 1.5MB | Lab data |
| First Load JS Bundle | < 200KB (gzipped) | Build analysis |

### 8.2 Image Optimization (Critical for Ice Cream E-Commerce)

Product photography is the core of an ice cream site. Images will be the largest assets.

**Format strategy:**
```jsx
// Use <picture> element for format negotiation
<picture>
  <source srcSet="/images/product-name.avif" type="image/avif" />
  <source srcSet="/images/product-name.webp" type="image/webp" />
  <img
    src="/images/product-name.jpg"
    alt="Belgian Dark Chocolate Ice Cream pint"
    width="600"
    height="600"
    loading="lazy"
    decoding="async"
  />
</picture>
```

**Responsive images for product grids:**
```jsx
<img
  src="/images/product-400.webp"
  srcSet="/images/product-400.webp 400w, /images/product-600.webp 600w, /images/product-800.webp 800w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Vanilla Bean Ice Cream pint"
  width="600"
  height="600"
  loading="lazy"
  decoding="async"
/>
```

**Image sizing guidelines:**
| Context | Max Width | Format | Quality |
|---------|-----------|--------|---------|
| Product hero | 800px | AVIF > WebP > JPEG | 80% |
| Product grid thumbnail | 400px | WebP | 75% |
| Category hero banner | 1200px | WebP | 80% |
| Blog post images | 800px | WebP | 80% |
| Logo/icons | native | SVG preferred | N/A |

**Build-time optimization with Vite:**

```bash
npm install vite-plugin-image-optimizer --save-dev
```

```js
// vite.config.js
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 65 },
    }),
  ],
})
```

### 8.3 Lazy Loading

**Images:** All images below the fold must use `loading="lazy"`. The hero image and first visible product images should use `loading="eager"` (or omit the attribute).

**Components:** Use React.lazy for route-based code splitting:

```jsx
import { lazy, Suspense } from 'react'

const ShopPage = lazy(() => import('./pages/ShopPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:slug" element={<ProductPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Suspense>
  )
}
```

### 8.4 Code Splitting with Vite

Vite automatically code-splits at dynamic `import()` boundaries. Configure manual chunks for vendor code:

```js
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'helmet': ['react-helmet-async'],
        },
      },
    },
  },
})
```

### 8.5 Font Optimization

```css
/* Use font-display: swap to prevent FOIT (Flash of Invisible Text) */
@font-face {
  font-family: 'BrandFont';
  src: url('/fonts/brand-font.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

**Font loading best practices:**
- Use WOFF2 format only (best compression, universal browser support)
- Preload the primary brand font in `index.html`:
  ```html
  <link rel="preload" href="/fonts/brand-font.woff2" as="font" type="font/woff2" crossorigin />
  ```
- Limit to 2 font families maximum (brand font + system font stack fallback)
- Subset fonts to include only the characters you need (Latin subset for English-only)

### 8.6 CLS Prevention Checklist

- [ ] All images have explicit `width` and `height` attributes
- [ ] Font loading uses `font-display: swap` with a matching fallback
- [ ] No content is injected above existing content after load
- [ ] Ads/banners have reserved space via CSS `aspect-ratio` or `min-height`
- [ ] Dynamic content (reviews, recommendations) has skeleton/placeholder UI

### 8.7 Preconnect & DNS Prefetch

Add to `index.html` for third-party resources:

```html
<!-- If using a CDN for images -->
<link rel="preconnect" href="https://cdn.example.com" />

<!-- If using Google Fonts (avoid if possible, self-host instead) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Analytics -->
<link rel="dns-prefetch" href="https://www.google-analytics.com" />

<!-- Payment processor -->
<link rel="preconnect" href="https://js.stripe.com" />
```

---

## 9. Link Building Opportunities

### 9.1 Digital PR & Data-Driven Content

**Original research campaigns:**
- "America's Favorite Ice Cream Flavors 2026" -- conduct a survey, publish data, pitch to food media
- "Ice Cream Delivery Trends Report" -- analyze your own order data for seasonal patterns
- "The Most Unusual Ice Cream Flavors by State" -- interactive map, highly shareable

**Journalist outreach triggers:**
- New flavor launches (especially unusual or trending flavors)
- Seasonal collections (summer, holiday)
- Sustainability initiatives (packaging, sourcing)
- Charity partnerships

**Target publications:** Food & Wine, Bon Appetit, Eater, Serious Eats, The Kitchn, local food sections of major newspapers, food-focused newsletters.

### 9.2 Food Blog & Recipe Partnerships

**Tactics:**
- Send free samples to food bloggers with 10K+ monthly organic traffic
- Co-create recipes using your ice cream (affogato recipes, milkshake recipes, ice cream cake tutorials)
- Guest post on food blogs with a link back to your product/category pages
- Sponsor recipe roundup posts ("15 Desserts for Your Summer BBQ")

**Link targets:** High-DA food blogs, recipe aggregator sites, dietary-specific blogs (vegan food blogs, keto food blogs).

### 9.3 Local Press & Community

- Local newspaper features on the business story
- Chamber of commerce directory listings
- Local food festival sponsorships and event coverage
- University/school partnerships for catering
- Local food delivery service directories

### 9.4 Resource & Directory Links

- Specialty food directories (Goldbelly, specialty food associations)
- Gift guide inclusions (holiday gift guides, food gift roundups)
- "Best of" listicles (pitch to publications running annual "best ice cream" lists)
- Dietary resource pages (vegan food resource lists, keto food guides)
- Small business directories (Better Business Bureau, industry associations)

### 9.5 Broken Link Reclamation

Search for broken links on food blogs and resource pages that previously linked to competitors or ice cream content. Offer your relevant content as a replacement.

### 9.6 Unlinked Brand Mentions

Monitor mentions of your brand name using Google Alerts. When publications mention you without linking, request a link addition. This is the highest-conversion outreach tactic.

### 9.7 Monthly Link Building Targets

| Month | Target New Referring Domains | Avg. Domain Rating | Primary Tactic |
|-------|----------------------------|--------------------|----------------|
| 1-3 | 5-10/month | 20-40 | Directories, local press, blogger outreach |
| 4-6 | 10-15/month | 30-50 | Food blog partnerships, guest posts, PR |
| 7-12 | 15-25/month | 40-60+ | Data-driven PR, gift guide features, original research |

---

## 10. Competitive SEO Landscape

### 10.1 Key Online Ice Cream E-Commerce Competitors

| Competitor | Strengths | Weaknesses |
|-----------|-----------|------------|
| **Goldbelly** | Massive domain authority (DA 70+), aggregates many brands, ranks for "buy ice cream online" | Not a direct brand, generic product pages, less brand loyalty |
| **Jeni's Ice Creams** | Strong brand, excellent content marketing, high DA (60+), ranks for branded + generic terms | Premium pricing, limited dietary options |
| **Salt & Straw** | Cult brand, strong social signals, creative flavors generate PR links naturally | Regional focus, limited non-branded keyword targeting |
| **Van Leeuwen** | Multi-channel (grocery + D2C), strong Instagram presence, vegan line | Content strategy not as developed |
| **eCreamery** | Personalization angle (custom flavors), ranks for "custom ice cream" | Lower DA, smaller product range |
| **McConnell's Fine Ice Creams** | Heritage brand, high-quality product photography, gift box focus | Limited blog content, fewer backlinks |
| **Humphry Slocombe** | Unique flavors, strong local SEO in San Francisco | Limited national delivery, smaller site |

### 10.2 Keyword Gaps (Opportunities Where Competitors Are Weak)

Based on the competitive landscape, these areas have lower competition:

**Dietary niche keywords:**
- "keto ice cream delivery" -- few D2C brands optimizing for this
- "sugar-free ice cream online" -- mostly dominated by grocery products, not D2C
- "lactose-free ice cream delivery" -- underserved

**Gifting and occasion keywords:**
- "ice cream corporate gifts" -- very few competitors targeting B2B gifting
- "ice cream care package" -- emotional intent, low competition
- "ice cream wedding favors" -- niche but monetizable

**Informational content gaps:**
- "how to ship ice cream" -- opportunity for a definitive guide that earns links
- "ice cream tasting party ideas" -- low competition, high sharing potential
- "best ice cream for [specific dietary need]" -- comparison content that ranks and converts

### 10.3 Competitive Content Analysis

**What top competitors do well:**
- Jeni's: Flavor story pages that read like food magazine articles, strong behind-the-scenes content
- Salt & Straw: Monthly limited-edition flavors generate recurring PR coverage and links
- Goldbelly: Sheer volume of indexed product pages covering long-tail keywords

**What most competitors neglect:**
- Structured data markup (very few ice cream D2C sites have proper Product schema)
- Blog content targeting informational keywords
- FAQ schema on product and category pages
- Core Web Vitals optimization (many have LCP >4s due to unoptimized imagery)
- Local SEO for delivery areas

### 10.4 Competitive Advantage Strategy

Your realistic path to organic visibility as a new entrant:

**Phase 1 (Months 1-6): Win long-tail and niche keywords**
- Target dietary-specific keywords with low competition
- Build out comprehensive FAQ content with schema
- Ensure technical SEO is flawless (you will be faster and better structured than 90% of competitors)
- Target gifting and occasion keywords

**Phase 2 (Months 6-12): Build authority**
- Publish pillar content and topic clusters
- Execute link building campaigns targeting food blogs
- Aim for featured snippets on informational queries
- Build local SEO presence in your primary delivery area

**Phase 3 (Months 12-24): Compete on head terms**
- With sufficient domain authority (DA 30+), begin competing for "buy ice cream online" and similar head terms
- Scale content production
- Pursue digital PR for high-authority links
- Expand location-based landing pages

---

## 11. Implementation Roadmap

### Phase 1: Technical Foundation (Weeks 1-4)

**Priority: CRITICAL**

| Task | Effort | Impact |
|------|--------|--------|
| Install react-router-dom and set up URL-based routing | 1 day | Critical |
| Install react-helmet-async, configure HelmetProvider | 0.5 day | Critical |
| Set up pre-rendering with vite-plugin-prerender | 1 day | Critical |
| Update index.html with baseline SEO (title, meta, OG tags) | 0.5 day | High |
| Create robots.txt in public/ | 0.5 hour | High |
| Set up XML sitemap generation | 0.5 day | High |
| Implement canonical URLs on all pages | 0.5 day | High |
| Set up image optimization pipeline (WebP/AVIF) | 1 day | High |
| Configure code splitting and manual chunks | 0.5 day | Medium |
| Font optimization (preload, WOFF2, font-display: swap) | 0.5 day | Medium |

### Phase 2: On-Page & Structured Data (Weeks 3-6)

| Task | Effort | Impact |
|------|--------|--------|
| Define URL structure and implement all routes | 1 day | Critical |
| Implement H1-H6 heading hierarchy on all page templates | 1 day | High |
| Create JsonLd component and implement Organization schema | 0.5 day | High |
| Implement Product schema on all product pages | 1 day | High |
| Implement BreadcrumbList schema and breadcrumb UI | 0.5 day | High |
| Implement FAQ schema on FAQ and category pages | 0.5 day | Medium |
| Write unique product descriptions (all products) | 3-5 days | High |
| Optimize all product images with alt text | 1 day | Medium |
| Build internal linking structure | 1 day | High |
| Implement WebSite schema with SearchAction | 0.5 hour | Low |

### Phase 3: Content & Local SEO (Weeks 5-12)

| Task | Effort | Impact |
|------|--------|--------|
| Write Pillar Page 1: Ordering Ice Cream Online | 2 days | High |
| Write Pillar Page 2: Vegan Ice Cream Guide | 2 days | High |
| Write Pillar Page 3: Ice Cream Gifts Guide | 2 days | High |
| Create and optimize Google Business Profile | 1 day | High (local) |
| Write first 6 blog posts (highest volume targets) | 6 days | High |
| Build FAQ page with 20+ questions | 1 day | Medium |
| Create delivery info page | 0.5 day | Medium |
| Set up location landing pages (if applicable) | 1-2 days | Medium (local) |
| Ensure NAP consistency across directories | 0.5 day | Medium (local) |

### Phase 4: Link Building & Ongoing (Months 3-12)

| Task | Frequency | Impact |
|------|-----------|--------|
| Publish new blog content | 4x/month | High |
| Food blogger outreach | Ongoing | High |
| Digital PR campaigns | Quarterly | High |
| Update and expand existing content | Monthly | Medium |
| Monitor Search Console for issues | Weekly | Critical |
| Track keyword rankings | Weekly | High |
| Core Web Vitals monitoring | Monthly | Medium |
| Competitor analysis | Monthly | Medium |
| Review and update schema markup | Quarterly | Medium |

### Required NPM Packages Summary

```bash
# Routing
npm install react-router-dom

# SEO meta tags
npm install react-helmet-async

# Build-time pre-rendering (choose one)
npm install vite-plugin-prerender --save-dev
# OR
npm install vite-ssg --save-dev

# Sitemap generation
npm install vite-plugin-sitemap --save-dev

# Image optimization
npm install vite-plugin-image-optimizer --save-dev
```

---

## Appendix: SEO Monitoring Dashboard KPIs

Track these metrics monthly:

| KPI | Tool | Baseline Target (Month 6) | Growth Target (Month 12) |
|-----|------|---------------------------|--------------------------|
| Organic sessions/month | GA4 | 2,000 | 10,000 |
| Non-branded organic clicks | Search Console | 1,000 | 7,000 |
| Keywords in top 10 | Rank tracker | 30 | 100 |
| Keywords in top 3 | Rank tracker | 5 | 25 |
| Domain Rating/Authority | Ahrefs/Moz | 20 | 35 |
| Referring domains | Ahrefs/Moz | 50 | 150 |
| Indexed pages | Search Console | 50 | 150 |
| Avg. CTR (non-branded) | Search Console | 3% | 5% |
| Organic conversion rate | GA4 | 2% | 3.5% |
| Core Web Vitals passing | PageSpeed Insights | All green | All green |
| Featured snippets owned | Rank tracker | 2 | 10 |

---

*This document should be reviewed and updated quarterly as search landscape, algorithm updates, and business priorities evolve.*
