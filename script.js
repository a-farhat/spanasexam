
const domContainer = document.querySelector('#entryForm_container');
//ReactDOM.render(e(FormData), domContainer);

function createSQL () {

    let vQID = document.getElementById("txtQID").value;    
    let vExamSection = document.getElementById("txtExamSection").value;
    let vNum = document.getElementById("txtNum").value;
    let vQuestion = document.getElementById("txtQuestion").value;
    let vA = document.getElementById("txtA").value;
    let vB = document.getElementById("txtB").value;
    let vC= document.getElementById("txtC").value;
    let vD= document.getElementById("txtD").value;
    let vAnswer = document.getElementById("txtAnswer").value;
    

    //INSERT [dbo].[ExamQuestions] ([QID], [ExamSection], [Num], [Question], [A], [B], [C], [D], [Answer]) VALUES (51, N'Comprehensive', 1, N'A patient with cataract would most commonly complain of which symptoms' ,N'Halos and rainbows around lights', N'Eye pain and irritation that worsens at night' ,N'Blurred and hazy vision', N'Eye strain and headache when doing close work' ,N'c')
    
    let sqlString = 'Insert into ExamQuestions ([QID], [ExamSection], [Num], [Question], [A], [B], [C], [D], [Answer]) VALUES('+vQID;
    console.log(sqlString)

}
