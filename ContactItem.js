/* ContactItem is child of ContactView */
var ContactItem = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired
    },
    render: function () {

        var emailDisplay = (this.props.email == undefined ? 'No email' : this.props.email);
        var description = this.props.description == undefined ? 'No description' : this.props.description;

        return (
            React.createElement('li', {
                    className: 'ContactItem'
                },
                React.createElement('h2', {
                    className: 'ContactItem-name'
                }, this.props.name),
                React.createElement('a', {
                    className: 'ContactItem-email',
                    href: (this.props.email == undefined ? '#' : "mailto:" + emailDisplay)
                }, emailDisplay),
                React.createElement('p', {
                    className: 'ContactItem-description'
                }, description)
            )
        );
    }
});