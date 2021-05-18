document.getElementById("connect-hotspot-btn").onclick = function() {connect_hotspot()};
document.getElementById("connect-wifi-btn").onclick = function() {connect_wifi()}


function connect_hotspot() 
{
    //alert("Connect hospot button clicked.")

    if (confirm('Updating hotspot settings will restart the printer. Continue?')) 
    {
         
        document.getElementById("connect-hotspot-btn-hidden").click();
        alert("Printer will be restarted. Connect to it to access this page again.")
    } 
 
}

function connect_wifi()
{
    //alert("Connect wifi button clicked.")

    if (confirm('Updating Wi-Fi settings will restart the printer. Continue?')) 
    {
        document.getElementById("connect-wifi-btn-hidden").click();
        alert("Printer will be restarted. Connect to it to access this page again.")
    } 
 
}