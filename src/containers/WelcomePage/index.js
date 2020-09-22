import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import messages from './messages';
import { LOGIN, REGISTER } from 'routes';

function WelcomePage() {
  const { formatMessage } = useIntl();

  return (
    <div>
      <Helmet>
        <title>Welcome - React Boilerplate</title>
      </Helmet>
      <div>
        <Link to={LOGIN}>{formatMessage(messages.loginLink)}</Link>
        <Link to={REGISTER}>{formatMessage(messages.registerLink)}</Link>
      </div>
      <main>
        <h1>{formatMessage(messages.heading)}</h1>
      </main>
    </div>
  );
}

export default WelcomePage;
