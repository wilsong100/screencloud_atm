<h1 align="center">
 ATM App 
</h1>


# Problem 
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
cd atm
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

  
## Authors

- [@gerardwilson](https://www.github.com/wilsong100)

