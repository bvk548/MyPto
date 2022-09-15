<script type="text/javascript" src="data.C:\Users\DB086271\OneDrive - Cerner Corporation\Desktop\MyPTO\holiday.json"></script>

var holiday = JSON.parse(holiday);
console.log(holiday);

function calculate() {
    var start_date = document.getElementById("start_date").value;
    var start = new Date(start_date);
    var end_date = document.getElementById("end_date").value;
    var end = new Date(end_date);
    var i=new Date();
    if (start != null && end != null) 
    {
        var totalweekday = 0;
        for (var i = start; i <= end; i.setDate(i.getDate() + 1))
        {
            if (i.getDay() >=1 && i.getDay()<=5)
            {
                totalweekday++;
            }
        }
    }
    console.log("you have applied PTO for "+totalweekday+" days");
    return totalweekday;
} 
   