// @flow

import { translate } from '../../base/i18n';
import { IconAddPeople } from '../../base/icons';
import { invitePeople } from '../../base/media';
import { connect } from '../../base/redux';
import { AbstractButton, type AbstractButtonProps } from '../../base/toolbox/components';

type Props = AbstractButtonProps & {
    _invitePeople: Function
};

/**
 * Implements an {@link AbstractButton} to open the applications page in a new window.
 */
class InvitePeopleButton extends AbstractButton<Props, *> {
    accessibilityLabel = 'toolbar.accessibilityLabel.invite';
    icon = IconAddPeople;
    label = 'toolbar.invite';

    // eslint-disable-next-line no-useless-constructor,require-jsdoc
    constructor(props: Props) {
        super(props);
    }

    /**
     * Handles clicking / pressing the button, and opens a new window with the user documentation.
     *
     * @private
     * @returns {void}
     */
    _handleClick() {
        this.props._invitePeople();
    }
}

function _mapDispatchToProps(dispatch: Function) {
    return {
        _invitePeople: () => dispatch(invitePeople())
    };
}
export default translate(connect(null, _mapDispatchToProps)(InvitePeopleButton));
