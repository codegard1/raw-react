/* ContactForm is a child of ContactView */
var ContactForm = React.createClass({
    propTypes: {
        value: React.PropTypes.object.isRequired,
        onSubmit: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired
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
                    onSubmit: this.onSubmit,
                    className: 'ContactForm',
                    noValidate: true
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