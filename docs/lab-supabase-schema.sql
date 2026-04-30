-- Demo Lab subscribers table
-- Mirrors `toolkit_subscribers` shape so behavior is identical.
-- Run this in the Supabase SQL editor (Project → SQL → New Query → paste → Run).

create table if not exists public.lab_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  first_name text not null,
  access_token text not null unique,
  access_count integer not null default 0,
  last_accessed_at timestamptz,
  created_at timestamptz not null default now()
);

-- Indexes for the two lookup paths used by the API
create index if not exists lab_subscribers_email_idx on public.lab_subscribers (email);
create index if not exists lab_subscribers_token_idx on public.lab_subscribers (access_token);

-- Lock the table down: only the service role (server) can read/write.
-- The public (anon) key cannot read subscriber data or tokens.
alter table public.lab_subscribers enable row level security;
-- No policies = no access for anon/authenticated. Service role bypasses RLS.
