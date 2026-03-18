CREATE TABLE "devboard_boards" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"name" varchar(100) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "devboard_cards" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"board_id" uuid NOT NULL,
	"column_id" uuid NOT NULL,
	"title" varchar(200) NOT NULL,
	"description" text,
	"assignee_user_id" text,
	"priority" varchar(16) DEFAULT 'medium' NOT NULL,
	"story_points" integer,
	"due_at" timestamp with time zone,
	"position" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "devboard_columns" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"board_id" uuid NOT NULL,
	"name" varchar(100) NOT NULL,
	"code" varchar(32) NOT NULL,
	"position" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "devboard_projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_user_id" text NOT NULL,
	"name" varchar(100) NOT NULL,
	"key" varchar(10) NOT NULL,
	"description" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "devboard_projects_key_unique" UNIQUE("key")
);
--> statement-breakpoint
ALTER TABLE "devboard_boards" ADD CONSTRAINT "devboard_boards_project_id_devboard_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."devboard_projects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "devboard_cards" ADD CONSTRAINT "devboard_cards_board_id_devboard_boards_id_fk" FOREIGN KEY ("board_id") REFERENCES "public"."devboard_boards"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "devboard_cards" ADD CONSTRAINT "devboard_cards_column_id_devboard_columns_id_fk" FOREIGN KEY ("column_id") REFERENCES "public"."devboard_columns"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "devboard_columns" ADD CONSTRAINT "devboard_columns_board_id_devboard_boards_id_fk" FOREIGN KEY ("board_id") REFERENCES "public"."devboard_boards"("id") ON DELETE no action ON UPDATE no action;