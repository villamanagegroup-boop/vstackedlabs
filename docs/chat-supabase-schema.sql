-- Website chatbot tables
-- Paste into Supabase → SQL editor → New query → Run.

-- Per-IP daily message counts (rate limit)
create table if not exists public.chat_rate_limits (
  ip text not null,
  day date not null,
  message_count integer not null default 0,
  last_seen_at timestamptz not null default now(),
  primary key (ip, day)
);

-- Index for the daily-global query
create index if not exists chat_rate_limits_day_idx on public.chat_rate_limits (day);

-- Lock down: server-only access
alter table public.chat_rate_limits enable row level security;

-- Escalated chat leads (when the bot can't answer and the user submits the contact form)
create table if not exists public.chat_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  page text,
  conversation jsonb,
  created_at timestamptz not null default now()
);

create index if not exists chat_leads_created_at_idx on public.chat_leads (created_at desc);
create index if not exists chat_leads_email_idx on public.chat_leads (email);

alter table public.chat_leads enable row level security;
-- No policies = anon/authenticated cannot read. Service role bypasses RLS.

-- Optional: nightly cleanup (run as a Supabase cron job — older than 90 days)
-- delete from public.chat_rate_limits where day < (current_date - interval '90 days');
