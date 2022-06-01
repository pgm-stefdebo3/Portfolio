const Quote = () => {
  const quotes = [{
    quote: " Discipline does not come with Motivation, Motivation comes with Discipline. ",
    author: "Me :)"
  },{
    quote: " Once you stop learning, you start dying. ",
    author: "Albert Einstein"
  },{
    quote: " The future belongs to those who prepare for it today. ",
    author: "Malcolm X"
  },{
    quote: " Success is not final, failure is not fatal: it is the courage to continue that counts. ",
    author: "Winston Churchill"
  },{
    quote: " I have no special talent. I am only passionately curious. ",
    author: "Albert Einstein"
  },{
    quote: " Strive not to be a success, but rather to be of value. ",
    author: "Albert Einstein"
  },{
    quote: " Nothing is impossible, the word itself says, I'm possible! ",
    author: "Audrey Hepburn"
  }]
  const dayOfWeekName = new Date().getDay()

  return (
    <div className="quote-container">
      <h2>Quote of the day</h2>
      <p className="quote">‘‘{quotes[dayOfWeekName].quote}’’</p>
      <p className="quote_author">-- {quotes[dayOfWeekName].author}</p>
    </div>
  );
}

export default Quote;