# Content and hosting plan

## Current phase

The website keeps a local content source in `src/content/site-content.ts`. Shared business information, locations, and menu data are typed and no longer duplicated inside route components.

The `ContentSource` contract in `src/content/source.ts` is the boundary for future content storage. A CMS adapter can implement the same `getSiteContent()` method without changing the page layout.

## CMS migration

The first CMS connection uses Sanity project `g9kcnac1` and dataset `production`. Copy `.env.example` to `.env.local` for local development. The project ID and dataset are public read configuration; do not add a Sanity write token to the website environment.

The website currently looks for one published document with `_type == "siteContent"` containing:

- `business`: `name`, `phone`, `email`, and `hours`
- `locations`: an array of `name`, `address`, `phone`, `hours`, and `mapQuery`
- `menuCategories`: an array with `key`, `title`, and `items`
- each menu item: `name`, `price`, and optional Sanity `image`

### Studio setup

The client dashboard is in the `studio` directory.

```bash
cd studio
bun install
bun run dev
```

Open the local Studio URL shown by the command, sign in with the Sanity account that has access to project `g9kcnac1`, and create one document named `Website content`. Enter the current business details, locations, menu categories, menu items, prices, and images, then publish it.

After publishing the document, set these variables in the website deployment environment and redeploy:

```text
VITE_SANITY_PROJECT_ID=g9kcnac1
VITE_SANITY_DATASET=production
```

To host the client dashboard on Sanity, run:

```bash
cd studio
bun run deploy
```

The deploy command requires an authenticated Sanity account. Give the client access through Sanity project members rather than sharing credentials.

1. Create the CMS schemas for business information, locations, menu categories, menu items, page sections, SEO metadata, and images.
2. Export the current values from `src/content/site-content.ts` into the CMS.
3. Implement a CMS content source that returns the existing `SiteContent` shape.
4. Keep CMS read credentials in environment variables. Never commit write tokens.
5. Add preview and publish workflows before giving the client access.
6. Add an authenticated CMS webhook to trigger a website rebuild when published content requires a build.

The website should read published content only. Editing and publishing permissions belong in the CMS or in a protected server-side admin API.

## Hosting portability

The content system and the website host are separate concerns. The site can remain on Netlify or move to another host while using the same CMS and content contract.

For Hostinger, choose the hosting product based on the runtime:

- Static hosting can serve a client build, but server-side rendering and server functions are not available there.
- A Hostinger Node.js-capable plan can run the SSR server output, provided it supports the required Node version, start command, environment variables, and long-running process.
- A VPS gives the most control and can run the application behind Nginx or another reverse proxy.

Before moving hosts, verify the production build, set the CMS environment variables on the new host, configure the domain and HTTPS, test forms and image loading, then switch DNS. The CMS content does not need to be migrated again when only the website host changes.
