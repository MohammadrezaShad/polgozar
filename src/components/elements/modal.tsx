import React from 'react';
import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import { Button } from 'components/elements';
import { ButtonComponentProps } from 'components/elements/button';
import styled from 'styled-components';

interface ModalWrapperProps extends ModalProps {
  onLeft?: () => void;
  onRight?: () => void;
  onLeftText?: React.ReactNode;
  onRightText?: React.ReactNode;
  children?: React.ReactNode;
  onRightProps?: Omit<ButtonComponentProps, 'onClick'>;
}

const ModalWrapper = ({
  onLeft,
  onLeftText,
  onRight,
  onRightText,
  onRightProps,
  children,
  ...props
}: ModalWrapperProps) => {
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
