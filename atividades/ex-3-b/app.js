"strict";
import Students from "./students.js";

// Reactzim raiz
const e = React.createElement;
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e(
            "div",
            null,
            e("h1", null, "Estudantes"),
            e("p", null, "O que você deseja visualizar?"),
            e(Students, null),
        )
    }
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));