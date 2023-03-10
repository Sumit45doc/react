import React, { useState } from "react";

function ObjState() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form action="nodejs">
        <input
          type="text"
          name="name"
          id="name"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          name="name"
          id="name"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  );
}

export default ObjState;
