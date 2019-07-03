import React from "react";
import NavBar from "../NavBar";
import "./styles/BadgeNew.css";
import Badges from "../badges";
import BadgeFrom from "../BadgeForm";
import Logo from "../../images/logo.svg";

class BadgeNew extends React.Component {
  state = { form: {
      firstName: '',
      lastName: '',
      email: '',
      jotTitle: '',
      twitter:''
  } };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={Logo} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badges
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="http://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60"
              />
            </div>
            <div className="col-6">
              <BadgeFrom
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
