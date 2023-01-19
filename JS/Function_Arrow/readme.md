<h1>CodeCamp 13 online</h1>
<h3>ศุภลักษณ์ ส้มแก้ว</h3>


6.2. แบบฝึกหัด
    - แปลง function ข้างล่างให้อยู่ในรูป arrow function


    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
    }

    ask(
        "Do you agree?",
        function() { alert("You agreed."); },
        function() { alert("You canceled the execution."); }
    );