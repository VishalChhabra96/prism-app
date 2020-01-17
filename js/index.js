$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });
    $("#linkid1").click();
});

function toggleView(page) {
    if(page === 'PrismSetup') {
        $("#linkid1").click();
    }
    if(page === 'ExecutionPage') {
        $("#linkid2").click();
    }
    if(page === 'DashboardPage') {
        $("#linkid3").click();
    }
}

function save2File(type) {
    let data = '';
    let name = document.getElementById(`${type}-usr`);
    let sel0 = document.getElementById(`${type}-sel0`);
    let sel1 = document.getElementById(`${type}-sel1`);
    let loc = document.getElementById(`${type}-loc`);
    if(type === 'api') {
        data = name.value + '\n' + sel0.value + '\n' + sel1.value + '\n' + loc.value;
    }
    else if(type === 'mobile') {
        let sel2 = document.getElementById(`${type}-sel2`);
        data = name.value + '\n' + sel0.value + '\n' + sel1.value + '\n' + sel2.value + '\n' + loc.value;
    }
    else
    {
        let sel2 = document.getElementById(`${type}-sel2`);
        let sel3 = document.getElementById(`${type}-sel3`);
        data = name.value + '\n' + sel0.value + '\n' + sel1.value + '\n' + sel2.value + '\n' + sel3.value + '\n' + loc.value;
    }
    let textToBLOB = new Blob([data], { type: 'text/plain' });
    let sFileName = `${type}-FormInputs.txt`;
    let newLink = document.createElement("a");
    newLink.download = sFileName;
    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click();
}