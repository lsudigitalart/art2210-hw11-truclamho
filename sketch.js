let wifiUsageData = []; 
let facilitiesTable; 
const cellWidth = 120;
const cellHeight = 30;

function preload() {
  facilitiesTable = loadTable("BRWifiStats.csv", "csv", "header");
}

function setup() {
  createCanvas(2200, 750);

  for (let i = 0; i < facilitiesTable.getRowCount(); i++) {
    let row = facilitiesTable.getRow(i);
    let id = row.getString('ID');
    let year = row.getString('YEAR');
    let month = row.getString('MONTH');
    let main = row.getNum('MAIN');
    let baker = row.getNum('BAKER');
    let bluebonnet = row.getNum('BLUEBONNET');
    let carver = row.getNum('CARVER');
    let central = row.getNum('CENTRAL');
    let delmont = row.getNum('DELMONT GARDENS');
    let edenPark = row.getNum('EDEN PARK');
    let fairwood = row.getNum('FAIRWOOD');
    let greenwellSprings = row.getNum('GREENWELL SPRINGS');
    let jonesCreek = row.getNum('JONES CREEK');
    let pride = row.getNum('PRIDE');
    let riverCenter = row.getNum('RIVER CENTER');
    let scotlandville = row.getNum('SCOTLANDVILLE');
    let zachary = row.getNum('ZACHARY');
    let wifiUsageTotal = row.getNum('WIFI USAGE TOTAL');
    
    wifiUsageData.push({ id, year, month, main, baker, bluebonnet, carver, central, delmont, edenPark, fairwood, greenwellSprings, jonesCreek, pride, riverCenter, scotlandville, zachary, wifiUsageTotal });
  }
}

function draw() {
  background(0);

  // table headers
  textSize(12);
  fill(255);
  textAlign(CENTER, CENTER);

  // column headers
  let headers = ['ID', 'Year', 'Month', 'Main', 'Baker', 'Bluebonnet', 'Carver', 'Central', 'Delmont', 'Eden Park', 'Fairwood', 'Greenwell Springs', 'Jones Creek', 'Pride', 'River Center', 'Scotlandville', 'Zachary', 'Wifi Usage Total'];
  for (let i = 0; i < headers.length; i++) {
    text(headers[i], cellWidth * i + 60, 30);
  }

  // data rows
  for (let i = 0; i < wifiUsageData.length; i++) {
    let yPosition = (i + 1) * cellHeight + 40;
    let data = wifiUsageData[i];

    // cells for each coloumns
    text(data.id, cellWidth * 0 + 60, yPosition);
    text(data.year, cellWidth * 1 + 60, yPosition);
    text(data.month, cellWidth * 2 + 60, yPosition);
    text(data.main, cellWidth * 3 + 60, yPosition);
    text(data.baker, cellWidth * 4 + 60, yPosition);
    text(data.bluebonnet, cellWidth * 5 + 60, yPosition);
    text(data.carver, cellWidth * 6 + 60, yPosition);
    text(data.central, cellWidth * 7 + 60, yPosition);
    text(data.delmont, cellWidth * 8 + 60, yPosition);
    text(data.edenPark, cellWidth * 9 + 60, yPosition);
    text(data.fairwood, cellWidth * 10 + 60, yPosition);
    text(data.greenwellSprings, cellWidth * 11 + 60, yPosition);
    text(data.jonesCreek, cellWidth * 12 + 60, yPosition);
    text(data.pride, cellWidth * 13 + 60, yPosition);
    text(data.riverCenter, cellWidth * 14 + 60, yPosition);
    text(data.scotlandville, cellWidth * 15 + 60, yPosition);
    text(data.zachary, cellWidth * 16 + 60, yPosition);
    text(data.wifiUsageTotal, cellWidth * 17 + 60, yPosition);
  }
}
