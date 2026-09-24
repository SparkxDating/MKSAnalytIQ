-- Workspace-scoped email marketing data for the MKSAnalytIQ studio.
-- Memberships are keyed by verified Better Auth users; never trust client IDs.

create table if not exists marketing_workspaces (
  id text primary key,
  slug text not null unique,
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists marketing_memberships (
  workspace_id text not null references marketing_workspaces(id) on delete cascade,
  user_id text not null references "user"("id") on delete cascade,
  role text not null default 'owner' check (role in ('owner', 'admin', 'member')),
  created_at timestamptz not null default now(),
  primary key (workspace_id, user_id)
);

create index if not exists marketing_memberships_user_idx
  on marketing_memberships(user_id);

create table if not exists marketing_subscribers (
  id text primary key,
  workspace_id text not null references marketing_workspaces(id) on delete cascade,
  email text not null,
  email_normalized text not null,
  first_name text not null default '',
  status text not null default 'active' check (status in ('active', 'unsubscribed', 'bounced')),
  consent_source text not null,
  consented_at timestamptz not null,
  unsubscribed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (workspace_id, email_normalized)
);

create index if not exists marketing_subscribers_workspace_status_idx
  on marketing_subscribers(workspace_id, status, created_at desc);

create table if not exists marketing_campaigns (
  id text primary key,
  workspace_id text not null references marketing_workspaces(id) on delete cascade,
  name text not null,
  subject text not null default '',
  preview_text text not null default '',
  body_text text not null default '',
  status text not null default 'draft' check (status in ('draft', 'sending', 'queued', 'failed')),
  provider_campaign_id text,
  recipient_count integer not null default 0,
  last_error text,
  created_by text not null references "user"("id") on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  queued_at timestamptz
);

create index if not exists marketing_campaigns_workspace_updated_idx
  on marketing_campaigns(workspace_id, updated_at desc);

insert into marketing_workspaces (id, slug, name)
values ('mksanalytIQ', 'mksanalytIQ', 'MKSAnalytIQ')
on conflict (slug) do nothing;
