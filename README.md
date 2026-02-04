# TubeVault

> Your personal, organized archive for YouTube video bookmarks.

TubeVault allows you to curate your own library of YouTube content. Unlike the standard "Watch Later" playlist, TubeVault lets you organize videos with custom tags, add private notes, and search your collection effectively. Built for learners and curators who need context with their content.

## Tech Stack

*   **Framework:** TanStack Start (React SSR)
*   **Database:** Drizzle ORM (SQLite/LibSQL)
*   **Styling:** Tailwind CSS + shadcn/ui
*   **API:** YouTube Data API v3
*   **Validation:** Zod

## Features

*   **Smart Import:** Paste a YouTube URL to automatically fetch title, thumbnail, and duration.
*   **Contextual Notes:** Add rich notes to any video to remember why you saved it.
*   **Tagging System:** Organize content with a flexible, color-coded tagging system.
*   **Distraction-Free:** Watch videos directly within the app's embedded player.
*   **Searchable Vault:** Filter your library by tags or search text to find exactly what you need.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repo-url>
    cd tubevault
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory:
    ```env
    DATABASE_URL="file:local.db"
    YOUTUBE_API_KEY="your_youtube_api_key"
    ```

4.  **Database Setup:**
    Push the schema to your local database:
    ```bash
    npx drizzle-kit push
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Documentation

*   [Task List](./TASKLIST.md) - Tracking project progress.
*   [Learnings](./LEARNINGS.md) - Developer notes and architectural decisions.
*   [Development Rules](./.dev0/RULES.md) - Coding standards and guidelines.