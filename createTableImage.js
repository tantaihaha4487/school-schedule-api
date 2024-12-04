const { join } = require('path');
const { createCanvas, GlobalFonts } = require('@napi-rs/canvas');
GlobalFonts.registerFromPath(join(__dirname, 'Kanit-ExtraLight.ttf'), 'Kanit');

async function createTableImage(schedule) {
  const width = 1200;
  const height = 500;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set up the canvas background
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);

  ctx.font = '11px Kanit';
  ctx.fillStyle = '#000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Table dimensions and layout
  const tableX = 50;
  const tableY = 50;
  const rowHeight = 60;
  const colWidth = 100;

  // Extract unique time slots
  const timeSlots = Array.from(
    new Set(
      Object.values(schedule)
        .flat()
        .map((period) => `${period.start}-${period.end}`)
    )
  ).sort(); // Ensure time slots are sorted

  // Calculate table dimensions
  const tableWidth = colWidth * (timeSlots.length + 1); // +1 for day column
  const tableHeight = rowHeight * (Object.keys(schedule).length + 1); // +1 for header row

  // Draw the header row
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(tableX, tableY, tableWidth, rowHeight);
  ctx.fillStyle = '#000';
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 1;

  // Draw the time slots as headers
  ctx.strokeRect(tableX, tableY, colWidth, rowHeight);
  ctx.fillText('Day', tableX + colWidth / 2, tableY + rowHeight / 2);

  timeSlots.forEach((time, index) => {
    const x = tableX + (index + 1) * colWidth;
    ctx.strokeRect(x, tableY, colWidth, rowHeight);
    ctx.fillText(time, x + colWidth / 2, tableY + rowHeight / 2);
  });

  // Draw rows for each day
  const days = Object.keys(schedule);
  days.forEach((day, rowIndex) => {
    const y = tableY + (rowIndex + 1) * rowHeight;

    // Draw the day name
    ctx.strokeRect(tableX, y, colWidth, rowHeight);
    ctx.fillText(day, tableX + colWidth / 2, y + rowHeight / 2);

    // Draw cells for time slots
    timeSlots.forEach((time, colIndex) => {
      const x = tableX + (colIndex + 1) * colWidth;
      ctx.strokeRect(x, y, colWidth, rowHeight);

      // Find the period matching the time slot
      const period = schedule[day].find(
        (p) => `${p.start}-${p.end}` === time
      );

      if (period) {
        const text = [String(period.room), period['subject-name'], period.teacher];
        const textY = [-20, 0, 20];
        text.forEach((text, i) => {
          ctx.fillText(text, x + colWidth / 2, y + rowHeight / 2 + textY[i]);
        });
      }
    });
  });

  return canvas.toBuffer('image/webp');
}

async function createDayTableImage(dayschedule) {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set up the canvas background
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);

  ctx.font = '14px Kanit';
  ctx.fillStyle = '#000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Table dimensions
  const tableX = 50;
  const tableY = 50;
  const tableWidth = width - 130;
  const rowHeight = 40;
  const colWidths = [120, 200, 150, 200]; 

  // Draw the header row
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 1;

  const headers = ['Time', 'Subject', 'Room', 'Teacher'];
  let x = tableX;
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(tableX, tableY, tableWidth, rowHeight);
  ctx.fillStyle = '#000';
  headers.forEach((header, i) => {
    const colWidth = colWidths[i];
    ctx.strokeRect(x, tableY, colWidth, rowHeight);
    ctx.fillText(header, x + colWidth / 2, tableY + rowHeight / 2);
    x += colWidth;
  });

  // Draw the rows
  let y = tableY + rowHeight;
  dayschedule.forEach((period) => {
    x = tableX;
    const timeText = `${period.start}-${period.end}`;
    const subjectText = `${period['subject-name']}`;
    const roomText = period.room === 0 ? '-' : String(period.room);
    const teacherText = period.teacher || '-';
    const rowData = [timeText, subjectText, roomText, teacherText];

    rowData.forEach((data, i) => {
      const colWidth = colWidths[i];
      ctx.strokeRect(x, y, colWidth, rowHeight);
      ctx.fillText(data, x + colWidth / 2, y + rowHeight / 2);
      x += colWidth;
    });

    y += rowHeight;
  });

  return canvas.toBuffer('image/webp');
}
module.exports = { createTableImage, createDayTableImage };