var state = {};

function setState(changes) {
  Object.assign(state, changes);

  ReactDOM.render(
    React.createElement(rootElement, Object.assign({}, state, {
      onNewContactChange: function(contact) {
        setState({newContact: contact});
      },
    })),
    document.getElementById('react-app')
  );
}

/* contacts is passed to ContactView in rootElement */
var contacts = [{
        key: 1,
        name: "Chris Odegard",
        email: "chris@chrisco.com",
        description: "Bleep blorp"
    }, {
        key: 2,
        name: "Bunna Kanna Gakka Klang",
        email: "bunnakanna@zipzoop.net"
    }, {
        key: 3,
        name: "Joe"
    },
    {
        key: 4,
        name: 'Booznorch McGorch',
        email: 'booznorch@mcGorch.org',
        description: 'The one and only'
    },
    {
        key: 5,
        name: 'Phil Lepton',
        email: 'phill@mscdeufpaka.edu',
        description: 'In lamens terms I\'m the particle czar'
    }
];


/* props: contacts, newContact */
var rootElement =
    React.createElement('div', {
            className: 'ms-Grid'
        },
        React.createElement('div', {
                className: 'ms-Grid-row'
            },
            React.createElement('div', {
                className: 'ms-Grid-col ms-u-sm1 ms-u-md2'
            }),
            React.createElement('div', {
                    className: 'ms-Grid-col ms-u-sm10 ms-u-md8'
                },
                React.createElement(ContactView, Object.assign({}, state, {
                    contacts: contacts,
                    newContact: {
                        name: "",
                        email: "",
                        description: ""
                    },
                    onChange: function (contact) {
                        console.log(contact);
                    },
                    onNewContactChange: this.props.onContactChange
                }))
            ),
            React.createElement('div', {
                className: 'ms-Grid-col ms-u-sm1 ms-u-md2'
            })
        )
    );


ReactDOM.render(rootElement, document.getElementById('react-app'));