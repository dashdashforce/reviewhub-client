import * as React from 'react';
import {Review} from '../../types';
import ReviewSuggest from '../review-suggest/ReviewSuggest';

export interface SubmittedReviewsProps {
  reviews: Review[];
}

const SubmittedReviews: React.SFC<SubmittedReviewsProps> = ({reviews}) => {
  return (
    <>
      {reviews.map((review) => (
        <ReviewSuggest
          id={review.id}
          title={review.title}
          description={review.description}
          languages={review.langs}
        />
      ))}
    </>
  );
};

export default SubmittedReviews;
