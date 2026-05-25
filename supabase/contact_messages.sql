-- ─────────────────────────────────────────────────────────────────────────────
-- CR Digital Studio — contact_messages table
-- ─────────────────────────────────────────────────────────────────────────────
-- Run this SQL in the Supabase dashboard:
--   Project → SQL Editor → New query → paste and run.
--
-- The contact form (netlify/functions/contact.ts) inserts into this table
-- using the service role key. Messages are read manually from the Supabase
-- dashboard or via the Supabase API.
-- ─────────────────────────────────────────────────────────────────────────────

create table if not exists contact_messages (
  id               uuid        primary key default gen_random_uuid(),
  name             text        not null,
  email            text        not null,
  business_type    text,
  service_interest text,
  message          text        not null,
  consent          boolean     not null default false,
  source           text        not null default 'cr-digital-studio',
  created_at       timestamptz not null default now()
);

-- ── Row Level Security ────────────────────────────────────────────────────────
-- Enable RLS. The service role key used by the Netlify function bypasses RLS
-- automatically. No public SELECT policy is defined, so anonymous users and
-- the anon key cannot read submissions.

alter table contact_messages enable row level security;

-- Allow the service role (used by the Netlify function) to insert rows.
-- The service role bypasses RLS by default — no policy needed for it.
-- Add a policy here only if you want authenticated dashboard users to read rows.

-- Optional: allow authenticated Supabase users (e.g. yourself via the dashboard)
-- to select all rows. Remove or adjust as needed.
create policy "Authenticated users can read contact messages"
  on contact_messages
  for select
  to authenticated
  using (true);

-- ── Indexes ───────────────────────────────────────────────────────────────────
create index if not exists contact_messages_created_at_idx
  on contact_messages (created_at desc);

create index if not exists contact_messages_email_idx
  on contact_messages (email);
