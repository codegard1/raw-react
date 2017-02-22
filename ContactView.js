/* ContactView is parent of ContactItem & ContactForm */
var ContactView = React.createClass({
    propTypes: {
        contacts: React.PropTypes.array.isRequired,
        newContact: React.PropTypes.object.isRequired,
        onNewContactChange: React.PropTypes.func.isRequired
    },
    render: function () {
        // Construct an array of ContactItems from the contacts array
        var contactItemElements = this.props.contacts
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
                    onChange: this.props.onNewContactChange,
                    onSubmit: function () {
                        alert('submit!');
                    }
                })
            )
        );
    }
});