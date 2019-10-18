import React, { useState } from "react";

export default function SearchForm(props) {
  const  handleChange = event => {
    props.setFilter(event.target.value)
  }
  return (
    <section className="search-form">
      <form>
        <input type="text" placeholder="Character name" value={props.filter} onChange={handleChange}/>
      </form>
    </section>
  );
}
