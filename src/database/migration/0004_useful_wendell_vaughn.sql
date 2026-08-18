CREATE TABLE "events" (
	"eventId" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "events_eventId_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255) NOT NULL,
	"description" varchar NOT NULL,
	"venue_id" integer NOT NULL,
	"start_time" timestamp NOT NULL,
	"end_time" timestamp NOT NULL,
	"total_seats" integer NOT NULL,
	"event_status" varchar(50) DEFAULT 'upcoming' NOT NULL,
	"created_by" integer NOT NULL,
	"created_at " timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "venues" (
	"venue_id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "venues_venue_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"location" varchar(255) NOT NULL,
	"total_number_seats" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_venue_id_venues_venue_id_fk" FOREIGN KEY ("venue_id") REFERENCES "public"."venues"("venue_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;