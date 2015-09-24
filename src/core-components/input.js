import React              from 'react';
import classNames         from 'classnames';
import _                  from 'lodash';

var Input = React.createClass({

    propTypes: {
        value: React.PropTypes.string,
        validation: React.PropTypes.func,
        onChange: React.PropTypes.func
    },

    render() {
        return (
            <input {...this.getProps()} />
        );
    },

    getProps() {
        var props = _.clone(this.props);

        props.className = this.getClass();
        props.type = 'text';

        return props;
    },

    getClass() {
        var classes = {
            'input': true
        };

        classes[this.props.className] = (this.props.className);

        return classNames(classes);
    }
});

export default Input;