import React from 'react';
import { Form, Input, Comment } from 'antd';

import { StyledItem, StyledButton, StyledComment } from './comment-item.styled';
import Button from '../button';
import Avatar from '../avatar/avatar';

const { TextArea } = Input;
interface EditorProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: () => void;
  submitting?: boolean;
  value?: string | number;
  comment?: boolean;
  children?: React.ReactNode;
  onReplay?: () => void;
  bg?: 'primary' | 'gray';
  avatar?: string;
  datetime?: string;
}

const Editor = ({
  onChange,
  onSubmit,
  submitting,
  value,
  comment = true,
  children,
  onReplay,
  avatar,
  bg = 'primary',
  datetime,
}: EditorProps) => (
  <>
    <StyledComment
      as={Comment}
      datetime={datetime}
      avatar={<Avatar size="md" text="MohammadReza" avatarUrl={avatar} />}
      content={
        <>
          <StyledItem as={Form.Item} bg={bg}>
            <TextArea rows={comment ? 1 : 3} onChange={onChange} value={value} readOnly={comment} />
          </StyledItem>
          <StyledButton bg={bg}>
            <Button shape={comment ? 'link' : 'opacity'} color="font" onClick={comment ? onReplay : onSubmit}>
              {comment ? 'Replay' : 'Send'}
            </Button>
          </StyledButton>
        </>
      }
    >
      {children}
    </StyledComment>
  </>
);

export default Editor;
