import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const videos = sqliteTable("videos", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  youtubeId: text("youtube_id").notNull(),
  title: text("title").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
