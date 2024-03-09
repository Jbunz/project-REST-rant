const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img src="/images/oops.jpg" alt="oops kid" />
          <div>
            "Photo by{" "}
            <a href="https://unsplash.com/@ilumire?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Jelleke Vanooteghem
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/toddler-holding-her-lips-kabtmcdcAbk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
