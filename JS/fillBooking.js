$(document).ready(function () {
    //input defalt device
    $.post("MobilityDevice.php", function (data, status) {
        var dev=$("select[name=\"device\"");
        dev.val(data.toLowerCase())
    })
    $("#homeAddBox").click(function () {
        //input defalt home address for user
        var pAdd = $("input[name=\"pickupaddress\"]");
        var pCity = $("select[name=\"pickupCity\"");
        var rCity = $("select[name=\"returnTripCity\"");
        var pPostal = $("input[name=\"pickupPostalcode\"]");
        if ($(this).prop("checked") == true) {
            //request home adress
            $.post("homeAdd.php", function (data, status) {
                
                var add =JSON.parse(data)
                pAdd.val(add.address)
                pPostal.val(add.postal)
                pCity.val(add.city)
                rCity.val(add.city)

            })
        } else if ($(this).prop("checked") == false) {
            pAdd.val("");
            pPostal.val("");
        }
    })
}
)