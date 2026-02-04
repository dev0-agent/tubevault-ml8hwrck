# Task List

This file shows the current progress of all tasks in this project.
It is automatically updated by dev0 as tasks are completed.

---

## Phase 1

- [ ] ⏳ **Environment and Database Configuration**
  Create a robust environment configuration and database connection setup.
1. Create `app/utils/env.ts` using a library like `zod` or `t3-env` to validate `DATABASE_URL` and `YOUTUBE_API_KEY`.
2. Initialize Drizzle ORM with a basic configuration.
3. Create a script to push/migrate the database.

Acceptance Criteria: Application fails to start if env vars are missing. Drizzle client is exported and usable.

- [ ] ⏳ **Define Database Schema**
  Design and implement the Drizzle schema.
1. Create a `videos` table (id, youtubeId, title, description, thumbnailUrl, duration, notes, createdAt).
2. Create a `tags` table (id, name, color).
3. Create a `videos_to_tags` join table for many-to-many relationships.

Acceptance Criteria: Schema compiles correctly. `drizzle-kit push` creates the tables in the DB.

## Phase 2

- [ ] ⏳ **YouTube API Server Function**
  Implement a TanStack Start Server Function to fetch video metadata.
1. Create a server function `fetchVideoMetadata` that accepts a YouTube URL or ID.
2. Parse the ID from the URL.
3. Call the YouTube Data API v3 to get snippet and contentDetails.
4. Return a normalized object matching the DB schema.

Acceptance Criteria: Function returns correct title, thumbnail, and duration for a valid URL. Handles invalid URLs gracefully.

- [ ] ⏳ **Add Video Component**
  Create the UI and logic for adding a new video.
1. Create a form with a URL input.
2. On submit, call the `fetchVideoMetadata` server function.
3. Display a preview card of the fetched video.
4. Provide a 'Save to Vault' button that inserts the record into the DB using Drizzle.

Acceptance Criteria: User can paste a link, see the preview, and save it. The video appears in the database.

- [ ] ⏳ **Video Dashboard Grid**
  Build the main landing page displaying saved videos.
1. Create a server loader to fetch all videos from Drizzle.
2. Render a responsive grid of video cards (Thumbnail, Title, truncated notes).
3. Use TanStack Start's loader data pattern.

Acceptance Criteria: Dashboard displays all saved videos. Layout is responsive.

## Phase 3

- [ ] ⏳ **Video Detail View**
  Create a dynamic route for individual video details.
1. Create route `routes/video/$videoId.tsx`.
2. Fetch video details and associated tags by ID.
3. Embed the YouTube player using `react-youtube` or an iframe.
4. Display full notes and metadata.

Acceptance Criteria: Clicking a card on the dashboard navigates to this view. Video plays correctly.

- [ ] ⏳ **Tag Management System**
  Implement logic to add and manage tags.
1. Update the 'Add Video' and 'Detail View' to allow creating/selecting tags.
2. Implement server functions to create new tags and link them to videos.
3. UI should utilize a combobox or tag input component.

Acceptance Criteria: Users can create a new tag (e.g., 'Music') and assign it to a video. Tags persist in DB.

- [ ] ⏳ **Notes Editor**
  Add editing capability to the Detail View.
1. Allow the 'Notes' section to be editable (textarea).
2. Add a 'Save' button that triggers a server function to update the video record.

Acceptance Criteria: User can update the notes for a video and the change persists after refresh.

## Phase 4

- [ ] ⏳ **Search and Filter**
  Add filtering capabilities to the Dashboard.
1. Add a search bar for video titles.
2. Add a filter dropdown for Tags.
3. Update the dashboard loader to accept search params and filter the Drizzle query.

Acceptance Criteria: Dashboard updates to show only videos matching the search query or selected tag.

- [ ] ⏳ **UI Polish and Empty States**
  Refine the user interface.
1. Add a proper empty state to the dashboard when no videos exist.
2. Add loading skeletons for the dashboard and detail view.
3. Ensure consistent spacing and typography using Tailwind.

Acceptance Criteria: App feels polished. No layout shifts on load. Friendly message if DB is empty.

---

_Last updated by dev0 automation_
