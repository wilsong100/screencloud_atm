<h1 align="center">
 ATM App 
</h1>


# Description
Create an ATM app to provide a solution to the following problem: 

It’s payday and there’s a new Pokémon game in town so Michael wants to buy a Switch 🎉
It costs £270, and we’d like you to build an ATM web app he can use.
He will need to enter his PIN ( 1111 ) which you should check against the PIN API. The API will tell you his current
balance, which should then be shown on screen.

He’s going to make 3 withdrawals:

● £140

● £50

● £90

Unbeknownst to Michael, diggers keep stealing our ATMs so we aren’t carrying a lot of notes. The machine has:
4 x £5 notes
15 x £10 notes
7 x £20 notes
You should try to give a roughly even mix of notes when possible, and will have to take into account what to do
when certain ones run out.
Your ATM allows an overdraft of up to £100 and should let users know if they do go overdrawn 😬


## Installation

Install atm_screencloud with npm

```bash
  npm install atm_screencloud
  
```
    
## API Reference


#### Login

```http
POST https://frontend-challenge.screencloud-michael.now.sh/api/pin/
```





  
## Tech Stack

**Client:** React

**Libraries:** axios, react-router-dom, fontawesome

**Testing Library:** Cypress 

  
## Running Tests

To run tests, run the following command

```bash
 npx cypress open
```
## Limitations
There were a few issues configuring react on cypress. This limited the amount of tests I could do and also I created less components as a result of
being unable to mount components.

If I had more time, I would have:
Added modals to appear when the withdrawal was successful or when there was an error.
The balance colour would change from green to red when the user was overdrawn
Some animations,such as on the Login screen showing a card going into the ATM machine
Also on the login screen and the withdrawal page I would have included a number keypad
If I had more time I would have tested the app thoroughly, for example some of the tests could have included:
Check that the number of notes equals the machine total?
Check if balance was more than £220?
Check if overdraft was increased would the logic still work? 
Test on different browsers

  
## Authors

- [@gerardwilson](https://www.github.com/wilsong100)
