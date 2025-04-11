"strict";
import { CONSTANTS } from "./constants.js";
import {
    getAllStudents,
    getStudentsByGender,
    getDisapprovedStudents,
    getApprovedStudents,
    areAllStudentsApproved,
    getAverageGrade
} from "./students-handler-data.js";

// Reactzim v18 Raiz
const e = React.createElement;
class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            answer: ""
        };

        fetch(CONSTANTS.STUDENTS_DATA_URL).then((response) =>
            response.json()
        ).then((data) => {
            console.log(data);
            this.setState({ students: data });
        }).catch((error) => {
            console.error("Error fetching students:", error);
        });

        console.log("Students constructor");
    }

    selectOptions = ([
        { value: "1", label: "Selecione" },
        { value: "2", label: "Todos os estudantes" },
        { value: "3", label: "Estudantes homens" },
        { value: "4", label: "Estudantes mulheres" },
        { value: "5", label: "Estudantes aprovados" },
        { value: "6", label: "Estudantes reprovados" },
        { value: "7", label: "Todos os alunos aprovados?" },
        { value: "8", label: "Nota média da turma" }
    ]);

    setAnswer = (event) => {

        const actionCode = event.target.value;
        let currentAnswer = ""

        switch (actionCode) {
            case "1":
                currentAnswer = ""
                break;
            case "2":
                currentAnswer = getAllStudents(this.state.students);
                break;
            case "3":
                currentAnswer = getStudentsByGender(this.state.students, "M");
                break;
            case "4":
                currentAnswer = getStudentsByGender(this.state.students, "F");
                break;
            case "5":
                currentAnswer = getApprovedStudents(this.state.students);
                break;
            case "6":
                currentAnswer = getDisapprovedStudents(this.state.students);
                break;
            case "7":
                currentAnswer = areAllStudentsApproved(this.state.students);
                break;
            case "8":
                currentAnswer = getAverageGrade(this.state.students);
                break;
            default:
                currentAnswer = ""
                break;
        }
        this.setState({ answer: currentAnswer });
    }

    render() {
        return e("div", { class: "container" }, e(
            "select",
            {
                title: "Select a student",
                onChange: this.setAnswer
            },
            this.state.students.length > 0 ? this.selectOptions.map(({ value, label }) => {
                return e("option", { key: value, value }, label);
            }) : e("option", null, "Carregando...")
        ),
            e("div", null, this.state.answer),
        )
    }
}

export default Students;