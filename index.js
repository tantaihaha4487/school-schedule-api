const express = require("express");
const moment = require("moment-timezone");
const app = express();

const schedule = {
  {
  "Monday": [
    {
      "period": 0,
      "start": "08:30",
      "end": "08:40",
      "subject-code": "",
      "subject-name": "Home room",
      "room": 0,
      "teacher": ""
    },
    {
      "period": 1,
      "start": "08:40",
      "end": "09:30",
      "subject-code": "ว30261",
      "subject-name": "โลกและดาราศาสตร์",
      "room": 314,
      "teacher": "ธิดารัตน์"
    },
    {
      "period": 2,
      "start": "09:30",
      "end": "10:20",
      "subject-code": "ว30261",
      "subject-name": "โลกและดาราศาสตร์",
      "room": 314,
      "teacher": "ธิดารัตน์"
    },
    {
      "period": 3,
      "start": "10:20",
      "end": "11:10",
      "subject-code": "ง33201",
      "subject-name": "อิเล็กทรอนิกส์",
      "room": 323,
      "teacher": "สุวรรณ"
    },
    {
      "period": 4,
      "start": "11:10",
      "end": "12:00",
      "subject-code": "-",
      "subject-name": "พักกลางวัน",
      "room": 0,
      "teacher": ""
    },
    {
      "period": 5,
      "start": "12:00",
      "end": "12:50",
      "subject-code": "ค30201",
      "subject-name": "คณิตศาสตร์พื้นฐาน",
      "room": 321,
      "teacher": "สมศักดิ์"
    },
    {
      "period": 6,
      "start": "12:50",
      "end": "13:40",
      "subject-code": "ท30201",
      "subject-name": "ภาษาไทย",
      "room": 1232,
      "teacher": "อุบล"
    },
    {
      "period": 7,
      "start": "13:40",
      "end": "14:30",
      "subject-code": "ค30202",
      "subject-name": "คณิตศาสตร์เพิ่มเติม",
      "room": 1232,
      "teacher": "วิทยา"
    },
    {
      "period": 8,
      "start": "14:30",
      "end": "15:20",
      "subject-code": "ง30202",
      "subject-name": "คอมพิวเตอร์",
      "room": 521,
      "teacher": "มงคล"
    }
  ],
  "Tuesday": [
    {
      "period": 0,
      "start": "08:30",
      "end": "08:40",
      "subject-code": "",
      "subject-name": "Home room",
      "room": 0,
      "teacher": ""
    },
    {
      "period": 1,
      "start": "08:40",
      "end": "09:30",
      "subject-code": "ค32201",
      "subject-name": "คณิตศาสตร์เพิ่มเติม",
      "room": 1232,
      "teacher": "ธงชัย"
    },
    {
      "period": 2,
      "start": "09:30",
      "end": "10:20",
      "subject-code": "ว30221",
      "subject-name": "ฟิสิกส์พื้นฐาน",
      "room": 333,
      "teacher": "วิชัย"
    },
    {
      "period": 3,
      "start": "10:20",
      "end": "11:10",
      "subject-code": "อ30203",
      "subject-name": "ภาษาอังกฤษ",
      "room": 121,
      "teacher": "สุนิสา"
    },
    {
      "period": 4,
      "start": "11:10",
      "end": "12:00",
      "subject-code": "-",
      "subject-name": "พักกลางวัน",
      "room": 0,
      "teacher": ""
    },
    {
      "period": 5,
      "start": "12:00",
      "end": "12:50",
      "subject-code": "ว30223",
      "subject-name": "เคมี",
      "room": 314,
      "teacher": "พิมพ์พร"
    },
    {
      "period": 6,
      "start": "12:50",
      "end": "13:40",
      "subject-code": "ว30223",
      "subject-name": "เคมี",
      "room": 314,
      "teacher": "พิมพ์พร"
    },
    {
      "period": 7,
      "start": "13:40",
      "end": "14:30",
      "subject-code": "ส32101",
      "subject-name": "สังคมศึกษา",
      "room": 1232,
      "teacher": "สุจิตรา"
    },
    {
      "period": 8,
      "start": "14:30",
      "end": "15:20",
      "subject-code": "พ30201",
      "subject-name": "พละศึกษา",
      "room": 542,
      "teacher": "อนันต์"
    }
  ],
  "Wednesday": [
    {
      "period": 0,
      "start": "08:30",
      "end": "08:40",
      "subject-code": "",
      "subject-name": "Home room",
      "room": 0,
      "teacher": ""
    },
    {
      "period": 1,
      "start": "08:40",
      "end": "09:30",
      "subject-code": "ว30202",
      "subject-name": "ฟิสิกส์เพิ่มเติม",
      "room": 333,
      "teacher": "สุปรียา"
    },
    {
      "period": 2,
      "start": "09:30",
      "end": "10:20",
      "subject-code": "ท30202",
      "subject-name": "ภาษาไทยเพิ่มเติม",
      "room": 121,
      "teacher": "อุบลวรรณ์"
    },
    {
      "period": 3,
      "start": "10:20",
      "end": "11:10",
      "subject-code": "ส32102",
      "subject-name": "ประวัติศาสตร์",
      "room": 1232,
      "teacher": "ชุติมา"
    },
    {
      "period": 4,
      "start": "11:10",
      "end": "12:00",
      "subject-code": "-",
      "subject-name": "พักกลางวัน",
      "room": 0,
      "teacher": ""
    },
    {
      "period": 5,
      "start": "12:00",
      "end": "12:50",
      "subject-code": "พ30201",
      "subject-name": "พละศึกษา",
      "room": 542,
      "teacher": "อนันต์"
    },
    {
      "period": 6,
      "start": "12:50",
      "end": "13:40",
      "subject-code": "ง32903",
      "subject-name": "กิจกรรมลูกเสือ",
      "room": 0,
      "teacher": ""
    }
  ]
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
      }
    next();
});

// Function to get the current day and time in Bangkok timezone
function getCurrentDayAndTime() {
  const now = moment().tz("Asia/Bangkok");
  const day = now.format("dddd");
  const time = parseInt(now.format("HHmm"), 10);
  // const day = 'Monday'
  // const time = parseInt(`0920`, 10);
  return { day, time };
}

function getCurrentPeriod() {
  const { day, time } = getCurrentDayAndTime();

  console.log(`day: ${day}, time: ${time}`);

  if (schedule.hasOwnProperty(day)) {
    const currentSchedule = schedule[day];
    for (const period of currentSchedule) {
      const startTime = parseInt(period.start.replace(":", ""), 10);
      const endTime = parseInt(period.end.replace(":", ""), 10);

      if (time >= startTime && time < endTime) {
        return period;
      }
    }
    return { message: "No class found" };
  } else {
    return { message: "No schedule available for today" };
  }
}

// Express route to handle requests
app.get('/', (req, res) => {
  res.json(schedule)
})


app.get("/now/", (req, res) => {
  res.json(getCurrentPeriod());
});
app.get("/next/", (req, res) => {
  const { day } = getCurrentDayAndTime();
  const next = schedule[day].find(
    (current) => current.period === getCurrentPeriod().period + 1,
  );

  res.json(next);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
