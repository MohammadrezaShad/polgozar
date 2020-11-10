import React from 'react';
import { Modal } from 'antd';
import { Button } from 'components/elements';
import styled from 'styled-components';

const ModalWrapper = ({ onLeft, onLeftText, onRight, onRightText, onRightProps, children, ...props }) => {
  return (
    <Modal getContainer={() => window.document.getElementById('root') || window.document.body} {...props} footer={null}>
      {children}
      <ModalFooterWrapper>
        <div className="left">
          {onLeft && (
            <Button shape="link" color="accent" onClick={onLeft} style={{ paddingLeft: 0 }}>
              {onLeftText}
            </Button>
          )}
        </div>
        <div className="right">
          {onRight && (
            <Button shape="dark" color="accent" onClick={onRight} {...onRightProps}>
              {onRightText}
            </Button>
          )}
        </div>
      </ModalFooterWrapper>
    </Modal>
  );
};
export default ModalWrapper;

const ModalFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
