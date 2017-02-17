/* contacts is passed to rootElement */
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

/* newContact is passed to ContactView */
var newContact = {
    name: "",
    email: "",
    description: ""
}

/* ContactView is parent of ContactItem & ContactForm */
var ContactView = React.createClass({
    propTypes: {
        contacts: React.PropTypes.array.isRequired,
        newContact: React.PropTypes.object.isRequired
    },
    render: function () {
        var contactItemElements = this.props.contacts
            .filter(function (contact) {
                return contact.email
            })
            .map(function (contact) {
                return React.createElement(ContactItem, contact)
            });
        return (
            React.createElement('div', {
                    className: 'ContactView'
                },
                React.createElement('h1', {
                    className: 'ContactView-title'
                }, "Contacts"),
                React.createElement('ul', {
                    className: 'ContactView-list'
                }, contactItemElements),
                React.createElement(ContactForm, {
                    contact: this.props.newContact,
                    /*onChange: function (contact) {
                        console.log(contact);
                    }*/
                })
            )
        );
    }
});

/* ContactForm */
var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired
    },
    render: function () {
        return (
            React.createElement('form', {
                    className: 'ContactForm'
                },
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Name (Required)',
                    value: this.props.contact.name,
                    className: 'ContactForm-name'
                }),
                React.createElement('input', {
                    type: 'email',
                    placeholder: 'Email (Required)',
                    value: this.props.contact.email,
                    className: 'ContactForm-email'
                }),
                React.createElement('textarea', {
                    placeholder: 'Description',
                    value: this.props.contact.description,
                    className: 'ContactForm-description'
                }),
                React.createElement('button', {
                    type: 'submit',
                    className: 'ContactForm-button'
                }, 'Add contact')
            )
        );
    }
});

/* ContactItem is child of ContactView */
var ContactItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
        //description: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('li', {
                    className: 'ContactItem'
                },
                React.createElement('h2', {
                    className: 'ContactItem-name'
                }, this.props.name),
                React.createElement('a', {
                    className: 'ContactItem-email',
                    href: "mailto:" + this.props.email
                }, this.props.email),
                React.createElement('p', {
                    className: 'ContactItem-description'
                }, this.props.description)
            )
        );
    }
});

/* props: contacts, newContact */
var rootElement =
    React.createElement('div', {
            className: 'ms-Grid'
        },
        React.createElement('div', {
                className: 'ms-Grid-row'
            },
            React.createElement('div', {className: 'ms-Grid-col ms-u-sm1'}),
            React.createElement('div', {
                    className: 'ms-Grid-col ms-u-sm10'
                },
                React.createElement(ContactView, {
                    contacts: contacts,
                    newContact: newContact
                })
            ),
            React.createElement('div', {className: 'ms-Grid-col ms-u-sm1'})
        )
    );


ReactDOM.render(rootElement, document.getElementById('react-app'));