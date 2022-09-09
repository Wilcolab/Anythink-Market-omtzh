import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  function handleChange(e) {
    e.preventDefault();
    const title = e.target.value;

    if (title.length > 2) {
      props.onTitleChange(
        title,
        (page) => agent.Items.byName(title, page),
        agent.Items.byName(title)
      );
    } else {
      props.onTitleChange(
        "",
        (page) => agent.Items.all(page),
        agent.Items.all()
      );
    }
  }

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            id="search-box"
            type="text"
            placeholder="What is it that you truly desire?"
            onChange={handleChange}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
