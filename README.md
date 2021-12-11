# Here is CODE REVIEW

## What I did to improve the code :
### Global and Config changes :
- add `watch` script to the `package.json` for ease of use
- add an environment file and its example because the main file should be ignored
- add a gitignore file to reduce file exchange between source control and local system
- add CORS_ORIGINS to the environment
- fix the typo from `Enviroment` to `Environment`
- add default values to the `env` values to minimize errors and make sure to run anyway
- define the `checkEnv` function output type

### `api.ts` changes
- wrap every logical action to a seperate function for more readability and clean code
- make the whole application starting fail if the database connection failed

### `scripts\seed.ts` changes
- add await to mogoose connection to wait until it is connected before seeding intial data
- retreive `idProfile` correctly
- add await to mogoose disconnection
- fix Simulator properties as the schema

### `models\Favorite.ts` changes
- change `profile_id` type to ObjectId

### `routes\favorite.router.ts` changes
- remove console.logs
- make use of `const` instead of `let` and `var`
- validate presented `profile_id` to be a valid Object ID
- use `lean()` for faster find in mongodb

### `routes\simulator.router.ts` changes
- remove unnecessary `app` instantiation and also no used imports
- remove console.logs
- make use of `const` instead of `let` and `var`
- validate presented `profile_id` to be a valid Object ID
- use `lean()` for faster find in mongodb
- change the way of saveing new `simulator`

### `routes\profile.router.ts` changes
- should not return profile on creation if it is existing in the database and instead should throw an error