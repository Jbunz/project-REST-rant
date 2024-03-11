const React = require("react");
const Def = require("../default");

function show({ place, id}) {
  return (
    <Def>
      <main>
        <h1>Show Page</h1>
        <h2>{place.name}</h2>
      </main>
      <a href={`/places/${id}/edit`} className="btn btn-warning">
        Edit
      </a>
      <form method="POST" action={`/places/${id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </Def>
  );
}

module.exports = show;
