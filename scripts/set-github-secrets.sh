#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/set-github-secrets.sh
# This script sets required repository secrets using the GitHub CLI (`gh`).
# You must be authenticated with `gh auth login` and have repo admin access.

REQUIRED=(VERCEL_TOKEN VERCEL_ORG_ID VERCEL_PROJECT_ID)

for name in "${REQUIRED[@]}"; do
  if [[ -z "${!name:-}" ]]; then
    read -r -p "Enter value for $name: " val
  else
    val="${!name}"
  fi
  echo "Setting secret: $name"
  echo -n "$val" | gh secret set "$name" --repo "$(git config --get remote.origin.url | sed -E 's#.*[:/]([^/]+/[^/]+)(\.git)?$#\1#')" --visibility=private
done

echo "All secrets set."
