const SITEWRAP = require('../elements/SITEWRAP.js');

service auth (){
  console.log("hey");
}
service login () {
  return (
    <sitewrap>
      <h1>Login</h1>
      <form onSubmit="return false;">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" name="username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" name="password" />
        </div>
        <button
    onclick=~{${auth}().post(()=>console.log("hey"), {header: {"test":"header"}})}
          class="btn btn-primary"
          type="submit">
            Submit
        </button>
      </form>
    </sitewrap>
  )
}
