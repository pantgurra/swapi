# SWAPI Implementation

A React + TypeScript application displaying Star Wars data using SWR, and styled-components.  

## Prerequisites
create .env file in root and copy variable keys from .env.example. This time it's really not a secret.
```bash
VITE_BASE_URL = 'https://ci-swapi.herokuapp.com/api/'
```

## Setup master branch
```bash
npm install
npm run dev
```
## Proxy branch (batced requests)
There is a complementary branch named proxy with a small express proxy server to handle batched requests by using useBatchSWR hook from ui.

```bash
npm install
npm run dev

cd proxy
npm install
npm run dev
```
