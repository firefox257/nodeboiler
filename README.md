## nodeboiler



I created this to learn node JS. Coming for a c# background, I have created (still in progress) a boiler plate project for node JS. My objective is to use pure javascript, both for for front end and backend. The template is going to be as slim can be but also have a set of models, services that are coding patterns of c#. Probably is also node JS but I'm not experienced with node JS to really know. Some concepts are listed below.

Routing for rest (There are obviously excellent libs in node JS but I made my own.)
Services
Database context with repository pattern.(todo)
Authentication with use of tokens.(todo)
Base registration(todo).
Data transfer objects.(todo)
Message center. (mediator pattern)



##Good improvements to workout.

Slim transfer objects, (only transfer data that is needed not the whole shin-bang)(todo)

Verify update objects, make sure the user can update the object , not just update the object just because it has the token authorization.(todo)

Track update objects. Example if a user updates zip code then the transfer object would only send the update for the zip code not the full user details.

Db notification update. Allow frontend to subscribe to notifications when a record has changed on the DB.(todo)

