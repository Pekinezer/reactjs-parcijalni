import "./ResponseRender.css";
function ResponseRender({ user, setIsVisible }) {
  function handleReset() {
    setIsVisible(false);
  }

  console.log(user);

  return (
    <>
      <div className="name">
        <img src={user.avatar_url} alt="avatar_url"></img>
        <h1>{user.name}</h1>
      </div>
      <div>
        <p>
          <b>BIO : </b>
          {user.bio}
        </p>
        <p>
          <b>LOCIATION : </b>
          {user.location}
        </p>
      </div>
      <div>
        <p>
          <b>REPOSITORIES : </b>
        </p>
        <ul>
          {user.repos &&
            user.repos.map((repo) => <li key={repo.id}>{repo.name}</li>)}
        </ul>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default ResponseRender;
