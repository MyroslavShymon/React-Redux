import React from "react";
import { connect } from "react-redux";
import { createPost, setAlert } from "../redux/actions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    if (newPost.title.trim()) {
      this.props.createPost(newPost);
    } else {
      this.props.setAlert("Please eneter the title of post");
    }
    this.setState({ title: "" });
  };

  changeInputHandler = (event) => {
    event.persist();
    const { name, value } = event.currentTarget;
    this.setState((prev) => ({
      ...prev,
      ...{
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <>
        {this.props.alert}
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name=""
            id=""
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
          <button onClick={this.changeInputHandler} type="submit">
            Add Post
          </button>
        </form>
      </>
    );
  }
}
// createPost
const mapDispatchToProps = {
  createPost,
  setAlert,
};

const mapStateToProps = (state) => {
  return {
    alert: state.app.text,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
