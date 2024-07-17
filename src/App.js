import { useState } from "react";
import "./App.css";
import axios from "axios";
import ResponseRender from "./ResponseRender";
let user = {
  avatar_url: "",
  name: "",
  location: "",
  bio: "",
  repos: [],
};
function App() {
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  function handleInput(e) {
    setInputValue(e.target.value);
  }
  function handleFetch() {
    if (inputValue !== "") {
      axios
        .get(`https://api.github.com/users/${inputValue}`)
        .then((response) => {
          user.avatar_url = response.data.avatar_url;
          user.name = response.data.name;
          user.location = response.data.location;
          user.bio = response.data.bio;
          axios
            .get(`https://api.github.com/users/${inputValue}/repos`)
            .then((response) => {
              user.repos = response.data;
              setIsVisible(true);
            });
        })
        .catch((e) => alert(e));
    } else {
      alert("Input nemoze biti prazan");
    }
  }

  return (
    <div className="fetchReqDiv">
      {!isVisible && (
        <>
          <span>GitHub username : </span>
          <input
            placeholder="e.g. facebook"
            onChange={handleInput}
            size={30}
          ></input>
          <button onClick={handleFetch}>GO!</button>
        </>
      )}

      {isVisible && (
        <ResponseRender
          user={user}
          setIsVisible={setIsVisible}
        ></ResponseRender>
      )}
    </div>
  );
}

export default App;
