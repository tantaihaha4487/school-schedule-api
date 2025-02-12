# Schedule API

A Node.js and Express-based API to manage and fetch class schedules based on the current time in Bangkok timezone.

## Features
- Retrieve the entire schedule.
- Fetch the current class period based on the time.
- Fetch the next class period.
- Retrieve the schedule for today.
- Generate images of the schedule.

## Routes

### Root Route
- `GET /`
  - Description: Welcome message and available routes.

### API Routes
- `GET /api/`
  - Description: Returns the entire schedule.
- `GET /api/current/`
  - Description: Returns the current period.
- `GET /api/next/`
  - Description: Returns the next period.
- `GET /api/today`
  - Description: Returns the schedule for today.

### Image Routes
- `GET /image/`
  - Description: Returns an image of the entire schedule.
- `GET /image/today`
  - Description: Returns an image of the schedule for today.
