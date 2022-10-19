import React, { useState } from "react";
import { data } from "./data";

function SearchFilter() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="container">
        <h2 className="text-center mt-4">Contact Keeper</h2>
        <form>
          <input
            className="form-control"
            placeholder="Search Contacts"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.first_name.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default SearchFilter;
