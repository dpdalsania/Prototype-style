1.Create a Speaker constructor function which accepts arguments like: "givenName", "surname", "email", "biography."
2.Use "this" inside that function to set those values as properties on any instance of Speaker.
3.Also set an "isActive" property which always going to be set to True in the constructor to start out with (but you can change it later).
4.Create a prototype method called "getBiography" for Speaker which displays the Speaker's name and biography in a readable way in the console.
5.Create a prototype method called "markInactive" which takes a date argument. This method should set the speaker's "isActive" status to False and create a new property (on the Speaker instance) of "inactiveDate". Set that to the value of the date argument.
6.Create two new constructor functions: KeynoteSpeaker and WorkshopSpeaker. Both of these should accept all the same arguments that Speaker does.
7.KeynoteSpeaker should also accept and set a "websites" array property, as well as a keynoteTopics array property and a "breakouts" array property.
WorkshopSpeaker should also accept and set a "workshopTopics" array property.
Use Speaker.call() in both the KeynoteSpeaker and WorkshopSpeaker constructors and pass it all the generic Speaker arguments (like "givenName", etc.), in order to run the Speaker constructor code as though it were written where you are performing the .call(). This will emulate "inheritance" of those properties.
8.Finally, use Object.create() to clone Speaker's prototype object to KeynoteSpeaker's and WorkshopSpeaker's prototype objects. Set the 9.KeynoteSpeaker prototype's and WorkshopSpeaker prototype's constructor properties to KeynoteSpeaker and WorkshopSpeaker, respectively.
10.Now, create instances of Speaker, KeynoteSpeaker, WorkshopSpeaker (with various values), log them to the console, and interact with these 11.resulting objects and their methods in the console to familiarize yourself with what has happened.

