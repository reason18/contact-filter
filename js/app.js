var contactsList = [
            {
                id: 1,
                name: 'Darth Vader',
                phoneNumber: '+250966666666',
                image: 'img/DV.png'
            }, {
                id: 2,
                name: 'Princess Leia',
                phoneNumber: '+250966344466',
                image: 'img/leia.png'
            }, {
                id: 3,
                name: 'Luke Skywalker',
                phoneNumber: '+250976654433',
                image: 'img/skywalker.ico'
            }, {
                id: 4,
                name: 'Chewbacca',
                phoneNumber: '+250456784935',
                image: 'img/chewbacca.png'
            }
        ];

var Contact = React.createClass({
  render: function() {
    return (
      <li className="contact">
        <img src={this.props.icon} width="60px" height="60px" className="contact-image"/>
        <div className="contact-info">
          <div className="contact-name"> {this.props.name} </div>
          <div className="contact-number"> {this.props.phoneNumber} </div>
        </div>
      </li>
    )
  }
})

var App = React.createClass({
  getInitialState: function () {
    return {
      displayedContacts: contactsList
    }
  },
  handleSearch: function(e) {
    var searchQuery = e.target.value.toLowerCase();
    var displayedContacts = contactsList.filter(function(el) {
      var searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !==-1;
    })
    this.setState({
      displayedContacts: displayedContacts
    })
  },
  render: function() {
    return (
      <div className="contacts">
        <input type="text" className="search-field" onChange={this.handleSearch} />
        <ul className="contacts-list">
          {
            this.state.displayedContacts.map(function(el, index) {
              return (
                <Contact
                  name={el.name}
                  key={el.id}
                  phoneNumber={el.phoneNumber}
                  icon={el.image}
                />
              )
            })
          }
        </ul>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('content')
)
