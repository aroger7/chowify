import React from 'react';

import { modalComponents } from 'modals';

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const ModalComponent = modalComponents[modalType];
  return <ModalComponent {...modalProps} />;
};

export default ModalRoot;
