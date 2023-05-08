import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";

function App() {
    const [form, setForm] = useState(false);
    const [button, setButton] = useState(true);

    function openForm() {
        setForm(!form);
        setButton(!button);
    }
    function closeForm() {
        setForm(!form);
        setButton(!button);
    }

    return (
        <div className="app-main-container">
            <div className="app-form-container">
                {button && (
                    <div className="app-close-container">
                        <h1>Thanks for visiting</h1>
                        <h2>Register for getting all the updates</h2>
                        <button id="open-form" onClick={openForm}>
                            Register Here!
                        </button>
                    </div>
                )}
                {form && (
                    <div className="app-form-inner-container">
                        {" "}
                        <Form />{" "}
                        <button onClick={closeForm} id="close-form">
                            X
                        </button>{" "}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
