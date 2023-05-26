// In this case, BrowserRouter is in index.js. Either ways is fine
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Word from "./components/Word";
import Form from "./components/Form";

export default function App() {
    return (
        <div>
            <h1>React Routing</h1>
            {/* Try moving <BrowserRouter> to index.js */}
            {/* <BrowserRouter> */}
            {/* If  BrowserRouter is here, all Links and Routes need be in it tag*/}
            <Link to={"/home"}>Home</Link>
            <br />
            <Link to={"/about"}>About</Link>
            <Routes>
                {/* path defines the location on url path. element defines the component to be used*/}
                <Route path="/" element={<Form />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* "/word/:color" <-- what after ':' is a 'key name' and it will be used with useParam*/}
                <Route path="/word/:color/:id" element={<Word />} />
            </Routes>
            {/* </BrowserRouter> */}
        </div>
    );
}
