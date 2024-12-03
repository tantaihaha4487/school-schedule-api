const { createCanvas, GlobalFonts } = require('@napi-rs/canvas');
GlobalFonts.registerFromPath('./Kanit-ExtraLight.ttf', 'Kanit');

 async function createTableImage(schedule) {
  const width = 800;
  const height = 400;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);
  ctx.font = 'bold 14px Kanit';
  ctx.fillStyle = '#000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  let x = width / 2;
  let y = 50;
  ctx.fillText('Schedule', x, y);
  y += 50;

  days.forEach((day) => {
    ctx.fillText(day, x, y);
    y += 50;
    schedule[day].forEach((period) => {
      const text = `${period.period} ${period['subject-name']} ${period.room} ${period.teacher}`;
      ctx.fillText(text, x, y);
      y += 30;
    });
    y += 50;
  });

  return canvas.toBuffer('image/png');
}

async function createDayTableImage(schedule) {
  const width = 800;
  const height = 400;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);
  ctx.font = 'bold 14px Kanit';
  ctx.fillStyle = '#000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  let x = width / 2;
  let y = 50;
  ctx.fillText('Schedule', x, y);
  y += 50;

  y += 50;
  schedule.forEach((period) => {
    const text = `${period.period} ${period['subject-name']} ${period.room} ${period.teacher}`;
    ctx.fillText(text, x, y);
    y += 30;
  });
  y += 50;

  return canvas.toBuffer('image/png');
}

module.exports = { createTableImage, createDayTableImage };