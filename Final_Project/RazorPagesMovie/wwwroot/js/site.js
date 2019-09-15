$("input[name='SearchString']").on('input', function () {
    ShowHideTableEntries($("input[name='SearchString']").val());
});

function ShowHideTableEntries(searchText) {
    // make all visible and return
    if (!searchText || searchText.length <= 0) {
        $(".table>tbody>tr").css('display','');
        return;
    }

    // for each entry in table hide any entry that doesn't contain the text
    $(".table>tbody>tr>td:first-child").each(function (index) {
        var elementText = $(this).text();
        // if it matches search make it visible otherwise hidden
        if (elementText.includes(searchText)) {
            $(this).parent().css('display','');
        }
        else {
            $(this).parent().css('display','none');
        }
    });
}