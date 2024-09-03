#!/bin/sh
npx changeset version
pnpm install --package-lock-only
