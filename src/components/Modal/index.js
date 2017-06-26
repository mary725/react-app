import CategoryModal from './CategoryModal';

import modalTypes from '../../constants/modal-types';

import RootModal from './RootModal';

export default RootModal;

export const modals = {
    [modalTypes.CATEGORY_MODAL]: CategoryModal
};