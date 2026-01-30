function doGet() {
    return HtmlService.createTemplateFromFile('index')
        .evaluate()
        .setTitle('サンプルGASアプリ')
        .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getData() {
    const ssId = '';
    const ss = SpreadsheetApp.openById(ssId);
    const sheet = ss.getSheets()[0]; // Get the first sheet
    const data = sheet.getDataRange().getValues();

    if (data.length === 0) {
        return [];
    }

    const headers = data[0];
    const rows = data.slice(1);

    // Map rows to objects for easier consumption on frontend
    const result = rows.map(row => {
        let obj = {};
        headers.forEach((header, index) => {
            obj[header] = row[index];
        });
        return obj;
    });

    return {
        headers: headers,
        data: result
    };
}
