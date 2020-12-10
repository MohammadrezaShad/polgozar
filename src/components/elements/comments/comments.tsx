import React, { useState } from 'react';
import { List, Pagination } from 'antd';
import moment from 'moment';
import { Button, CommentItem } from 'components/elements';
import {
  StyledTitle,
  StyledWrap,
  StyledContainer,
  StyledHead,
  StyledButtonWrap,
  StyledButtonText,
} from './comments.styled';

const Comments = () => {
  const [state, setState] = useState({
    comments: [
      {
        author: 'Han Solo2',
        avatar: '',
        value: 'test2',
        datetime: moment().fromNow(),
        comments: [
          {
            author: 'Han Solo2',
            avatar: '',
            value: 'test3',
            datetime: moment().fromNow(),
            comments: [{ author: 'Han Solo2', avatar: '', value: 'test4', datetime: moment().fromNow(), comments: [] }],
          },
        ],
      },
    ],
    submitting: false,
    value: '',
  });

  const handleSubmit = () => {
    if (!state.value) return;
    setState({
      ...state,
      submitting: true,
    });
    setState({
      submitting: false,
      value: '',
      comments: [
        {
          author: 'Han Solo',
          avatar: '',
          value: state.value,
          datetime: moment().fromNow(),
          comments: [],
        },
        ...state.comments,
      ],
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const onChange = () => {};

  const renderComments = (data: any[]) => {
    if (data.length) {
      return (
        <List
          dataSource={data}
          itemLayout="horizontal"
          renderItem={(props) => {
            return (
              <CommentItem bg="gray" {...props}>
                {renderComments(props.comments)}
              </CommentItem>
            );
          }}
        />
      );
    }
    return null;
  };
  return (
    <>
      <StyledHead>
        <StyledTitle>Comments</StyledTitle>
        <Button shape="outline" color="font" onClick={() => {}}>
          <StyledButtonWrap>
            <i className="icon-plus" />
            <StyledButtonText>Add Comment</StyledButtonText>
          </StyledButtonWrap>
        </Button>
      </StyledHead>
      <StyledContainer>
        <StyledWrap>
          <CommentItem
            comment={false}
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={state.submitting}
            value={state.value}
          />

          {renderComments(state.comments)}
        </StyledWrap>
        <Pagination total={50} onChange={onChange} />
      </StyledContainer>
    </>
  );
};

export default Comments;
