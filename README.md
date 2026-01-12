# SmartHR Next.js Conversion

This is a Next.js conversion of the SmartHR HTML template, specifically converting the Tickets and Ticket Details pages.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Copy Assets**
   You need to copy the assets folder from the original HTML template to the `public` directory:
   
   **Option 1: Using the setup script (Recommended)**
   ```bash
   npm run setup-assets
   ```
   
   **Option 2: Manual copy**
   ```bash
   # From the project root, copy assets to public
   cp -r ../assets public/assets
   ```
   
   Or on Windows:
   ```powershell
   Copy-Item -Path ..\assets -Destination public\assets -Recurse
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to:
   - Tickets page: http://localhost:3000/tickets
   - Ticket Details page: http://localhost:3000/ticket-details

## Project Structure

```
nextjs/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles with Tailwind
│   ├── tickets/
│   │   └── page.tsx        # Tickets listing page
│   └── ticket-details/
│       └── page.tsx        # Ticket details page
├── components/
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── select.tsx
│       ├── dialog.tsx
│       └── dropdown-menu.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── assets/             # Static assets (images, etc.)
└── package.json
```

## Features

- ✅ Next.js 14 with App Router
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui components
- ✅ Responsive design matching original HTML
- ✅ TypeScript support
- ✅ Client-side interactivity

## Notes

- Icons are replaced with Lucide React icons (similar to Tabler icons)
- All styling matches the original design using Tailwind CSS
- Assets must be copied to `public/assets` directory
- The pages are client components for interactivity (modals, dropdowns)

## Build for Production

```bash
npm run build
npm start
```

"# SmartHR" 
