import React from "react";

class MoovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      poster: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitForm(e) {
    e.preventDefault();
  }
  render() {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };
    const url = " http://campus-bordeaux.ovh:3001/api/quests/movies/";
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ajouté à l'ID : ${res}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Erreur lors de l'ajout de votre film");
      });

    return (
      <div className="formMoovie">
        <h1>Mon film favoris</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="name">Titre</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Url de l'affiche</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="email">Commentaire</label>
              <textarea
                rows="5"
                cols="35"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Poste ton film" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default MoovieForm;
