# Chronobear Website

**[Chronobear](https://allen1821.github.io/chronobear/index.html)** is a Discord bot for tracking voice channel activity. It records current sessions and lifetime totals, and provides streaks, XP levels, leaderboards, notifications, and analytics.

## Current Bot Features

- **Voice Session Tracking**: Check your current voice session with `/time` and lifetime totals with `/totaltime`.
- **Channel and User Totals**: Review current-channel totals with `/timec` and `/totaltimec`, or check a member with `/usertotaltime`.
- **Progress Systems**: Track daily streaks, XP, levels, and streak leaderboards.
- **Leaderboards**: Configure longest VC session leaderboards, auto-update leaderboard messages, and adjust leaderboard size.
- **Notifications**: View and configure notification behavior for voice activity updates.
- **Analytics**: Use `/analytics` for server voice activity summaries.

## Commands

Chronobear currently exposes 19 slash commands:

`/time`, `/totaltime`, `/timec`, `/totaltimec`, `/usertotaltime`, `/streak`, `/level`, `/leaderboard`, `/streakboard`, `/notifications`, `/setnotifications`, `/config-streak`, `/setleaderboard`, `/updateleaderboard`, `/removeleaderboard`, `/leaderboardstatus`, `/setleaderboardsize`, `/analytics`, and `/help`.

## Website Sections

1. **[Home](https://allen1821.github.io/chronobear/index.html)**: Current Chronobear feature overview and invite link.
2. **[Commands](https://allen1821.github.io/chronobear/commands.html)**: Current slash commands with user and bot permission notes.
3. **[Support](https://allen1821.github.io/chronobear/support.html)**: Support guidance and `/help` direction.
4. **[Status](https://allen1821.github.io/chronobear/status.html)**: Static status notes until a live status API exists.
5. **[About Me](https://allen1821.github.io/chronobear/aboutme.html)**: Creator and contributor credits.

## Technologies Used

- **HTML** and **CSS** for the static website.
- **JavaScript** for command list reveal interactions.
- **Discord API** for bot commands and voice activity tracking.

## Invite Permissions

The website invite URL no longer requests Administrator. It uses `permissions=84992`, which covers View Channels, Send Messages, Embed Links, and Read Message History. Server management commands should still be restricted inside Discord to users with Manage Server.
