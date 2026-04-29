-- =====================================================================
-- Stackd Studios AI — The Small Business AI Toolkit (free lead magnet)
-- Run this once in the Supabase SQL editor.
-- =====================================================================

create extension if not exists pgcrypto;

create table if not exists public.toolkit_subscribers (
  id               uuid primary key default gen_random_uuid(),
  email            text not null unique,
  first_name       text not null,
  access_token     text not null unique,
  created_at       timestamptz not null default now(),
  last_accessed_at timestamptz,
  access_count     integer not null default 0
);

create index if not exists toolkit_subscribers_access_token_idx
  on public.toolkit_subscribers (access_token);

create index if not exists toolkit_subscribers_email_idx
  on public.toolkit_subscribers (lower(email));

-- RLS on. All reads/writes go through the server using SUPABASE_SERVICE_ROLE_KEY.
alter table public.toolkit_subscribers enable row level security;

-- No anon policies. Anon/auth-key clients should not see subscriber rows.
