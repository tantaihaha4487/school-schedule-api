const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(
        {
            message: 'Welcome to Schedule API',
            "routes": [
                {
                    "path": "/",
                    "description": "Welcome to Schedule API"
                },
                {
                    "path": "/api",
                    "description": "API endpoint",
                    "children": [
                        {
                            "path": "/api/",
                            "description": "Returns the schedule"
                        },
                        {
                            "path": "/api/current/",
                            "description": "Returns the current period"
                        },
                        {
                            "path": "/api/next/",
                            "description": "Returns the next period"
                        },
                        {
                            "path": "/api/today",
                            "description": "Returns the schedule for today"
                        }
                ]
                },
                {
                    "path": "/image",
                    "description": "Image endpoint",
                    "children": [
                        {
                            "path": "/image/",
                            "description": "Returns an image of the schedule"
                        },
                        {
                            "path": "/image/today",
                            "description": "Returns an image of the schedule for today"
                        }
                    ]
                }
            ]
       });
});

module.exports = router;