function searchTable(val) {
    var showRow = true;
    var rowObj = "";
    $(".table-responsive .table tr").each(function (i) {
        showRow = false;
        rowObj = $(this);
        $(this).find("td").each(function (k) {
            if ($(this).text().toLowerCase().indexOf(val.toLowerCase()) != -1) {
                showRow = true;
                return false;
            }
        });
        if (showRow) {
            $(".table-responsive .table thead tr").show();
            rowObj.show();
        }
        else {
            $(".table-responsive .table thead tr").show();
            rowObj.hide();
        }
    });
}