// src/pages/DiscussionForums.js
import React, { useState } from 'react';

function DiscussionForums() {
  const [discussions, setDiscussions] = useState([]);
  const [newTopic, setNewTopic] = useState('');
  const [newComment, setNewComment] = useState('');
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);

  const handleCreateDiscussion = () => {
    if (newTopic) {
      const newDiscussion = {
        id: Date.now(),
        topic: newTopic,
        comments: [],
      };
      setDiscussions([...discussions, newDiscussion]);
      setNewTopic('');
    }
  };

  const handleCreateComment = () => {
    if (newComment && selectedDiscussion) {
      const updatedDiscussions = discussions.map(discussion => {
        if (discussion.id === selectedDiscussion.id) {
          return {
            ...discussion,
            comments: [...discussion.comments, { id: Date.now(), text: newComment, votes: 0 }],
          };
        }
        return discussion;
      });
      setDiscussions(updatedDiscussions);
      setNewComment('');
    }
  };

  const handleDeleteDiscussion = (id) => {
    setDiscussions(discussions.filter(discussion => discussion.id !== id));
    setSelectedDiscussion(null);
  };

  const handleDeleteComment = (discussionId, commentId) => {
    const updatedDiscussions = discussions.map(discussion => {
      if (discussion.id === discussionId) {
        return {
          ...discussion,
          comments: discussion.comments.filter(comment => comment.id !== commentId),
        };
      }
      return discussion;
    });
    setDiscussions(updatedDiscussions);
  };

  const handleVoteComment = (discussionId, commentId, delta) => {
    const updatedDiscussions = discussions.map(discussion => {
      if (discussion.id === discussionId) {
        return {
          ...discussion,
          comments: discussion.comments.map(comment => {
            if (comment.id === commentId) {
              return { ...comment, votes: comment.votes + delta };
            }
            return comment;
          }),
        };
      }
      return discussion;
    });
    setDiscussions(updatedDiscussions);
  };

  return (
    <div className="discussion-forums">
      <h2>Discussion Forums</h2>
      <div>
        <input
          type="text"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
          placeholder="Enter a new discussion topic"
        />
        <button onClick={handleCreateDiscussion}>Create Discussion</button>
      </div>

      <div className="discussions-list">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="discussion-item">
            <h3 onClick={() => setSelectedDiscussion(discussion)}>{discussion.topic}</h3>
            <button onClick={() => handleDeleteDiscussion(discussion.id)}>Delete</button>
          </div>
        ))}
      </div>

      {selectedDiscussion && (
        <div className="discussion-detail">
          <h4>{selectedDiscussion.topic}</h4>
          <div>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment"
            />
            <button onClick={handleCreateComment}>Comment</button>
          </div>
          <ul>
            {selectedDiscussion.comments.map((comment) => (
              <li key={comment.id}>
                {comment.text} ({comment.votes} votes)
                <button onClick={() => handleVoteComment(selectedDiscussion.id, comment.id, 1)}>Upvote</button>
                <button onClick={() => handleVoteComment(selectedDiscussion.id, comment.id, -1)}>Downvote</button>
                <button onClick={() => handleDeleteComment(selectedDiscussion.id, comment.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DiscussionForums;
