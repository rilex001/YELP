import React from 'react'

const Landing = () => {
    return (
      <div className=".align-self-lg-center">
          <div className="container">
          <form action="/action_page.php">
            <div class="form-group">
              <label for="email">Name:</label>
              <input type="text" class="form-control" id="name" />
            </div>
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" />
            </div>
              <button type="submit" class="btn btn-default">Submit</button>
          </form>
          </div>
      </div>
    )
}

export default Landing
