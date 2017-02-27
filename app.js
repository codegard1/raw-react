var state = {};

function setState(changes) {
    Object.assign(state, changes);

    ReactDOM.render(
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
                        onNewContactChange: updateNewContact,
                        onNewContactSubmit: submitNewContact
                    })),
                    React.createElement('div', {
                        className: 'ms-Grid-col ms-u-sm1 ms-u-md2'
                    })
                )
            ) // end ms-Grid-row
        ),
        document.getElementById('react-app')
    );
}

function updateNewContact(contact) {
    console.log(contact);
    setState({
        newContact: contact
    });
}

var CONTACT_TEMPLATE = {
    name: "",
    email: "",
    description: "",
    errors: null
};

function submitNewContact() {
    var contact = Object.assign({}, state.newContact, {
        key: state.contacts.length + 1,
        errors: {}
    });
    if (contact.name && contact.email) {
        setState(
            Object.keys(contact.errors).length === 0 ? {
                newContact: Object.assign({}, CONTACT_TEMPLATE),
                contacts: state.contacts.slice(0).concat(contact)
            } : {
                newContact: contact
            }
        );
    }
}

// Set initial data
// yields state.contacts, state.newContact
setState({
    contacts: contacts = [{
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
    ],
    newContact: Object.assign({}, CONTACT_TEMPLATE)
});