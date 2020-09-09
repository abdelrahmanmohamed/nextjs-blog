This is a starter template for [Learn Next.js](https://nextjs.org/learn).

How to use:
    1) run 'npm i' => to install all the dependencies.
    2) run 'npm run dev' => to run the project.


This example shows the integration of Redux in Next.js while building a simple form.

In the example we are going to display a simple user form and a list of all availavle users that get updates after adding new user from the form.. Fetching this data from json placeholder. The first render is happening in the server and then the browser will take over. 

Files descriptions:
    Redux files:
        - actions folder => js files contain dipatch actions ( in our case fetch user list - add user)
        - reducers folder => 
                    - root reducer file which combine all the reducers of the project.
                    - reducers files ( in our case userDataReducer.js is the only one).
        - Store.js => the main redux file that create a store for the project (this file will contain all the project data passed from component to the other)..
        - types.js => actions variables..
