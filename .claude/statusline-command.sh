#!/bin/bash

input=$(cat)

used=$(echo "$input" | jq -r '.context_window.used_percentage // empty')
remaining=$(echo "$input" | jq -r '.context_window.remaining_percentage // empty')
model=$(echo "$input" | jq -r '.model.display_name // empty')
cwd=$(echo "$input" | jq -r '.workspace.current_dir // empty')

# Build context usage display
if [ -n "$used" ] && [ -n "$remaining" ]; then
  used_int=${used%.*}
  if [ "$used_int" -ge 80 ]; then
    ctx_color="\033[31m"  # red
  elif [ "$used_int" -ge 50 ]; then
    ctx_color="\033[33m"  # yellow
  else
    ctx_color="\033[32m"  # green
  fi
  reset="\033[0m"
  ctx_str="Context: ${ctx_color}${used}% used${reset} (${remaining}% remaining)"
else
  ctx_str="Context: no data"
fi

# Build status line
printf "%s | %s | %s" "$model" "$cwd" "$ctx_str"
