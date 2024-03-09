const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>Home</h1>
        <div>
          <img src="/images/I-like-beer.jpg" alt="Beer" />
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/@enginakyurt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              engin akyurt
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/clear-glass-beer-mug-with-beer-3ORoQEJY9LA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
