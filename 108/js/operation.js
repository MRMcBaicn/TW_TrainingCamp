$(function () {
    //需要以server模式运行才能获得数据，为了其他小伙伴方便看效果，换一种方式得到数据，本行注释
    // $.getJSON("js/answerList.json", function (data) {
    //     allAnswer = data;
    // })
    $(".calculate").click(function () {
        let score = 0;

        score += getScoreOfFillInBlank(1, 2);
        score += getScoreOfChoice(2, 2);
        score += getScoreOfChoice(3, 2);
        score += getScoreOfChoice(4, 2);
        score += getScoreOfFillInBlank(5, 1);

        $(".score").text(score.toString());

        alert("学号：  " + $("#id").val() + "\n姓名：  " + $("#name").val() + "\n成绩：  " + score);
    });
});

//获得填写题的得分（包括填空题，简单题）
function getScoreOfFillInBlank(qNumber, qCount) {
    let array = [];
    for (let i = 1; i <= qCount; i++) {
        let val = [];
        $("[name=Q" + qNumber + "-" + i + "]").each(function () {
            let data = $(this).val();
            val.indexOf(data) === -1 ? val.push(data) : null;

        });
        array.push(val)
    }

    return array.reduce((score, value, index) => {
        for (let temp of value) {
            allAnswer[qNumber - 1].answer[index].indexOf(temp.trim()) !== -1 ? score += allAnswer[qNumber - 1].score : null;
        }
        return score;
    }, 0);
}


//获得选择题得分（包括单选，多选，判断）
function getScoreOfChoice(qNumber, qCount) {
    let array = [];

    for (let i = 1; i <= qCount; i++) {
        let val = "";
        $("[name=Q" + qNumber + "-" + i + "]:checked").each(function () {
            val += $(this).val();
        })
        array.push(val);
    }

    return array.reduce((score, value, index) => {
        return score + (value === allAnswer[qNumber - 1].answer[index] ? allAnswer[qNumber - 1].score : 0);
    }, 0);
}

let allAnswer = [{
        "score": 5,
        "answer": [
            ["统一建模语言"],
            ["分装性", "继承性", "多态性"]
        ]
    },
    {
        "score": 10,
        "answer": ["b", "a"]
    },
    {
        "score": 10,
        "answer": ["abd", "abc"]
    },

    {
        "score": 10,
        "answer": ["b", "a"]
    },

    {
        "score": 20,
        "answer": [
            ["模型是对现实的简化和抽象，模型是对所研究的系统、过程、事物或者概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。"]
        ]
    }
];