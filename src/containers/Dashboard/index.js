import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { makeSelectImageUrl } from './selectors';
import { fetchImage } from './actions';

const key = 'dashbaord';

function Dashboard() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();

  const [term, setTerm] = useState('');

  const image = useSelector(makeSelectImageUrl());

  const handleChange = event => {
    const term = event.target.value
    setTerm(term);
    dispatch(fetchImage(term));
  };

  const searchImageForm = () => {
    return (
    <input
      type="text"
      onChange={handleChange}
      placeholder={'Search for images...'}
      value={term}
    />
    );
  }

  const { formatMessage } = useIntl();

  return (
    <main>
      <Helmet>
        <title>Dashboard - React Boilerplate</title>
      </Helmet>
      <h1>DASHBOARD</h1>
      <img src={image.imageUrl} />
      {searchImageForm()}
    </main>
  );
}

export default Dashboard;
