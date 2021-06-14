# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful components only hold data related to storing our maniuplating state. Functional components 

2. When does a componentWillMount function be called? What about a componentWillUpdate? 

This happens after React inserts the component into the DOM. Used to set a component's state. componentWillUpdate is not a thing. did update happens after each re-render.

3. Define stateful logic.

Stateful logic describes code that deals with the storage, management, and manipulation of state.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange - this is setting up the test and grabing elements needed to test functionality

Act - this will simulate any user events such as typing or clicking something on the app

Assert - this checks to see if the desired action actually occured after the user did the actions in the act section.
