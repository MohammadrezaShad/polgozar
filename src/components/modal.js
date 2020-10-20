import React from "react";
import { Modal } from "antd";
import { Button } from "components";
import styled, { css } from "styled-components";
import { rgba, colors, spacer, fontWeight } from "settings/style";

const ModalWrapper = ({
  onLeft,
  onLeftText,
  onRight,
  onRightText,
  ...props
}) => {
  return (
    <Modal
      getContainer={() =>
        window.document.getElementById("appRoot") || window.document.body
      }
      {...props}
      footer={null}
    >
      {props.children}
      <ModalFooterWrapper>
        <div className="left">
          {onLeft && (
            <Button
              type="link"
              color="accent"
              onClick={onLeft}
              style={{ paddingLeft: 0 }}
            >
              {onLeftText}
            </Button>
          )}
        </div>
        <div className="right">
          {onRight && (
            <Button type="dark" color="accent" onClick={onRight}>
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
