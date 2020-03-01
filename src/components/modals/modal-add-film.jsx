import React from 'react';
import PropTypes from 'prop-types';

import { ModalWindow } from './modals';
import { FormAddFilm } from '../forms/form-add-film';

export const ModalAddFilm = ({
  isOpen, toggle, onClickSignUp, onClose,
}) => (
  <ModalWindow
    isOpen={isOpen}
    toggleInModal={toggle}
    header="ФИЛЬМ"
    toggleInHeader={onClose}
    buttonLeft="закрыть"
    buttonLeftHandleClick={onClose}
    buttonRight="добавить"
    buttonRightHandleClick={onClickSignUp}
  >
    <FormAddFilm />
  </ModalWindow>
);

ModalAddFilm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onClickSignUp: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
