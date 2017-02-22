/* ContactView is parent of ContactItem & ContactForm */
var ContactView = React.createClass({
    propTypes: {
        contacts: React.PropTypes.array.isRequired,
        newContact: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onContactChange: React.PropTypes.func.isRequired
    },
    render: function () {
        // Construct an array of ContactItems from the contacts array
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
                    value: this.props.newContact,
                    onChange: this.props.onChange,
                    onContactChange: this.props.onContactChange
                })
            )
        );
    }
});

/* ContactForm is a child of ContactView */
var ContactForm = React.createClass({
    propTypes: {
        onChange: React.PropTypes.func.isRequired,
        onContactChange: React.PropTypes.func.isRequired,
        value: React.PropTypes.object.isRequired
    },

    onNameInput: function (e) {
        this.props.onChange(Object.assign({}, this.props.value, {
            name: e.target.value
        }))
    },

    onEmailInput: function (e) {
        this.props.onChange(Object.assign({}, this.props.value, {
            email: e.target.value
        }))
    },

    onDescriptionInput: function (e) {
        this.props.onChange(Object.assign({}, this.props.value, {
            description: e.target.value
        }))
    },

    onSubmit: function (e) {
        e.preventDefault();
        this.props.onSubmit()
    },


    render: function () {
        var oldContact = this.props.value;
        var onChange = this.props.onChange;

        return (
            React.createElement('form', {
                    className: 'ContactForm'
                },
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Name (Required)',
                    value: this.props.value.name,
                    className: 'ContactForm-name',
                    onInput: this.onNameInput,
                }),
                React.createElement('input', {
                    type: 'email',
                    placeholder: 'Email (Required)',
                    value: this.props.value.email,
                    className: 'ContactForm-email',
                    onInput: this.onEmailInput
                }),
                React.createElement('textarea', {
                    placeholder: 'Description',
                    value: this.props.value.description,
                    className: 'ContactForm-description',
                    onInput: this.onDescriptionInput
                }),
                React.createElement('button', {
                    type: 'submit',
                    className: 'ContactForm-button'
                }, 'Add contact')
            )
        );
    }
});

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
                React.createElement(ContactView, {
                    contacts: contacts,
                    newContact: {
                        name: "",
                        email: "",
                        description: ""
                    },
                    onChange: function (contact) {
                        console.log(contact);
                    },
                    onContactChange: function (contact) {
                        console.log(contact);
                    }
                })
            ),
            React.createElement('div', {
                className: 'ms-Grid-col ms-u-sm1 ms-u-md2'
            })
        )
    );


ReactDOM.render(rootElement, document.getElementById('react-app'));