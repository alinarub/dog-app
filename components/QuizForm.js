export default function QuizForm({ handleClick }) {
  return (
    <div>
      <form onSubmit={handleClick}>
        <fieldset>
          <legend>How much barking is ok for you?</legend>

          <div>
            <input
              type="radio"
              id="barking2"
              name="barking"
              value="2"
              required
            />
            <label htmlFor="barking2">No barking (2)</label>
          </div>

          <div>
            <input type="radio" id="barking3" name="barking" value="3" />
            <label htmlFor="barking3">A little bit is ok (3)</label>
          </div>

          <div>
            <input type="radio" id="barking4" name="barking" value="4" />
            <label htmlFor="barking4">I am deaf anyway (4)</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>How much energy do you have for your dog?</legend>

          <div>
            <input type="radio" id="energy2" name="energy" value="2" required />
            <label htmlFor="energy2">I like to stay on the couch (2)</label>
          </div>

          <div>
            <input type="radio" id="energy3" name="energy" value="3" />
            <label htmlFor="energy3">A little exercise is welcome (3)</label>
          </div>

          <div>
            <input type="radio" id="energy4" name="energy" value="4" />
            <label htmlFor="energy4">
              I want my dog to be just as active as me (4)
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>How easy to train should your dog be?</legend>

          <div>
            <input
              type="radio"
              id="trainability2"
              name="trainability"
              value="2"
              required
            />
            <label htmlFor="trainability2">Difficult to train (2)</label>
          </div>

          <div>
            <input
              type="radio"
              id="trainability3"
              name="trainability"
              value="3"
            />
            <label htmlFor="trainability3">
              I want to teach my dog some tricks (3)
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="trainability4"
              name="trainability"
              value="4"
            />
            <label htmlFor="trainability4">Easy to train (4)</label>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
