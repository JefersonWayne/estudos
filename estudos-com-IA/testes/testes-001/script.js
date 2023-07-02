document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var day = parseInt(document.getElementById('day').value);
    var month = parseInt(document.getElementById('month').value);
    var year = parseInt(document.getElementById('year').value);

    var today = new Date();
    var birthDate = new Date(year, month - 1, day);
    var ageYears = today.getFullYear() - birthDate.getFullYear();
    var ageMonths = today.getMonth() - birthDate.getMonth();
    var ageDays = today.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        var lastMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        ageDays += lastMonthDate.getDate();
        ageMonths--;
    }

    var result = ageYears + ' anos, ' + ageMonths + ' meses e ' + ageDays + ' dias.';
    document.getElementById('result').textContent = result;
});
