# TrackForge Asset Dashboard

A responsive IT asset management landing page and interactive admin dashboard built with Next.js, React, TypeScript and Recharts.

**Live demo:** [TrackForge](https://trackforge-asset.vercel.app)

## Overview

TrackForge helps IT operations teams track company devices, employee assignments, inventory audits and maintenance requests from one clean workspace.

I created this project around practical IT asset-management workflows, drawing on my experience working with IT assets during my internship at Sterling Bank.

## Features

- Responsive product landing page
- Desktop-first admin dashboard
- Mobile dashboard navigation
- Overview, Assets, People, Audits, Maintenance, Settings and Help views
- Search and status filtering
- Asset registration form and details modal
- CSV inventory export
- Interactive asset-growth and distribution charts
- Maintenance and audit workflows
- Notifications, workspace menu and profile menu
- Responsive layouts for desktop, tablet and mobile
- Keyboard shortcut for global search (`Ctrl/Command + K`)

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS
- Recharts
- Lucide React
- Radix UI / shadcn components

## Running locally

```bash
git clone https://github.com/Wisdomd13/trackforge-asset-dashboard.git
cd trackforge-asset-dashboard
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Project structure

```text
app/
├── dashboard/
│   └── page.tsx       # Interactive admin dashboard
├── globals.css        # Design system and responsive styling
├── layout.tsx         # Site metadata and root layout
└── page.tsx           # Responsive landing page

components/ui/         # Reusable interface primitives
public/                # Static assets
```

## Frontend demonstration

This project is a frontend portfolio demonstration. It uses realistic sample data and browser state rather than a production backend. Newly added records reset when the page is refreshed.

## What I learned

- Translating a product concept into reusable React components
- Building responsive layouts for multiple screen sizes
- Managing filters, modals, menus and interface state with React hooks
- Visualising operational data with Recharts
- Structuring a maintainable TypeScript frontend
- Preparing a project for source-code handover and deployment

## Author

**Wisdom Dickson**  
Mechanical Engineering student at the University of Benin · Frontend developer · IT asset-management experience
