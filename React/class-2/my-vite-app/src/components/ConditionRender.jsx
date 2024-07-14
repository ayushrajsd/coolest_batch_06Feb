const ConditionalRender = ({ isLoggedIn, username }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, {username}</h1>
      ) : (
        <h1>Please login to continue</h1>
      )}
    </div>
  );
};

export default ConditionalRender;
