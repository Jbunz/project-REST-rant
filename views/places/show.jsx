const React = require("react");
const Def = require("../default");

function Show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )

    comments = data.place.comments.map(c => {
      return (
        <div className="border col-sm-4">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😊'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }

  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h2>
              Rating
            </h2>
            {rating}
            {/* Other content */}
          </div>
        </div>
        <h2>Comments</h2>
        {comments}
      </main>

      <a href={`/places/${data.id}/edit`} className="btn btn-warning">
        Edit
      </a>
      <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
      <h1>Edit Place</h1>
<form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
    ...
    <div className="row">
        ...
        <div className="form-group col-sm-4">
            <label htmlFor="founded">Founded</label>
            <input className="form-control" 
              id="founded" 
              name="founded" 
              value={data.place.founded} 
            />
        </div>
    </div>
    ...
    <input className="btn btn-primary" type="submit" value="Update Place" />
</form>

    </Def>
  );
}

module.exports = Show;
