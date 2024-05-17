const Description = ({ title, text }) => {
  return (
    <div>
      <h1>Sip Happens Café: {title}</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.: {text}
      </p>
    </div>
  );
};

export default Description;
